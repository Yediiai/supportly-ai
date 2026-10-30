import React from "react";
import Link from "next/link";
import { 
  Bot, Sparkles, Zap, MessageSquare, Shield, ArrowRight, 
  CheckCircle2, Clock, Globe2, BarChart3, Check, Cpu
} from "lucide-react";
import { SupportlyChatPreview } from "@/components/SupportlyChatPreview";

export default function HomePage() {
  const channels = [
    { name: "Website Widget", desc: "Custom branded web chat embed with sub-second live streaming." },
    { name: "Zendesk & Intercom", desc: "Co-pilot agent responses and auto-close routine ticket queues." },
    { name: "Slack & Teams", desc: "Internal employee IT and HR helpdesk automation in native channels." },
    { name: "WhatsApp Business", desc: "Global mobile support across 65+ automated languages." },
    { name: "Email Auto-Responder", desc: "AI drafts context-aware email replies for human agent review." },
    { name: "Shopify & E-Commerce", desc: "Real-time order lookup, tracking links, and instant return tags." },
  ];

  const metrics = [
    { label: "Autonomous Resolution Rate", val: "76.4%", note: "No human intervention needed" },
    { label: "Median Response Latency", val: "1.2s", note: "Sub-second streaming generation" },
    { label: "Customer Satisfaction (CSAT)", val: "94.2%", note: "Validated by post-chat reviews" },
    { label: "Languages Supported", val: "65+", note: "Automatic native translation" },
  ];

  const testimonials = [
    {
      quote: "Supportly handles over 12,000 inquiries a week for our e-commerce brand with a 95% CSAT. Our human support agents only step in for VIP exceptions and high-value orders.",
      author: "Maya Lin",
      role: "VP of Customer Experience, Kroma Apparel",
      stats: "78% tickets auto-resolved",
    },
    {
      quote: "Training the bot on our Notion docs and GitHub markdown took literally 10 minutes. It never hallucinates because its answers strictly cite our verified documentation.",
      author: "Alex Tremblay",
      role: "Head of Developer Support, DevStack IO",
      stats: "Zero hallucination guardrails",
    },
    {
      quote: "We went from 4-hour email wait times to 15-second instant resolutions. Supportly paid for itself in reduced contractor costs within our first 30 days.",
      author: "Sean Gallagher",
      role: "Customer Operations Lead, FleetPulse",
      stats: "$18,000 monthly cost savings",
    },
  ];

  return (
    <div className="space-y-20 lg:space-y-28 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-20 lg:pt-28 pb-12 overflow-hidden ai-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-xs font-semibold mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-violet-600 animate-spin" style={{ animationDuration: "8s" }} />
            <span>Supportly 2.4 Autonomous Engine Now Live</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 max-w-4xl mx-auto leading-tight">
            Deliver Better Customer Support <span className="text-violet-600">With AI</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg lg:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Resolve 75%+ of customer inquiries instantly. Train on your documentation, integrate across your support tools, and seamlessly escalate to human agents.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="px-8 py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl shadow-lg shadow-violet-600/30 transition flex items-center gap-2"
            >
              <span>Start Free 14-Day Trial</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/features"
              className="px-8 py-3.5 bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-800 font-bold rounded-xl shadow-sm transition"
            >
              Explore AI Features
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500 font-medium">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-violet-600" /> 100 Free AI Conversations Included
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-violet-600" /> Zero Training on Customer Data
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-violet-600" /> Setup in Under 5 Minutes
            </span>
          </div>

          {/* Interactive Chatbot Interface Preview */}
          <div className="mt-14 max-w-4xl mx-auto">
            <SupportlyChatPreview />
          </div>
        </div>
      </section>

      {/* Live Impact Metrics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-950 text-white rounded-3xl p-8 sm:p-12 border border-zinc-800 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {metrics.map((m, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-violet-400">
                {m.val}
              </div>
              <div className="font-bold text-sm text-zinc-200">{m.label}</div>
              <div className="text-xs text-zinc-500">{m.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Multi-Channel Coverage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-violet-700 font-semibold">
            Omnichannel Autonomous Support
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Meet Customers Where They Already Are
          </h2>
          <p className="mt-3 text-base text-zinc-600">
            One central AI brain connected to all of your customer touchpoints simultaneously.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {channels.map((ch, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm hover:border-violet-200 hover:shadow-md transition space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center font-bold">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900">{ch.name}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{ch.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-violet-700 font-semibold">
            Real Customer Results
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-zinc-900">
            Loved by Fast-Growing Support Teams
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm flex flex-col justify-between"
            >
              <p className="text-sm text-zinc-700 leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-zinc-900">{t.author}</div>
                  <div className="text-xs text-zinc-500">{t.role}</div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-violet-50 text-violet-800 border border-violet-200 font-semibold">
                  {t.stats}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trial CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 text-white border border-zinc-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
          <h3 className="text-2xl sm:text-3xl font-bold">
            Start resolving 75% of support questions on autopilot
          </h3>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Train your first AI support bot in 5 minutes with zero coding required.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="px-8 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm transition shadow-lg shadow-violet-600/30"
            >
              Start Free Trial (No Card Needed)
            </Link>
            <Link
              href="/integrations"
              className="px-8 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-semibold text-sm transition"
            >
              View SDKs & Embed Options
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
