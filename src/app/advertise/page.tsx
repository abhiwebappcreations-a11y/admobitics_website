"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { PricingCalculator } from "@/components/home/PricingCalculator";
import {
  FileText,
  Sliders,
  Send,
  CheckCircle,
  HelpCircle,
  Info,
  Clock,
  Video,
  Monitor,
  VolumeX,
} from "lucide-react";

export default function AdvertisePage() {
  const [formData, setFormData] = useState({
    businessName: "",
    contactPerson: "",
    phone: "",
    email: "",
    businessCategory: "Restaurants & Cafés",
    campaignObjective: "Local Brand Awareness",
    durationDays: "30",
    desiredAutos: "15",
    preferredLocations: "",
    approxBudget: "",
    isCreativeReady: "no",
    additionalNotes: "",
    consentGiven: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "advertiser", data: formData }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Enquiry could not be submitted. Please connect via WhatsApp directly.");
      }
    } catch {
      alert("Submission error. Please connect via WhatsApp directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-[#13263D] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
            Advertise With Us
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Bring Your Brand Into Motion
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Display your business promotions directly to daily passengers inside autos across high-density transit corridors in Hyderabad.
          </p>
        </div>
      </section>

      {/* Pricing Calculator Reused */}
      <PricingCalculator />

      {/* Creative Specifications Section */}
      <section id="specs" className="py-20 bg-[#F4F6F8] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
              Advertiser Deliverables
            </span>
            <h2 className="text-3xl font-extrabold text-[#13263D] tracking-tight">
              Screen Specifications & Guidelines
            </h2>
            <p className="text-slate-600 text-sm">
              Prepare your digital creatives according to the following specifications for optimal visual presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0D9488] flex items-center justify-center">
                <Monitor className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#13263D] text-base">Display Format</h3>
              <p className="text-xs text-slate-600">
                <strong>16:9 Landscape</strong> orientation, native <strong>1920 × 1080 (Full HD)</strong> resolution.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0D9488] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#13263D] text-base">Slot Duration</h3>
              <p className="text-xs text-slate-600">
                <strong>10 to 15 seconds</strong> per slot, repeating consistently in the playback loop throughout the ride.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0D9488] flex items-center justify-center">
                <VolumeX className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#13263D] text-base">Audio Policy</h3>
              <p className="text-xs text-slate-600">
                <strong>Silent playback</strong>. We recommend bold headlines, striking imagery, and captions for passenger clarity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0D9488] flex items-center justify-center">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#13263D] text-base">Accepted Formats</h3>
              <p className="text-xs text-slate-600">
                <strong>MP4 (H.264 video)</strong> or high-resolution <strong>PNG / JPEG</strong> graphics. Maximum file size: 25MB.
              </p>
            </div>

          </div>

          <div className="mt-8 max-w-2xl mx-auto p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 text-center">
            *Advertiser provides the final creative asset. Admobitics verifies technical compliance and suitability before campaign scheduling.
          </div>
        </div>
      </section>

      {/* Campaign Enquiry Form Section */}
      <section id="plan" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
              Direct Booking Enquiry
            </span>
            <h2 className="text-3xl font-extrabold text-[#13263D] tracking-tight">
              Request a Campaign Discussion
            </h2>
            <p className="text-slate-600 text-sm">
              Submit your campaign requirements below. Our commercial team will review operational fleet availability and contact you promptly.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 sm:p-12 rounded-3xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-950">
                Enquiry Received Successfully
              </h3>
              <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                Thank you for your interest in advertising with Admobitics. Our Hyderabad commercial team will review your requirements and reach out via phone or email within one business day.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-semibold"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl bg-[#F4F6F8] border border-slate-200 space-y-6 shadow-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Business Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Business / Organization Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Royal Spice Restaurant"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                  />
                </div>

                {/* Contact Person */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Contact Person Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Phone Number (WhatsApp preferred) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Business Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. marketing@business.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                  />
                </div>

                {/* Business Category */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Business Category
                  </label>
                  <select
                    value={formData.businessCategory}
                    onChange={(e) => setFormData({ ...formData, businessCategory: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                  >
                    <option>Restaurants & Cafés</option>
                    <option>Retail & Consumer Goods</option>
                    <option>Real Estate & Housing</option>
                    <option>Educational Institutions</option>
                    <option>Automobile Dealerships</option>
                    <option>Events & Entertainment</option>
                    <option>Clinics & Local Services</option>
                    <option>Agency / Brand Activation</option>
                  </select>
                </div>

                {/* Campaign Duration */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Preferred Campaign Duration
                  </label>
                  <select
                    value={formData.durationDays}
                    onChange={(e) => setFormData({ ...formData, durationDays: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                  >
                    <option value="30">30 Days (Standard Tier • ₹49/auto/day)</option>
                    <option value="15">15 Days (Custom Tier • ₹69/auto/day)</option>
                    <option value="7">7 Days (Custom Tier • ₹69/auto/day)</option>
                    <option value="60">60+ Days (Custom Written Quotation)</option>
                  </select>
                </div>

                {/* Desired Number of Autos */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Desired Number of Autos (if known)
                  </label>
                  <input
                    type="number"
                    min="5"
                    max="200"
                    value={formData.desiredAutos}
                    onChange={(e) => setFormData({ ...formData, desiredAutos: e.target.value })}
                    placeholder="e.g. 15"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                  />
                </div>

                {/* Preferred Locations */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Preferred Target Corridor
                  </label>
                  <input
                    type="text"
                    value={formData.preferredLocations}
                    onChange={(e) => setFormData({ ...formData, preferredLocations: e.target.value })}
                    placeholder="e.g. Hitec City, Madhapur, Jubilee Hills"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                  />
                </div>

              </div>

              {/* Final Creative Status */}
              <div className="space-y-1.5 pt-2">
                <label className="text-xs font-bold text-slate-700 block">
                  Is your final video / poster creative ready?
                </label>
                <div className="flex gap-4 text-xs font-medium text-slate-700">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="isCreativeReady"
                      value="yes"
                      checked={formData.isCreativeReady === "yes"}
                      onChange={(e) => setFormData({ ...formData, isCreativeReady: e.target.value })}
                      className="accent-[#0D9488]"
                    />
                    <span>Yes, creative is ready</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="isCreativeReady"
                      value="no"
                      checked={formData.isCreativeReady === "no"}
                      onChange={(e) => setFormData({ ...formData, isCreativeReady: e.target.value })}
                      className="accent-[#0D9488]"
                    />
                    <span>No, in development / need specs</span>
                  </label>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  Additional Campaign Details
                </label>
                <textarea
                  rows={3}
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  placeholder="Share any specific dates, target audiences, or questions..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                />
              </div>

              {/* Privacy Consent Checkbox */}
              <div className="flex items-start gap-2.5 pt-2">
                <input
                  type="checkbox"
                  required
                  id="consent"
                  checked={formData.consentGiven}
                  onChange={(e) => setFormData({ ...formData, consentGiven: e.target.checked })}
                  className="mt-1 accent-[#0D9488]"
                />
                <label htmlFor="consent" className="text-xs text-slate-600 leading-normal">
                  I consent to being contacted by Admobitics Digital Media Private Limited regarding this campaign enquiry and acknowledge the Privacy Policy. Submitting this form constitutes an enquiry and does not create an advertising contract.
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#0D9488] hover:bg-[#0F766E] text-white font-bold rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 text-sm touch-press disabled:opacity-50"
                >
                  {loading ? (
                    <span>Processing Enquiry...</span>
                  ) : (
                    <>
                      <span>REQUEST A CAMPAIGN DISCUSSION</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

        </div>
      </section>
    </div>
  );
}
