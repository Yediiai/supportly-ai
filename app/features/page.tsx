"use client";

import React, { useState } from "react";
import { 
  Bot, Sparkles, Database, Globe, UserCheck, BarChart3, 
  Palette, Webhook, CheckCircle2, ArrowRight, Sliders, Shield
} from "lucide-react";
import Link from "next/link";
import { SupportlyChatPreview } from "@/components/SupportlyChatPreview";

export default function FeaturesPage() {
  const [selectedTone, setSelectedTone] = useState<"professional" | "friendly" | "technical">("professional");

  const toneExamples = {
    professional: "Thank you for reaching out. Your annual subscription renewal is scheduled for November 15, 2026. You can review your invoice breakdown in Billing Settings.",
    friendly: "Hey there! Happy to help! Your subscription renews on November 15, 2026. You can check all the fun details under your Billing page anytime! 😊",
    technical: "HTTP 200 OK: Subscription status is ACTIVE. Expiration epoch: 1794700800 (2026-11-15T00:00:00Z). Invoices accessible via `/v1/invoices` or GraphQL.",
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20 space-y-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 text-violet-800 text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Advanced RAG & Model Guardrails</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight">
          Everything You Need to Automate Support
        </h1>
        <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
          From ingesting messy documentation to custom tone-of-voice controls and seamless human handoffs, Supportly AI gives you enterprise power with consumer simplicity.
        </p>
      </div>

      {/* Feature 1: Tone-of-Voice & Guardrails Interactive Demo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
              <Sliders className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
              Visual Guardrails & Brand Persona Tuning
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Ensure your AI chatbot sounds like an authentic member of your team. Toggle tone-of-voice personas, define strict refusal topics, and enforce verified citation grounding with zero hallucinations.
            </p>
            <div className="space-y-3 text-sm text-zinc-700">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-violet-600 shrink-0" />
                <span>Strict zero-hallucination policy: Never invents discount codes or policies</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-violet-600 shrink-0" />
                <span>Custom boundary rules: Immediately refuse non-support questions</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-violet-600 shrink-0" />
                <span>Confidence threshold triggers automatic human agent handoff</span>
              </div>
            </div>
          </div>

          {/* Interactive Persona Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                Persona Simulator
              </span>
              <span className="text-xs font-mono text-violet-700 bg-violet-50 px-2.5 py-0.5 rounded-full font-semibold">
                Active Rule
              </span>
            </div>

            <div className="flex gap-2">
              {[
                { id: "professional", label: "Professional & Courteous" },
                { id: "friendly", label: "Warm & Friendly" },
                { id: "technical", label: "Technical & Precise" },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTone(t.id as any)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                    selectedTone === t.id
                      ? "bg-violet-600 text-white shadow-sm"
                      : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-zinc-950 text-zinc-200 text-xs sm:text-sm leading-relaxed border border-zinc-800 font-sans">
              <span className="text-zinc-500 text-xs font-mono block mb-2">Simulated AI Response:</span>
              <p>&ldquo;{toneExamples[selectedTone]}&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Multi-Source RAG Knowledge Ingestion */}
      <section className="bg-zinc-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-violet-400 font-semibold">
              Multi-Source Knowledge Graph
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold">
              Ingest Your Knowledge Base in 60 Seconds
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Connect disparate documentation silos. Supportly continuously re-indexes your content as you publish updates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Website Sitemap Crawler", desc: "Input your domain URL. We crawl public pages, FAQs, and blogs automatically." },
              { title: "Notion & Confluence", desc: "Sync private internal wikis and standard operating procedures with OAuth." },
              { title: "PDFs, DOCX & CSVs", desc: "Drag-and-drop user manuals, product spec sheets, and price catalogs." },
              { title: "Zendesk & Intercom", desc: "Import historical help center articles and high-performing human agent macros." },
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2">
                <Database className="w-6 h-6 text-violet-400 mb-2" />
                <h4 className="font-bold text-white text-base">{f.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Chatbot Tester */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            Test the Autonomous Agent Live
          </h2>
          <p className="text-sm text-zinc-500 mt-2">
            Simulate realistic customer interactions below.
          </p>
        </div>

        <SupportlyChatPreview />
      </section>

      {/* Feature 3: Smart Human Escalation & Analytics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm space-y-3">
            <UserCheck className="w-8 h-8 text-violet-600 mb-2" />
            <h3 className="font-bold text-zinc-900 text-lg">Sentiment-Driven Escalation</h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              When an upset customer expresses frustration or requests human assistance, Supportly instantly hands off the thread with a concise 3-bullet briefing for the agent.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm space-y-3">
            <BarChart3 className="w-8 h-8 text-violet-600 mb-2" />
            <h3 className="font-bold text-zinc-900 text-lg">Documentation Gap Alerts</h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Discover unanswered customer questions. Supportly flags missing topics so your team can publish new help articles where customers need them most.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm space-y-3">
            <Palette className="w-8 h-8 text-violet-600 mb-2" />
            <h3 className="font-bold text-zinc-900 text-lg">100% Brand Customization</h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Customize primary colors, launcher icons, welcome greetings, and chat fonts. It looks and feels completely native to your application.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
