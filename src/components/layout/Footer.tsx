import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MapPin, Mail, Phone, ShieldCheck, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#13263D] text-slate-300 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0D9488] to-[#0F766E] flex items-center justify-center font-bold text-lg text-white shadow-md border border-white/20">
                A
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white block">
                  ADMOBITICS
                </span>
                <span className="text-[10px] tracking-wider text-slate-400 uppercase font-medium">
                  Digital Media Private Limited
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Developing a mobility-based digital advertising network inside autos across Hyderabad. Connecting local brands and retail businesses with daily commuters through passenger-facing digital screens.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
              <span>Pilot Network Deployment • Hyderabad, Telangana</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </p>
            <ul className="space-y-2 text-sm">
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
          <div className="space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Commercial
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/advertise#pricing" className="hover:text-white transition-colors">
                  Standard 30-Day Campaign
                </Link>
              </li>
              <li>
                <Link href="/advertise#pricing" className="hover:text-white transition-colors">
                  Custom Campaign (Under 30D)
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
              <li>
                <Link href="/contact#agency" className="hover:text-white transition-colors">
                  Agency & Media Buyers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Contact & Location
            </p>
            <div className="space-y-2.5 text-sm">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.registeredAddress}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0D9488] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0D9488] hover:text-teal-300 transition-colors"
                >
                  Open Contact Form
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {siteConfig.legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-slate-200 transition-colors"
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
