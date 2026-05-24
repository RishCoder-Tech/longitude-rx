import type { Metadata } from "next"

const title = "LRx360 Specialty Pharmacy Platform for Health Systems | Longitude Rx"
const description =
  "LRx360 is the specialty pharmacy intelligence platform from Longitude Rx. PA, routing, and 340B pre-qualification before the prescription is released."

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    url: "https://longituderx.org/technology",
    title,
    description,
    siteName: "Longitude Rx",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
}

export default function TechnologyLayout({ children }: { children: React.ReactNode }) {
  return children
}
