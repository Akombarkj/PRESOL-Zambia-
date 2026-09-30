"use client";

import { FormEvent, useState } from "react";

const contactFields = ["fullName", "organisation", "email", "telephone", "province", "district", "category"] as const;
const quoteFields = ["name", "email", "telephone", "organisation", "customerType", "province", "district", "siteDescription", "serviceRequired", "projectDescription", "operatingHours", "existingSupply", "monthlySpendZmw", "expectedTiming", "indicativeBudget"] as const;
const labels: Record<string, string> = { fullName: "Full Name", organisation: "Organisation", email: "Email", telephone: "Telephone", province: "Province", district: "District", category: "Enquiry Category", name: "Name", customerType: "Customer Type", siteDescription: "Site Description", serviceRequired: "Service Required", projectDescription: "Project Description", operatingHours: "Operating Hours / Key Loads", existingSupply: "Existing Electricity Supply", monthlySpendZmw: "Monthly Electricity Spend (ZMW)", expectedTiming: "Expected Timing", indicativeBudget: "Indicative Budget" };

export function EnquiryForm({ quote = false }: { quote?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const fields = quote ? quoteFields : contactFields;
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("sending"); setError("");
    const form = new FormData(event.currentTarget); const data = Object.fromEntries(form.entries());
    data.marketing = form.get("marketing") === "on" ? "true" : "false";
    data.privacyAccepted = form.get("privacyAccepted") === "on" ? "true" : "false";
    try { const response = await fetch(quote ? "/api/quote" : "/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }); const result = await response.json(); if (!response.ok) throw new Error(result.error ?? "Submission failed"); setStatus("success"); } catch (submissionError) { setError(submissionError instanceof Error ? submissionError.message : "Submission failed. Please try again."); setStatus("error"); }
  }
  if (status === "success") return <div style={{ border: "1px solid var(--line)", padding: "2rem", background: "var(--pale)" }}><h2 style={{ color: "var(--green-deep)" }}>Thank you for sharing your project requirements.</h2><p className="muted">We will review the information and contact you about the next steps. A final quotation may require additional information or a site assessment.</p></div>;
  return <form onSubmit={submit} style={{ display: "grid", gap: "1rem" }}>{fields.map((field) => <label key={field} style={{ display: "grid", gap: ".4rem", color: "var(--green-deep)", fontWeight: 700 }}>{labels[field]}<input required={!field.includes("Budget") && !field.includes("Spend")} name={field} type={field === "email" ? "email" : field === "monthlySpendZmw" ? "number" : "text"} style={{ padding: ".8rem", border: "1px solid var(--line)", borderRadius: 2 }} /></label>)}<label style={{ display: "grid", gap: ".4rem", color: "var(--green-deep)", fontWeight: 700 }}>{quote ? "Supporting Documents" : "Message"}{quote ? <input name="supportingDocumentName" type="text" placeholder="Optional file name or link" /> : <textarea name="message" required rows={5} style={{ padding: ".8rem", border: "1px solid var(--line)" }}/>}</label>{!quote && <label style={{ color: "#5f6d68" }}><input name="marketing" type="checkbox"/> Subscribe me to relevant updates</label>}<label style={{ color: "#5f6d68", fontSize: ".9rem" }}><input name="privacyAccepted" type="checkbox" required/> I understand this is an enquiry, not an order or automatic price acceptance.</label>{status === "error" && <p role="alert" style={{ color: "#a53f32" }}>{error}</p>}<button className="btn btn-primary" type="submit" disabled={status === "sending"} style={{ justifySelf: "start", border: 0 }}>{status === "sending" ? "Sending..." : "Submit enquiry"}</button></form>;
}
