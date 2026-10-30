"use client";

import React, { useState } from "react";
import { Check, Sparkles, HelpCircle, ArrowRight, Zap, Bot } from "lucide-react";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Free Sandbox",
      desc: "For testing Supportly on personal sites and developer side projects.",
      monthly: "$0",
      annual: "$0",
      cadence: "Free forever",
      popular: false,
      features: [
        "100 AI conversations / month",
        "1 knowledge base source (up to 50 pages)",
        "Standard web chat widget",
        "Community Discord support",
        "Powered by Gemini 1.5 Flash",
      ],
      cta: "Start Free Sandbox",
    },
    {
      name: "Starter Pro",
      desc: "For growing startups & e-commerce brands automating 500+ chats/month.",
      monthly: "$29",
      annual: "$24",
      cadence: "per month",
      popular: true,
      features: [
        "1,500 AI conversations / month",
        "5 knowledge base sources & sitemap sync",
        "Custom branding & brand color hex picker",
        "Shopify & WordPress 1-click connectors",
        "Email & Slack human escalation alerts",
        "Priority email support (< 2h)",
        "Choice of Gemini 1.5 Flash or GPT-4o Mini",
      ],
      cta: "Start 14-Day Free Trial",
    },
    {
      name: "Business Scale",
      desc: "For high-volume support teams needing multi-channel integrations & custom guardrails.",
      monthly: "$99",
      annual: "$79",
      cadence: "per month",
      popular: false,
      features: [
        "6,000 AI conversations / month (Add-ons available)",
        "Unlimited knowledge sources (Notion, Zendesk, PDFs)",
        "Zendesk, Intercom, and WhatsApp integrations",
        "Custom tone-of-voice persona & prompt guardrails",
        "Unlimited human support agent seats",
        "Custom fine-tuned RAG retrieval embeddings",
        "Choice of GPT-4o, Claude 3.5 Sonnet & Gemini",
        "Dedicated customer success architect",
      ],
      cta: "Start 14-Day Free Trial",
    },
  ];

  const comparison = [
    {
      category: "AI & Model Capabilities",
      items: [
        { name: "Default Engine", free: "Gemini 1.5 Flash", starter: "Gemini / GPT-4o Mini", biz: "Claude 3.5 / GPT-4o / Gemini" },
        { name: "RAG Retrieval Embeddings", free: "Basic Vector", starter: "High-Precision Vector", biz: "Hybrid Semantic + Keyword" },
        { name: "Languages Auto-Translated", free: "10 Languages", starter: "65+ Languages", biz: "65+ Languages" },
        { name: "Hallucination Guardrails", free: "Standard", starter: "Strict Persona", biz: "Custom Enterprise Rules" },
      ],
    },
    {
      category: "Usage & Data Limits",
      items: [
        { name: "Included Monthly Chats", free: "100 / mo", starter: "1,500 / mo", biz: "6,000 / mo" },
        { name: "Knowledge Ingestion Limit", free: "50 Pages", starter: "500 Pages", biz: "Unlimited Pages" },
        { name: "Sitemap Re-crawl Frequency", free: "Manual", starter: "Weekly", biz: "Daily Automatic" },
        { name: "Human Agent Seats", free: "1 Admin", starter: "3 Seats", biz: "Unlimited Seats" },
      ],
    },
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20 space-y-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 text-violet-800 text-xs font-semibold mb-4">
          <Zap className="w-3.5 h-3.5 text-violet-600" />
          <span>Transparent Usage Tiers • No Per-Seat Penalties</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight">
          Simple, Predictable AI Pricing
        </h1>
        <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
          Start for free, test your knowledge base, and scale as your ticket volume grows. Every paid plan includes a 14-day zero-risk trial.
        </p>

        {/* Toggle */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className={`text-sm font-medium ${!isAnnual ? "text-zinc-900" : "text-zinc-500"}`}>
            Billed Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-14 h-8 rounded-full bg-zinc-900 p-1 relative transition"
            aria-label="Toggle annual billing"
          >
            <div
              className={`w-6 h-6 rounded-full bg-violet-500 transition-transform ${
                isAnnual ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
          <div className="flex items-center gap-1.5">
            <span className={`text-sm font-medium ${isAnnual ? "text-zinc-900" : "text-zinc-500"}`}>
              Billed Annually
            </span>
            <span className="text-xs font-bold text-violet-700 bg-violet-100 px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const price = isAnnual ? plan.annual : plan.monthly;
            return (
              <div
                key={plan.name}
                className={`p-8 rounded-3xl transition-all duration-200 flex flex-col justify-between ${
                  plan.popular
                    ? "bg-white border-2 border-violet-600 shadow-xl relative"
                    : "bg-white border border-zinc-200 shadow-sm hover:border-zinc-300"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-violet-600 text-white text-xs font-bold tracking-wider uppercase">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-zinc-900">{plan.name}</h3>
                  <p className="text-xs text-zinc-500 mt-1 min-h-[32px]">{plan.desc}</p>

                  <div className="mt-6 mb-6">
                    <span className="text-4xl font-extrabold text-zinc-900 font-mono">{price}</span>
                    <span className="text-xs text-zinc-500 ml-1.5 font-sans">{plan.cadence}</span>
                    {isAnnual && plan.monthly !== "$0" && (
                      <div className="text-xs text-violet-600 font-medium mt-1">
                        Billed annually (Save 20%)
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 pt-4 border-t border-zinc-100 text-xs sm:text-sm text-zinc-600">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-zinc-100">
                  <button
                    onClick={() => alert(`Selected ${plan.name}! Trial setup started.`)}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition flex items-center justify-center gap-2 ${
                      plan.popular
                        ? "bg-violet-600 hover:bg-violet-700 text-white shadow-md shadow-violet-600/25"
                        : "bg-zinc-900 hover:bg-zinc-800 text-white"
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Feature Comparison Matrix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            Compare Plan Capabilities
          </h2>
        </div>

        <div className="bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-zinc-50 border-b border-zinc-200">
                  <th className="py-4 px-6 font-semibold text-zinc-700">Capabilities</th>
                  <th className="py-4 px-6 font-semibold text-zinc-700">Free Sandbox</th>
                  <th className="py-4 px-6 font-semibold text-violet-700">Starter Pro</th>
                  <th className="py-4 px-6 font-semibold text-zinc-700">Business Scale</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((cat, idx) => (
                  <React.Fragment key={idx}>
                    <tr className="bg-zinc-100/70 font-semibold text-zinc-900 text-xs">
                      <td colSpan={4} className="py-2.5 px-6 font-mono uppercase tracking-wider">
                        {cat.category}
                      </td>
                    </tr>
                    {cat.items.map((item, iIdx) => (
                      <tr key={iIdx} className="border-b border-zinc-100 hover:bg-zinc-50/50">
                        <td className="py-3.5 px-6 font-medium text-zinc-800">{item.name}</td>
                        <td className="py-3.5 px-6 text-zinc-600">{item.free}</td>
                        <td className="py-3.5 px-6 text-violet-700 font-semibold">{item.starter}</td>
                        <td className="py-3.5 px-6 text-zinc-800 font-semibold">{item.biz}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-zinc-900 text-center mb-8">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm">
            <h4 className="font-semibold text-zinc-900 text-sm mb-1">
              What counts as one &ldquo;AI Conversation&rdquo;?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600">
              A conversation includes an entire back-and-forth customer dialogue session from first question until resolution (up to 30 messages). We do not nickel-and-dime per individual prompt message.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm">
            <h4 className="font-semibold text-zinc-900 text-sm mb-1">
              What happens if we exceed our included conversation limit?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600">
              You can toggle auto-scaling add-on packages ($15 per 500 extra chats) or pause the bot until your next billing cycle. The bot will never abruptly shut off without warning.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm">
            <h4 className="font-semibold text-zinc-900 text-sm mb-1">
              Is my company data used to train public AI models?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600">
              No. We enforce strict enterprise privacy terms with zero training on your documentation or customer message history.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
