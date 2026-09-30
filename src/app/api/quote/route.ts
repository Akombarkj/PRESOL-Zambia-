import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendNotification } from "@/lib/email";

const required = (value: unknown) => typeof value === "string" && value.trim().length > 0;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!required(body.name) || !required(body.email) || !required(body.customerType) || body.privacyAccepted !== "true") return NextResponse.json({ error: "Name, email, customer type and privacy acknowledgement are required." }, { status: 400 });
    const quote = await prisma.quoteRequest.create({ data: { name: body.name.trim(), email: body.email.trim(), telephone: body.telephone?.trim() || null, organisation: body.organisation?.trim() || null, customerType: body.customerType.trim(), province: body.province?.trim() || null, district: body.district?.trim() || null, siteDescription: body.siteDescription?.trim() || null, serviceRequired: body.serviceRequired?.trim() || null, projectDescription: body.projectDescription?.trim() || null, operatingHours: body.operatingHours?.trim() || null, existingSupply: body.existingSupply?.trim() || null, monthlySpendZmw: body.monthlySpendZmw ? Number(body.monthlySpendZmw) : null, expectedTiming: body.expectedTiming?.trim() || null, indicativeBudget: body.indicativeBudget?.trim() || null, supportingDocumentUrl: body.supportingDocumentName?.trim() || null } });
    try { await sendNotification({ subject: `New quote enquiry from ${quote.name}`, replyTo: quote.email, text: `Name: ${quote.name}\nOrganisation: ${quote.organisation ?? "-"}\nEmail: ${quote.email}\nCustomer type: ${quote.customerType}\nService: ${quote.serviceRequired ?? "-"}\nProvince/District: ${quote.province ?? "-"} / ${quote.district ?? "-"}\n\nProject description:\n${quote.projectDescription ?? "-"}` }); } catch (error) { console.error("Quote notification failed after saving request", error); }
    return NextResponse.json({ success: true });
  } catch (error) { console.error("Quote request failed", error); return NextResponse.json({ error: "We could not submit your quote enquiry. Please try again." }, { status: 500 }); }
}