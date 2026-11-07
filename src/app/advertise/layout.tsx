import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book In-Auto Advertising in Hyderabad | Rates from ₹49/day",
  description:
    "Advertise directly to captive commuters on 16:9 Full HD passenger-facing screens inside Hyderabad autos. Target Hitec City, Gachibowli, & Madhapur. Transparent rates starting at ₹49/auto/day.",
  keywords: [
    "book auto advertising hyderabad",
    "in-auto screen advertising rates",
    "auto rickshaw digital advertising cost",
    "transit DOOH advertising hyderabad",
    "hitec city auto ads",
    "madhapur transit media booking",
    "admobitics advertising",
  ],
  alternates: {
    canonical: "/advertise",
  },
  openGraph: {
    title: "Book In-Auto Screen Advertising Campaigns | Admobitics Hyderabad",
    description:
      "Display your brand on 16:9 digital screens inside commercial autos across Hyderabad. Dual-slider calculator, formula pricing from ₹49/day.",
    url: "/advertise",
    type: "website",
  },
};

export default function AdvertiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
