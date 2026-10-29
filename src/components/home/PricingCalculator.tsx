"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Calculator, ArrowRight, Check, ShieldAlert, Sparkles, Tag, Zap } from "lucide-react";

export function PricingCalculator() {
  const [autos, setAutos] = useState<number>(10);
  const [days, setDays] = useState<number>(30);

  let originalRate = siteConfig.pricing.standardOriginalRate;
  let offerRate = siteConfig.pricing.standardOfferRate;
  let planName = "Standard 30+ Days Campaign";
  let badgeText = "BEST VALUE • 50% OFF";

  if (days >= 30) {
    originalRate = siteConfig.pricing.standardOriginalRate; // 99
    offerRate = siteConfig.pricing.standardOfferRate; // 49
    planName = "Standard Plan (30+ Days)";
    badgeText = "MOST POPULAR • 50% OFF";
  } else if (days >= 10) {
    originalRate = siteConfig.pricing.customMidOriginalRate; // 149
    offerRate = siteConfig.pricing.customMidOfferRate; // 69
    planName = "Custom Plan (10–29 Days)";
    badgeText = "CUSTOM • 54% OFF";
  } else {
    originalRate = siteConfig.pricing.customShortOriginalRate; // 199
    offerRate = siteConfig.pricing.customShortOfferRate; // 99
    planName = "Flexi Plan (1–9 Days)";
    badgeText = "SHORT-TERM • 50% OFF";
  }

  const subtotal = autos * days * offerRate;
  const originalSubtotal = autos * days * originalRate;
  const savings = originalSubtotal - subtotal;
  const gst = Math.round(subtotal * siteConfig.pricing.gstRate);
  const grandTotal = subtotal + gst;

  const formatINR = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="pricing" className="py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7EFE1] border border-[#C59A4E]/30 text-xs font-bold uppercase tracking-widest text-[#A87E34]">
            <Tag className="w-3.5 h-3.5" />
            <span>Transparent Introductory Rates</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Formula-Based Campaign Pricing
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            No agency retainers or hidden markups. Clear formula-based pricing with direct savings for Hyderabad brands.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Tier 1: Standard 30+ Days */}
          <div className="card-clean rounded-3xl p-8 border-2 border-[#C59A4E] shadow-xl relative flex flex-col justify-between group bg-gradient-to-b from-white to-[#FDFBF7]">
            <div className="absolute -top-3.5 right-6 bg-[#C59A4E] text-white text-[10px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow">
              Most Popular
            </div>

            <div>
              <p className="text-xs font-bold text-[#A87E34] uppercase tracking-widest">
                Tier 1 • 30+ Days
              </p>
              <h3 className="text-2xl font-black text-[#0F172A] mt-1">Standard 30D</h3>
              <p className="text-xs text-slate-500 mt-1">Maximum brand recall across Hyderabad</p>

              <div className="mt-6 flex items-baseline gap-2.5">
                <span className="text-lg text-slate-400 line-through font-semibold">₹99</span>
                <span className="text-5xl font-black text-[#0F172A] tracking-tight">₹49</span>
                <span className="text-slate-500 text-xs font-medium">/ auto / day</span>
              </div>
              <span className="inline-block mt-1 text-[11px] font-bold text-[#A87E34] bg-[#F7EFE1] px-2.5 py-0.5 rounded-full border border-[#C59A4E]/30">
                Save ₹50/auto/day (50% Off)
              </span>

              <ul className="mt-8 space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-6">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#C59A4E] shrink-0" />
                  <span>Duration: 30 or above 30 days</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#C59A4E] shrink-0" />
                  <span>Continuous passenger-facing playback</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#C59A4E] shrink-0" />
                  <span>Full HD (1080p) 15-second loop slot</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                type="button"
                onClick={() => setDays(30)}
                className="btn-gold-solid w-full py-3 rounded-2xl text-xs uppercase tracking-wider transition-all shadow touch-press"
              >
                Select 30-Day Rate (₹49)
              </button>
            </div>
          </div>

          {/* Tier 2: Custom 10 to 29 Days */}
          <div className="card-clean rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Tier 2 • 10 to 29 Days
              </p>
              <h3 className="text-2xl font-black text-[#0F172A] mt-1">Custom Mid-Term</h3>
              <p className="text-xs text-slate-500 mt-1">For launches, festivals & sales offers</p>

              <div className="mt-6 flex items-baseline gap-2.5">
                <span className="text-lg text-slate-400 line-through font-semibold">₹149</span>
                <span className="text-5xl font-black text-[#0F172A] tracking-tight">₹69</span>
                <span className="text-slate-500 text-xs font-medium">/ auto / day</span>
              </div>
              <span className="inline-block mt-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Save ₹80/auto/day (54% Off)
              </span>

              <ul className="mt-8 space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-6">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#C59A4E] shrink-0" />
                  <span>Duration: Between 10 and 29 days</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#C59A4E] shrink-0" />
                  <span>Targeted commercial corridors</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#C59A4E] shrink-0" />
                  <span>Full HD (1080p) creative display</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                type="button"
                onClick={() => setDays(15)}
                className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-[#0F172A] font-bold rounded-2xl text-xs transition-all border border-slate-200 touch-press"
              >
                Select Mid-Term (₹69)
              </button>
            </div>
          </div>

          {/* Tier 3: Flexi 1 to 9 Days */}
          <div className="card-clean rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Tier 3 • 1 to 9 Days
              </p>
              <h3 className="text-2xl font-black text-[#0F172A] mt-1">Short-Term Flexi</h3>
              <p className="text-xs text-slate-500 mt-1">Weekend blasts, store launches, movies</p>

              <div className="mt-6 flex items-baseline gap-2.5">
                <span className="text-lg text-slate-400 line-through font-semibold">₹199</span>
                <span className="text-5xl font-black text-[#0F172A] tracking-tight">₹99</span>
                <span className="text-slate-500 text-xs font-medium">/ auto / day</span>
              </div>
              <span className="inline-block mt-1 text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                Save ₹100/auto/day (50% Off)
              </span>

              <ul className="mt-8 space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-6">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#C59A4E] shrink-0" />
                  <span>Flexible duration from 1 up to 9 days</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#C59A4E] shrink-0" />
                  <span>High-frequency weekend displays</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#C59A4E] shrink-0" />
                  <span>Rapid 24-hour scheduling</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                type="button"
                onClick={() => setDays(5)}
                className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-[#0F172A] font-bold rounded-2xl text-xs transition-all border border-slate-200 touch-press"
              >
                Select Flexi (₹99)
              </button>
            </div>
          </div>

        </div>

        {/* Live Interactive Budget Calculator Panel */}
        <div className="mt-16 max-w-4xl mx-auto rounded-3xl bg-[#FAFAF9] border border-slate-200/90 p-8 sm:p-12 shadow-lg relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-8 border-b border-slate-200 gap-4">
            <div>
              <span className="text-xs font-bold text-[#A87E34] uppercase tracking-wider block">
                {badgeText}
              </span>
              <h3 className="text-2xl font-black text-[#0F172A] mt-1">
                Interactive Campaign Estimate Calculator
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Adjust the sliders to view your live calculation and direct savings.
              </p>
            </div>

            <div className="px-4 py-2 rounded-2xl bg-white border border-slate-200 text-right shadow-sm">
              <span className="text-[10px] text-slate-400 block line-through">₹{originalRate}/auto/day</span>
              <span className="text-xs font-bold text-[#0F172A]">
                Active Rate: <span className="text-[#A87E34] text-sm">₹{offerRate}</span> / auto / day
              </span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Sliders Area */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Autos Slider */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-sm font-semibold text-[#0F172A]">
                  <span>Number of Autos</span>
                  <span className="text-base font-extrabold text-[#A87E34] px-3 py-0.5 rounded-full bg-[#F7EFE1] border border-[#C59A4E]/30">
                    {autos} Autos
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={autos}
                  onChange={(e) => setAutos(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#C59A4E]"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>1 Auto</span>
                  <span>10 Autos (Initial Fleet)</span>
                  <span>25 Autos</span>
                  <span>50 Autos</span>
                </div>
              </div>

              {/* Days Slider */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-sm font-semibold text-[#0F172A]">
                  <span>Campaign Duration</span>
                  <span className="text-base font-extrabold text-[#A87E34] px-3 py-0.5 rounded-full bg-[#F7EFE1] border border-[#C59A4E]/30">
                    {days} {days === 1 ? "Day" : "Days"}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="60"
                  step="1"
                  value={days}
                  onChange={(e) => setDays(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#C59A4E]"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>1 Day (₹99)</span>
                  <span>10 Days (₹69)</span>
                  <span>30 Days (₹49)</span>
                  <span>60 Days</span>
                </div>
              </div>

              {/* Tier indicator pill */}
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-700 flex items-center justify-between shadow-sm">
                <span>Active Tier: <strong className="text-[#0F172A]">{planName}</strong></span>
                <span className="text-[#A87E34] font-bold">₹{offerRate} / auto / day</span>
              </div>

            </div>

            {/* Live Calculation Output Card */}
            <div className="lg:col-span-5 rounded-2xl bg-white p-7 border border-slate-200 shadow-md space-y-4">
              <p className="text-xs uppercase font-extrabold text-slate-500 tracking-wider">
                Live Campaign Breakdown
              </p>

              <div className="space-y-2 text-xs border-b border-slate-100 pb-4">
                <div className="flex justify-between text-slate-400">
                  <span>Standard Regular Value</span>
                  <span className="line-through">{formatINR(originalSubtotal)}</span>
                </div>
                <div className="flex justify-between text-emerald-700 font-bold">
                  <span>Launch Discount Savings</span>
                  <span>- {formatINR(savings)}</span>
                </div>
                <div className="flex justify-between text-slate-700 pt-1">
                  <span>Base ({autos} autos × {days}d × ₹{offerRate})</span>
                  <span className="font-semibold text-[#0F172A]">{formatINR(subtotal)}</span>
                </div>
                <div className="flex justify-between text-slate-500 text-[11px]">
                  <span>Applicable 18% GST</span>
                  <span>{formatINR(gst)}</span>
                </div>
              </div>

              <div>
                <span className="text-[11px] text-slate-500 block">Total Estimated Payable</span>
                <span className="text-3xl font-black text-[#0F172A] tracking-tight">
                  {formatINR(grandTotal)}
                </span>
              </div>

              <Link
                href={`/advertise?autos=${autos}&days=${days}#plan`}
                className="btn-gold-solid w-full py-3.5 rounded-xl text-center flex items-center justify-center gap-2 text-xs tracking-wider uppercase touch-press"
              >
                <span>Book This Scope</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          <div className="mt-8 pt-4 border-t border-slate-200 text-[11px] text-slate-500 flex items-start gap-2">
            <ShieldAlert className="w-4 h-4 text-[#C59A4E] shrink-0 mt-0.5" />
            <p>
              *Pricing based on active screen network availability across Hyderabad. Advance payment required under commercial policy. Full GST tax invoice provided for all corporate and business campaigns.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
