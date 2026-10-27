import React from "react";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Target, Eye, Handshake, Compass, Award, Phone, Mail, UserCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About Us | Admobitics Digital Media Private Limited",
  description:
    "Learn about Admobitics Digital Media Private Limited, our founders, vision, mission, approach, and our 10-screen in-auto digital advertising network in Hyderabad.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Trust",
      desc: "We operate with clear contracts, honest capacity reporting, and transparent terms for both advertisers and driver partners.",
      icon: ShieldCheck,
    },
    {
      title: "Innovation",
      desc: "Bringing digital screen media into everyday commute environments, creating new advertising formats beyond static hoardings.",
      icon: Eye,
    },
    {
      title: "Accountability",
      desc: "We only confirm campaigns we can reliably schedule, with verified installation standards and dependable communication.",
      icon: Target,
    },
    {
      title: "Transparency",
      desc: "Formula-based pricing published directly with zero hidden agency fees or surprise markups.",
      icon: Compass,
    },
    {
      title: "Collaboration",
      desc: "Treating auto drivers and vehicle owners as genuine commercial partners who receive fair, dependable monthly compensation.",
      icon: Handshake,
    },
    {
      title: "Responsible Growth",
      desc: "Expanding thoughtfully with safety inspections, regulatory compliance, and community-conscious operating standards.",
      icon: Award,
    },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-[#13263D] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
            About Our Company
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Building New Possibilities in Digital Mobility Advertising
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Admobitics Digital Media Private Limited is an emerging digital advertising company based in Hyderabad, currently deploying passenger-facing digital advertising screens across commercial autos.
          </p>
        </div>
      </section>

      {/* Leadership & Founders Section */}
      <section className="py-20 border-b border-slate-200 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
              Leadership Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#13263D] tracking-tight">
              Meet the Directors & Founders
            </h2>
            <p className="text-slate-600 text-sm">
              The founding leadership driving mobility media innovation across Hyderabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {siteConfig.founders.map((founder) => (
              <div
                key={founder.name}
                className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col justify-between"
              >
                <div>
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[#13263D] to-[#0D9488] text-white flex items-center justify-center font-bold text-2xl shadow-md border border-white/20 mb-5">
                    {founder.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-[#13263D]">
                    {founder.name}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#0D9488] mt-1">
                    {founder.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    Admobitics Digital Media Private Limited
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 space-y-2 text-xs">
                  <a
                    href={`tel:${founder.rawPhone}`}
                    className="flex items-center justify-center gap-2 text-slate-700 hover:text-[#0D9488] font-semibold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#0D9488]" />
                    <span>{founder.phone}</span>
                  </a>
                  <a
                    href={`https://wa.me/${founder.rawPhone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[11px] text-teal-700 font-medium hover:underline"
                  >
                    Connect on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F4F6F8] border border-slate-200 space-y-4">
              <span className="w-12 h-12 rounded-2xl bg-[#0D9488]/10 text-[#0D9488] flex items-center justify-center font-bold text-lg">
                01
              </span>
              <h2 className="text-2xl font-bold text-[#13263D]">Our Vision</h2>
              <p className="text-slate-600 text-base leading-relaxed">
                To develop innovative, accessible, and effective advertising opportunities for businesses through mobility-based digital media — making dynamic out-of-home advertising practical for enterprises and neighborhood businesses alike.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#13263D] text-white space-y-4">
              <span className="w-12 h-12 rounded-2xl bg-white/10 text-teal-300 flex items-center justify-center font-bold text-lg">
                02
              </span>
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="text-slate-300 text-base leading-relaxed">
                To help advertisers explore new ways to communicate their messages through professionally managed digital advertising placements, while empowering local vehicle owners with steady supplemental earnings.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
              Core Principles
            </span>
            <h2 className="text-3xl font-extrabold text-[#13263D] tracking-tight">
              Our Values
            </h2>
            <p className="text-slate-600 text-sm">
              The foundational commitments that guide every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0D9488]/10 text-[#0D9488] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#13263D] mb-1.5">
                    {v.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate Registration & Legal Transparency Callout */}
      <section className="py-16 bg-[#13263D] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold tracking-wider uppercase text-teal-300">
            Corporate Status
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Admobitics Digital Media Private Limited
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Operating from Hyderabad, Telangana. Direct enquiries: <a href="mailto:admobitics@gmail.com" className="text-teal-300 underline">admobitics@gmail.com</a>
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#0D9488] hover:bg-[#0F766E] text-white text-xs font-semibold rounded-full shadow-md touch-press"
            >
              Contact Corporate Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
