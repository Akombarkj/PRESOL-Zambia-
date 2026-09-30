import type { Metadata } from "next";
import "./globals.css";
import { Source_Sans_3 } from "next/font/google";
import { Footer, Header } from "@/components/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.presol.co.zm"),
  title: { default: "PRESOL Zambia | Renewable Energy for a Sustainable Zambia", template: "%s | PRESOL Zambia" },
  description: "Practical renewable-energy solutions for communities, businesses and institutions in Zambia.",
  openGraph: { title: "PRESOL Zambia", description: "Powering communities. Enabling enterprise.", type: "website", locale: "en_ZM" },
};

const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-source-sans" });

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={sourceSans.variable}>
      <body><Header />{children}<Footer /></body>
    </html>
  );
}
