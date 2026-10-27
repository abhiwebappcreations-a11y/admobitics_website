import React from "react";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Privacy Policy | Admobitics Digital Media Private Limited",
  description: "Privacy policy and data collection disclosures for Admobitics website visitors.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
            Legal Disclosures
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#13263D] tracking-tight mt-1">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last Updated: October 2026 • Governing Law: Republic of India
          </p>
        </div>

        <section className="space-y-3 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-[#13263D]">1. Introduction</h2>
          <p>
            Admobitics Digital Media Private Limited ("Admobitics", "we", "us", or "our") respects your privacy. This Privacy Policy outlines our procedures concerning the collection, storage, use, and protection of information submitted through our website.
          </p>
        </section>

        <section className="space-y-3 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-[#13263D]">2. Information We Collect</h2>
          <p>
            We collect information when you willingly submit an enquiry form, apply as a driver partner, or communicate with us directly:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
            <li><strong>Advertiser Enquiries:</strong> Business name, contact person, phone number, email address, campaign objectives, preferred dates, and budget parameters.</li>
            <li><strong>Driver Partner Applications:</strong> Full name, contact telephone, vehicle registration number, operating areas, and vehicle ownership status. We do not collect government identity cards (e.g. Aadhaar) through this public form.</li>
            <li><strong>Technical Analytics:</strong> Non-personally identifiable server telemetry, page views, and referrer sources to improve site usability.</li>
          </ul>
        </section>

        <section className="space-y-3 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-[#13263D]">3. Purpose of Processing</h2>
          <p>
            The collected information is utilized solely to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
            <li>Evaluate and respond to commercial campaign requests and provide written quotations.</li>
            <li>Screen driver partner eligibility and coordinate physical vehicle inspections.</li>
            <li>Maintain customer relationship records and comply with applicable statutory Indian tax laws.</li>
          </ul>
          <p className="text-xs text-slate-600">
            We do not sell, rent, or trade your personal or business data to third-party telemarketing or data brokerage agencies.
          </p>
        </section>

        <section className="space-y-3 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-[#13263D]">4. Data Retention & Security</h2>
          <p>
            We implement administrative, technical, and physical safeguards designed to protect submitted information against unauthorized access, destruction, or disclosure. Commercial enquiry data is retained for the duration of the commercial relationship or as mandated by statutory compliance requirements in India.
          </p>
        </section>

        <section className="space-y-3 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-[#13263D]">5. Contact Us Regarding Your Data</h2>
          <p>
            For any questions, data modification requests, or privacy concerns, please contact our data officer at:
          </p>
          <div className="p-4 rounded-xl bg-[#F4F6F8] border border-slate-200 text-xs space-y-1">
            <p><strong>Entity:</strong> {siteConfig.name}</p>
            <p><strong>Email:</strong> {siteConfig.contact.email}</p>
            <p><strong>Operating Region:</strong> Hyderabad, Telangana, India</p>
          </div>
        </section>
      </div>
    </div>
  );
}
