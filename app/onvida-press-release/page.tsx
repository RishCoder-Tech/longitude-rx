import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OnvidaPressRelease() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-gradient-to-br from-gypsum-50 via-white to-gypsum-100 px-4 md:px-0">
      <div className="max-w-3xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-8 mt-12 mb-16 border border-gypsum-200">
        <div className="mb-6 text-xs text-admiral-500 font-space-grotesk uppercase tracking-widest">FOR IMMEDIATE RELEASE</div>
        <h1 className="text-4xl md:text-5xl font-bold font-outfit mb-4 bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">Longitude Rx Welcomes Onvida Health as First External Partner</h1>
        <div className="mb-4 text-admiral-600 font-space-grotesk">June 2025 &mdash; Dallas, TX</div>
        <p className="text-lg text-admiral-700 font-space-grotesk mb-6">
          Longitude Rx, the specialty pharmacy initiative created by leading health systems, is proud to announce its first external partnership with Onvida Health of Arizona. This milestone marks the expansion of Longitude Rx's innovative specialty pharmacy platform beyond its founding members, bringing advanced specialty medication access and care coordination to new communities.
        </p>
        <h2 className="text-2xl font-bold font-outfit mb-2 mt-8">Expanding Access, Improving Outcomes</h2>
        <p className="mb-4 text-admiral-700 font-space-grotesk">
          Onvida Health will implement Longitude Rx's specialty pharmacy model to enhance care for patients requiring complex therapies. By joining forces, both organizations aim to improve patient access and adherence to specialty medications, streamline care coordination, and deliver better outcomes for those with chronic, complex, and rare conditions.
        </p>
        <h2 className="text-2xl font-bold font-outfit mb-2 mt-8">A Platform Built by and for Health Systems</h2>
        <p className="mb-4 text-admiral-700 font-space-grotesk">
          Longitude Rx was launched by a coalition of leading health systems—including Baylor Scott & White Health, Memorial Hermann Health System, Michigan Medicine, Novant Health, and Providence—to address the unique challenges of specialty pharmacy. The platform is designed to help health systems:
        </p>
        <ul className="list-disc list-inside mb-4 text-admiral-700 font-space-grotesk">
          <li>Overcome barriers to specialty medication access</li>
          <li>Support integrated care delivery</li>
          <li>Enable participation in the next wave of rare disease and cell/gene therapy markets</li>
          <li>Leverage collective strengths and build new capabilities</li>
        </ul>
        <h2 className="text-2xl font-bold font-outfit mb-2 mt-8">Leadership Perspective</h2>
        <blockquote className="border-l-4 border-rhodamine-400 pl-4 italic text-admiral-700 mb-4">
          "We are thrilled to welcome Onvida Health as our first external partner," said Jigar Thakkar, PharmD, MBA, MHCDS, FACHE, CEO of Longitude Rx. "This partnership exemplifies our mission: to deliver the right capabilities at the right time to health systems doing the hard work of caring for their communities. Together, we are building a system-aligned model that brings care, coordination, and affordability back into the hands of providers and patients."
        </blockquote>
        <h2 className="text-2xl font-bold font-outfit mb-2 mt-8">About Longitude Rx</h2>
        <p className="mb-4 text-admiral-700 font-space-grotesk">
          Longitude Rx is the first initiative of Longitude Health, a collaborative organization dedicated to transforming health system performance and patient care across the United States. By supporting health systems in managing their specialty pharmacies, Longitude Rx is setting a new standard for specialty medication access, adherence, and outcomes.
        </p>
        <h2 className="text-2xl font-bold font-outfit mb-2 mt-8">About Onvida Health</h2>
        <p className="mb-4 text-admiral-700 font-space-grotesk">
          Onvida Health is a leading healthcare provider in Arizona, committed to delivering high-quality, patient-centered care. By partnering with Longitude Rx, Onvida Health is expanding its specialty pharmacy capabilities to better serve patients with complex health needs.
        </p>
        <div className="mt-8 border-t pt-6 text-sm text-admiral-500 font-space-grotesk">
          <div className="mb-2 font-semibold">For more information, contact:</div>
          Longitude Rx<br />
          Dallas, TX<br />
          <Link href="/contact" className="underline text-rhodamine-700 hover:text-ocean-700">Contact Us</Link>
        </div>
      </div>
    </div>
  );
} 