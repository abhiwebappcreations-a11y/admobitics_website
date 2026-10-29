"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import {
  Menu,
  X,
  ArrowRight,
  PhoneCall,
  Home,
  Info,
  Megaphone,
  Workflow,
  Network,
  Users,
  Mail,
  Car,
} from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "About", href: "/about", icon: Info },
    { label: "Advertise", href: "/advertise", icon: Megaphone },
    { label: "How It Works", href: "/how-it-works", icon: Workflow },
    { label: "Network", href: "/network", icon: Network },
    { label: "Partner", href: "/partner", icon: Users },
    { label: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <>
      {/* 1. Top Mini Corporate Status Bar */}
      <div className="bg-[#060D17] border-b border-[#C59A4E]/15 py-1.5 px-4 text-[11px] text-slate-400 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E0BA73] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C59A4E]" />
            </span>
            <span className="text-slate-300 font-medium tracking-wide">
              10 In-Auto Screens Operational Across Hyderabad
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="tel:+917659888483"
              className="hover:text-[#E0BA73] flex items-center gap-1.5 transition-colors font-mono text-[11px]"
            >
              <PhoneCall className="w-3 h-3 text-[#C59A4E]" />
              <span>+91 76598 88483</span>
            </a>
            <span className="text-slate-700">|</span>
            <span className="text-slate-400">Hyderabad, Telangana</span>
          </div>
        </div>
      </div>

      {/* 2. Main Executive Navigation Bar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B1523]/95 backdrop-blur-md shadow-2xl shadow-black/60 border-b border-[#C59A4E]/20"
            : "bg-[#0B1523] border-b border-[#C59A4E]/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Client Official Logo */}
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden bg-white/10 p-0.5 border border-[#C59A4E]/40 shadow-lg group-hover:scale-105 group-hover:border-[#E0BA73] transition-all duration-300">
                <img
                  src="/admobitics-logo.jpg"
                  alt="Admobitics Digital Media Private Limited"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5 font-sans">
                  ADMOBITICS
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59A4E]" />
                </span>
                <span className="text-[10px] tracking-widest text-[#E0BA73]/80 uppercase font-semibold">
                  Digital Media Pvt Ltd
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links with Micro Icons */}
            <nav className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                      isActive
                        ? "text-white bg-[#C59A4E]/15 border border-[#C59A4E]/30 shadow-sm"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#E0BA73]" : "text-slate-400"}`} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Compact Desktop Navigation for Medium Screens */}
            <nav className="hidden lg:flex xl:hidden items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-2.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                      isActive
                        ? "text-white bg-[#C59A4E]/15 border border-[#C59A4E]/30"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTAs */}
            <div className="hidden lg:flex items-center gap-2.5">
              <Link
                href="/partner"
                className="text-xs font-semibold px-3.5 py-2 text-slate-300 hover:text-white border border-white/15 rounded-xl hover:bg-white/5 transition-all touch-press flex items-center gap-1.5"
              >
                <Car className="w-3.5 h-3.5 text-[#E0BA73]" />
                <span>Driver Partner</span>
              </Link>

              <Link
                href="/advertise#plan"
                className="btn-gold text-xs font-extrabold px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 touch-press"
              >
                <span>Plan Campaign</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0B1523] border-b border-[#C59A4E]/20 px-4 pt-3 pb-6 space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold ${
                    isActive
                      ? "bg-[#C59A4E]/15 text-white font-bold border border-[#C59A4E]/30"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4 text-[#E0BA73]" />
                  <span>{item.label}</span>
                </Link>
              );
            })}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <Link
                href="/advertise#plan"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-gold w-full text-center text-sm font-bold py-3.5 rounded-xl shadow-lg touch-press flex items-center justify-center gap-2"
              >
                Plan Your Campaign
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/partner"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center text-sm font-semibold py-3 border border-white/15 text-slate-200 rounded-xl hover:bg-white/5 touch-press flex items-center justify-center gap-2"
              >
                <Car className="w-4 h-4 text-[#E0BA73]" />
                <span>Become a Driver Partner</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
