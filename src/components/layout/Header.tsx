"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Menu, X, ArrowRight, ShieldCheck } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#13263D]/95 backdrop-blur-md border-b border-white/10 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0D9488] to-[#0F766E] flex items-center justify-center font-bold text-lg text-white shadow-md border border-white/20 group-hover:scale-105 transition-transform">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5">
                ADMOBITICS
                <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
              </span>
              <span className="text-[10px] tracking-wider text-slate-300 uppercase font-medium">
                Digital Media Pvt Ltd
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {siteConfig.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "text-white bg-white/10 shadow-sm"
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
              className="text-xs font-semibold px-3 py-2 text-slate-200 hover:text-white border border-white/20 rounded-full hover:bg-white/5 transition-all touch-press"
            >
              Driver Partner
            </Link>
            <Link
              href="/advertise#plan"
              className="text-xs font-semibold px-4 py-2.5 bg-[#0D9488] hover:bg-[#0F766E] text-white rounded-full shadow-sm hover:shadow-teal-500/20 transition-all flex items-center gap-1.5 touch-press"
            >
              Plan Your Campaign
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#13263D] border-b border-white/10 px-4 pt-3 pb-6 space-y-2">
          {siteConfig.navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                  isActive
                    ? "bg-white/10 text-white font-semibold"
                    : "text-slate-200 hover:bg-white/5 hover:text-white"
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
              className="w-full text-center text-sm font-semibold py-3 bg-[#0D9488] text-white rounded-xl shadow-md touch-press flex items-center justify-center gap-2"
            >
              Plan Your Campaign
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/partner"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-sm font-semibold py-2.5 border border-white/20 text-slate-200 rounded-xl hover:bg-white/5 touch-press"
            >
              Become a Driver Partner
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
