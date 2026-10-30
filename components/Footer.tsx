import React from "react";
import Link from "next/link";
import { Bot, Sparkles, Shield, Terminal, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-950 text-zinc-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white">
                <Bot className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Supportly<span className="text-violet-400">.ai</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Autonomous customer service agent powered by multi-source RAG and high-precision language models. Resolve 75%+ of customer inquiries instantly across web, chat, and email.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-zinc-400">
              <Shield className="w-4 h-4 text-violet-400" />
              <span>Zero Data Training on Customer PII • SOC 2 Type II Certified</span>
            </div>
            <p className="text-[11px] text-zinc-500 leading-normal">
              *Prototype & Simulation Disclosure: Interactive chatbot interfaces simulate verified enterprise RAG retrieval. Integrations, SDK snippets, and AI compute credits shown reflect production configurations.
            </p>
          </div>

          {/* Column 1: Features */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200 mb-4 font-mono">
              Features
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/features" className="hover:text-violet-400 transition">
                  Visual Chatbot Builder
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-violet-400 transition">
                  Knowledge-Base RAG
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-violet-400 transition">
                  Sitemap Crawler
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-violet-400 transition">
                  Human Escalation
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-violet-400 transition">
                  Sentiment Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Integrations */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200 mb-4 font-mono">
              Integrations & SDK
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/integrations" className="hover:text-violet-400 transition">
                  Website Script Embed
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="hover:text-violet-400 transition">
                  React & Next.js SDK
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="hover:text-violet-400 transition">
                  Shopify & WordPress
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="hover:text-violet-400 transition">
                  Zendesk & Intercom Sync
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="hover:text-violet-400 transition">
                  REST API Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Plans & Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200 mb-4 font-mono">
              Plans & Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/pricing" className="hover:text-violet-400 transition">
                  Starter Plan ($29/mo)
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-violet-400 transition">
                  Pro Plan ($99/mo)
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-violet-400 transition">
                  Enterprise AI Compute
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="hover:text-violet-400 transition">
                  Contact Sales Desk
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <p>© {new Date().getFullYear()} Supportly AI Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition">AI Ethics & Safety</span>
            <span className="hover:text-white cursor-pointer transition">System Status</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
