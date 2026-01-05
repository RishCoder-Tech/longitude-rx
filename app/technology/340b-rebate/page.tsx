"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Shield,
  Target,
  BarChart3,
  DollarSign,
  CheckCircle,
  Zap,
  Network,
  LineChart,
  Sparkles,
  Calendar,
  Clock,
  FileText,
  Database,
  Pill,
  Dna,
  MonitorCheck,
  TrendingDown,
  UserCheck,
  Expand,
  ShieldCheck,
  Timer,
  Award,
  HeartHandshake,
  Lightbulb,
  Cog,
  Users,
  AlertCircle,
  FileCheck,
  Layers,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-animations"
import Image from "next/image"
import ServicesSlider from "@/components/services-slider"
import { useState } from "react"

export default function Rebate340BPage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const coreServices = [
    {
      title: `Unified Data`,
      description: `Unifying fragmented data across multiple TPAs, avoiding lost savings and manual investigations.`,
      valueProps: [
        { label: `Centralized Data Integration`, icon: ShieldCheck },
        { label: `Reduce\nStaff\nBurden`, icon: UserCheck },
      ],
      features: [
        "Unify fragmented data",
        "Capture every eligible claim opportunity",
        "Flag inconsistencies automatically",
        "Surface reason for claim failure",
      ],
      image: "/Data.png",
    },
    {
      title: `Predictive Rebate & Cash Flow Modeling`,
      description: `Project rebate revenue amount and timing including payment delays or disputes.`,
      valueProps: [
        { label: `Forecast\nClarity`, icon: BarChart3 },
        { label: `Protect\nRevenue`, icon: DollarSign },
      ],
      features: [
        "Predict rebate timing with confidence",
        "Quantify expected revenue",
        "Highlight underpayments",
        "Account for risk and variability",
      ],
      image: "/Modeling image.png",
    },
    {
      title: `Centralized Dashboards`,
      description: `Dashboarding pulls all required data (wholesaler, TPA, claim, rebate systems) into one view.`,
      valueProps: [
        { label: `Consistent data\nacross teams`, icon: BarChart3 },
        { label: `Improve\ndecision-making`, icon: Target },
      ],
      features: [
        "Executive summary",
        "Actionable insights",
        "Monitor KPIs",
        "Track receivables",
        "Visualize trends",
        "Customizable dashboard",
      ],
      image: "/Dashboard image.png",
    },
    {
      title: `Claims Submission`,
      description: `Standardized claim files aligned with Beacon requirements.`,
      valueProps: [
        { label: `Early issue\nidentification`, icon: AlertCircle },
        { label: `Automated\nFiling`, icon: FileCheck },
        { label: `Consolidation\nof claims`, icon: Layers },
      ],
      features: [
        "Unified data for seamless submission",
        "Real-time utilization checks",
        "Mismatched field & error detection",
        "Predictive denial prevention",
        "Automated claim submission",
        "Increase probability of claim approval",
      ],
      image: "/Claims image.png",
    },
    {
      title: "Reconciliation Automation",
      description: "Seamlessly match claims to rebates and track every step from submission, validation, and bank payment",
      valueProps: [
        { label: "Automated claim\nmatching", icon: ShieldCheck },
        { label: "Payment\nreconciliation", icon: Clock },
      ],
      features: [
        "Real-time eligibility validation",
        "Support for manufacturer inquiries",
        "End-to-end lifecycle tracking",
        "Audit-ready transparency",
      ],
      image: "/Reconciliation image.png",
    },
    {
      title: "Denial Management",
      description: "Streamlining Beacon denial workflows and prioritizing high-value recovery",
      valueProps: [
        { label: "Rapid Inquiry\nResponse", icon: Clock },
        { label: "Dispute\nResolution", icon: HeartHandshake },
      ],
      features: [
        "Centralize Beacon denials into single workflow",
        "Prioritize high-value denials automatically",
        "Actionable reason code insights",
        "Guided resubmission support",
        "Faster dispute resolution",
        "Increase recovery rate",
      ],
      image: "/Denials image.png",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen pt-24">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold leading-tight pb-4 text-center">
              <span className="bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">
                340B Rebate Management: Unlocking Predictability and Integrity in a Complex Landscape
              </span>
            </h1>
            
            <div className="space-y-6 max-w-4xl mx-auto text-center">
              <p className="text-lg md:text-xl text-admiral-700 leading-relaxed font-space-grotesk">
                The shift toward a retrospective 340B rebate model has fundamentally changed the financial and operational workflows for health systems. By moving from upfront discounts to retrospective rebate payments, this transition introduces additional complexity impacting cash flow, increasing administrative workload, and fragmenting data across systems.
              </p>
              
              <p className="text-lg md:text-xl text-admiral-700 leading-relaxed font-space-grotesk">
                Longitude Rx, in partnership with Innovaccer, delivers a unified, tech-enabled platform built by 340B experts to automate reconciliation, protect cash flow, and ensure compliance.
              </p>
            </div>

            {/* Branding Section */}
            <div className="flex flex-col items-center justify-center space-y-4 my-8 w-full">
              <div className="flex items-center justify-center">
                <Image
                  src="/longitude-logo-navbar.png"
                  alt="Longitude Rx"
                  width={200}
                  height={60}
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
              <div className="text-sm md:text-base text-admiral-600 font-space-grotesk text-center">
                Powered by
              </div>
              <div className="flex items-center justify-center gap-3 my-4">
                <Image
                  src="/gravity logo.jpeg"
                  alt="Innovaccer Gravity"
                  width={200}
                  height={60}
                  className="h-8 md:h-12 w-auto object-contain"
                />
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 w-full">
              {/* Demo CTA */}
              <motion.a
                href="mailto:340Brebate@longituderx.org"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-gulf-400 to-rhodamine-500 hover:from-gulf-500 hover:to-rhodamine-600 text-white rounded-full px-6 py-3 text-base font-semibold font-space-grotesk shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                Request a Demo
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 340B Rebate Model Impacts Section */}
      <section className="w-full py-20 md:py-32 bg-white">
        <div className="container px-6 md:px-8">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent leading-loose pb-4">
              340B Rebate model impacts to Health Systems
            </h2>
            <p className="text-lg md:text-xl text-admiral-700 max-w-4xl leading-relaxed font-space-grotesk text-center">
              The transition from upfront discounts to retrospective rebate models introduces a new layer of administrative complexity for 340B covered entities. Under this structure, hospitals purchase drugs at full price and subsequently share claim-level data to realize 340B savings. This shift requires a highly coordinated approach to data management to ensure that information flows accurately between health systems, manufacturers, and regulatory platforms.
            </p>
          </ScrollReveal>

          {/* Timeline Section */}
          <div className="max-w-6xl mx-auto mb-20">
            <ScrollReveal direction="up">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-gulf-400 via-rhodamine-500 to-ocean-600 rounded-full"></div>
                
                {/* Timeline Points */}
                <div className="relative flex justify-between items-start">
                  {[
                    { year: "2026", label: ["Pilot launches with", "10 drugs"] },
                    { year: "2028", label: "Expands to an additional 20 drugs" },
                  ].map((item, index) => (
                    <div key={item.year} className="flex flex-col items-center flex-1">
                      <div className="relative z-10">
                        <div className="w-4 h-4 bg-admiral-900 rounded-full border-4 border-white shadow-lg"></div>
                        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-admiral-900/20 to-transparent"></div>
                      </div>
                      <div className="mt-6 text-center">
                        <div className="text-2xl font-bold font-outfit text-admiral-900 mb-2">{item.year}</div>
                        <p className="text-sm md:text-base text-admiral-700 font-space-grotesk max-w-[200px]">
                          {Array.isArray(item.label) ? (
                            <>
                              {item.label[0]}
                              <br />
                              {item.label[1]}
                            </>
                          ) : (
                            item.label
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Impact Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {[
              {
                icon: DollarSign,
                title: "Financial Strain",
                description: "Health systems must now manage significantly higher upfront drug expenditures while awaiting rebate processing. This shift ties up substantial working capital, requiring precise financial forecasting to maintain operational stability.",
                gradient: "from-rhodamine-500 to-gulf-500",
              },
              {
                icon: Clock,
                title: "Unpredictable Revenue Cycles",
                description: "Reimbursement relies on unregulated timelines that vary by manufacturer and program maturity. Proactive visibility into pending claims is essential for maintaining predictable month-over-month revenue.",
                gradient: "from-gulf-500 to-ocean-500",
              },
              {
                icon: FileText,
                title: "Increased Operational Burden",
                description: "New reporting mandates significant time from 340B analysts and health system administration. Organizations require specialized technology to automate the manual burden of monitoring portals and compiling complex data files.",
                gradient: "from-ocean-500 to-admiral-500",
              },
              {
                icon: Database,
                title: "Fragmented Data Risks",
                description: "Essential data is often fragmented across multiple TPAs, EHRs, and wholesaler feeds. Without a unified view, normalizing this information for accurate submission and efficient reconciliation is a major challenge.",
                gradient: "from-admiral-500 to-rhodamine-500",
              },
            ].map((impact, index) => (
              <ScrollReveal key={impact.title} delay={index * 0.1} direction="up">
                <motion.div className="group h-full" whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col bg-white/90 backdrop-blur-sm border border-gypsum-200 rounded-xl">
                    <CardHeader className="pb-4 text-center">
                      <div
                        className={`h-12 w-12 rounded-xl bg-gradient-to-br ${impact.gradient} shadow-lg mb-4 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                      >
                        <impact.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg font-outfit font-bold text-admiral-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-admiral-800 group-hover:to-rhodamine-600 transition-all duration-300 text-center">
                        {impact.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-admiral-600 leading-relaxed font-space-grotesk text-sm">{impact.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="w-full py-20 md:py-32">
        <div className="container px-6 md:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 to-rhodamine-700 bg-clip-text text-transparent mb-6">
              340B Rebate Model Platform
            </h2>
            <p className="text-xl text-admiral-600 max-w-5xl mx-auto font-space-grotesk whitespace-nowrap">
              Our platform, powered by Innovaccer's Gravity, simplifies complex daily management.
            </p>
          </ScrollReveal>

          {/* Stepper Bar */}
          <div className="flex gap-6 mb-10 justify-center flex-wrap">
            {[
              { name: "Data", icon: Database },
              { name: "Cash Flow", icon: FileText },
              { name: "Dashboard", icon: MonitorCheck },
              { name: "Claims", icon: FileText },
              { name: "Reconciliation", icon: Sparkles },
              { name: "Denials", icon: Shield },
            ].map((item, idx) => (
              <div
                key={item.name}
                className={`flex items-center gap-3 px-4 py-2 rounded-2xl transition-all duration-300 ${activeIndex === idx ? 'bg-gradient-to-r from-rhodamine-500 via-gulf-500 to-ocean-600 shadow-lg' : 'bg-admiral-200/40'} cursor-pointer`}
                onClick={() => setActiveIndex(idx)}
                style={{ minWidth: 160 }}
              >
                <div className={`rounded-xl p-3 ${activeIndex === idx ? 'bg-white/20 backdrop-blur-sm' : 'bg-white/60'} flex items-center justify-center`}>
                  <item.icon className={`h-6 w-6 ${activeIndex === idx ? 'text-white' : 'text-admiral-900'}`} />
                </div>
                <span className={`font-mono text-base font-semibold tracking-wide ${activeIndex === idx ? 'text-white' : 'text-admiral-900'}`}>
                  {item.name}
                </span>
                {activeIndex === idx && (
                  <span className="ml-2 w-3 h-3 bg-white rounded-full inline-block" />
                )}
              </div>
            ))}
          </div>

          <ServicesSlider
            services={coreServices}
            activeIndex={activeIndex}
            onChange={setActiveIndex}
          />
        </div>
      </section>

      {/* Longitude Rx Differentiated Experience Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-gypsum-50 via-white to-gypsum-100 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/healthcare-technology.jpg"
            alt="Healthcare technology background"
            fill
            className="object-cover opacity-5"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gypsum-50/90 via-white/95 to-gypsum-100/90" />
        </div>
        
        <div className="container px-6 md:px-8 relative z-10">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-rhodamine-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
              <Sparkles className="h-4 w-4 text-rhodamine-600" />
              <span className="text-sm font-semibold text-rhodamine-800 font-space-grotesk tracking-wide">
                Why Choose Longitude Rx?
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent leading-loose pb-4">
              Longitude Rx Differentiated Experience
            </h2>
            <p className="text-lg md:text-xl text-admiral-700 max-w-4xl leading-relaxed font-space-grotesk text-center">
              We provide an integrated, predictive, and transparent ecosystem married with input and guidance from industry experts in specialty pharmacy and 340B program management.
            </p>
          </ScrollReveal>

          {/* Feature Cards - 2x2 Grid */}
          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto mb-16">
            {[
              {
                icon: Lightbulb,
                title: "Expert Design",
                description: "Designed and supported by seasoned 340B experts with deep experience across health systems, manufacturers, and specialty pharmacy",
                gradient: "from-rhodamine-500 to-gulf-500",
              },
              {
                icon: Cog,
                title: "Full Integration",
                description: "Integrates EHR, TPA, wholesaler, and manufacturer data into a single, unified ecosystem thereby eliminating fragmentation across the rebate lifecycle",
                gradient: "from-gulf-500 to-ocean-500",
              },
              {
                icon: ShieldCheck,
                title: "Continuously Compliant",
                description: "Adaptive technology that evolves with 340B regulatory change, enabling proactive monitoring, audit readiness, and risk mitigation",
                gradient: "from-ocean-500 to-admiral-500",
              },
              {
                icon: Users,
                title: "C-Suite Confidence",
                description: "Combines powerful analytics with ongoing expert guidance to simplify operations, resolve exceptions, and support confident decision-making.",
                gradient: "from-admiral-500 to-rhodamine-500",
              },
            ].map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1} direction="up">
                <motion.div className="group h-full" whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col bg-white/80 backdrop-blur-sm border border-gypsum-200 rounded-2xl overflow-hidden">
                    <CardHeader className="pb-6">
                      <div className="flex items-start gap-6">
                        <div
                          className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <feature.icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl font-outfit font-bold text-admiral-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-admiral-800 group-hover:to-rhodamine-600 transition-all duration-300 mb-3">
                            {feature.title}
                          </CardTitle>
                          <p className="text-admiral-600 leading-relaxed font-space-grotesk text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Call to Action */}
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gypsum-200 p-8 md:p-12 max-w-3xl">
              <p className="text-xl md:text-2xl font-space-grotesk font-bold text-rhodamine-600 mb-6">
                Contact us today to schedule a demo.
              </p>
              <motion.a
                href="mailto:340Brebate@longituderx.org"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-gulf-400 via-ocean-500 to-gulf-500 hover:from-gulf-500 hover:via-ocean-600 hover:to-gulf-600 text-white rounded-full px-8 py-4 text-lg font-semibold font-space-grotesk shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
              >
                <span>340Brebate@longituderx.org</span>
                <ArrowRight className="h-5 w-5" />
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
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
                OPTIMIZE YOUR 340B PROGRAM
              </span>
            </motion.div>
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-outfit font-bold bg-gradient-to-r from-white via-gypsum-200 to-gulf-200 bg-clip-text text-transparent leading-loose pb-4"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            >
              Ready to maximize your 340B savings?
            </motion.h2>
            <p className="text-2xl text-gypsum-300 max-w-4xl leading-relaxed font-space-grotesk font-light">
              Join leading health systems who are already capturing millions in 340B program savings with our comprehensive optimization platform.
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

