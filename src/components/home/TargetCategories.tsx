import React from "react";
import {
  Utensils,
  ShoppingBag,
  Building2,
  GraduationCap,
  Car,
  Ticket,
  Briefcase,
  Layers,
} from "lucide-react";

export function TargetCategories() {
  const categories = [
    {
      name: "Restaurants & Cafés",
      desc: "Promote new menus, weekend specials, and family dining offers to commuters traveling to food hubs.",
      icon: Utensils,
      highlight: "Madhapur & Jubilee Hills",
    },
    {
      name: "Retail & Consumer Brands",
      desc: "Drive footfall for boutique stores, electronics, apparel, and seasonal showroom sales across the city.",
      icon: ShoppingBag,
      highlight: "High-Density Corridors",
    },
    {
      name: "Real Estate & Housing",
      desc: "Showcase luxury gated communities, apartment launches, and commercial leasing opportunities.",
      icon: Building2,
      highlight: "Financial District & Gachibowli",
    },
    {
      name: "Educational Institutions",
      desc: "Announce coaching batches, university admissions, test-prep courses, and academy openings.",
      icon: GraduationCap,
      highlight: "Ameerpet & Dilsukhnagar",
    },
    {
      name: "Automobile Dealerships",
      desc: "Feature new two-wheeler and four-wheeler test-drive campaigns and festive service packages.",
      icon: Car,
      highlight: "Begumpet & Secunderabad",
    },
    {
      name: "Events & Entertainment",
      desc: "Drive ticket bookings for music concerts, movie releases, theatre, and city festivals.",
      icon: Ticket,
      highlight: "Weekend Blasts (₹99/day)",
    },
    {
      name: "Clinics & Diagnostic Care",
      desc: "Connect neighborhood clinics, diagnostic centers, fitness clubs, and personal services.",
      icon: Briefcase,
      highlight: "Residential Zones",
    },
    {
      name: "Agencies & Media Buyers",
      desc: "Integrate hyper-local mobility digital video into multi-channel campaigns for enterprise clients.",
      icon: Layers,
      highlight: "Fleet Packages",
    },
  ];

  return (
    <section className="py-24 bg-[#0F1C2E] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-bold uppercase tracking-widest text-teal-300">
            <span>High-Impact Targeting</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Who Can Advertise on Admobitics?
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            From neighborhood restaurants to enterprise brands — mobility digital advertising offers captive passenger exposure without massive billboard budgets.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.name}
                className="glass-panel glass-panel-hover rounded-3xl p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 text-teal-300 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#0D9488] group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between text-[11px] text-teal-300/80 font-mono">
                  <span>{cat.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-slate-400 text-center max-w-3xl mx-auto">
          <strong className="text-teal-300">Compliance Standard:</strong> All advertising categories and submitted creatives are reviewed for content suitability and transit regulatory compliance prior to broadcast.
        </div>

      </div>
    </section>
  );
}
