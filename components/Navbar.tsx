"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bot, Sparkles, Menu, X, ArrowRight, Zap } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Integrations & API", href: "/integrations" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-md shadow-violet-500/20 group-hover:scale-105 transition transform">
              <Bot className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight text-zinc-900">
                Supportly<span className="text-violet-600">.ai</span>
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-violet-50 text-violet-700 border border-violet-200 font-bold">
                v2.4
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition ${
                    isActive
                      ? "text-violet-700 bg-violet-50 font-bold"
                      : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/pricing"
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 px-3 py-2"
            >
              Sign In
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-violet-600 hover:bg-violet-700 rounded-xl shadow-md shadow-violet-600/25 transition"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start Free Trial</span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-600 hover:text-zinc-900 rounded-lg hover:bg-zinc-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 bg-white px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3.5 py-2.5 rounded-lg text-base font-semibold ${
                pathname === link.href
                  ? "bg-violet-50 text-violet-700 font-bold"
                  : "text-zinc-700 hover:bg-zinc-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-zinc-100 flex flex-col gap-2">
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-medium text-zinc-700 bg-zinc-100 rounded-xl"
            >
              Sign In
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-bold text-white bg-violet-600 rounded-xl shadow-sm"
            >
              Start Free Trial (14 Days)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
