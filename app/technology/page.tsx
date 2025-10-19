"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Users,
  Globe,
  Network,
  DollarSign,
  Target,
  BarChart3,
  ShoppingCart,
  LineChart,
  Building,
  Cpu,
  HeartHandshake,
  Rocket,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-animations"
import DataFlowAnimation from "@/components/data-flow-animation"
import Image from "next/image"
import { useState } from "react"

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Onvida Health Announcement */}
      <div className="w-full bg-gradient-to-r from-rhodamine-100 via-gulf-100 to-ocean-100 py-3 px-4 text-center text-lg font-semibold text-rhodamine-800 shadow-md mb-2">
        <span className="mr-2">🚀</span>
        <span>
          <strong>Announcement:</strong> Longitude Rx welcomes <strong>Onvida Health</strong> as our first external partner, expanding our specialty pharmacy technology beyond founding health systems! <a href="https://www.hcinnovationgroup.com/clinical-it/pharmacy/news/55296372/longitude-rxs-first-external-partner-arizonas-onvida-health" target="_blank" rel="noopener noreferrer" className="underline text-gulf-700 hover:text-ocean-700">Learn more</a>.
        </span>
      </div>

      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-40 relative overflow-hidden bg-gradient-to-br from-gypsum-50 via-white to-gypsum-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/data-analytics.jpg"
            alt="Healthcare data analytics"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gypsum-50/90 via-white/95 to-gypsum-100/90" />
        </div>

        <div className="container px-6 md:px-8 relative z-10">
          <motion.div
            className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-rhodamine-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
              <DollarSign className="h-4 w-4 text-rhodamine-600" />
              <span className="text-sm font-semibold text-rhodamine-800 font-space-grotesk tracking-wide">
                SPECIALTY PHARMACY TECHNOLOGY
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-outfit font-bold leading-tight">
              <span className="bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">
                Tech-Enabled Specialty Pharmacy Platform
              </span>
              <br />
              <span className="bg-gradient-to-r from-rhodamine-600 via-gulf-500 to-ocean-600 bg-clip-text text-transparent">
                Built for Health Systems
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
            Transform patient pharmacy care coordination and script capture with next-gen technology that unifies data, streamlines operations, and improves outcomes at every step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Data Flow Animation Section */}
      <section className="w-full py-20 md:py-32">
        <div className="container px-6 md:px-8">


          <ScrollReveal direction="up">
            <DataFlowAnimation />
          </ScrollReveal>
        </div>
      </section>

      {/* Main Solutions Grid */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-gypsum-100/80 via-gypsum-200/30 to-gypsum-300/30 backdrop-blur-sm relative">
        <div className="absolute inset-0">
          <Image
            src="/images/healthcare-technology.jpg"
            alt="Healthcare technology background"
            fill
            className="object-cover opacity-5"
          />
        </div>

        <div className="container px-6 md:px-8 relative z-10">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-6 mb-20">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">
              Capabilities for Health Systems
            </h2>
            <p className="text-xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
              Our solutions empower health systems to:
            </p>
          </ScrollReveal>

          <div className="grid gap-8 lg:grid-cols-5 max-w-7xl mx-auto items-stretch">
            {[
              {
                icon: HeartHandshake,
                title: "Improve patient access and adherence",
                description: "Boost access to specialty medications and support adherence for better health outcomes.",
                gradient: "from-rhodamine-500 to-gulf-500",
              },
              {
                icon: Shield,
                title: "Address market, regulatory, and competitive barriers",
                description: "Overcome challenges in specialty pharmacy with compliance and market expertise.",
                gradient: "from-gulf-500 to-ocean-500",
              },
              {
                icon: Cpu,
                title: "Enable participation in rare disease and cell/gene therapy markets",
                description: "Expand your reach into advanced therapies and rare disease markets.",
                gradient: "from-ocean-500 to-admiral-500",
              },
              {
                icon: Users,
                title: "Leverage member strengths and build new capabilities",
                description: "Collaborate and innovate to build new strengths and capabilities where needed.",
                gradient: "from-admiral-500 to-rhodamine-500",
              },
              {
                icon: Globe,
                title: "Deliver better outcomes for patients, providers, and communities",
                description: "Drive improved outcomes for all stakeholders in the specialty pharmacy ecosystem.",
                gradient: "from-rhodamine-600 to-ocean-600",
              },
            ].map((solution, index) => (
              <ScrollReveal key={solution.title} delay={index * 0.1} direction="up">
                <motion.div className="group h-full" whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col min-h-[320px] bg-white/80 backdrop-blur-sm border border-gypsum-200">
                    <CardHeader className="pb-6">
                      <div
                        className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${solution.gradient} shadow-lg mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <solution.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-lg font-outfit font-bold text-admiral-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-admiral-800 group-hover:to-rhodamine-600 transition-all duration-300">
                        {solution.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-admiral-600 leading-relaxed font-space-grotesk text-sm">{solution.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different Section (from About page) */}
      <section className="w-full py-20 md:py-32">
        <div className="container px-6 md:px-8">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-ocean-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
              <Building className="h-4 w-4 text-ocean-600" />
              <span className="text-sm font-semibold text-ocean-800 font-space-grotesk tracking-wide">
                WHY WE'RE DIFFERENT
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">
              We're not just a platform, we're a partner
            </h2>
            <p className="text-xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
              We go beyond technology to become an extension of your team—collaborating closely, sharing expertise, and supporting your goals at every step. Longitude Rx is your partner in specialty pharmacy transformation, working side-by-side to drive sustainable growth and deliver better outcomes for your patients and your health system.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <ScrollReveal direction="left" className="group">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gypsum-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-rhodamine-500 via-gulf-400 to-ocean-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield className="h-6 w-6 md:h-7 md:w-7 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-outfit mb-3 md:mb-4 text-admiral-900">Built by health systems</h3>
                <p className="text-admiral-600 leading-relaxed text-base">
                  Owned & governed by health system CEOs, our platform is built with deep understanding of healthcare operations. We know your challenges because we've lived them, ensuring solutions that truly work for health systems.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" className="group">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gypsum-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-gulf-500 via-ocean-400 to-rhodamine-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Rocket className="h-6 w-6 md:h-7 md:w-7 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-outfit mb-3 md:mb-4 text-admiral-900">Built for health systems</h3>
                <p className="text-admiral-600 leading-relaxed text-base">
                  Designed by pharmacy leadership, our solutions are specifically crafted to address the unique challenges and opportunities of health system specialty pharmacies. We understand the complexities of your operations and provide tailored solutions that integrate seamlessly with your existing workflows.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="group">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gypsum-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-rhodamine-500 via-gulf-400 to-ocean-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Users className="h-6 w-6 md:h-7 md:w-7 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-outfit mb-3 md:mb-4 text-admiral-900">Integrated care teams</h3>
                <p className="text-admiral-600 leading-relaxed text-base">
                  Our specialized teams become an extension of your organization, working directly within your health system to optimize specialty pharmacy operations, drive revenue growth, and enhance patient care outcomes. Focused on improving health system outcomes and patient care.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" className="group">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gypsum-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-gulf-500 via-ocean-400 to-rhodamine-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Rocket className="h-6 w-6 md:h-7 md:w-7 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-outfit mb-3 md:mb-4 text-admiral-900">Powered by next gen technology</h3>
                <p className="text-admiral-600 leading-relaxed text-base">
                  Our next-gen technology has demonstrated significant improvements in prescription capture, operational efficiency, and patient outcomes. With cutting-edge technology at your fingertips, you can streamline processes and make data-driven decisions.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section - replaced with homepage version */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-admiral-900 via-ocean-800 to-rhodamine-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/medical-innovation.jpg"
            alt="Medical innovation background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-admiral-900/90 via-ocean-800/90 to-rhodamine-900/90" />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-rhodamine-400/20 to-gulf-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-ocean-400/20 to-gulf-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
          />
        </div>
        <div className="container px-6 md:px-8 relative z-10">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-10 max-w-5xl mx-auto">
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 shadow-lg"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="h-4 w-4 text-gulf-400" />
              </motion.div>
              <span className="text-sm font-semibold text-gulf-300 font-space-grotesk tracking-wide">
                START OPTIMIZING TODAY
              </span>
            </motion.div>
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-outfit font-bold bg-gradient-to-r from-white via-gypsum-200 to-gulf-200 bg-clip-text text-transparent leading-normal"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            >
              Ready to grow your specialty pharmacy program?
            </motion.h2>
            <p className="text-2xl text-gypsum-300 max-w-4xl leading-relaxed font-space-grotesk font-light">
              Join leading health systems who are already capturing millions of added revenue on specialty medications and therapies.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 pt-8">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-gulf-400 to-rhodamine-500 hover:from-gulf-500 hover:to-rhodamine-600 text-white shadow-2xl shadow-gulf-500/25 hover:shadow-gulf-500/40 transition-all duration-500 rounded-2xl px-10 py-5 text-xl font-semibold font-space-grotesk group hover:scale-105 hover:-translate-y-2"
                >
                  <motion.div
                    animate={{ rotate: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <span className="mr-3 h-6 w-6">🎯</span>
                  </motion.div>
                  Contact Us
                  <motion.div
                    className="ml-3"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowRight className="h-6 w-6" />
                  </motion.div>
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
