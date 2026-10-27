import React from "react";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Cookie Notice | Admobitics Digital Media Private Limited",
  description: "Information regarding cookie usage and analytics on the Admobitics website.",
};

export default function CookiesPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
            Transparency
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#13263D] tracking-tight mt-1">
            Cookie & Analytics Notice
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last Updated: October 2026
          </p>
        </div>

        <section className="space-y-3 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-[#13263D]">1. What are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device by your browser to assist with basic website functionality, navigation security, and performance metrics.
          </p>
        </section>

        <section className="space-y-3 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-[#13263D]">2. How We Use Cookies</h2>
          <p>
            Admobitics utilizes minimal, privacy-conscious cookies strictly for:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
            <li><strong>Essential Technical Functionality:</strong> Maintaining session state and form submission security (e.g. CSRF and Cloudflare Turnstile bot deterrence).</li>
            <li><strong>Performance Analytics:</strong> Aggregate anonymous telemetry (page load times, device categories) to optimize mobile rendering speed.</li>
          </ul>
          <p className="text-xs text-slate-600">
            We do not use invasive third-party cross-site advertising tracking cookies to profile visitors across external websites.
          </p>
        </section>

        <section className="space-y-3 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-[#13263D]">3. Managing Preferences</h2>
          <p>
            You can configure your browser settings to reject or delete cookies at any time. Essential security cookies necessary for form submission cannot be disabled without affecting site security.
          </p>
        </section>
      </div>
    </div>
  );
}
