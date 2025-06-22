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
                Tech-Enabled Specialty Pharmacy Technology
              </span>
              <br />
              <span className="bg-gradient-to-r from-rhodamine-600 via-gulf-500 to-ocean-600 bg-clip-text text-transparent">
                Built for Health Systems
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
            Transform Rx efficiency & patient care with AI-driven technology that unifies data, streamlines operations, and improves outcomes at every step.
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
              <ul className="list-disc list-inside mt-4 text-lg text-admiral-700">
                <li>Improve patient access and adherence to specialty medications</li>
                <li>Address market, regulatory, and competitive barriers to specialty pharmacy</li>
                <li>Enable participation in rare disease and cell/gene therapy markets</li>
                <li>Leverage member strengths and build new capabilities where needed</li>
                <li>Deliver better outcomes for patients, providers, and communities</li>
              </ul>
            </p>
          </ScrollReveal>

          <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
            {[
              {
                icon: DollarSign,
                title: "AI Cost Intelligence Technology",
                description:
                  "Revolutionary machine learning algorithms that identify cost-saving opportunities, optimize procurement strategies, and eliminate waste across specialty medicine portfolios.",
                features: [
                  "Predictive Cost Analytics",
                  "Real-time Optimization",
                  "Automated Procurement",
                  "Smart Contracting",
                ],
                gradient: "from-rhodamine-500 to-gulf-500",
                bgGradient: "from-rhodamine-50 to-gulf-50",
              },
              {
                icon: Network,
                title: "Smart Health System Integration",
                description:
                  "Seamless API-first architecture that connects with any health system, providing real-time cost synchronization and comprehensive financial analytics.",
                features: ["Universal API", "Real-time Cost Sync", "Advanced Financial Analytics", "Custom Dashboards"],
                gradient: "from-gulf-500 to-ocean-500",
                bgGradient: "from-gulf-50 to-ocean-50",
              },
              {
                icon: Target,
                title: "Specialty Medicine Cost Management",
                description:
                  "Specialized AI models designed for complex specialty medications, rare disease treatments, and high-cost therapeutic protocols with advanced cost optimization.",
                features: ["Specialty Drug Analytics", "Cost Protocols", "Outcome Tracking", "Compliance Monitoring"],
                gradient: "from-ocean-500 to-admiral-500",
                bgGradient: "from-ocean-50 to-admiral-50",
              },
            ].map((solution, index) => (
              <ScrollReveal key={solution.title} delay={index * 0.2} direction="up">
                <motion.div className="group" whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full bg-white/80 backdrop-blur-sm border border-gypsum-200">
                    <CardHeader className="pb-6">
                      <div
                        className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${solution.gradient} shadow-lg mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <solution.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-outfit font-bold text-admiral-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-admiral-800 group-hover:to-rhodamine-600 transition-all duration-300">
                        {solution.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-admiral-600 leading-relaxed font-space-grotesk">{solution.description}</p>
                      <ul className="space-y-3">
                        {solution.features.map((feature) => (
                          <li key={feature} className="flex items-center space-x-3">
                            <div
                              className={`h-5 w-5 rounded-full bg-gradient-to-r ${solution.gradient} flex items-center justify-center flex-shrink-0`}
                            >
                              <CheckCircle className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-admiral-700 font-space-grotesk font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4">
                        <Button
                          className={`w-full bg-gradient-to-r ${solution.gradient} hover:opacity-90 text-white shadow-lg transition-all duration-300 rounded-full font-space-grotesk font-semibold group-hover:scale-105 hover:-translate-y-1`}
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}

      {/* Why Choose Us */}
      <div className="mt-24 max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-6 mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/80 border border-admiral-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
            <CheckCircle className="h-4 w-4 text-admiral-600" />
            <span className="text-sm font-semibold text-admiral-800 font-space-grotesk tracking-wide">
              WHY CHOOSE US
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">
            Why Choose Longitude Rx?
          </h2>
          <p className="text-xl text-admiral-600 max-w-2xl leading-relaxed font-space-grotesk">
            Discover why leading health systems trust Longitude Rx to transform their specialty pharmacy operations.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <ScrollReveal direction="left" className="group">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gypsum-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-admiral-100 to-admiral-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building className="h-6 w-6 md:h-7 md:w-7 text-admiral-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-outfit mb-3 md:mb-4 text-admiral-900">Built for Health Systems</h3>
              <p className="text-admiral-600 leading-relaxed text-base">
                Our solutions are specifically designed to address the unique challenges and opportunities of health system specialty pharmacies. We understand the complexities of your operations and provide tailored solutions that integrate seamlessly with your existing workflows.
              </p>
            </div>
          </ScrollReveal>
  

          <ScrollReveal direction="right" className="group">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gypsum-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-admiral-100 to-admiral-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="h-6 w-6 md:h-7 md:w-7 text-admiral-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-outfit mb-3 md:mb-4 text-admiral-900">Proven Technology</h3>
              <p className="text-admiral-600 leading-relaxed text-base">
                Our AI-enabled technology has demonstrated significant improvements in prescription capture, operational efficiency, and patient outcomes. With cutting-edge technology at your fingertips, you can streamline processes and make data-driven decisions.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" className="group">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gypsum-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-admiral-100 to-admiral-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <HeartHandshake className="h-6 w-6 md:h-7 md:w-7 text-admiral-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-outfit mb-3 md:mb-4 text-admiral-900">Comprehensive Support</h3>
              <p className="text-admiral-600 leading-relaxed text-base">
                From implementation to ongoing optimization, we provide end-to-end support to ensure your success. Our dedicated team of experts works alongside you every step of the way, providing training, guidance, and continuous improvement strategies.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="group">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gypsum-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-admiral-100 to-admiral-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-6 w-6 md:h-7 md:w-7 text-admiral-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-outfit mb-3 md:mb-4 text-admiral-900">Results-Driven</h3>
              <p className="text-admiral-600 leading-relaxed text-base">
                We focus on measurable outcomes, helping you achieve both financial and clinical excellence in specialty pharmacy services. Our technology provides detailed analytics and insights to track your progress and demonstrate ROI.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* CTA Section */}
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
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-rhodamine-400/20 to-gulf-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-ocean-400/20 to-gulf-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container px-6 md:px-8 relative z-10">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <DollarSign className="h-4 w-4 text-gulf-400" />
              <span className="text-sm font-semibold text-gulf-300 font-space-grotesk tracking-wide">
                START OPTIMIZING TODAY
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold bg-gradient-to-r from-white via-gypsum-200 to-gulf-200 bg-clip-text text-transparent">
              Ready to Revolutionize Your Cost Management?
            </h2>
            <p className="text-xl text-gypsum-300 max-w-3xl leading-relaxed font-space-grotesk">
              Join the healthcare revolution and discover how our AI-powered technology can transform your specialty
              medicine cost optimization and deliver unprecedented savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-gulf-400 to-rhodamine-500 hover:from-gulf-300 hover:to-rhodamine-400 text-admiral-900 shadow-2xl shadow-gulf-500/25 hover:shadow-gulf-500/40 transition-all duration-500 rounded-full px-8 py-4 text-lg font-semibold font-space-grotesk group hover:scale-105 hover:-translate-y-1"
                >
                  <DollarSign className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-admiral-200 text-admiral-200 bg-admiral-800/10 rounded-2xl px-10 py-5 text-xl font-semibold font-space-grotesk backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
