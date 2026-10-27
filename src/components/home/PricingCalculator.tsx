"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Calculator, ArrowRight, Check, ShieldAlert, Sparkles, Tag } from "lucide-react";

export function PricingCalculator() {
  const [autos, setAutos] = useState<number>(10);
  const [days, setDays] = useState<number>(30);

  // Pricing Logic matching Client's exact rules:
  // 1. Standard (>= 30 days): Original ₹99, Offer ₹49
  // 2. Custom Mid (10 to 29 days): Original ₹149, Offer ₹69
  // 3. Custom Short (1 to 9 days): Original ₹199, Offer ₹99
  let originalRate = siteConfig.pricing.standardOriginalRate;
  let offerRate = siteConfig.pricing.standardOfferRate;
  let planName = "Standard 30+ Days Campaign";
  let badgeText = "BEST VALUE (50% OFF)";

  if (days >= 30) {
    originalRate = siteConfig.pricing.standardOriginalRate; // 99
    offerRate = siteConfig.pricing.standardOfferRate; // 49
    planName = "Standard Plan (30+ Days)";
    badgeText = "POPULAR • 50% OFF";
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
    <section id="pricing" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold">
            <Tag className="w-3.5 h-3.5 text-[#0D9488]" />
            Transparent Introductory Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#13263D] tracking-tight">
            Transparent, Formula-Based Campaign Pricing
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Special launch pricing for Hyderabad businesses. Choose a tier based on your campaign duration with clear struck-through savings.
          </p>
        </div>

        {/* 3 Pricing Cards Comparison */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Card 1: Standard 30+ Days */}
          <div className="rounded-2xl p-6 sm:p-7 bg-[#13263D] text-white border-2 border-[#0D9488] shadow-xl relative flex flex-col justify-between">
            <div className="absolute -top-3 right-4 bg-[#0D9488] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow">
              Most Popular
            </div>
            <div>
              <p className="text-xs font-bold text-teal-300 uppercase tracking-widest">
                Tier 1 • 30+ Days
              </p>
              <h3 className="text-xl font-bold mt-1">Standard Campaign</h3>
              <p className="text-xs text-slate-300 mt-1">Minimum 30 days continuous display</p>

              <div className="mt-5 flex items-baseline gap-2.5">
                <span className="text-lg text-slate-400 line-through font-semibold">₹99</span>
                <span className="text-4xl sm:text-5xl font-black text-white">₹49</span>
                <span className="text-slate-300 text-xs">/ auto / day</span>
              </div>
              <span className="inline-block mt-1 text-[11px] font-semibold text-teal-300 bg-white/10 px-2 py-0.5 rounded">
                Save ₹50/auto/day (50% Off)
              </span>

              <ul className="mt-6 space-y-2 text-xs text-slate-200 border-t border-white/10 pt-5">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D9488] shrink-0" />
                  <span>Duration: 30 or above 30 days</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D9488] shrink-0" />
                  <span>Maximum brand recall across fleet</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D9488] shrink-0" />
                  <span>Full HD (1080p) 15-second loop slot</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <button
                type="button"
                onClick={() => setDays(30)}
                className="w-full py-2.5 bg-[#0D9488] hover:bg-[#0F766E] text-white font-semibold rounded-xl text-xs transition-all"
              >
                Select 30-Day Rate
              </button>
            </div>
          </div>

          {/* Card 2: Custom 10 to 29 Days */}
          <div className="rounded-2xl p-6 sm:p-7 bg-[#F4F6F8] text-[#13263D] border border-slate-300 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Tier 2 • 10 to 29 Days
              </p>
              <h3 className="text-xl font-bold mt-1 text-[#13263D]">Custom Mid-Term</h3>
              <p className="text-xs text-slate-600 mt-1">For launches & mid-duration offers</p>

              <div className="mt-5 flex items-baseline gap-2.5">
                <span className="text-lg text-slate-400 line-through font-semibold">₹149</span>
                <span className="text-4xl sm:text-5xl font-black text-[#13263D]">₹69</span>
                <span className="text-slate-500 text-xs">/ auto / day</span>
              </div>
              <span className="inline-block mt-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                Save ₹80/auto/day (54% Off)
              </span>

              <ul className="mt-6 space-y-2 text-xs text-slate-700 border-t border-slate-200 pt-5">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D9488] shrink-0" />
                  <span>Duration: Between 10 and 29 days</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D9488] shrink-0" />
                  <span>Great for targeted promotions & sales</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D9488] shrink-0" />
                  <span>Full HD (1080p) creative display</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <button
                type="button"
                onClick={() => setDays(15)}
                className="w-full py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded-xl text-xs transition-all"
              >
                Select Mid-Term Rate
              </button>
            </div>
          </div>

          {/* Card 3: Flexi 1 to 9 Days */}
          <div className="rounded-2xl p-6 sm:p-7 bg-[#F4F6F8] text-[#13263D] border border-slate-300 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Tier 3 • 1 to 9 Days
              </p>
              <h3 className="text-xl font-bold mt-1 text-[#13263D]">Short-Term Flexi</h3>
              <p className="text-xs text-slate-600 mt-1">Events, movie releases & 1-day blasts</p>

              <div className="mt-5 flex items-baseline gap-2.5">
                <span className="text-lg text-slate-400 line-through font-semibold">₹199</span>
                <span className="text-4xl sm:text-5xl font-black text-[#13263D]">₹99</span>
                <span className="text-slate-500 text-xs">/ auto / day</span>
              </div>
              <span className="inline-block mt-1 text-[11px] font-semibold text-teal-800 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded">
                Save ₹100/auto/day (50% Off)
              </span>

              <ul className="mt-6 space-y-2 text-xs text-slate-700 border-t border-slate-200 pt-5">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D9488] shrink-0" />
                  <span>Flexible duration from 1 day up to 9 days</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D9488] shrink-0" />
                  <span>Weekend events, store openings, concerts</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D9488] shrink-0" />
                  <span>Rapid 24h creative scheduling</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <button
                type="button"
                onClick={() => setDays(5)}
                className="w-full py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded-xl text-xs transition-all"
              >
                Select Flexi Rate
              </button>
            </div>
          </div>

        </div>

        {/* Interactive Live Budget Calculator Box */}
        <div className="mt-14 max-w-4xl mx-auto rounded-3xl bg-[#F4F6F8] border border-slate-200/90 p-6 sm:p-10 shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-slate-200 gap-4">
            <div>
              <span className="text-[11px] font-bold text-[#0D9488] uppercase tracking-wider block">
                {badgeText}
              </span>
              <h3 className="text-xl font-bold text-[#13263D]">
                Interactive Campaign Estimate Calculator
              </h3>
              <p className="text-xs text-slate-600">
                Adjust the sliders to see your live rate calculation and savings.
              </p>
            </div>
            <div className="px-3.5 py-2 rounded-2xl bg-white border border-slate-200 shadow-sm text-right">
              <span className="text-[10px] text-slate-400 block line-through">₹{originalRate}/auto/day</span>
              <span className="text-xs font-bold text-[#13263D]">
                Offer Rate: <span className="text-[#0D9488] text-sm">₹{offerRate}</span> / auto / day
              </span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sliders Area */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Autos Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold text-[#13263D]">
                  <span>Number of Autos</span>
                  <span className="text-base font-bold text-[#0D9488] px-2.5 py-0.5 rounded bg-teal-50 border border-teal-200">
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
                  className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-[#0D9488]"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>1 Auto</span>
                  <span>10 Autos (Initial Fleet)</span>
                  <span>25 Autos</span>
                  <span>50 Autos</span>
                </div>
              </div>

              {/* Days Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold text-[#13263D]">
                  <span>Campaign Duration</span>
                  <span className="text-base font-bold text-[#0D9488] px-2.5 py-0.5 rounded bg-teal-50 border border-teal-200">
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
                  className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-[#0D9488]"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>1 Day (₹99)</span>
                  <span>10 Days (₹69)</span>
                  <span>30 Days (₹49 Standard)</span>
                  <span>60 Days</span>
                </div>
              </div>

              {/* Tier indicator pill */}
              <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
                <span>Active Tier: <strong>{planName}</strong></span>
                <span className="text-[#0D9488] font-bold">₹{offerRate} / auto / day</span>
              </div>

            </div>

            {/* Live Calculation Output Card */}
            <div className="lg:col-span-5 rounded-2xl bg-white p-6 border border-slate-200 shadow-md space-y-4">
              <p className="text-xs uppercase font-bold text-slate-500 tracking-wider">
                Campaign Estimate Summary
              </p>

              <div className="space-y-2 text-xs border-b border-slate-100 pb-4">
                <div className="flex justify-between text-slate-400">
                  <span>Regular Standard Value</span>
                  <span className="line-through">{formatINR(originalSubtotal)}</span>
                </div>
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>Direct Savings</span>
                  <span>- {formatINR(savings)}</span>
                </div>
                <div className="flex justify-between text-slate-700 pt-1">
                  <span>Base Rate ({autos} × {days}d × ₹{offerRate})</span>
                  <span className="font-semibold text-slate-900">{formatINR(subtotal)}</span>
                </div>
                <div className="flex justify-between text-slate-600 text-[11px]">
                  <span>Applicable 18% GST</span>
                  <span>{formatINR(gst)}</span>
                </div>
              </div>

              <div>
                <span className="text-[11px] text-slate-500 block">Total Estimated Payable</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#13263D]">
                  {formatINR(grandTotal)}
                </span>
              </div>

              <Link
                href={`/advertise?autos=${autos}&days=${days}#plan`}
                className="w-full py-3 bg-[#0D9488] hover:bg-[#0F766E] text-white font-semibold rounded-xl text-center flex items-center justify-center gap-2 shadow-sm touch-press text-sm"
              >
                Book This Scope
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          <div className="mt-8 pt-4 border-t border-slate-200 text-[11px] text-slate-500 flex items-start gap-2">
            <ShieldAlert className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <p>
              *Pricing based on active screen network availability across Hyderabad. Advance payment required under commercial policy. Full GST tax invoice provided for all corporate and business campaigns.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
