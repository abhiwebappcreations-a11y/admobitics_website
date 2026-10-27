import React from "react";
import { MessageSquare, CalendarCheck, FileCheck, PlaySquare } from "lucide-react";

export function HowItWorksSteps() {
  const steps = [
    {
      num: "01",
      icon: MessageSquare,
      title: "Share Your Objective",
      desc: "Specify your business category, target Hyderabad commercial zones, preferred campaign dates, and number of autos.",
    },
    {
      num: "02",
      icon: CalendarCheck,
      title: "Confirm Campaign Scope",
      desc: "We verify operational fleet availability, confirm agreed pricing (₹49 or ₹69 per auto per day), and align scheduling.",
    },
    {
      num: "03",
      icon: FileCheck,
      title: "Submit Creative for Review",
      desc: "Supply your final 1080p video (10–15s) or static poster creative. We review it for content suitability and regulatory permissions.",
    },
    {
      num: "04",
      icon: PlaySquare,
      title: "Scheduled Fleet Display",
      desc: "Following advance payment and final approval, your promotional creative is scheduled for display across the confirmed auto network.",
    },
  ];

  return (
    <section className="py-20 bg-[#F4F6F8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
            Simple Four-Step Workflow
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#13263D] tracking-tight">
            How Advertising With Us Works
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            From initial enquiry to scheduled playback on passenger screens — transparent, direct, and straightforward.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4">
                    <span className="text-3xl font-black text-slate-200">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#0D9488]/10 text-[#0D9488] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#13263D] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
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
