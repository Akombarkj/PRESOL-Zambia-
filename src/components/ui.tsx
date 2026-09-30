import Link from "next/link";
import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export function Button({ children, href, variant = "primary", className = "", ...props }: ButtonProps) {
  const classes = `btn btn-${variant} ${className}`.trim();
  if (href) return <Link className={classes} href={href}>{children}</Link>;
  return <button className={classes} {...props}>{children}</button>;
}

type SectionProps = HTMLAttributes<HTMLElement> & {
  children?: ReactNode;
  eyebrow?: string;
  title?: string;
  intro?: string;
  tone?: "default" | "pale" | "dark" | "gold";
};

export function Section({ children, eyebrow, title, intro, tone = "default", className = "", ...props }: SectionProps) {
  return <section className={`section section-${tone} ${className}`.trim()} {...props}><div className="container">{(eyebrow || title || intro) && <header className="section-header">{eyebrow && <p className="eyebrow">{eyebrow}</p>}{title && <h2 className="section-title">{title}</h2>}{intro && <p className="section-intro muted">{intro}</p>}</header>}{children}</div></section>;
}

type CardProps = HTMLAttributes<HTMLElement> & { children: ReactNode; interactive?: boolean };

export function Card({ children, interactive = false, className = "", ...props }: CardProps) {
  return <article className={`card${interactive ? " card-interactive" : ""} ${className}`.trim()} {...props}>{children}</article>;
}
