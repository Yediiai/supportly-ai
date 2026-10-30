"use client";

import React, { useState } from "react";
import { 
  Bot, Send, User, Sparkles, CheckCircle2, RefreshCw, 
  ThumbsUp, ThumbsDown, ExternalLink, HelpCircle, UserCheck, Loader2
} from "lucide-react";

interface Message {
  sender: "user" | "bot";
  text: string;
  source?: string;
  confidence?: string;
  timestamp: string;
}

const SAMPLE_PROMPTS = [
  "How do I cancel or pause my subscription?",
  "Where can I find order #4092 tracking details?",
  "Can I integrate Supportly with our Shopify store?",
  "What is your enterprise SLA and uptime guarantee?",
];

export function SupportlyChatPreview() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! I am Supportly AI, trained on your knowledge base, documentation, and product catalog. How can I assist you today?",
      confidence: "Verified Agent",
      timestamp: "Just now",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (textToSend?: string) => {
    const question = textToSend || input;
    if (!question.trim()) return;

    const userMsg: Message = {
      sender: "user",
      text: question,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "I have checked your verified knowledge base. You can manage your account and integration preferences directly in your Settings dashboard under the API & Webhooks tab.";
      let sourceDoc = "help.docs/overview";
      let confidenceScore = "97.8% Match";

      const qLower = question.toLowerCase();
      if (qLower.includes("cancel") || qLower.includes("subscription") || qLower.includes("pause")) {
        botResponse = "You can cancel or pause your subscription anytime from Billing → Subscription Management. Pausing retains all trained knowledge embeddings, custom prompt guardrails, and customer conversation history for up to 90 days at zero charge.";
        sourceDoc = "kb/billing/subscription-cancellation.md";
        confidenceScore = "99.4% Match";
      } else if (qLower.includes("order") || qLower.includes("tracking") || qLower.includes("4092")) {
        botResponse = "Order #4092 was dispatched via FedEx Express (Tracking #9400-1118-9922). It is currently in transit and scheduled for delivery tomorrow before 3:00 PM.";
        sourceDoc = "shopify-api/orders/lookup";
        confidenceScore = "98.9% Match";
      } else if (qLower.includes("shopify") || qLower.includes("store")) {
        botResponse = "Yes! Supportly connects to Shopify with a 1-click app install. It automatically syncs product inventory, order statuses, return policies, and discount codes in real-time.";
        sourceDoc = "integrations/shopify-connector.md";
        confidenceScore = "99.1% Match";
      } else if (qLower.includes("sla") || qLower.includes("uptime") || qLower.includes("enterprise")) {
        botResponse = "Our Enterprise plan includes a 99.99% clinical-grade uptime SLA, multi-region failover, dedicated VPC deployment options, and sub-15s response resolution guarantees.";
        sourceDoc = "legal/enterprise-sla-agreement.pdf";
        confidenceScore = "99.6% Match";
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: botResponse,
          source: sourceDoc,
          confidence: confidenceScore,
          timestamp: "Just now",
        },
      ]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-zinc-950 rounded-3xl border border-zinc-800 shadow-2xl overflow-hidden font-sans text-zinc-100">
      {/* Widget Header */}
      <div className="bg-zinc-900/90 px-6 py-4 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4 text-violet-400" />
            <span className="font-bold text-sm text-zinc-100">
              Live AI Support Copilot
            </span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-500/10 text-violet-400 border border-violet-500/20">
            Interactive Simulator
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs text-zinc-400">
          <span className="flex items-center gap-1 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" /> 75% Automated Resolution
          </span>
          <span className="hidden sm:inline">• Avg Response: 1.2s</span>
        </div>
      </div>

      {/* Suggested Quick Prompts */}
      <div className="px-6 py-3 bg-zinc-900/40 border-b border-zinc-800 flex flex-wrap items-center gap-2 text-xs">
        <span className="text-zinc-500 font-mono text-[11px] mr-1">Try a prompt:</span>
        {SAMPLE_PROMPTS.map((prompt, i) => (
          <button
            key={i}
            onClick={() => handleSend(prompt)}
            className="px-2.5 py-1 rounded-full bg-zinc-800 hover:bg-violet-950 hover:text-violet-300 hover:border-violet-700/60 border border-zinc-700 text-zinc-300 transition text-[11px] text-left"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Conversation Thread */}
      <div className="p-6 sm:p-8 space-y-4 max-h-[380px] overflow-y-auto">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex gap-3 text-sm ${m.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            {m.sender === "bot" && (
              <div className="w-8 h-8 rounded-xl bg-violet-600 flex items-center justify-center text-white shrink-0 mt-0.5">
                <Bot className="w-4 h-4" />
              </div>
            )}

            <div
              className={`max-w-[85%] sm:max-w-[75%] p-4 rounded-2xl ${
                m.sender === "user"
                  ? "bg-violet-600 text-white rounded-tr-sm"
                  : "bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-tl-sm space-y-2.5"
              }`}
            >
              <p className="leading-relaxed text-sm">{m.text}</p>

              {m.source && (
                <div className="pt-2 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-zinc-400 font-mono">
                  <div className="flex items-center gap-1.5 text-violet-400">
                    <ExternalLink className="w-3 h-3" />
                    <span>Source: {m.source}</span>
                  </div>
                  {m.confidence && (
                    <span className="px-2 py-0.5 rounded bg-zinc-800 text-emerald-400 font-medium">
                      {m.confidence}
                    </span>
                  )}
                </div>
              )}
            </div>

            {m.sender === "user" && (
              <div className="w-8 h-8 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400 shrink-0 mt-0.5">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-3 text-sm items-center text-zinc-400">
            <div className="w-8 h-8 rounded-xl bg-violet-600 flex items-center justify-center text-white shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-violet-400" />
              <span className="text-xs font-mono">Searching RAG knowledge sources...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-4 bg-zinc-900 border-t border-zinc-800 flex items-center gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything or simulate a customer inquiry..."
          className="flex-1 bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-violet-500"
        />
        <button
          type="submit"
          disabled={!input.trim() || isTyping}
          className="px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white font-semibold text-sm transition flex items-center gap-1.5 shadow-md shadow-violet-600/30"
        >
          <span>Send</span>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
