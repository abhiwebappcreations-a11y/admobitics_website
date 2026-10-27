"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import {
  HeartHandshake,
  ShieldCheck,
  Coins,
  Wrench,
  CheckCircle,
  FileCheck,
  Send,
  Languages,
} from "lucide-react";

export default function PartnerPage() {
  const [lang, setLang] = useState<"en" | "te">("en");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    contactMethod: "phone",
    autoRegNumber: "",
    ownershipStatus: "owner-driver",
    operatingArea: "",
    dailyHours: "8-10",
    isRegisteredOwner: "yes",
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
        body: JSON.stringify({ type: "driver", data: formData }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Registration could not be submitted. Please connect via WhatsApp directly.");
      }
    } catch {
      alert("Submission error. Please connect via WhatsApp directly.");
    } finally {
      setLoading(false);
    }
  };

  const t = {
    en: {
      badge: "Driver & Vehicle Owner Network",
      title: "Partner With Admobitics",
      subtitle:
        "Join our growing in-auto digital advertising network in Hyderabad. Earn dependable monthly compensation with zero screen hardware investment.",
      payoutTitle: "Dependable Monthly Compensation",
      payoutDesc:
        "Receive regular monthly payouts directly as agreed in your written partnership contract.",
      hardwareTitle: "Zero Hardware Investment",
      hardwareDesc:
        "The digital advertising screen is provided and professionally installed at zero cost to the driver or vehicle owner.",
      safeTitle: "Safe & Compliant Installation",
      safeDesc:
        "Mounted with vibration-damped brackets, safe electrical wiring, and strict respect for passenger space.",
      formTitle: "Register Your Interest as a Driver Partner",
      formSubtitle:
        "Fill out the basic details below. Our driver relations team will call you to verify your vehicle and discuss onboarding.",
    },
    te: {
      badge: "ఆటో డ్రైవర్ & వాహన యజమానుల నెట్‌వర్క్",
      title: "అడ్మోబిటిక్స్ (Admobitics) తో భాగస్వామ్యం అవ్వండి",
      subtitle:
        "హైదరాబాద్‌లో మా సరికొత్త డిజిటల్ స్క్రీన్ ప్రకటనల నెట్‌వర్క్‌లో చేరండి. మీ ఆటోలో సురక్షితమైన స్క్రీన్ అమరికతో ప్రతి నెలా స్థిరమైన అదనపు ఆదాయం పొందండి.",
      payoutTitle: "నెలవారీ స్థిర ఆదాయం",
      payoutDesc:
        "రాతపూర్వక ఒప్పందం ప్రకారం ప్రతి నెలా ఖచ్చితమైన పరిహారం నేరుగా అందుతుంది.",
      hardwareTitle: "జీరో ఖర్చు - స్క్రీన్ మాదే",
      hardwareDesc:
        "డిజిటల్ అడ్వర్టైజింగ్ స్క్రీన్ మరియు అమరిక ఖర్చులు పూర్తిగా అడ్మోబిటిక్స్ సంస్థే భరిస్తుంది.",
      safeTitle: "సురక్షితమైన ఇన్స్టాలేషన్",
      safeDesc:
        "ప్రయాణీకులకు మరియు డ్రైవర్‌కు ఎటువంటి అసౌకర్యం కలగకుండా నిపుణుల ద్వారా సురక్షితంగా అమర్చబడుతుంది.",
      formTitle: "డ్రైవర్ భాగస్వామ్యం కోసం మీ వివరాలను నమోదు చేయండి",
      formSubtitle:
        "కింది వివరాలను నమోదు చేయండి. మా టీమ్ మీకు ఫోన్ చేసి పూర్తి వివరాలు మరియు అర్హతలను తెలియజేస్తుంది.",
    },
  };

  const currentT = t[lang];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#13263D] text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          
          {/* Language Toggle */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-1 p-1 rounded-full bg-white/10 border border-white/20 text-xs">
              <Languages className="w-3.5 h-3.5 text-teal-300 ml-2 mr-1" />
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-full font-semibold transition-all ${
                  lang === "en"
                    ? "bg-[#0D9488] text-white"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLang("te")}
                className={`px-3 py-1 rounded-full font-semibold transition-all ${
                  lang === "te"
                    ? "bg-[#0D9488] text-white"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                తెలుగు (Telugu)
              </button>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-teal-300 font-semibold">
            <HeartHandshake className="w-4 h-4 text-[#0D9488]" />
            {currentT.badge}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {currentT.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {currentT.subtitle}
          </p>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-3xl bg-[#F4F6F8] border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#0D9488]/10 text-[#0D9488] flex items-center justify-center">
                <Coins className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#13263D]">{currentT.payoutTitle}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {currentT.payoutDesc}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#F4F6F8] border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#0D9488]/10 text-[#0D9488] flex items-center justify-center">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#13263D]">{currentT.hardwareTitle}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {currentT.hardwareDesc}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#F4F6F8] border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#0D9488]/10 text-[#0D9488] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#13263D]">{currentT.safeTitle}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {currentT.safeDesc}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Driver Registration Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
              {lang === "en" ? "Registration Form" : "నమోదు ఫారం"}
            </span>
            <h2 className="text-3xl font-extrabold text-[#13263D] tracking-tight">
              {currentT.formTitle}
            </h2>
            <p className="text-slate-600 text-sm">
              {currentT.formSubtitle}
            </p>
          </div>

          {submitted ? (
            <div className="p-8 sm:p-12 rounded-3xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-950">
                {lang === "en" ? "Registration Submitted" : "మీ వివరాలు విజయవంతంగా అందినవి"}
              </h3>
              <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                {lang === "en"
                  ? "Thank you. Our driver onboarding coordinator will call you to verify your vehicle details and arrange an appointment."
                  : "ధన్యవాదాలు. మా డ్రైవర్ ఆన్‌బోర్డింగ్ బృందం మీకు ఫోన్ చేసి మీ ఆటో వివరాలను సరిచూసి తదుపరి దశలను తెలియజేస్తుంది."}
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-semibold"
                >
                  {lang === "en" ? "Register Another Auto" : "మరొక ఆటో నమోదు చేయండి"}
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl bg-[#F4F6F8] border border-slate-200 space-y-6 shadow-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    {lang === "en" ? "Full Name *" : "మీ పూర్తి పేరు *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. K. Srinivas"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    {lang === "en" ? "Phone Number (WhatsApp) *" : "ఫోన్ నెంబర్ (వాట్సాప్) *"}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                  />
                </div>

                {/* Auto Registration Number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    {lang === "en" ? "Auto Registration No. *" : "ఆటో రిజిస్ట్రేషన్ నెంబర్ *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.autoRegNumber}
                    onChange={(e) => setFormData({ ...formData, autoRegNumber: e.target.value.toUpperCase() })}
                    placeholder="e.g. TS 09 UA 1234"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm uppercase focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                  />
                </div>

                {/* Operating Area */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    {lang === "en" ? "Main Operating Area *" : "ప్రధానంగా తిరిగే ప్రాంతం *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.operatingArea}
                    onChange={(e) => setFormData({ ...formData, operatingArea: e.target.value })}
                    placeholder="e.g. Madhapur / Hitec City / Secunderabad"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                  />
                </div>

                {/* Ownership Status */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    {lang === "en" ? "Vehicle Ownership Status" : "వాహన యాజమాన్య స్థితి"}
                  </label>
                  <select
                    value={formData.ownershipStatus}
                    onChange={(e) => setFormData({ ...formData, ownershipStatus: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                  >
                    <option value="owner-driver">
                      {lang === "en" ? "I own and drive this auto" : "నా స్వంత ఆటో (నేనే డ్రైవ్ చేస్తాను)"}
                    </option>
                    <option value="owner-only">
                      {lang === "en" ? "I own the auto, someone else drives" : "నేను యజమానిని (వేరేవారు డ్రైవ్ చేస్తారు)"}
                    </option>
                    <option value="driver-rental">
                      {lang === "en" ? "I drive on rent / lease" : "నేను అద్దెకు నడుపుతాను"}
                    </option>
                  </select>
                </div>

                {/* Daily Operating Hours */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    {lang === "en" ? "Daily Operating Hours" : "రోజుకు ఎన్ని గంటలు నడుపుతారు?"}
                  </label>
                  <select
                    value={formData.dailyHours}
                    onChange={(e) => setFormData({ ...formData, dailyHours: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                  >
                    <option value="6-8">6 – 8 Hours</option>
                    <option value="8-10">8 – 10 Hours</option>
                    <option value="10+">10+ Hours</option>
                  </select>
                </div>

              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-2.5 pt-2">
                <input
                  type="checkbox"
                  required
                  id="driverConsent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1 accent-[#0D9488]"
                />
                <label htmlFor="driverConsent" className="text-xs text-slate-600 leading-normal">
                  {lang === "en"
                    ? "I confirm that the above details are accurate and I consent to being contacted by Admobitics. I understand that submitting this enquiry does not guarantee partnership or screen installation until vehicle inspection and agreement."
                    : "పై వివరాలు సరైనవని ధృవీకరిస్తున్నాను. వాహన తనిఖీ మరియు రాతపూర్వక ఒప్పందం పూర్తయ్యే వరకు ఈ దరఖాస్తు భాగస్వామ్య హామీ కాదని గ్రహించాను."}
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
                    <span>{lang === "en" ? "Submitting..." : "సమర్పిస్తోంది..."}</span>
                  ) : (
                    <>
                      <span>{lang === "en" ? "REGISTER YOUR INTEREST" : "ఆసక్తిని నమోదు చేయండి"}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center">
                *We do not collect Aadhaar, bank details, or driving licence copies through this public form. Required documents are verified securely during in-person onboarding.
              </p>
            </form>
          )}

        </div>
      </section>
    </div>
  );
}
