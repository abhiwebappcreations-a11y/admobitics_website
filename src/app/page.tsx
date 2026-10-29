import { Hero } from "@/components/home/Hero";
import { HowItWorksSteps } from "@/components/home/HowItWorksSteps";
import { TargetCategories } from "@/components/home/TargetCategories";
import { PricingCalculator } from "@/components/home/PricingCalculator";
import { DriverPartnerCTA } from "@/components/home/DriverPartnerCTA";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle, Sparkles, MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B1523]">
      {/* 1. Cinematic Hero Section with Hardware Mockup */}
      <Hero />

      {/* 2. Introduction Section: "Advertising That Moves With the City" */}
      <section className="py-24 bg-[#0F1C2E] border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-bold uppercase tracking-widest text-teal-300">
                <span>Captive Transit Attention</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Advertising That Moves With the City
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Admobitics is building Hyderabad’s premier mobility digital advertising network. By installing high-definition screens inside commercial autos facing passengers directly, we create an uninterrupted window for your brand during daily commutes.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Traditional roadside hoardings are viewed for only 2 to 3 seconds as traffic zooms past. In an auto, passengers sit directly in front of your digital screen for 15 to 25 minutes — giving you dedicated, eye-level engagement without screen glare or clutter.
              </p>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-teal-400 hover:text-teal-300 transition-colors"
                >
                  <span>Meet Our Leadership & Vision</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-6 rounded-3xl glass-panel glass-panel-hover">
                  <span className="text-3xl font-black text-white block mb-1">
                    15–25 Min
                  </span>
                  <p className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                    Average Ride Duration
                  </p>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Uninterrupted passenger focus while commuting through busy Hyderabad corridors.
                  </p>
                </div>

                <div className="p-6 rounded-3xl glass-panel glass-panel-hover">
                  <span className="text-3xl font-black text-teal-400 block mb-1">
                    Eye-Level
                  </span>
                  <p className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                    Partition Screen Position
                  </p>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Mounted directly on the partition facing rear passengers for natural viewing.
                  </p>
                </div>

                <div className="p-6 rounded-3xl glass-panel glass-panel-hover">
                  <span className="text-3xl font-black text-amber-300 block mb-1">
                    ₹49 / Day
                  </span>
                  <p className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                    Affordable Entry Point
                  </p>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Standard 30-day rate allows local restaurants and retail stores to advertise with ease.
                  </p>
                </div>

                <div className="p-6 rounded-3xl glass-panel glass-panel-hover">
                  <span className="text-3xl font-black text-white block mb-1">
                    10 Screens
                  </span>
                  <p className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                    Active Pilot Fleet
                  </p>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Circulating continuously across Madhapur, Hitec City, Gachibowli, and Jubilee Hills.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Four-Step Workflow */}
      <HowItWorksSteps />

      {/* 4. Target Categories */}
      <TargetCategories />

      {/* 5. Pricing & Interactive Budget Calculator */}
      <PricingCalculator />

      {/* 6. Driver Partner CTA */}
      <DriverPartnerCTA />

      {/* 7. Final Action Callout */}
      <section className="py-24 bg-[#0B1523] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something That Moves.
          </h2>
          <p className="text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Whether you are a growing business planning your first transit campaign or an auto driver interested in recurring income, our Hyderabad team is here to assist.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/advertise#plan"
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-500 text-white font-bold rounded-full shadow-xl shadow-teal-950/60 transition-all text-xs tracking-wider uppercase touch-press"
            >
              Advertise With Us
            </Link>
            <Link
              href="/partner"
              className="px-8 py-4 glass-panel hover:bg-white/10 text-white font-semibold rounded-full border border-white/15 transition-all text-xs tracking-wider uppercase touch-press"
            >
              Partner With Us
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-semibold rounded-full border border-white/10 transition-all text-xs tracking-wider uppercase touch-press"
            >
              Contact Founders
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
