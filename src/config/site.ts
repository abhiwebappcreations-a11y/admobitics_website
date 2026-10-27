export const siteConfig = {
  name: "Admobitics Digital Media Private Limited",
  shortName: "Admobitics",
  tagline: "Your Brand. On the Move.",
  description:
    "An emerging mobility-based digital advertising network connecting brands with daily commuters through passenger-facing digital screens inside autos across Hyderabad, Telangana.",
  url: "https://admobitics.com",
  operatingStage: "pilot", // Verified 10 screens pilot network
  fleetCount: 10,
  operatingRegion: "Hyderabad, Telangana, India",
  targetZones: [
    "Hitec City & Madhapur",
    "Gachibowli & Financial District",
    "Banjara Hills & Jubilee Hills",
    "Secunderabad & Begumpet",
    "Ameerpet & Punjagutta",
    "Dilsukhnagar & LB Nagar",
  ],
  pricing: {
    // Standard Plan: 30 days or above
    standardMinDays: 30,
    standardOriginalRate: 99,
    standardOfferRate: 49,

    // Custom Plan (Medium): 10 to 29 days
    customMidMinDays: 10,
    customMidMaxDays: 29,
    customMidOriginalRate: 149,
    customMidOfferRate: 69,

    // Custom Plan (Short): 1 to 9 days
    customShortMinDays: 1,
    customShortMaxDays: 9,
    customShortOriginalRate: 199,
    customShortOfferRate: 99,

    gstRate: 0.18,
    showDriverPayout: false, // Strictly confidential as instructed
  },
  founders: [
    {
      name: "Thrishanth Yadav",
      title: "Director & Founder",
      phone: "+91 76598 88483",
      rawPhone: "917659888483",
    },
    {
      name: "Vivek Gudala",
      title: "Director & Founder",
      phone: "+91 93902 75151",
      rawPhone: "919390275151",
    },
    {
      name: "Madhan Akula",
      title: "Director & Founder",
      phone: "+91 95153 23535",
      rawPhone: "919515323535",
    },
  ],
  contact: {
    registeredAddress: "Hyderabad, Telangana, India",
    email: "admobitics@gmail.com",
    phone: "+91 76598 88483",
    whatsapp: "+91 76598 88483",
    whatsappRaw: "917659888483",
    operatingHours: "Monday to Saturday, 9:30 AM – 6:30 PM IST",
  },
  whatsappMessages: {
    advertiser:
      "Hello Admobitics team, I am interested in advertising through your in-auto digital advertising network in Hyderabad. Please share campaign options and pricing.",
    driver:
      "Hello Admobitics team, I am interested in enquiring about becoming an auto driver partner. Please share the eligibility requirements and partnership details.",
    general:
      "Hello Admobitics team, I would like to enquire about your mobility advertising network.",
  },
  creativeSpecs: {
    orientation: "Landscape (16:9)",
    resolution: "1920 × 1080 (Full HD)",
    slotDuration: "10 to 15 seconds",
    audioPolicy: "Silent playback (captions recommended)",
    supportedFormats: "MP4 (H.264 video), high-resolution PNG / JPG",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Advertise With Us", href: "/advertise" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Our Network", href: "/network" },
    { label: "Partner With Us", href: "/partner" },
    { label: "Contact Us", href: "/contact" },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Cookie Notice", href: "/cookies" },
    { label: "Enquiry Disclaimer", href: "/disclaimer" },
  ],
};
