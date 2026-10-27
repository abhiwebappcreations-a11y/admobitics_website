import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, HeartHandshake } from "lucide-react";

export function DriverPartnerCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#13263D] via-[#162C46] to-[#0b1726] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 p-8 sm:p-12 lg:p-16 bg-white/5 backdrop-blur-sm relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-teal-300 font-semibold">
                <HeartHandshake className="w-4 h-4 text-[#0D9488]" />
                Auto Driver & Vehicle Owner Network
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Become Part of a New Advertising Network in Hyderabad
              </h2>

              <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                We invite eligible auto drivers and vehicle owners operating in Hyderabad to enquire about partnering with Admobitics. Earn recurring monthly compensation while passenger screens are installed safely inside your vehicle.
              </p>

              {/* Driver Partnership Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-slate-200">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-bold text-white text-sm mb-1">Guaranteed Payout</p>
                  <p className="text-slate-400">Regular monthly compensation per agreed written terms.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-bold text-white text-sm mb-1">Zero Hardware Cost</p>
                  <p className="text-slate-400">Screens supplied & installed safely by Admobitics technicians.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-bold text-white text-sm mb-1">Clear Written Contract</p>
                  <p className="text-slate-400">Transparent guidelines with owner consent and safety protocol.</p>
                </div>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/partner"
                  className="px-6 py-3.5 bg-[#0D9488] hover:bg-[#0F766E] text-white font-semibold rounded-full shadow-lg shadow-teal-950/40 transition-all text-center flex items-center justify-center gap-2 touch-press"
                >
                  Register Your Interest as a Driver
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-full border border-white/20 transition-all text-center touch-press"
                >
                  Ask a Question
                </Link>
              </div>

              <p className="text-[11px] text-slate-400">
                *Participation is subject to vehicle assessment, registered owner consent, route verification, and operational availability. Submission of an enquiry does not constitute an automatic agreement.
              </p>
            </div>

            {/* Right Mini Graphic */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#0D9488]/20 border border-[#0D9488]/40 flex items-center justify-center text-[#0D9488]">
                  <Shield className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-white text-base">Safety First</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Screen mountings are non-intrusive, vibration-damped, and installed securely behind the driver cabin without obstructing visibility.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
