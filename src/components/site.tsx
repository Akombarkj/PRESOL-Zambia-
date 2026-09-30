"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/data";
import { Button } from "@/components/ui";

export function Header() {
  const [open, setOpen] = useState(false);
  return <header style={{ position: "sticky", top: 0, zIndex: 20, background: "rgba(255,255,255,.96)", borderBottom: "1px solid var(--line)" }}><div className="container" style={{ height: 76, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}><Link href="/" onClick={() => setOpen(false)} aria-label="PRESOL Zambia home" style={{ display: "flex", alignItems: "center" }}><Image src="/image/logo%20zambia.png" alt="PRESOL Zambia" width={190} height={72} priority style={{ width: 155, height: "auto" }} /></Link><nav style={{ display: "flex", alignItems: "center", gap: "1.2rem" }} className="desktop-nav">{navItems.map(([label, href]) => <Link key={href} href={href} style={{ fontSize: ".9rem", color: "#43534d" }}>{label}</Link>)}<Button href="/request-a-quote">Request a Quote <ArrowRight size={15}/></Button></nav><button aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)} style={{ display: "none", border: 0, background: "none", color: "var(--green)" }} className="menu-button">{open ? <X/> : <Menu/>}</button></div>{open && <nav style={{ display: "grid", gap: "1rem", padding: "1rem 20px 1.5rem", background: "white" }} className="mobile-nav">{navItems.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Button href="/request-a-quote" onClick={() => setOpen(false)}>Request a Quote</Button></nav>}</header>;
}

export function Footer() { return <footer style={{ background: "var(--charcoal)", color: "white", padding: "4rem 0 2rem" }}><div className="container"><div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: "3rem", paddingBottom: "3rem", borderBottom: "1px solid rgba(255,255,255,.15)" }}><div><strong style={{ color: "var(--gold)", fontSize: "1.3rem" }}>PRESOL Zambia</strong><p style={{ color: "#b9c5bf", maxWidth: 280, lineHeight: 1.6 }}>Renewable Energy for a Sustainable Zambia</p></div><div><strong>Quick Links</strong><div style={{ display: "grid", gap: ".55rem", marginTop: "1rem", color: "#b9c5bf" }}>{[...navItems.slice(0, 5), ["Request a Quote", "/request-a-quote"] as const].map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div></div><div><strong>Contact</strong><p style={{ color: "#b9c5bf", lineHeight: 1.6 }}>Plot No. 7, Old Brentwood Road,<br/>Longacres, Lusaka, Zambia<br/><br/>info@presol.co.zm<br/>+260 (57) 462 5655</p></div></div><p style={{ color: "#8d9b94", fontSize: ".85rem", margin: "1.5rem 0 0" }}>© {new Date().getFullYear()} Prado Renewable Energy Solutions Limited. All rights reserved.</p></div></footer>; }
