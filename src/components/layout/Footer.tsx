import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MapPin, Mail, Phone, ShieldCheck, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#070D16] text-slate-400 border-t border-white/10 pt-20 pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl overflow-hidden bg-white/10 p-0.5 border border-white/15 shadow-md">
                <img
                  src="/admobitics-logo.jpg"
                  alt="Admobitics Digital Media Private Limited"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white block">
                  ADMOBITICS
                </span>
                <span className="text-[10px] tracking-widest text-slate-400 uppercase font-semibold">
                  Digital Media Private Limited
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Developing a mobility-based digital advertising network inside autos across Hyderabad. Connecting local brands and retail businesses with daily commuters through passenger-facing digital screens.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-teal-300">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Active Pilot Fleet: 10 Screens • Hyderabad, Telangana</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </p>
            <ul className="space-y-2.5 text-xs">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business & Commercial */}
          <div className="space-y-4">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Commercial Plans
            </p>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/advertise#pricing" className="hover:text-white transition-colors">
                  Standard 30-Day (₹49/day)
                </Link>
              </li>
              <li>
                <Link href="/advertise#pricing" className="hover:text-white transition-colors">
                  Custom Mid-Term (₹69/day)
                </Link>
              </li>
              <li>
                <Link href="/advertise#pricing" className="hover:text-white transition-colors">
                  Short-Term Flexi (₹99/day)
                </Link>
              </li>
              <li>
                <Link href="/advertise#specs" className="hover:text-white transition-colors">
                  Creative Specifications
                </Link>
              </li>
              <li>
                <Link href="/partner" className="hover:text-white transition-colors">
                  Driver Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Founders & Office
            </p>
            <div className="space-y-3 text-xs">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Hyderabad, Telangana, India</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.whatsappRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-400 hover:text-teal-300 transition-colors"
                >
                  View Founder Phone Lines
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {siteConfig.legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-slate-300 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
