import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, HeartHandshake, Sparkles } from "lucide-react";

export function DriverPartnerCTA() {
  return (
    <section className="py-24 bg-[#0F1C2E] text-white border-b border-white/10 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal-500/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 p-8 sm:p-14 lg:p-16 glass-panel relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs text-teal-300 font-bold uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4 text-teal-400" />
                <span>Auto Driver & Vehicle Owner Network</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Become Part of a New Advertising Network in Hyderabad
              </h2>

              <p className="text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
                We invite eligible auto drivers and vehicle owners operating in Hyderabad to enquire about partnering with Admobitics. Earn recurring monthly compensation while passenger screens are installed safely inside your vehicle.
              </p>

              {/* Driver Partnership Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-slate-200">
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                  <p className="font-bold text-white text-sm mb-1">Guaranteed Payout</p>
                  <p className="text-slate-400">Regular monthly compensation per agreed written terms.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                  <p className="font-bold text-white text-sm mb-1">Zero Hardware Cost</p>
                  <p className="text-slate-400">Screens supplied & installed safely by Admobitics technicians.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                  <p className="font-bold text-white text-sm mb-1">Clear Written Contract</p>
                  <p className="text-slate-400">Transparent guidelines with owner consent and safety protocol.</p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/partner"
                  className="px-7 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-500 text-white font-bold rounded-full shadow-xl shadow-teal-950/60 transition-all text-center flex items-center justify-center gap-2 text-xs tracking-wider uppercase touch-press"
                >
                  <span>Register Interest as a Driver</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="px-7 py-4 glass-panel hover:bg-white/10 text-white font-semibold rounded-full border border-white/15 transition-all text-center text-xs tracking-wider uppercase touch-press"
                >
                  Contact Our Team
                </Link>
              </div>

              <p className="text-[11px] text-slate-400">
                *Participation is subject to vehicle assessment, registered owner consent, route verification, and operational availability.
              </p>
            </div>

            {/* Right Mini Graphic */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="p-8 rounded-3xl bg-[#0B1523]/80 border border-white/10 text-center space-y-4 shadow-xl">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                  <Shield className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-white text-base">Safety First Protocol</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Screen mountings are non-intrusive, vibration-damped, and installed securely behind the driver cabin without obstructing rear-view mirrors or passenger headroom.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
