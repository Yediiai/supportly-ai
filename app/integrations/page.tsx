"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Bot, Code2, Copy, Check, Terminal, ExternalLink, 
  CheckCircle2, AlertCircle, Send, Loader2, Sparkles, Layers
} from "lucide-react";

const salesSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  workEmail: z.string().email("Please provide a valid company email"),
  companyName: z.string().min(2, "Company name is required"),
  ticketVolume: z.enum(["under-1k", "1k-10k", "10k-50k", "over-50k"], {
    errorMap: () => ({ message: "Please select estimated monthly inquiry volume" }),
  }),
  primaryChannel: z.enum(["web-widget", "shopify", "zendesk-intercom", "api-custom"]),
  message: z.string().min(10, "Please provide brief project or integration requirements"),
});

type SalesFormData = z.infer<typeof salesSchema>;

export default function IntegrationsPage() {
  const [activeTab, setActiveTab] = useState<"html" | "react" | "api">("html");
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<SalesFormData | null>(null);

  const codeSnippets = {
    html: `<!-- Supportly AI 1-Line Embed -->
<script 
  src="https://cdn.supportly.ai/widget.js" 
  data-project-id="proj_live_99418294"
  data-theme="dark"
  data-accent="#7C3AED"
  async>
</script>`,
    react: `// Install SDK: npm install @supportly/react
import { SupportlyProvider, SupportlyChatWidget } from "@supportly/react";

export default function App() {
  return (
    <SupportlyProvider projectId="proj_live_99418294">
      {/* Your application components */}
      <SupportlyChatWidget 
        position="bottom-right"
        defaultOpen={false}
        accentColor="#7C3AED"
      />
    </SupportlyProvider>
  );
}`,
    api: `// POST /v1/chat/completions
curl -X POST "https://api.supportly.ai/v1/chat/completions" \\
  -H "Authorization: Bearer sp_live_secret_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "messages": [
      {"role": "user", "content": "How do I upgrade my license?"}
    ],
    "stream": true,
    "confidence_threshold": 0.85
  }'`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SalesFormData>({
    resolver: zodResolver(salesSchema),
    defaultValues: {
      ticketVolume: "1k-10k",
      primaryChannel: "web-widget",
    },
  });

  const onSubmit = async (data: SalesFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 850));
    setIsSubmitting(false);
    setSubmittedData(data);
    reset();
  };

  const connectors = [
    { name: "Shopify App", desc: "Syncs real-time inventory, order tracking, and refund status." },
    { name: "WordPress / WooCommerce", desc: "1-click plugin install with automated product knowledge ingestion." },
    { name: "Zendesk Support", desc: "AI agent drafts private ticket notes or auto-closes routine tickets." },
    { name: "Intercom Messenger", desc: "Plugs seamlessly into Intercom inbox as an automated co-pilot." },
    { name: "Slack & Microsoft Teams", desc: "Internal IT helpdesk and HR policy automation in company channels." },
    { name: "Discord Bot", desc: "Community moderation and developer documentation answering." },
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20 space-y-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 text-violet-800 text-xs font-semibold mb-4">
          <Code2 className="w-3.5 h-3.5" />
          <span>Developer SDKs & Pre-Built Connectors</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight">
          Integrate Anywhere in 60 Seconds
        </h1>
        <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
          Embed the Supportly chat widget via a single HTML script tag, use our React/Next.js SDK, or query our low-latency REST API directly.
        </p>
      </div>

      {/* Code Snippets Switcher */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-950 rounded-3xl border border-zinc-800 shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 bg-zinc-900 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              {[
                { id: "html", label: "HTML Script Tag" },
                { id: "react", label: "React / Next.js SDK" },
                { id: "api", label: "REST cURL API" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition ${
                    activeTab === tab.id
                      ? "bg-violet-600 text-white"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white font-mono px-3 py-1.5 rounded-lg bg-zinc-800 transition"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied" : "Copy Code"}</span>
            </button>
          </div>

          <pre className="p-6 text-xs sm:text-sm font-mono text-violet-200 overflow-x-auto leading-relaxed">
            <code>{codeSnippets[activeTab]}</code>
          </pre>
        </div>
      </section>

      {/* Pre-Built Connectors Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            Pre-Built Native Connectors
          </h2>
          <p className="text-sm text-zinc-500 mt-2">
            No engineering required. Authorize via OAuth to sync support data automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {connectors.map((c, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm hover:border-violet-200 hover:shadow-md transition space-y-2"
            >
              <h3 className="font-bold text-zinc-900 text-base">{c.name}</h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sales & Custom Fine-Tuning Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-violet-700 font-semibold">
                Enterprise Solutions
              </span>
              <h2 className="mt-2 text-2xl font-bold text-zinc-900">
                Contact Sales & Custom RAG Architecture
              </h2>
              <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                Need custom on-premise model weights, private VPC hosting, or bespoke data pipelines? Our AI solutions architects are here to guide your rollout.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-zinc-200 space-y-1">
                <h4 className="font-bold text-zinc-900 text-sm">Direct Enterprise Desk</h4>
                <p className="text-xs text-zinc-500 font-mono">enterprise@supportly.ai</p>
                <p className="text-xs text-zinc-400">Response within 2 business hours</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-zinc-200 space-y-1">
                <h4 className="font-bold text-zinc-900 text-sm">Dedicated Solutions Architect</h4>
                <p className="text-xs text-zinc-500">
                  Custom RAG embedding fine-tuning and evaluation benchmark testing.
                </p>
              </div>
            </div>
          </div>

          {/* Right Validated Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-zinc-200 shadow-xl">
            {submittedData ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  Enterprise Request Received!
                </h3>
                <p className="text-sm text-zinc-600 max-w-md mx-auto">
                  Thank you, <strong>{submittedData.fullName}</strong>. An AI solutions engineer has been assigned to <strong>{submittedData.companyName}</strong>.
                </p>
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-xs font-mono text-zinc-600 max-w-sm mx-auto text-left">
                  <div>Corporate Email: {submittedData.workEmail}</div>
                  <div>Inquiries: {submittedData.ticketVolume}</div>
                  <div>Channel: {submittedData.primaryChannel}</div>
                </div>
                <button
                  onClick={() => setSubmittedData(null)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-xs transition"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
                <div className="border-b border-zinc-100 pb-3 mb-2">
                  <h3 className="text-xl font-bold text-zinc-900">Contact Enterprise AI Sales</h3>
                  <p className="text-xs text-zinc-500 mt-1">
                    Fill out the form below for custom pilot evaluation and volume discounts.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("fullName")}
                      placeholder="Alex Morgan"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-zinc-50/50 focus:bg-white focus:outline-none transition ${
                        errors.fullName ? "border-rose-300" : "border-zinc-200 focus:border-violet-600"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">
                      Work Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      {...register("workEmail")}
                      placeholder="alex@acme.com"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-zinc-50/50 focus:bg-white focus:outline-none transition ${
                        errors.workEmail ? "border-rose-300" : "border-zinc-200 focus:border-violet-600"
                      }`}
                    />
                    {errors.workEmail && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.workEmail.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">
                      Company Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("companyName")}
                      placeholder="Acme Global Inc."
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-zinc-50/50 focus:bg-white focus:outline-none transition ${
                        errors.companyName ? "border-rose-300" : "border-zinc-200 focus:border-violet-600"
                      }`}
                    />
                    {errors.companyName && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.companyName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">
                      Estimated Monthly Inquiries <span className="text-rose-500">*</span>
                    </label>
                    <select
                      {...register("ticketVolume")}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-zinc-200 bg-zinc-50/50 focus:bg-white focus:outline-none focus:border-violet-600 transition"
                    >
                      <option value="under-1k">&lt; 1,000 inquiries / month</option>
                      <option value="1k-10k">1,000 - 10,000 inquiries / month</option>
                      <option value="10k-50k">10,000 - 50,000 inquiries / month</option>
                      <option value="over-50k">&gt; 50,000+ inquiries / month</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">
                    Primary Integration Channel
                  </label>
                  <select
                    {...register("primaryChannel")}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-zinc-200 bg-zinc-50/50 focus:bg-white focus:outline-none focus:border-violet-600 transition"
                  >
                    <option value="web-widget">Website Custom Chat Widget</option>
                    <option value="shopify">Shopify E-Commerce Store</option>
                    <option value="zendesk-intercom">Zendesk / Intercom Helpdesk</option>
                    <option value="api-custom">Custom Headless REST API Integration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">
                    Project Requirements & Documentation Sources <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    {...register("message")}
                    placeholder="Tell us about your help center format, languages needed, or custom API endpoints..."
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-zinc-50/50 focus:bg-white focus:outline-none transition ${
                      errors.message ? "border-rose-300" : "border-zinc-200 focus:border-violet-600"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-violet-600 hover:bg-violet-700 disabled:opacity-60 text-white font-bold text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-violet-600/25"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Enterprise Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Contact Enterprise Sales</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
