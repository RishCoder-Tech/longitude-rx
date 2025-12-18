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
          <strong>Innovaccer and Longitude Rx Partner to Transform Health System Specialty Pharmacy with the Gravity Platform!</strong> <a href="https://www.hcinnovationgroup.com/clinical-it/pharmacy/news/55296372/longitude-rxs-first-external-partner-arizonas-onvida-health" target="_blank" rel="noopener noreferrer" className="underline text-gulf-700 hover:text-ocean-700">Learn More</a>.
        </span>
      </div>

      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-40 relative overflow-visible bg-gradient-to-br from-gypsum-50 via-white to-gypsum-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/data-analytics.jpg"
            alt="Healthcare data analytics"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gypsum-50/90 via-white/95 to-gypsum-100/90" />
        </div>

        <div className="container px-6 md:px-8 relative z-10 pb-8">
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-outfit font-bold leading-loose pb-4">
              <span className="bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">
                Tech-Enabled Specialty Pharmacy Platform
              </span>
              <br />
              <span className="bg-gradient-to-r from-rhodamine-600 via-gulf-500 to-ocean-600 bg-clip-text text-transparent">
                Built for Health Systems
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
              Transform the specialty pharmacy patient journey by integrated technology that strengthens patient and clinician support through unified data and streamlined workflows, improving outcomes at every step.
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

      {/* Unified Specialty Pharmacy Platform Section */}
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
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent leading-loose pb-4">
              Unified Specialty Pharmacy Platform
            </h2>
            <p className="text-xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
              A purpose-built, unified platform to manage the entire specialty pharmacy lifecycle from prescription intake to therapy fulfillment.
            </p>
          </ScrollReveal>

          <div className="grid gap-8 lg:grid-cols-2 max-w-7xl mx-auto items-stretch">
            {[
              {
                icon: Zap,
                title: "Reduced Administrative Burden",
                description: "Automate the most time-consuming operational workflows across prior authorization, financial assistance, refills, and appeals. By digitally eliminating manual tasks and handoffs, your teams gain back time to focus on patient care instead of paperwork.",
                gradient: "from-rhodamine-500 to-gulf-500",
              },
              {
                icon: Target,
                title: "End-to-End Transparency",
                description: "Full, real-time visibility into every step of the patient journey, from prescription order to medication in hand. Gain immediate, actionable insights into status, delays, and outcomes, eliminating uncertainty or blind spots.",
                gradient: "from-gulf-500 to-ocean-500",
              },
              {
                icon: Shield,
                title: "340B Compliance & Financial Safeguarding",
                description: "Standardize, automate, and protect your 340B program with built-in compliance checks and manufacturer safeguards. Ensure every eligible claim is captured, every rule is enforced, and every dollar is protected.",
                gradient: "from-ocean-500 to-admiral-500",
              },
              {
                icon: Network,
                title: "Connected Ecosystem",
                description: "Purpose-built for scale, our infrastructure replaces fragmented tools with one connected ecosystem, accelerating time-to-therapy. Unite health systems into a single, connected network to unlock new opportunities for market access.",
                gradient: "from-admiral-500 to-rhodamine-500",
              },
            ].map((solution, index) => (
              <ScrollReveal key={solution.title} delay={index * 0.1} direction="up">
                <motion.div className="group h-full" whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col min-h-[280px] bg-white/80 backdrop-blur-sm border border-gypsum-200">
                    <CardHeader className="pb-6">
                      <div
                        className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${solution.gradient} shadow-lg mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <solution.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-outfit font-bold text-admiral-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-admiral-800 group-hover:to-rhodamine-600 transition-all duration-300">
                        {solution.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-admiral-600 leading-relaxed font-space-grotesk">{solution.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Support Section */}
      <section className="w-full py-20 md:py-32">
        <div className="container px-6 md:px-8">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-ocean-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
              <Cpu className="h-4 w-4 text-ocean-600" />
              <span className="text-sm font-semibold text-ocean-800 font-space-grotesk tracking-wide">
                OPERATIONAL SUPPORT
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">
              Comprehensive Platform Capabilities
            </h2>
            <p className="text-xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
              Experience leadership and embedded staff support health system pharmacy teams with intelligent workflows and real-time insights.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Automated Workflows",
                description: "Workflows driven by clear protocols for specialty prescriptions with automated handoffs between tasks.",
                gradient: "from-rhodamine-500 to-gulf-500",
              },
              {
                icon: Network,
                title: "Data Integration",
                description: "System data integration across EMR, TPA, Payers and wholesalers.",
                gradient: "from-gulf-500 to-ocean-500",
              },
              {
                icon: Target,
                title: "Single Source",
                description: "Integrated system data becomes single source of truth driving transparency across the patient journey.",
                gradient: "from-ocean-500 to-admiral-500",
              },
              {
                icon: BarChart3,
                title: "Prioritized Worklists",
                description: "Smart queues powered by intelligent routing adjusts staff work priority based on availability, expertise and urgency.",
                gradient: "from-admiral-500 to-rhodamine-500",
              },
              {
                icon: LineChart,
                title: "Real-time Analytics",
                description: "Performance dashboards track outcomes, including financial performance, approval rates and task cycle times.",
                gradient: "from-rhodamine-600 to-ocean-600",
              },
            ].map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1} direction="up">
                <motion.div className="group" whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 h-full bg-white/80 backdrop-blur-sm border border-gypsum-200">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg mb-6 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                      >
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-4 text-admiral-800 font-outfit group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-admiral-800 group-hover:to-rhodamine-600 transition-all duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-admiral-600 leading-relaxed font-space-grotesk text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Innovaccer Partnership Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-gypsum-50 via-white to-gypsum-100">
        <div className="container px-6 md:px-8">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-ocean-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
              <Users className="h-4 w-4 text-ocean-600" />
              <span className="text-sm font-semibold text-ocean-800 font-space-grotesk tracking-wide">
                PARTNERSHIP
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent leading-loose pb-4">
              Your Health System's success, amplified by our partnership
            </h2>
            <p className="text-xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
              Innovaccer's healthcare intelligence platform combined with Longitude Rx's deep clinical and operational experience to optimize your specialty pharmacy performance.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
            <ScrollReveal direction="up" className="group">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full bg-white/80 backdrop-blur-sm border border-gypsum-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-rhodamine-500 to-gulf-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-outfit font-bold text-admiral-800 mb-4">
                    Specialty Expertise Meets AI Innovation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-admiral-600 leading-relaxed font-space-grotesk">
                    Longitude Rx contributes its proven specialty pharmacy experience and 340B optimization strategies. Innovaccer Gravity provides the scalable technology and robust AI backbone. This powerful combination ensures health systems benefit from unparalleled expertise paired with cutting-edge innovation.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1} className="group">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full bg-white/80 backdrop-blur-sm border border-gypsum-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-gulf-500 to-ocean-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-outfit font-bold text-admiral-800 mb-4">
                    Reliable Workflows, Accelerated Deployment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-admiral-600 leading-relaxed font-space-grotesk">
                    Our solution leverages Longitude Rx's refined specialty pharmacy protocols and workflows, alongside Innovaccer's pre-built data models and integrations. This comprehensive preparation ensures a dramatically faster deployment and delivers a measurable impact almost immediately.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2} className="group">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full bg-white/80 backdrop-blur-sm border border-gypsum-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-ocean-500 to-admiral-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-outfit font-bold text-admiral-800 mb-4">
                    Agile Response to Industry Change
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-admiral-600 leading-relaxed font-space-grotesk">
                    This partnership is designed to keep you ahead of the curve as regulations shift and new opportunities emerge. Longitude Rx actively identifies emerging challenges, allowing Innovaccer to rapidly develop and deploy next-generation solutions.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-ocean-50 to-gulf-50 backdrop-blur-sm border border-ocean-200">
              <CardHeader>
                <CardTitle className="text-2xl font-outfit font-bold text-admiral-900 mb-4">
                  Gravity by Innovaccer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-admiral-700 leading-relaxed font-space-grotesk text-lg">
                  is the intelligent, healthcare-native platform powering our solution by bringing together data, AI, and workflow automation in one unified foundation. By securely connecting clinical, financial, and operational systems, Gravity creates a single source of truth for real-time decision-making. Its AI-first architecture enables rapid deployment, scalable automation, and measurable performance gains. This powerful backbone allows us to deliver faster innovation, smarter workflows, and better outcomes across the specialty pharmacy journey.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Q&A Section */}
      <section className="w-full py-20 md:py-32 bg-white">
        <div className="container px-6 md:px-8">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-rhodamine-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
              <Target className="h-4 w-4 text-rhodamine-600" />
              <span className="text-sm font-semibold text-rhodamine-800 font-space-grotesk tracking-wide">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">
              Questions & Answers
            </h2>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-6">
            <ScrollReveal direction="up">
              <Card className="border border-gypsum-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-outfit font-bold text-admiral-900">
                    How does this solution differentiate itself from standard 340B optimization software?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-admiral-600 leading-relaxed font-space-grotesk">
                    Unlike standard 340B software vendors, our platform provides comprehensive management for the <strong>complete specialty pharmacy lifecycle</strong>. This includes every stage: from prescription intake, precise prior authorization, and financial assistance coordination, through to dispensing and medication adherence monitoring.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <Card className="border border-gypsum-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-outfit font-bold text-admiral-900">
                    Is the specialty pharmacy platform compatible with existing EMR and dispensing systems?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-admiral-600 leading-relaxed font-space-grotesk">
                    Yes, we focus on seamless interoperability. We utilize pre-built <strong>integrations with major EMR providers</strong> and support modern, standardized <strong>HL7/FHIR protocols</strong> for efficient, bidirectional data exchange across your electronic health records, billing, and dispensing systems.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <Card className="border border-gypsum-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-outfit font-bold text-admiral-900">
                    What is the typical implementation timeline for the platform?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-admiral-600 leading-relaxed font-space-grotesk">
                    Our solution leverages pre-built data models and integrations, enabling dramatically faster deployment compared to traditional implementations. Most health systems see measurable impact within weeks rather than months, with full deployment typically completed in a fraction of the time required by standard specialty pharmacy platforms.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section - replaced with homepage version */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-admiral-900 via-ocean-800 to-rhodamine-900 text-white relative overflow-visible">
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
        <div className="container px-6 md:px-8 relative z-10 pb-8">
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
              className="text-5xl md:text-6xl lg:text-7xl font-outfit font-bold bg-gradient-to-r from-white via-gypsum-200 to-gulf-200 bg-clip-text text-transparent leading-loose pb-4"
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
