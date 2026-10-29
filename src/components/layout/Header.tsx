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
      setScrolled(window.scrollY > 15);
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
      <div className="bg-[#0F172A] text-slate-300 py-1.5 px-4 text-[11px] hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C59A4E] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C59A4E]" />
            </span>
            <span className="text-slate-200 font-medium tracking-wide">
              10 In-Auto Passenger Screens Live Across Hyderabad
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
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Hyderabad, Telangana</span>
          </div>
        </div>
      </div>

      {/* 2. Main Executive Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md shadow-slate-900/5 border-b border-slate-200/80"
            : "bg-white border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Client Official Logo - Perfectly Blended on White */}
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden bg-[#FAFAF9] p-0.5 border border-[#C59A4E]/30 shadow-sm group-hover:scale-105 group-hover:border-[#C59A4E] transition-all duration-300">
                <img
                  src="/admobitics-logo.jpg"
                  alt="Admobitics Digital Media Private Limited"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#0F172A] flex items-center gap-1.5 font-sans">
                  ADMOBITICS
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59A4E]" />
                </span>
                <span className="text-[10px] tracking-widest text-[#A87E34] uppercase font-bold">
                  Digital Media Pvt Ltd
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                      isActive
                        ? "text-[#0F172A] bg-[#F7EFE1] font-bold text-[#A87E34]"
                        : "text-slate-600 hover:text-[#0F172A] hover:bg-slate-50"
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#C59A4E]" : "text-slate-400"}`} />
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
                    className={`px-3 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                      isActive
                        ? "text-[#A87E34] bg-[#F7EFE1] font-bold"
                        : "text-slate-600 hover:text-[#0F172A] hover:bg-slate-50"
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
                className="text-xs font-semibold px-4 py-2 text-slate-700 hover:text-[#0F172A] border border-slate-200 rounded-xl hover:bg-slate-50 transition-all touch-press flex items-center gap-1.5"
              >
                <Car className="w-3.5 h-3.5 text-[#C59A4E]" />
                <span>Driver Partner</span>
              </Link>

              <Link
                href="/advertise#plan"
                className="btn-gold-solid text-xs font-bold px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 touch-press"
              >
                <span>Plan Campaign</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-1.5 shadow-xl">
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
                      ? "bg-[#F7EFE1] text-[#A87E34] font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <Icon className="w-4 h-4 text-[#C59A4E]" />
                  <span>{item.label}</span>
                </Link>
              );
            })}

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <Link
                href="/advertise#plan"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-gold-solid w-full text-center text-sm font-bold py-3.5 rounded-xl shadow-md touch-press flex items-center justify-center gap-2"
              >
                Plan Your Campaign
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/partner"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center text-sm font-semibold py-3 border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 touch-press flex items-center justify-center gap-2"
              >
                <Car className="w-4 h-4 text-[#C59A4E]" />
                <span>Become a Driver Partner</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
