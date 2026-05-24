"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Activity,
  ShieldCheck,
  Network,
  Wallet,
  Database,
  MessageSquare,
  ClipboardCheck,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-animations"
import DataFlowAnimation from "@/components/data-flow-animation"
import Image from "next/image"

const capabilities = [
  {
    icon: ClipboardCheck,
    title: "Prior authorization, started at the point of care",
    description:
      "Benefit verification and prior authorization initiate the moment a specialty prescription is written. Status, missing documentation, and payer-specific requirements are visible in one place. The result is fewer handoffs and a shorter path to first dose.",
    gradient: "from-rhodamine-500 to-gulf-500",
  },
  {
    icon: Network,
    title: "Routing that protects the script",
    description:
      "Intelligent routing directs each prescription to the most appropriate dispensing point, prioritizing the health system's own specialty pharmacy where clinically and contractually appropriate. Allowing for continuity of patient care.",
    gradient: "from-gulf-500 to-ocean-500",
  },
  {
    icon: Wallet,
    title: "Real-time prescription benefit and affordability",
    description:
      "Real-time visibility into coverage, cost, and alternatives at the point of care. Patient financial assistance options surface in workflow, before the call to the patient.",
    gradient: "from-ocean-500 to-admiral-500",
  },
  {
    icon: ShieldCheck,
    title: "340B pre-qualification and program integrity",
    description:
      "340B eligibility is checked before financial exposure begins, with a compliance-grade audit trail. The platform supports HRSA's patient definition standard, contract pharmacy review, and ongoing claims monitoring for duplicate discounts and diversion risk.",
    gradient: "from-admiral-500 to-rhodamine-500",
  },
  {
    icon: Database,
    title: "One source of truth for specialty pharmacy data",
    description:
      "LRx360 unifies claims, EMR, pharmacy, wholesaler, 340B TPA, and third-party data into one view. Care gaps, workflow bottlenecks, and performance trends are visible at the program level, not stitched together after the fact.",
    gradient: "from-rhodamine-600 to-ocean-600",
  },
  {
    icon: MessageSquare,
    title: "Patient engagement",
    description:
      "A patient portal with prescription status, refill reminders, and direct communication channels. Fewer inbound calls to the pharmacy team. More transparency for the patient.",
    gradient: "from-gulf-400 to-rhodamine-500",
  },
]

const faqs = [
  {
    question: "What is LRx360?",
    answer:
      "LRx360 is the specialty pharmacy intelligence platform from Longitude Rx co-developed with Innovaccer. It verifies benefits, initiates prior authorization, routes prescriptions, validates affordability, and pre-qualifies 340B at the point of care. It comes with an LRx team integrated into the health system, so the platform is operationalized day one.",
  },
  {
    question: "Does LRx360 work with our existing EMR and dispensing systems?",
    answer:
      "Yes. LRx360 uses pre-built integrations with major EMR vendors and supports HL7 and FHIR for bidirectional exchange across electronic health records, pharmacy, billing, and dispensing systems.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Initial modules typically reach go-live in 8–12 weeks using validated playbooks and pre-built data integrations. Full deployment is modular and phased to the system's priorities.",
  },
  {
    question: "Can we start with one module and expand later?",
    answer:
      "Yes. Most systems start with the highest-friction workflow first, usually prior authorization or 340B program integrity, and add modules as operational value is proven. The architecture is modular by design.",
  },
  {
    question: "How is this different from a 340B optimization tool?",
    answer:
      "LRx360 manages the full specialty pharmacy lifecycle, from prescription intake through dispensing and adherence. 340B pre-qualification and program integrity checks are part of that lifecycle, not the whole product. The objective is program integrity and operational coordination, not financial extraction.",
  },
]

export default function TechnologyPage() {
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
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-rhodamine-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
              <Activity className="h-4 w-4 text-rhodamine-600" />
              <span className="text-sm font-semibold text-rhodamine-800 font-space-grotesk tracking-wide">
                INTELLIGENT SPECIALTY PHARMACY SOLUTION
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold leading-tight pb-4">
              <span className="bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">
                The first end-to-end specialty pharmacy platform built for health systems, by health systems.
              </span>
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-3 my-6">
              <span className="text-lg md:text-xl text-admiral-700 font-space-grotesk font-medium">
                LRx360 powered by Innovaccer Gravity
              </span>
              <div className="flex h-12 max-w-[220px] items-center justify-center md:h-16 md:max-w-[280px]">
                <Image
                  src="/gravity logo.jpeg"
                  alt="Innovaccer Gravity"
                  width={320}
                  height={96}
                  className="h-full w-auto max-w-full object-contain"
                  sizes="(max-width: 768px) 11rem, 14rem"
                />
              </div>
            </div>

            <p className="text-lg md:text-xl text-admiral-700 max-w-3xl leading-relaxed font-space-grotesk">
              Co-developed with Innovaccer, LRx360 brings specialty pharmacy data and workflows into one place, so
              prior authorization, routing, financial assistance, and 340B pre-qualification happen before the
              prescription is released.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-gulf-400 to-rhodamine-500 hover:from-gulf-500 hover:to-rhodamine-600 text-white shadow-2xl shadow-gulf-500/25 hover:shadow-gulf-500/40 transition-all duration-500 rounded-2xl px-10 py-5 text-lg font-semibold font-space-grotesk group hover:scale-105"
                >
                  Talk to our team
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
              <a href="#capabilities">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-2xl px-10 py-5 text-lg font-semibold font-space-grotesk border-admiral-300 text-admiral-800 hover:bg-gypsum-100"
                >
                  See how it works
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive data flow */}
      <section className="w-full py-20 md:py-32">
        <div className="container px-6 md:px-8">
          <ScrollReveal direction="up">
            <DataFlowAnimation headline="NOT NEXT GEN IN" />
          </ScrollReveal>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="w-full py-20 md:py-32 bg-gradient-to-br from-gypsum-100/80 via-gypsum-200/30 to-gypsum-300/30 backdrop-blur-sm relative scroll-mt-24">
        <div className="absolute inset-0">
          <Image
            src="/images/healthcare-technology.jpg"
            alt="Healthcare technology background"
            fill
            className="object-cover opacity-5"
          />
        </div>

        <div className="container px-6 md:px-8 relative z-10">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent leading-loose pb-4">
              What LRx360 does
            </h2>
            <p className="text-lg md:text-xl text-admiral-600 max-w-4xl leading-relaxed font-space-grotesk">
              Specialty pharmacy is the rate-limiting step between a complex prescription and a patient on therapy.
              LRx360 brings the work that decides whether a patient ever starts therapy, including benefit verification,
              prior authorization, routing, affordability, and 340B qualification, forward into one workflow, before the
              prescription is released.
            </p>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {capabilities.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.08} direction="up">
                <motion.div className="group h-full" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full bg-white/80 backdrop-blur-sm border border-gypsum-200">
                    <CardHeader className="pb-4">
                      <div
                        className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <item.icon className="h-7 w-7 text-white" />
                      </div>
                      <CardTitle className="text-xl font-outfit font-bold text-admiral-800 leading-snug">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-admiral-600 leading-relaxed font-space-grotesk">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Managed product */}
      <section className="w-full py-20 md:py-32">
        <div className="container px-6 md:px-8">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent leading-loose pb-4">
              LRx360 is a managed product, not just software
            </h2>
            <p className="text-lg md:text-xl text-admiral-600 leading-relaxed font-space-grotesk">
              Longitude Rx embedded care teams work inside your health system, supporting prior authorization, refill
              management, and day to day patient communication. A central support hub coordinates remotely across
              multi-site programs. The platform is the connective tissue; the team is what makes it work.
            </p>
            <Link href="/contact" className="pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-gulf-400 to-rhodamine-500 hover:from-gulf-500 hover:to-rhodamine-600 text-white shadow-xl rounded-2xl px-10 py-5 text-lg font-semibold font-space-grotesk"
              >
                Request a demo
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Innovaccer partnership */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-gypsum-50 via-white to-gypsum-100">
        <div className="container px-6 md:px-8">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-6 mb-12 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent leading-loose pb-4">
              Co-developed with Innovaccer
            </h2>
            <p className="text-lg md:text-xl text-admiral-600 leading-relaxed font-space-grotesk text-left md:text-center">
              LRx360 is co-developed with Innovaccer and powered by their Gravity platform. Longitude Rx brings the
              clinical, operational, and specialty pharmacy experience, built from inside health systems by clinical
              pharmacists and operational leaders who ran these programs. Innovaccer brings the healthcare data
              infrastructure that connects clinical, financial, and operational systems into a single working layer.
            </p>
            <p className="text-lg text-admiral-600 leading-relaxed font-space-grotesk text-left md:text-center">
              A partnership that solves both a workflow and data problem for a specialty pharmacy so patients reach
              complex therapies faster without unnecessary barriers or delays, and your program is positioned to perform
              at its highest level.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
            <div className="flex h-12 w-full max-w-xs shrink-0 items-center justify-center md:h-16 md:max-w-sm">
              <Image
                src="/gravity logo.jpeg"
                alt="Gravity by Innovaccer logo"
                width={320}
                height={120}
                className="h-full w-auto max-w-full object-contain"
              />
            </div>
            <div className="flex-1">
              <p className="text-admiral-900 leading-relaxed font-space-grotesk text-lg text-left">
                <strong className="font-outfit font-bold">Gravity by Innovaccer</strong> is the intelligent,
                healthcare-native platform powering our solution by bringing together data, AI, and workflow automation
                in one unified foundation. By securely connecting clinical, financial, and operational systems, Gravity
                creates a single source of truth for real-time decision-making. Its AI-first architecture enables rapid
                deployment, scalable automation, and measurable performance gains. This powerful backbone allows us to
                deliver faster innovation, smarter workflows, and better outcomes across the specialty pharmacy journey.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-20 md:py-32 bg-white">
        <div className="container px-6 md:px-8">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">
              Questions we get from health system pharmacy leaders
            </h2>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <ScrollReveal key={faq.question} direction="up" delay={index * 0.05}>
                <Card className="border border-gypsum-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-outfit font-bold text-admiral-900">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-admiral-600 leading-relaxed font-space-grotesk">{faq.answer}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
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
        <div className="container px-6 md:px-8 relative z-10 pb-8">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold bg-gradient-to-r from-white via-gypsum-200 to-gulf-200 bg-clip-text text-transparent leading-tight pb-4">
              See LRx360 in your environment
            </h2>
            <p className="text-xl text-gypsum-300 leading-relaxed font-space-grotesk font-light">
              Specialty pharmacy programs do not look the same from one health system to the next. Tell us about your
              program, and we&apos;ll walk you through where LRx360 fits, what your team would see in the first 90 days,
              and how the work gets staffed alongside yours.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-gulf-400 to-rhodamine-500 hover:from-gulf-500 hover:to-rhodamine-600 text-white shadow-2xl shadow-gulf-500/25 rounded-2xl px-10 py-5 text-xl font-semibold font-space-grotesk hover:scale-105 transition-transform"
              >
                Request a demo
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
