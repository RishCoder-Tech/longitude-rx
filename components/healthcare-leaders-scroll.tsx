"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const healthcareLeaders = [
  {
    name: "Baylor Scott & White Health",
    stats: { locations: "50+", patients: "5M+", specialties: "100+" },
    logo: "/images/baylor-scott-white-logo.png",
  },
  {
    name: "Memorial Hermann Health System",
    stats: { locations: "30+", patients: "3M+", specialties: "80+" },
    logo: "/images/memorial-hermann-logo.png",
  },
  {
    name: "Novant Health",
    stats: { locations: "40+", patients: "4M+", specialties: "90+" },
    logo: "/images/novant-health-logo.png",
  },
]

export default function HealthcareLeadersScroll() {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-gypsum-100 via-gypsum-50 to-gypsum-100 py-8">
      <div className="flex animate-scroll">
        {/* First set of cards */}
        {healthcareLeaders.map((leader, index) => (
          <motion.div
            key={`first-${index}`}
            className="flex-shrink-0 mx-6 w-96"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gypsum-200 group h-80 flex flex-col">
              {/* Logo Section - Takes up most of the space */}
              <div className="flex-1 flex items-center justify-center mb-6">
                <div className="relative w-full h-32 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={leader.logo || "/placeholder.svg"}
                    alt={`${leader.name} logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                </div>
              </div>

              {/* Stats Section - Compact at bottom */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gypsum-200">
                <div className="text-center">
                  <div className="text-2xl font-bold font-outfit text-rhodamine-600">{leader.stats.locations}</div>
                  <div className="text-xs text-admiral-500 font-space-grotesk">Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold font-outfit text-gulf-500">{leader.stats.patients}</div>
                  <div className="text-xs text-admiral-500 font-space-grotesk">Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold font-outfit text-ocean-600">{leader.stats.specialties}</div>
                  <div className="text-xs text-admiral-500 font-space-grotesk">Specialties</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        {/* Duplicate set for seamless loop */}
        {healthcareLeaders.map((leader, index) => (
          <motion.div
            key={`second-${index}`}
            className="flex-shrink-0 mx-6 w-96"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gypsum-200 group h-80 flex flex-col">
              {/* Logo Section - Takes up most of the space */}
              <div className="flex-1 flex items-center justify-center mb-6">
                <div className="relative w-full h-32 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={leader.logo || "/placeholder.svg"}
                    alt={`${leader.name} logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                </div>
              </div>

              {/* Stats Section - Compact at bottom */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gypsum-200">
                <div className="text-center">
                  <div className="text-2xl font-bold font-outfit text-rhodamine-600">{leader.stats.locations}</div>
                  <div className="text-xs text-admiral-500 font-space-grotesk">Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold font-outfit text-gulf-500">{leader.stats.patients}</div>
                  <div className="text-xs text-admiral-500 font-space-grotesk">Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold font-outfit text-ocean-600">{leader.stats.specialties}</div>
                  <div className="text-xs text-admiral-500 font-space-grotesk">Specialties</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        {/* Third set for extra smooth scrolling */}
        {healthcareLeaders.map((leader, index) => (
          <motion.div
            key={`third-${index}`}
            className="flex-shrink-0 mx-6 w-96"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gypsum-200 group h-80 flex flex-col">
              {/* Logo Section - Takes up most of the space */}
              <div className="flex-1 flex items-center justify-center mb-6">
                <div className="relative w-full h-32 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={leader.logo || "/placeholder.svg"}
                    alt={`${leader.name} logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                </div>
              </div>

              {/* Stats Section - Compact at bottom */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gypsum-200">
                <div className="text-center">
                  <div className="text-2xl font-bold font-outfit text-rhodamine-600">{leader.stats.locations}</div>
                  <div className="text-xs text-admiral-500 font-space-grotesk">Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold font-outfit text-gulf-500">{leader.stats.patients}</div>
                  <div className="text-xs text-admiral-500 font-space-grotesk">Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold font-outfit text-ocean-600">{leader.stats.specialties}</div>
                  <div className="text-xs text-admiral-500 font-space-grotesk">Specialties</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
