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
      desc: "Promote new food menus, weekend specials, and dining offers to diners traveling to commercial food corridors.",
      icon: Utensils,
    },
    {
      name: "Retail & Consumer Brands",
      desc: "Build retail footfall for boutique stores, electronics, apparel, and seasonal showroom sales.",
      icon: ShoppingBag,
    },
    {
      name: "Real Estate & Housing",
      desc: "Highlight gated communities, apartment launches, and commercial leasing opportunities.",
      icon: Building2,
    },
    {
      name: "Educational Institutions",
      desc: "Announce admissions, coaching batches, test-prep courses, and academy openings.",
      icon: GraduationCap,
    },
    {
      name: "Automobile Dealerships",
      desc: "Display two-wheeler and four-wheeler test drive campaigns and service center promotions.",
      icon: Car,
    },
    {
      name: "Events & Entertainment",
      desc: "Drive ticket bookings for music concerts, theatre, local festivals, and movie releases.",
      icon: Ticket,
    },
    {
      name: "Local Services & Clinics",
      desc: "Connect neighborhood clinics, diagnostic centers, fitness clubs, and home services.",
      icon: Briefcase,
    },
    {
      name: "Agencies & Media Buyers",
      desc: "Include transit digital media into multi-channel brand campaigns for clients across Hyderabad.",
      icon: Layers,
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
            Diverse Business Fit
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#13263D] tracking-tight">
            Who Can Advertise on Admobitics?
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            From single-outlet local restaurants to regional enterprise brands — mobility digital advertising offers flexible exposure without massive billboard budgets.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.name}
                className="p-6 rounded-2xl bg-[#F4F6F8] border border-slate-200/80 hover:border-[#0D9488]/40 hover:bg-white hover:shadow-lg hover:shadow-slate-100 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-[#0D9488] flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-[#0D9488] group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#13263D] mb-1.5">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs text-center max-w-2xl mx-auto">
          <span className="font-semibold">Compliance Note:</span> All advertising categories and submitted creatives are subject to applicable advertising laws, content suitability standards, and regulatory approvals.
        </div>
      </div>
    </section>
  );
}
