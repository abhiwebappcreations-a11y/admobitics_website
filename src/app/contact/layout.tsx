import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Admobitics | Hyderabad Head Office & Director Lines",
  description:
    "Get in touch with Admobitics Digital Media Private Limited in Hyderabad. Reach founders Thrishanth Yadav, Vivek Gudala, and Madhan Akula directly for campaign bookings, driver partnerships, and agency collaboration.",
  keywords: [
    "contact admobitics",
    "admobitics phone number",
    "admobitics hyderabad office",
    "auto advertising enquiry hyderabad",
    "thrishanth yadav admobitics",
    "vivek gudala admobitics",
    "madhan akula admobitics",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Admobitics Digital Media | Hyderabad Office & Director Lines",
    description:
      "Reach our leadership team directly for campaign bookings, driver partnerships, or agency collaboration in Hyderabad.",
    url: "https://admobitics.com/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
