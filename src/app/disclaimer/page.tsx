import React from "react";
import { siteConfig } from "@/config/site";
import { AlertCircle } from "lucide-react";

export const metadata = {
  title: "Advertising Enquiry Disclaimer | Admobitics Digital Media Private Limited",
  description: "Important commercial and operational disclaimers for prospective advertising clients.",
};

export default function DisclaimerPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
            Commercial Disclosures
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#13263D] tracking-tight mt-1">
            Advertising Enquiry Disclaimer
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Applicable to all commercial discussions with Admobitics Digital Media Private Limited
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 text-xs flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold">Key Notice For Prospective Advertisers</p>
            <p className="leading-relaxed">
              Submitting an enquiry or receiving an estimate from our website does not constitute an accepted campaign order or guaranteed inventory allocation.
            </p>
          </div>
        </div>

        <section className="space-y-3 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-[#13263D]">1. Network Operational Boundaries</h2>
          <p>
            The Admobitics in-auto advertising network is currently undergoing structured pilot deployment across selected corridors in Hyderabad. Network expansion, route coverage, and active screen quantities depend on verified vehicular capacity, hardware testing, and applicable municipal authorizations.
          </p>
        </section>

        <section className="space-y-3 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-[#13263D]">2. No Guarantees of Performance or Sales</h2>
          <p>
            Admobitics strictly does not promise, warrant, or guarantee specific audience reach, impressions, customer footfalls, sales conversions, or direct return on investment. Transit media effectiveness varies according to creative quality, offer appeal, location density, and external economic conditions.
          </p>
        </section>

        <section className="space-y-3 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-[#13263D]">3. Creative Review and Acceptance</h2>
          <p>
            All advertising creatives (videos, images, text) supplied by the advertiser are subject to mandatory content evaluation. Admobitics reserves the right to decline or request modifications to any creative that violates statutory Indian advertising laws, community standards, vehicle passenger safety, or intellectual property rights.
          </p>
        </section>

        <section className="space-y-3 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-[#13263D]">4. Advance Payment Commercial Policy</h2>
          <p>
            Per current corporate policy, full advance payment and signed campaign confirmation are required prior to scheduling any creative on the fleet network. Campaign slots are allocated strictly based on confirmed operational availability at the time of agreement.
          </p>
        </section>
      </div>
    </div>
  );
}
