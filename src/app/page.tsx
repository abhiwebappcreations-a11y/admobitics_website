import { Hero } from "@/components/home/Hero";
import { HowItWorksSteps } from "@/components/home/HowItWorksSteps";
import { TargetCategories } from "@/components/home/TargetCategories";
import { PricingCalculator } from "@/components/home/PricingCalculator";
import { DriverPartnerCTA } from "@/components/home/DriverPartnerCTA";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Introduction Section: "Advertising That Moves With the City" */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
                Mobility Media Innovation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#13263D] tracking-tight leading-tight">
                Advertising That Moves With the City
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Admobitics is developing a mobility-based digital advertising network designed to help businesses display high-definition promotional content inside autos across Hyderabad.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Traditional roadside hoardings are viewed for only 2 to 3 seconds as traffic passes by. Inside an auto, passengers sit directly facing our digital screen for an average journey of 15 to 25 minutes — creating an uninterrupted window to communicate your brand message, showcase menu items, or announce new real estate and retail launches.
              </p>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0D9488] hover:text-[#0F766E] transition-colors"
                >
                  Learn About Our Company
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-6 rounded-2xl bg-[#F4F6F8] border border-slate-200">
                  <span className="text-2xl font-black text-[#13263D] block mb-1">
                    15–25 Min
                  </span>
                  <p className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                    Average Commute Time
                  </p>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Passengers have dedicated attention during daily commutes between residential and tech corridors.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#F4F6F8] border border-slate-200">
                  <span className="text-2xl font-black text-[#0D9488] block mb-1">
                    Eye-Level
                  </span>
                  <p className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                    Direct Screen Placement
                  </p>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Mounted securely on the partition directly facing the rear passenger seat for comfortable viewing.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#F4F6F8] border border-slate-200">
                  <span className="text-2xl font-black text-[#13263D] block mb-1">
                    ₹49 / Day
                  </span>
                  <p className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                    Affordable Entry Point
                  </p>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Standard 30-day rate allows local restaurants and retail stores to advertise without heavy agency retainers.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#F4F6F8] border border-slate-200">
                  <span className="text-2xl font-black text-[#D9A441] block mb-1">
                    Verified
                  </span>
                  <p className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                    Regulated Operations
                  </p>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Screens are deployed with vehicle owner agreements, professional wiring, and content review.
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
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#13263D] tracking-tight">
            Let's Build Something That Moves.
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Whether you are a growing local business planning your first transit campaign or an auto driver interested in recurring income, our Hyderabad team is here to assist.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/advertise#plan"
              className="px-6 py-3.5 bg-[#0D9488] hover:bg-[#0F766E] text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all touch-press"
            >
              Advertise With Us
            </Link>
            <Link
              href="/partner"
              className="px-6 py-3.5 bg-[#F4F6F8] hover:bg-slate-200 text-[#13263D] font-semibold rounded-full border border-slate-300 transition-all touch-press"
            >
              Partner With Us
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-full border border-slate-300 transition-all touch-press"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
