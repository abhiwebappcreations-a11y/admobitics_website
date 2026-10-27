import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  MapPin,
  Monitor,
  CheckCircle2,
  AlertTriangle,
  Route,
  Shield,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Our Network | Admobitics Digital Media Private Limited",
  description:
    "Explore the Admobitics 10-screen in-auto digital advertising network, screen placement, pilot deployment status, and operating corridors in Hyderabad.",
};

export default function NetworkPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#13263D] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-teal-300 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#0D9488] animate-pulse" />
            Active Pilot Fleet: 10 Screens Installed
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Advertising Network
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Admobitics has launched with an initial network of <strong>10 digital screens</strong> installed in passenger-facing positions inside autos across primary commercial and IT routes in Hyderabad.
          </p>
        </div>
      </section>

      {/* Network Scale Banner */}
      <section className="py-12 bg-[#F4F6F8] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <span className="text-4xl font-black text-[#0D9488]">10</span>
              <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mt-1">
                Screens Installed
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Active pilot deployment in Hyderabad autos
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <span className="text-4xl font-black text-[#13263D]">100%</span>
              <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mt-1">
                Passenger-Facing
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Positioned directly at eye-level on partition
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <span className="text-4xl font-black text-[#D9A441]">1080p</span>
              <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mt-1">
                Full HD Clarity
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Continuous 15-second rotating playback
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Screen Concept & Placement Section */}
      <section className="py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
                Hardware & Cabin Position
              </span>
              <h2 className="text-3xl font-extrabold text-[#13263D] tracking-tight leading-tight">
                What is an In-Auto Digital Screen?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                An in-auto digital screen is a purpose-mounted, commercial-grade display unit fixed to the vehicle's interior partition facing rear passengers.
              </p>
              
              <div className="space-y-3 text-sm text-slate-700 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F4F6F8] border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#13263D] block">Eye-Level Visibility</strong>
                    <span className="text-xs text-slate-600">
                      Located in direct sight of passengers with zero neck strain or visual obstruction of traffic.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F4F6F8] border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#13263D] block">Passenger-Safe Enclosure</strong>
                    <span className="text-xs text-slate-600">
                      Mounted within a rounded shock-damped casing that meets vehicle safety and electrical standards.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F4F6F8] border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#13263D] block">Controlled Rotating Loop</strong>
                    <span className="text-xs text-slate-600">
                      Each approved advertiser receives guaranteed 10–15s slots repeating consistently throughout the trip.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Screen Specification Box */}
            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-[#13263D] text-white border border-white/10 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                    Physical & Display Specs
                  </span>
                  <span className="text-xs bg-white/10 px-2.5 py-1 rounded text-slate-300">
                    Full HD Display
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-slate-400">Aspect Ratio</p>
                    <p className="font-bold text-white text-base mt-1">16:9 Landscape</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-slate-400">Native Resolution</p>
                    <p className="font-bold text-white text-base mt-1">1920 × 1080 px</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-slate-400">Viewing Distance</p>
                    <p className="font-bold text-white text-base mt-1">0.8 – 1.2 Meters</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-slate-400">Audio Mode</p>
                    <p className="font-bold text-white text-base mt-1">Silent with Captions</p>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 text-center">
                  *Currently live across 10 pilot vehicles in Hyderabad. Expansion to additional autos scheduled in batches.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Target Operating Corridors Section */}
      <section className="py-20 bg-[#F4F6F8] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
              Geographic Focus
            </span>
            <h2 className="text-3xl font-extrabold text-[#13263D] tracking-tight">
              Operating Corridors in Hyderabad
            </h2>
            <p className="text-slate-600 text-sm">
              Our 10 pilot screens circulate across high-demand commercial, corporate, and transit corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {siteConfig.targetZones.map((zone) => (
              <div
                key={zone}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4 hover:border-[#0D9488] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0D9488] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#13263D] text-sm">{zone}</h3>
                  <p className="text-[11px] text-slate-500">Commercial & Commuter Corridor</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className="text-3xl font-extrabold text-[#13263D]">
            Book a Campaign on Our 10-Screen Network
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Take advantage of special introductory rates starting at ₹49 / auto / day.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              href="/advertise#plan"
              className="px-6 py-3.5 bg-[#0D9488] hover:bg-[#0F766E] text-white font-semibold rounded-full shadow-md transition-all touch-press"
            >
              Request Campaign Discussion
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
