import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Driver Partnership Program in Hyderabad | Earn Monthly Income",
  description:
    "Join the Admobitics in-auto advertising network in Hyderabad. Free digital screen installation with zero hardware investment and dependable monthly compensation for auto drivers and owners.",
  keywords: [
    "auto driver partnership hyderabad",
    "auto rickshaw screen earning hyderabad",
    "admobitics driver partner",
    "auto advertising screen installation",
    "hyderabad auto driver monthly income",
    "auto digital ad network partner",
  ],
  alternates: {
    canonical: "/partner",
  },
  openGraph: {
    title: "Partner With Admobitics | Auto Driver & Vehicle Owner Network Hyderabad",
    description:
      "Join Hyderabad's growing in-auto digital advertising network. Earn dependable monthly compensation with zero screen hardware investment.",
    url: "/partner",
    type: "website",
  },
};

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
