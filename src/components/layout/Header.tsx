"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#0B1523]/80 backdrop-blur-xl border-b border-white/10 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand Name */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0D9488] via-[#0F766E] to-[#13263D] flex items-center justify-center font-black text-xl text-white shadow-lg shadow-teal-900/30 border border-teal-400/30 group-hover:scale-105 group-hover:border-teal-400 transition-all duration-300">
              <span className="tracking-tight">A</span>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#0B1523]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5 font-sans">
                ADMOBITICS
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 uppercase font-semibold">
                Digital Mobility Network
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            {siteConfig.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? "text-white bg-white/15 shadow-sm border border-white/10"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/partner"
              className="text-xs font-semibold px-4 py-2 text-slate-300 hover:text-white border border-white/15 rounded-full hover:bg-white/5 transition-all touch-press"
            >
              Driver Partner
            </Link>
            <Link
              href="/advertise#plan"
              className="text-xs font-bold px-5 py-2.5 bg-gradient-to-r from-[#0D9488] to-[#0F766E] hover:from-[#0f766e] hover:to-[#0D9488] text-white rounded-full shadow-lg shadow-teal-950/50 border border-teal-400/30 hover:border-teal-300 transition-all flex items-center gap-2 touch-press"
            >
              <span>Plan Campaign</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B1523]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2">
          {siteConfig.navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-semibold ${
                  isActive
                    ? "bg-white/10 text-white border border-white/15"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <Link
              href="/advertise#plan"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-sm font-bold py-3.5 bg-gradient-to-r from-[#0D9488] to-[#0F766E] text-white rounded-xl shadow-lg touch-press flex items-center justify-center gap-2"
            >
              Plan Your Campaign
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/partner"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-sm font-semibold py-3 border border-white/15 text-slate-200 rounded-xl hover:bg-white/5 touch-press"
            >
              Become a Driver Partner
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
