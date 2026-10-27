import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Eye, MapPin, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#13263D] via-[#162C46] to-[#13263D] text-white pt-12 pb-20 lg:pt-20 lg:pb-32 border-b border-white/10">
      {/* Background geometric accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0D9488] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#D9A441] rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Call-to-Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wide text-teal-300">
              <span className="w-2 h-2 rounded-full bg-[#0D9488] animate-pulse" />
              Pilot Network Deployment • Hyderabad
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              YOUR BRAND. <br />
              <span className="text-[#0D9488]">ON THE MOVE.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Introducing a direct way for businesses to connect with daily passengers through passenger-facing digital advertising screens installed inside autos across Hyderabad.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>₹49 / auto / day (30-day standard)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>100% Passenger-facing position</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>Full HD (1080p) creative display</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>High-traffic Hyderabad commercial routes</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/advertise#plan"
                className="px-6 py-3.5 bg-[#0D9488] hover:bg-[#0F766E] text-white font-semibold rounded-full shadow-lg shadow-teal-900/30 hover:shadow-teal-900/50 transition-all flex items-center justify-center gap-2 touch-press"
              >
                Plan Your Campaign
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/network"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-full border border-white/20 transition-all text-center touch-press"
              >
                Explore Our Network
              </Link>
            </div>

            <p className="text-xs text-slate-400 pt-1">
              *Campaigns scheduled subject to operational vehicle availability and content compliance review.
            </p>
          </div>

          {/* Right Column: Illustrative In-Auto Digital Screen Schematic */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 p-6 backdrop-blur-md shadow-2xl">
              
              {/* Badge indicating illustrative hardware schematic */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs text-slate-300">
                <span className="font-semibold text-white flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-[#0D9488]" />
                  In-Auto Screen Concept
                </span>
                <span className="text-[11px] bg-white/10 px-2 py-0.5 rounded text-slate-300">
                  Illustrative Mockup
                </span>
              </div>

              {/* Vehicle Interior Graphic Shell */}
              <div className="mt-4 p-4 rounded-xl bg-[#0b1726] border border-white/10 relative">
                
                {/* Auto Rickshaw Silhouette Header */}
                <div className="flex items-center justify-between text-xs text-slate-400 pb-3">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Auto Cabin • Passenger Perspective
                  </span>
                  <span>Hyderabad Fleet</span>
                </div>

                {/* The Passenger-Facing Digital Screen */}
                <div className="relative aspect-video rounded-lg overflow-hidden bg-black border-2 border-slate-700 shadow-inner flex flex-col justify-between p-4 group">
                  {/* Subtle Screen Glare effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

                  {/* Top Ad Header */}
                  <div className="flex items-center justify-between text-[11px] text-white/80 z-10">
                    <span className="bg-[#0D9488]/80 px-2 py-0.5 rounded text-white font-medium text-[10px]">
                      SPONSORED
                    </span>
                    <span className="text-slate-400 text-[10px]">1080p • 15s Slot</span>
                  </div>

                  {/* Center Creative Showcase */}
                  <div className="text-center py-4 z-10 space-y-1">
                    <p className="text-xs uppercase tracking-widest text-[#D9A441] font-bold">
                      Your Business Name
                    </p>
                    <p className="text-base sm:text-lg font-bold text-white leading-tight">
                      Special Launch Offer or Brand Story
                    </p>
                    <p className="text-[11px] text-slate-300">
                      High visibility to commuters during 15–25 minute trips
                    </p>
                  </div>

                  {/* Bottom Ad Footer */}
                  <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-white/10 pt-2 z-10">
                    <span>Targeting: Hitec City • Madhapur</span>
                    <span className="text-teal-400 font-semibold">Admobitics Network</span>
                  </div>
                </div>

                {/* Hardware Spec Labels */}
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px]">
                  <div className="p-2 rounded bg-white/5 border border-white/5">
                    <p className="text-slate-400 text-[10px]">Display</p>
                    <p className="font-semibold text-white">16:9 Landscape</p>
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/5">
                    <p className="text-slate-400 text-[10px]">Position</p>
                    <p className="font-semibold text-white">Eye-Level Partition</p>
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/5">
                    <p className="text-slate-400 text-[10px]">Audience</p>
                    <p className="font-semibold text-white">Rear Passengers</p>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 text-center mt-3">
                Mounted safely on vehicle partition with secure wiring and passenger-safe housing.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
