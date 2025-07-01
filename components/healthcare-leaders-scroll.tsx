"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const healthcareLeaders = [
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
    name: "Onvida Health",
    logo: "/onvida-logo.png",
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

export default function HealthcareLeadersScroll() {
  return (
    <div className="w-full overflow-hidden py-8">
      <div className="flex animate-scroll">
        {/* First set of cards */}
        {healthcareLeaders.map((leader, index) => (
          <motion.div
            key={`first-${index}`}
            className="flex-shrink-0 mx-6 w-64"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gypsum-200 group h-32 flex items-center justify-center">
              <div className="relative w-full h-20 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={leader.logo || "/placeholder.svg"}
                  alt={`${leader.name} logo`}
                  fill
                  className="object-contain transition-all duration-300"
                  sizes="(max-width: 768px) 100vw, 256px"
                />
              </div>
            </div>
          </motion.div>
        ))}
        {/* Duplicate set for seamless loop */}
        {healthcareLeaders.map((leader, index) => (
          <motion.div
            key={`second-${index}`}
            className="flex-shrink-0 mx-6 w-64"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gypsum-200 group h-32 flex items-center justify-center">
              <div className="relative w-full h-20 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={leader.logo || "/placeholder.svg"}
                  alt={`${leader.name} logo`}
                  fill
                  className="object-contain transition-all duration-300"
                  sizes="(max-width: 768px) 100vw, 256px"
                />
              </div>
            </div>
          </motion.div>
        ))}
        {/* Third set for extra smooth scrolling */}
        {healthcareLeaders.map((leader, index) => (
          <motion.div
            key={`third-${index}`}
            className="flex-shrink-0 mx-6 w-64"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gypsum-200 group h-32 flex items-center justify-center">
              <div className="relative w-full h-20 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={leader.logo || "/placeholder.svg"}
                  alt={`${leader.name} logo`}
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
