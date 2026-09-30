import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendNotification } from "@/lib/email";

const required = (value: unknown) => typeof value === "string" && value.trim().length > 0;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!required(body.fullName) || !required(body.email) || !required(body.category) || !required(body.message) || body.privacyAccepted !== "true") return NextResponse.json({ error: "Full name, email, category, message and privacy acknowledgement are required." }, { status: 400 });
    const enquiry = await prisma.contactEnquiry.create({ data: { fullName: body.fullName.trim(), organisation: body.organisation?.trim() || null, email: body.email.trim(), telephone: body.telephone?.trim() || null, province: body.province?.trim() || null, district: body.district?.trim() || null, category: body.category.trim(), message: body.message.trim(), marketing: Boolean(body.marketing) } });
    try { await sendNotification({ subject: `New contact enquiry from ${enquiry.fullName}`, replyTo: enquiry.email, text: `Name: ${enquiry.fullName}\nOrganisation: ${enquiry.organisation ?? "-"}\nEmail: ${enquiry.email}\nTelephone: ${enquiry.telephone ?? "-"}\nCategory: ${enquiry.category}\n\n${enquiry.message}` }); } catch (error) { console.error("Contact notification failed after saving enquiry", error); }
    return NextResponse.json({ success: true });
  } catch (error) { console.error("Contact enquiry failed", error); return NextResponse.json({ error: "We could not submit your enquiry. Please try again." }, { status: 500 }); }
}