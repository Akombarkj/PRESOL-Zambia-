import { PageHero } from "@/components/page-sections";
import { EnquiryForm } from "@/components/enquiry-form";
export default function QuotePage() { return <><PageHero eyebrow="Project enquiry" title="Help us understand your energy requirements." intro="Share the information you have available. We will review it as a project enquiry, not an order or automatic price acceptance."/><main className="container" style={{ padding: "5rem 0", maxWidth: 820 }}><EnquiryForm quote/></main></>; }
