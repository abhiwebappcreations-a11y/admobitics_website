import React from "react";
import { MessageSquare, CalendarCheck, FileCheck, PlaySquare, ArrowRight } from "lucide-react";

export function HowItWorksSteps() {
  const steps = [
    {
      num: "01",
      icon: MessageSquare,
      title: "Share Your Objective",
      desc: "Specify your business category, target Hyderabad corridors, preferred campaign duration, and required screen count.",
    },
    {
      num: "02",
      icon: CalendarCheck,
      title: "Confirm Campaign Scope",
      desc: "We verify fleet schedule availability across our 10 screens and confirm your introductory discount rate (₹49, ₹69, or ₹99/day).",
    },
    {
      num: "03",
      icon: FileCheck,
      title: "Submit Creative for Review",
      desc: "Supply your 1080p Full HD video (10–15s) or static poster creative. Our team verifies compliance and legibility.",
    },
    {
      num: "04",
      icon: PlaySquare,
      title: "Scheduled Fleet Display",
      desc: "Following approved content and advance payment, your promotional creative is scheduled for continuous rotation across the confirmed autos.",
    },
  ];

  return (
    <section className="py-24 bg-[#0B1523] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-bold uppercase tracking-widest text-teal-300">
            <span>Simple Four-Step Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How Advertising With Us Works
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            From initial booking to scheduled playback on passenger screens — transparent, direct, and straightforward.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="glass-panel glass-panel-hover rounded-3xl p-7 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between pb-6">
                    <span className="text-4xl font-black text-white/10 group-hover:text-teal-400/30 transition-colors">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
