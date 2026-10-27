"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Building,
  CheckCircle,
  Send,
  HelpCircle,
  ArrowRight,
  UserCheck,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    enquiryType: "advertising",
    message: "",
    consent: false,
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
        body: JSON.stringify({ type: "contact", data: formData }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Message could not be sent. Please connect via WhatsApp directly.");
      }
    } catch {
      alert("Submission error. Please connect via WhatsApp directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#13263D] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact Admobitics
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Reach our leadership team directly for campaign bookings, driver partnerships, or agency collaboration.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-[#F4F6F8] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Verified Contact Cards & Founders Direct Lines */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Entity & Main Lines */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D9488]">
                    Official Entity
                  </span>
                  <h3 className="text-xl font-extrabold text-[#13263D]">
                    {siteConfig.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Hyderabad, Telangana, India
                  </p>
                </div>

                <div className="space-y-4 text-sm text-slate-700 border-t border-slate-100 pt-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 text-[#0D9488] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-[#13263D] text-xs">Direct Email</p>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-xs text-[#0D9488] font-semibold hover:underline"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-[#13263D] text-xs">Official WhatsApp Support</p>
                      <a
                        href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
                          siteConfig.whatsappMessages.general
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-emerald-600 hover:underline"
                      >
                        +91 76598 88483 (Click to Chat)
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Directors & Founders Direct Contact Card */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D9488]">
                  Direct Leadership Lines
                </span>
                <h4 className="text-base font-bold text-[#13263D]">Directors & Founders</h4>
                
                <div className="space-y-3 border-t border-slate-100 pt-3 text-xs">
                  {siteConfig.founders.map((f) => (
                    <div key={f.name} className="flex items-center justify-between p-3 rounded-xl bg-[#F4F6F8]">
                      <div>
                        <p className="font-bold text-slate-900">{f.name}</p>
                        <p className="text-[11px] text-slate-500">{f.title}</p>
                      </div>
                      <a
                        href={`tel:${f.rawPhone}`}
                        className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 font-semibold text-[#0D9488] hover:bg-teal-50 transition-colors flex items-center gap-1.5"
                      >
                        <Phone className="w-3 h-3" />
                        <span>{f.phone}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: General Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#13263D]">
                    Send Us a Message
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Fill out the form below. We will route your inquiry to the appropriate department.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                    <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="text-lg font-bold text-emerald-950">Message Sent Successfully</h4>
                    <p className="text-xs text-emerald-800 leading-relaxed max-w-sm mx-auto">
                      Thank you for contacting Admobitics. Our team will review your message and respond via email or phone promptly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-3 px-5 py-2 rounded-full bg-emerald-600 text-white text-xs font-semibold"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Vikram Reddy"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700">Business / Organization</label>
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="e.g. Reddy Retail Group"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. vikram@domain.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Enquiry Category</label>
                      <select
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                      >
                        <option value="advertising">Advertising Campaign Booking</option>
                        <option value="driver">Driver & Fleet Partnership</option>
                        <option value="agency">Agency / Media Buying Collaboration</option>
                        <option value="creator">Influencer / Content Collaboration</option>
                        <option value="general">General Corporate Inquiry</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Message / Inquiry Details *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your requirements, timeline, or questions..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                      />
                    </div>

                    <div className="flex items-start gap-2 pt-1">
                      <input
                        type="checkbox"
                        required
                        id="contactConsent"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-1 accent-[#0D9488]"
                      />
                      <label htmlFor="contactConsent" className="text-xs text-slate-600">
                        I acknowledge the Privacy Policy and consent to Admobitics contacting me regarding this request.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 bg-[#0D9488] hover:bg-[#0F766E] text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm touch-press disabled:opacity-50"
                    >
                      {loading ? "Sending..." : "Send Message"}
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
