import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Supportly AI — Autonomous Customer Service & Support Automation",
  description:
    "Deliver better customer support with AI. Resolve 75%+ of customer inquiries instantly. Train on your documentation, integrate across channels, and escalate smoothly to human agents.",
  keywords: ["AI customer support", "RAG chatbot", "customer service automation", "helpdesk AI", "support bot"],
  openGraph: {
    title: "Supportly AI — Autonomous Customer Service Powered by AI",
    description: "Next-generation generative AI support agent for modern high-velocity companies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#FAFAFA] text-zinc-900 antialiased font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
