import React from "react";
import Link from "next/link";
import {
  FileText,
  PhoneCall,
  FileCheck2,
  UploadCloud,
  ShieldCheck,
  CreditCard,
  PlaySquare,
  LifeBuoy,
  ArrowRight,
  AlertCircle,
} from "lucide-react";

export const metadata = {
  title: "How It Works | Admobitics Digital Media Private Limited",
  description:
    "An 8-stage breakdown of how in-auto digital advertising campaigns are planned, reviewed, approved, and executed with Admobitics.",
};

export default function HowItWorksPage() {
  const steps = [
    {
      step: "Step 01",
      title: "Share Your Requirements",
      desc: "Submit your business details, marketing objective, target corridors in Hyderabad, planned campaign dates, and requested fleet size via our online enquiry form or WhatsApp.",
      icon: FileText,
    },
    {
      step: "Step 02",
      title: "Discuss the Campaign",
      desc: "Our commercial operations team evaluates live vehicle availability across your requested routes and discusses appropriate campaign tiers (Standard 30-day or custom short-term).",
      icon: PhoneCall,
    },
    {
      step: "Step 03",
      title: "Confirm the Campaign Scope",
      desc: "Both parties agree on exact pricing, schedule dates, vehicle allocation, technical specifications, and written campaign terms.",
      icon: FileCheck2,
    },
    {
      step: "Step 04",
      title: "Submit Final Creative",
      desc: "The advertiser provides the finished 1080p Full HD video (10 to 15 seconds) or high-resolution graphic asset formatted in 16:9 Landscape.",
      icon: UploadCloud,
    },
    {
      step: "Step 05",
      title: "Review & Content Approval",
      desc: "Admobitics verifies the asset for technical display standards, visual legibility, safety guidelines, and advertising regulatory compliance.",
      icon: ShieldCheck,
    },
    {
      step: "Step 06",
      title: "Advance Payment & Scheduling",
      desc: "Following approved content and satisfaction of advance payment terms per current commercial policy, the creative is scheduled into the network playback queue.",
      icon: CreditCard,
    },
    {
      step: "Step 07",
      title: "Campaign Execution",
      desc: "The approved creative rotates consistently across the designated auto fleet throughout passenger commutes during operational daily hours.",
      icon: PlaySquare,
    },
    {
      step: "Step 08",
      title: "Campaign Support",
      desc: "Our team remains available throughout the campaign duration to address any technical questions, fleet adjustments, or verified operational interruptions.",
      icon: LifeBuoy,
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#13263D] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
            Campaign Lifecycle
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            How It Works
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A clear, dependable process from your initial inquiry to scheduled playback on passenger-facing digital screens.
          </p>
        </div>
      </section>

      {/* 8-Step Timeline Section */}
      <section className="py-20 bg-[#F4F6F8] border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-6">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start gap-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#0D9488]/10 text-[#0D9488] shrink-0 flex items-center justify-center font-bold">
                    <Icon className="w-7 h-7" />
                  </div>

                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold text-[#0D9488] uppercase tracking-widest">
                        {item.step}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        Phase {index + 1} of 8
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#13263D]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Operational Boundaries Disclosure Callout */}
          <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-300 text-xs text-slate-600 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
              <AlertCircle className="w-4 h-4 text-[#D9A441]" />
              <span>Operational Clarity & Reporting Disclosure</span>
            </div>
            <p className="leading-relaxed">
              Admobitics believes in straightforward commercial transparency. We do not provide automated proof-of-play dashboards, live GPS telemetry, or speculative impression estimates unless specifically verified and confirmed in writing. Our execution is focused on consistent hardware operation, verified vehicle fleet maintenance, and confirmed ad slot rotation.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/advertise#plan"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0D9488] hover:bg-[#0F766E] text-white font-bold rounded-full shadow-lg transition-all text-sm touch-press"
            >
              Start Step 1: Share Your Campaign Goals
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
