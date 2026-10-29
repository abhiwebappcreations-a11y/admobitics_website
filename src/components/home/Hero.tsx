"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  MapPin,
  Play,
  RotateCw,
  Eye,
  Sparkles,
} from "lucide-react";

export function Hero() {
  const [activeAdIndex, setActiveAdIndex] = useState(0);

  // Rotating realistic transit advertisements inside the screen
  const sampleCampaigns = [
    {
      brand: "Royal Hyderabadi Biryani",
      tagline: "Authentic Dum Biryani • Madhapur",
      offer: "Flat 20% OFF on Family Packs • Dine-In & Takeaway",
      code: "Use Code: ADMOBITICS20",
      category: "Restaurant Special",
      theme: "from-amber-600 via-orange-700 to-slate-900",
    },
    {
      brand: "Vertex Smart Residences",
      tagline: "Luxury 3 & 4 BHK in Financial District",
      offer: "Zero Pre-EMI till Possession • Possession 2027",
      code: "Visit: vertexluxury.in",
      category: "Real Estate Corridors",
      theme: "from-sky-700 via-slate-800 to-slate-950",
    },
    {
      brand: "SpeedFit Hyderabad",
      tagline: "State-of-the-art Gym & CrossFit • Jubilee Hills",
      offer: "Annual Membership at ₹1,499/month",
      code: "Call: +91 76598 88483",
      category: "Fitness & Wellness",
      theme: "from-emerald-700 via-teal-800 to-slate-950",
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
    <section className="relative overflow-hidden bg-[#0B1523] text-white pt-16 pb-24 lg:pt-24 lg:pb-36 bg-grid-pattern">
      {/* Ambient Gradient Flares */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#0D9488]/20 via-[#0D9488]/5 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#D9A441]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typography & Value Proposition */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Live Pilot Fleet Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md text-xs font-semibold tracking-wide text-teal-300 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>10 Digital Screens Live Across Hyderabad Autos</span>
            </div>

            {/* Cinematic Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] text-white leading-[1.08]">
                YOUR BRAND. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-200 to-amber-300">
                  ON THE MOVE.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal pt-2">
                Turn Hyderabad auto commutes into prime advertising real estate. Reach captive passengers during 15–25 minute trips with high-definition digital screens installed directly at eye level.
              </p>
            </div>

            {/* Clear Pricing Strips with Strike-Through Values */}
            <div className="p-4 sm:p-5 rounded-2xl glass-panel border border-white/10 max-w-xl space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Zap className="w-4 h-4 text-teal-400" />
                  <span className="font-semibold text-white">Special Launch Pricing:</span>
                </div>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-bold text-[10px]">
                  UP TO 54% OFF
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
                <div className="p-2.5 rounded-xl bg-white/[0.04]">
                  <p className="text-[10px] text-slate-400 font-medium">30+ Days (Standard)</p>
                  <p className="text-sm font-bold text-white mt-0.5">
                    <span className="line-through text-slate-500 text-xs font-normal mr-1">₹99</span>
                    ₹49 <span className="text-[10px] text-teal-300 font-normal">/day</span>
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-white/[0.04]">
                  <p className="text-[10px] text-slate-400 font-medium">10–29 Days (Custom)</p>
                  <p className="text-sm font-bold text-white mt-0.5">
                    <span className="line-through text-slate-500 text-xs font-normal mr-1">₹149</span>
                    ₹69 <span className="text-[10px] text-teal-300 font-normal">/day</span>
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-white/[0.04] col-span-2 sm:col-span-1">
                  <p className="text-[10px] text-slate-400 font-medium">1–9 Days (Flexi)</p>
                  <p className="text-sm font-bold text-white mt-0.5">
                    <span className="line-through text-slate-500 text-xs font-normal mr-1">₹199</span>
                    ₹99 <span className="text-[10px] text-teal-300 font-normal">/day</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/advertise#plan"
                className="px-7 py-4 bg-gradient-to-r from-[#0D9488] to-[#0F766E] hover:from-[#0f766e] hover:to-[#0D9488] text-white font-bold rounded-full shadow-xl shadow-teal-950/60 border border-teal-300/40 hover:border-teal-200 transition-all flex items-center justify-center gap-2.5 text-sm touch-press"
              >
                <span>Plan Your Campaign</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/network"
                className="px-7 py-4 glass-panel hover:bg-white/10 text-white font-semibold rounded-full border border-white/15 transition-all text-center text-sm touch-press"
              >
                Explore 10-Screen Network
              </Link>
            </div>

            {/* Target Corridors Pill Ticker */}
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
              <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Circulating: Madhapur • Hitec City • Gachibowli • Jubilee Hills • Secunderabad</span>
            </div>

          </div>

          {/* Right Column: High-End Hardware Device Showcase with Animated Creative */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-teal-500 to-amber-500 opacity-20 blur-xl pointer-events-none" />

              {/* Physical Screen Bezel Enclosure */}
              <div className="relative rounded-3xl bg-[#0F1C2E] border-2 border-slate-700/80 shadow-2xl p-5 overflow-hidden">
                
                {/* Header: Hardware Status & Indicator */}
                <div className="flex items-center justify-between pb-3.5 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-bold text-white tracking-wide text-[11px]">
                      IN-CABIN PASSENGER SCREEN
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-white/10 px-2.5 py-0.5 rounded-full text-teal-300 border border-white/10">
                    1080p • 16:9 • 15s LOOP
                  </span>
                </div>

                {/* The Active Display Panel */}
                <div className="relative mt-4 aspect-video rounded-2xl overflow-hidden bg-black border border-slate-700 shadow-inner group">
                  
                  {/* Subtle Screen Scanline Texture */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none z-20" />

                  {/* Rotating Campaign Content */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${currentCampaign.theme} p-5 flex flex-col justify-between text-white transition-all duration-700 z-10`}
                  >
                    {/* Top Bar of Ad */}
                    <div className="flex items-center justify-between text-[11px] font-semibold">
                      <span className="bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md text-teal-300 border border-white/10">
                        {currentCampaign.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-300 text-[10px] bg-black/30 px-2 py-0.5 rounded">
                        <RotateCw className="w-3 h-3 animate-spin text-teal-400" />
                        Next Slot in 5s
                      </span>
                    </div>

                    {/* Main Creative Text */}
                    <div className="space-y-1.5 my-auto">
                      <p className="text-xs font-black tracking-wider text-amber-300 uppercase">
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
                      <span className="font-mono text-white/90 font-bold bg-white/10 px-2 py-0.5 rounded">
                        {currentCampaign.code}
                      </span>
                      <span className="text-teal-300 font-bold tracking-wider uppercase text-[9px]">
                        Admobitics Auto Display
                      </span>
                    </div>
                  </div>

                </div>

                {/* Hardware Spec Chips under Screen */}
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px]">
                  <div className="p-2 rounded-xl bg-white/[0.04] border border-white/5">
                    <p className="text-slate-400">Position</p>
                    <p className="font-bold text-white mt-0.5">Eye-Level Partition</p>
                  </div>
                  <div className="p-2 rounded-xl bg-white/[0.04] border border-white/5">
                    <p className="text-slate-400">Audio Mode</p>
                    <p className="font-bold text-white mt-0.5">Captioned Display</p>
                  </div>
                  <div className="p-2 rounded-xl bg-white/[0.04] border border-white/5">
                    <p className="text-slate-400">Target Fleet</p>
                    <p className="font-bold text-teal-300 mt-0.5">10 Active Autos</p>
                  </div>
                </div>

                {/* Campaign switcher buttons */}
                <div className="mt-4 flex items-center justify-center gap-2 pt-2 border-t border-white/10">
                  <span className="text-[10px] text-slate-400 mr-1">Preview Ad Creative:</span>
                  {sampleCampaigns.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveAdIndex(i)}
                      aria-label={`Show sample campaign ${i + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        activeAdIndex === i ? "w-6 bg-teal-400" : "w-2 bg-slate-600 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>

              </div>

              {/* Verified Hardware Badge */}
              <div className="mt-3 flex items-center justify-center gap-2 text-center text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>Safely mounted inside passenger cabins across Hyderabad</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
