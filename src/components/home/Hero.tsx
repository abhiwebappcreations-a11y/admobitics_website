"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  MapPin,
  RotateCw,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export function Hero() {
  const [activeAdIndex, setActiveAdIndex] = useState(0);

  const sampleCampaigns = [
    {
      brand: "Royal Hyderabadi Biryani",
      tagline: "Authentic Dum Biryani • Madhapur Corridors",
      offer: "Flat 20% OFF on Family Packs • Dine-In & Takeaway",
      code: "Use Code: ADMOBITICS20",
      category: "Restaurant Special",
      bgGradient: "from-amber-600 via-orange-700 to-slate-900",
    },
    {
      brand: "Vertex Smart Residences",
      tagline: "Luxury 3 & 4 BHK in Financial District",
      offer: "Zero Pre-EMI till Possession • Possession 2027",
      code: "Visit: vertexluxury.in",
      category: "Real Estate Corridor",
      bgGradient: "from-sky-800 via-slate-800 to-slate-950",
    },
    {
      brand: "SpeedFit Hyderabad",
      tagline: "State-of-the-art Gym & CrossFit • Jubilee Hills",
      offer: "Annual Membership at ₹1,499/month",
      code: "Call: +91 76598 88483",
      category: "Fitness & Wellness",
      bgGradient: "from-emerald-700 via-teal-800 to-slate-950",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAdIndex((prev) => (prev + 1) % sampleCampaigns.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [sampleCampaigns.length]);

  const currentCampaign = sampleCampaigns[activeAdIndex];

  return (
    <section className="relative overflow-hidden bg-[#FAFAF9] text-[#0F172A] pt-16 pb-24 lg:pt-24 lg:pb-36 bg-grid-subtle border-b border-slate-200/80">
      
      {/* Subtle Warm Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#C59A4E]/10 via-[#C59A4E]/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          
          {/* Left Column: Bold Typography & Value Proposition */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Live Pilot Fleet Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#C59A4E]/30 text-xs font-semibold tracking-wide text-[#A87E34] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C59A4E] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C59A4E]" />
              </span>
              <span>10 Digital Screens Live Across Hyderabad Autos</span>
            </div>

            {/* Editorial Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] text-[#0F172A] leading-[1.08]">
                YOUR BRAND. <br />
                <span className="text-[#C59A4E]">
                  ON THE MOVE.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal pt-1">
                Turn daily Hyderabad auto rides into prime advertising territory. Reach passengers directly at eye level during 15–25 minute commutes through high-definition digital screens.
              </p>
            </div>

            {/* Clear Pricing Strips with Strike-Through Values */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm max-w-xl space-y-3.5">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Zap className="w-4 h-4 text-[#C59A4E]" />
                  <span className="font-bold text-[#0F172A]">Special Launch Pricing:</span>
                </div>
                <span className="bg-[#F7EFE1] text-[#A87E34] border border-[#C59A4E]/30 px-3 py-0.5 rounded-full font-bold text-[10px]">
                  UP TO 54% OFF
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-[10px] text-slate-500 font-semibold">30+ Days (Standard)</p>
                  <p className="text-sm font-bold text-[#0F172A] mt-0.5">
                    <span className="line-through text-slate-400 text-xs font-normal mr-1">₹99</span>
                    <span className="text-[#A87E34] font-black text-base">₹49</span> <span className="text-[10px] text-slate-500 font-normal">/day</span>
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-[10px] text-slate-500 font-semibold">10–29 Days (Custom)</p>
                  <p className="text-sm font-bold text-[#0F172A] mt-0.5">
                    <span className="line-through text-slate-400 text-xs font-normal mr-1">₹149</span>
                    <span className="text-[#A87E34] font-black text-base">₹69</span> <span className="text-[10px] text-slate-500 font-normal">/day</span>
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 col-span-2 sm:col-span-1">
                  <p className="text-[10px] text-slate-500 font-semibold">1–9 Days (Flexi)</p>
                  <p className="text-sm font-bold text-[#0F172A] mt-0.5">
                    <span className="line-through text-slate-400 text-xs font-normal mr-1">₹199</span>
                    <span className="text-[#A87E34] font-black text-base">₹99</span> <span className="text-[10px] text-slate-500 font-normal">/day</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/advertise#plan"
                className="btn-gold-solid px-8 py-4 rounded-full flex items-center justify-center gap-2.5 text-xs uppercase tracking-wider touch-press"
              >
                <span>Plan Your Campaign</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/network"
                className="btn-dark px-8 py-4 rounded-full transition-all text-center text-xs uppercase tracking-wider touch-press"
              >
                Explore 10-Screen Network
              </Link>
            </div>

            {/* Target Corridors Pill Ticker */}
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <MapPin className="w-4 h-4 text-[#C59A4E] shrink-0" />
              <span>Active Corridors: Madhapur • Hitec City • Gachibowli • Jubilee Hills • Secunderabad</span>
            </div>

          </div>

          {/* Right Column: Physical Digital Screen Enclosure with Vibrant 3D Contrast */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Subtle Backing Shadow */}
              <div className="absolute -inset-2 rounded-3xl bg-slate-900/10 blur-xl pointer-events-none" />

              {/* Physical Screen Bezel Enclosure - Dark Contrast pops on clean light page */}
              <div className="relative rounded-3xl bg-[#0F172A] border-4 border-slate-800 shadow-2xl p-5 overflow-hidden text-white">
                
                {/* Header: Hardware Status & Indicator */}
                <div className="flex items-center justify-between pb-3.5 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-bold text-white tracking-wide text-[11px]">
                      PASSENGER-FACING DIGITAL SCREEN
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-white/10 px-2.5 py-0.5 rounded-full text-slate-300">
                    1080p • 16:9 • 15s LOOP
                  </span>
                </div>

                {/* The Active Display Panel */}
                <div className="relative mt-4 aspect-video rounded-2xl overflow-hidden bg-black border border-slate-700 shadow-inner group">
                  
                  {/* Rotating Campaign Content */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${currentCampaign.bgGradient} p-5 flex flex-col justify-between text-white transition-all duration-700 z-10`}
                  >
                    {/* Top Bar of Ad */}
                    <div className="flex items-center justify-between text-[11px] font-semibold">
                      <span className="bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md text-[#E0BA73] border border-white/10">
                        {currentCampaign.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-300 text-[10px] bg-black/40 px-2 py-0.5 rounded">
                        <RotateCw className="w-3 h-3 animate-spin text-[#C59A4E]" />
                        Auto-Rotating
                      </span>
                    </div>

                    {/* Main Creative Text */}
                    <div className="space-y-1 my-auto">
                      <p className="text-xs font-black tracking-wider text-[#E0BA73] uppercase">
                        {currentCampaign.brand}
                      </p>
                      <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight">
                        {currentCampaign.tagline}
                      </h3>
                      <p className="text-xs text-slate-200">
                        {currentCampaign.offer}
                      </p>
                    </div>

                    {/* Bottom CTA on Screen */}
                    <div className="flex items-center justify-between border-t border-white/20 pt-2 text-[10px]">
                      <span className="font-mono text-white/90 font-bold bg-white/15 px-2 py-0.5 rounded">
                        {currentCampaign.code}
                      </span>
                      <span className="text-[#E0BA73] font-bold tracking-wider uppercase text-[9px]">
                        Admobitics Auto Network
                      </span>
                    </div>
                  </div>

                </div>

                {/* Hardware Spec Chips under Screen */}
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px]">
                  <div className="p-2 rounded-xl bg-white/[0.05] border border-white/5">
                    <p className="text-slate-400">Position</p>
                    <p className="font-bold text-white mt-0.5">Partition Mount</p>
                  </div>
                  <div className="p-2 rounded-xl bg-white/[0.05] border border-white/5">
                    <p className="text-slate-400">Audio Mode</p>
                    <p className="font-bold text-white mt-0.5">Captioned</p>
                  </div>
                  <div className="p-2 rounded-xl bg-white/[0.05] border border-white/5">
                    <p className="text-slate-400">Target Fleet</p>
                    <p className="font-bold text-[#E0BA73] mt-0.5">10 Active Autos</p>
                  </div>
                </div>

                {/* Campaign switcher buttons */}
                <div className="mt-4 flex items-center justify-center gap-2 pt-2 border-t border-white/10">
                  <span className="text-[10px] text-slate-400 mr-1">Preview Ad:</span>
                  {sampleCampaigns.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveAdIndex(i)}
                      aria-label={`Show sample campaign ${i + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        activeAdIndex === i ? "w-6 bg-[#C59A4E]" : "w-2 bg-slate-600 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>

              </div>

              {/* Verified Hardware Badge */}
              <div className="mt-3 flex items-center justify-center gap-2 text-center text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-[#C59A4E]" />
                <span>Safely mounted inside passenger cabins across Hyderabad</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
