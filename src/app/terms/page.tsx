import React from "react";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Terms of Use | Admobitics Digital Media Private Limited",
  description: "Terms and conditions governing the use of the Admobitics corporate website.",
};

export default function TermsPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
            Legal Conditions
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#13263D] tracking-tight mt-1">
            Terms of Website Use
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last Updated: October 2026 • Governing Law: Hyderabad, Telangana, India
          </p>
        </div>

        <section className="space-y-3 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-[#13263D]">1. Nature of the Website</h2>
          <p>
            This website is owned and operated by Admobitics Digital Media Private Limited. It is intended to provide general commercial information about our in-auto digital advertising network in Hyderabad and facilitate business enquiries.
          </p>
        </section>

        <section className="space-y-3 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-[#13263D]">2. Distinction Between Enquiry, Quotation & Agreement</h2>
          <p>
            Submission of any form on this website (including advertiser enquiries, driver applications, or agency messages) constitutes an expression of commercial interest only.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
            <li>An enquiry does <strong>not</strong> establish a binding advertising contract or guarantee screen placement.</li>
            <li>A written quotation does not secure fleet availability until formal written acceptance and required advance payment are completed.</li>
            <li>All advertising campaigns and driver partnerships require an executed written agreement executed under mutually agreed terms.</li>
          </ul>
        </section>

        <section className="space-y-3 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-[#13263D]">3. Content & Performance Disclaimers</h2>
          <p>
            We make reasonable efforts to maintain accurate representations of our service concepts. However, we explicitly do not guarantee specific audience impressions, footfalls, customer conversions, or commercial revenue from any campaign. Digital displays are subject to vehicular transit variables, traffic patterns, and scheduled fleet maintenance.
          </p>
        </section>

        <section className="space-y-3 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-[#13263D]">4. Intellectual Property</h2>
          <p>
            All brand elements, typography, copy, layout graphics, and schematic concepts displayed on this website are the intellectual property of Admobitics Digital Media Private Limited and may not be copied, reproduced, or republished without prior written authorization.
          </p>
        </section>
      </div>
    </div>
  );
}
