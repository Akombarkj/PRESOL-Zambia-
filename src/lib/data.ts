export const services = [
  { slug: "solar-mini-grids", title: "Solar Mini-Grid Development", description: "Community-scale solar electricity projects shaped through assessment, consultation and careful project development.", audience: "Communities and development partners", benefits: ["Expanded electricity access", "Local context in project planning", "A structured path from assessment to support"] },
  { slug: "business-institutional-solar", title: "Business & Institutional Solar", description: "Solar solutions for organisations seeking to understand and address their energy needs.", audience: "Businesses, schools, clinics and institutions", benefits: ["Needs-led system design", "Clear project scope", "Professional delivery and handover"] },
  { slug: "productive-use-of-energy", title: "Productive Use of Energy", description: "Energy planning that supports enterprises, agriculture and productive community activity.", audience: "Farmers, processors and local enterprises", benefits: ["Energy planning around key loads", "Support for productive activity", "A practical view of operations"] },
  { slug: "engineering-procurement-construction", title: "Engineering, Procurement & Construction", description: "A coordinated approach to renewable energy project design, procurement and construction.", audience: "Businesses, institutions and project developers", benefits: ["Engineering-led planning", "Coordinated procurement", "Delivery aligned to agreed scope"] },
  { slug: "operations-maintenance", title: "Operations & Maintenance", description: "Ongoing technical support and maintenance planning for renewable energy assets.", audience: "System owners and institutions", benefits: ["Planned technical support", "Maintenance-focused thinking", "Long-term asset care"] },
  { slug: "feasibility-project-advisory", title: "Feasibility & Project Advisory", description: "Early-stage assessment and advisory support to help clarify the opportunity and next steps.", audience: "Communities, developers and organisations", benefits: ["Structured early assessment", "Project-specific information", "Clearer decisions about next steps"] },
] as const;

export const projects = [
  { name: "Chambidzi", district: "Kasenengwa" }, { name: "Champhala Primary", district: "Sinda" }, { name: "Chikumbe", district: "Chipangali" }, { name: "Kapisandondo", district: "Vubwi" }, { name: "Sindemisale Community", district: "Chadiza" }, { name: "Thambo Community", district: "Mambwe" }, { name: "Zokwe Health Post", district: "Lumezi" },
] as const;

export const navItems = [
  ["Home", "/"], ["About Us", "/about"], ["Solutions", "/solutions"], ["Projects", "/projects"], ["Impact", "/impact"], ["How It Works", "/how-it-works"], ["Contact Us", "/contact"],
] as const;
