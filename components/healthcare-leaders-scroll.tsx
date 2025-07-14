"use client"

import { motion } from "framer-motion"
import Image from "next/image"

type Partner = { name: string; logo: string };

type CarouselProps = {
  partners: Partner[];
};

const foundingPartners = [
  {
    name: "Baylor Scott & White Health",
    logo: "/images/baylor-scott-white-logo.png",
  },
  {
    name: "Memorial Hermann Health System",
    logo: "/images/memorial-hermann-logo.png",
  },
  {
    name: "Novant Health",
    logo: "/images/novant-health-logo.png",
  },
  {
    name: "Michigan Medicine",
    logo: "/images/michigan-medicine-logo.png",
  },
  {
    name: "Providence",
    logo: "/images/providence-logo.png",
  },
]

const homePartners = [
  ...foundingPartners,
  {
    name: "Onvida Health",
    logo: "/onvida-logo.png",
  },
]

function Carousel({ partners }: CarouselProps) {
  return (
    <div className="w-full overflow-hidden py-8">
      <div className="flex animate-scroll">
        {partners.map((partner: Partner, index: number) => (
          <motion.div
            key={`first-${index}`}
            className="flex-shrink-0 mx-6 w-64"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gypsum-200 group h-32 flex items-center justify-center">
              <div className="relative w-full h-20 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain transition-all duration-300"
                  sizes="(max-width: 768px) 100vw, 256px"
                />
              </div>
            </div>
          </motion.div>
        ))}
        {partners.map((partner: Partner, index: number) => (
          <motion.div
            key={`second-${index}`}
            className="flex-shrink-0 mx-6 w-64"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gypsum-200 group h-32 flex items-center justify-center">
              <div className="relative w-full h-20 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain transition-all duration-300"
                  sizes="(max-width: 768px) 100vw, 256px"
                />
              </div>
            </div>
          </motion.div>
        ))}
        {partners.map((partner: Partner, index: number) => (
          <motion.div
            key={`third-${index}`}
            className="flex-shrink-0 mx-6 w-64"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gypsum-200 group h-32 flex items-center justify-center">
              <div className="relative w-full h-20 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain transition-all duration-300"
                  sizes="(max-width: 768px) 100vw, 256px"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export function HealthcareLeadersScroll() {
  return <Carousel partners={foundingPartners} />;
}

export function HealthcareLeadersScrollHome() {
  return <Carousel partners={homePartners} />;
}
