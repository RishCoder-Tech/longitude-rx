"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Brain,
  ChartBar,
  Users,
  Cog,
  ArrowRight,
  Zap,
  Shield,
  LineChart,
  Network,
  DollarSign,
  Target,
  BarChart3,
  CheckCircle,
  Building,
  Cpu,
  HeartHandshake,
  TrendingUp,
  Activity,
  Globe,
  Award,
  Star,
  Sparkles,
  UserCheck,
  Heart,
  Clipboard,
  FileText,
  Truck,
  BarChart,
  Database,
  ShieldCheck,
  Timer,
  Pill,
  Dna,
  MonitorCheck,
  Expand,
  TrendingDown,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-animations"
import Image from "next/image"
import CounterAnimation from "@/components/counter-animation"
import ServicesSlider from "@/components/services-slider"
import { HealthcareLeadersScroll } from "@/components/healthcare-leaders-scroll"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export default function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const coreServices = [
    {
      title: `Prescription Capture`,
      description: `Deliver integrated clinical pharmacy services to support\npatient care and specialty drug access`,
      valueProps: [
        { label: `Reduce\nstaff\nburden`, icon: TrendingDown },
        { label: `Improve\npatient\nexperience`, icon: UserCheck },
        { label: `Increase Rx\nrevenue`, icon: DollarSign },
      ],
      features: [
        "Embedded care teams",
        "Support hub",
        "Medication Capture Strategy",
        "Prescription Retention",
        "Rx Channel Optimization",
        "Employee and self-funded plan script capture",
      ],
      image: "/ServicesSlider/PrescriptionCapture.png",
    },
    {
      title: `340B Optimization`,
      description: `Maximize 340B program value through operational and\nstrategic services`,
      valueProps: [
        { label: `Centralize\nMonitoring`, icon: MonitorCheck },
        { label: `Expand\nmargin\nopportunities`, icon: Expand },
        { label: `Improve\nProgram\nCompliance`, icon: ShieldCheck },
      ],
      features: [
        "Contract pharmacy optimization",
        "340B TPA / Claims qualification engine",
        "340B location optimization",
        "Patient definition enhancement",
      ],
      image: "/ServicesSlider/340BOptimization.png",
    },
    {
      title: `LRx Tech Platform`,
      description: `Integrate complex, fragmented tech stack to leverage complex data\nguide the patient specialty pharmacy journey`,
      valueProps: [
        { label: `Identify new\nopportunities`, icon: Sparkles },
        { label: `Ensure better\noutcomes`, icon: Award },
        { label: `Increase\nefficiency`, icon: Timer },
      ],
      features: [
        "Prescriptive analytics",
        "Orchestrated patient journey",
        "Capture and channel optimization",
      ],
      image: "/ServicesSlider/LrxPlatform.png",
    },
    {
      title: `Market Access`,
      description: `Facilitate pharmaceutical pricing negotiations to enhance access to payers, PBMs, and manufacturers, focusing on rare, orphan, and cell/gene therapies.`,
      valueProps: [
        { label: `Expand\nmedication\nrevenue`, icon: Pill },
        { label: `Unlock new\nServices`, icon: Dna },
        { label: `Increase\npatient\nvolume`, icon: Users },
      ],
      features: [
        "Payor & PBM access",
        "Manufacturer access",
        "Rare & Orphan drug access",
        "Cell & Gene therapy access",
        "Employee benefit design",
      ],
      image: "/ServicesSlider/MarketAccess.png",
    },
    {
      title: "Cell & Gene Therapy (CGT) + Rare Disease Strategy",
      description: "Position your health system as a launch partner for complex cell & gene and rare & orphan disease therapies",
      valueProps: [
        { label: "10-20 cell and gene therapies gain FDA approval annually\nAverage cost per drug is over $1M", icon: Dna },
      ],
      features: [
        "Treatment access for your patients",
        "Medical & pharmaceutical billing support",
        "Partner to guide you through operational complexities",
        "Patient support & financial navigation through their journey",
      ],
      image: "/ServicesSlider/Cell:Gene.png",
    },
  ]

  const technologyFeatures = [
    {
      title: "Real-Time Analytics",
      description: "Live dashboards providing instant insights into revenue performance and operational metrics.",
      icon: Activity,
      color: "text-rhodamine-500"
    },
    {
      title: "Next-Gen Intelligence",
      description: "Next-generation algorithms that continuously optimize processes and identify revenue opportunities.",
      icon: Brain,
      color: "text-gulf-500"
    },
    {
      title: "Secure Cloud Platform",
      description: "HIPAA-compliant cloud infrastructure ensuring data security and system reliability.",
      icon: Shield,
      color: "text-ocean-500"
    },
    {
      title: "Seamless Integration",
      description: "Easy integration with existing health system infrastructure and workflows.",
      icon: Network,
      color: "text-admiral-500"
    }
  ]

  const benefits = [
    {
      title: "Increased Revenue Capture",
      description: "Capture every dollar of specialty pharmacy opportunity through next-gen technology-powered script identification.",
      icon: TrendingUp,
      metric: "500M+",
      label: "Potential Revenue"
    },
    {
      title: "Patient Financial Assistance",
      description: "Assist eligible patients with gaining financial assistance on specialty pharmaceuticals.",
      icon: HeartHandshake,
      metric: "100% eligible patients receiving assistance",
      label: ""
    },
    {
      title: "Rapid Patient Management",
      description: "Manage impacted patients within days of launching operations.",
      icon: Users,
      metric: "100+ patients under management the first month",
      label: ""
    },
    {
      title: "Compliance & Quality",
      description: "Ensure regulatory compliance and maintain high-quality standards across operations.",
      icon: Award,
      metric: "100%",
      label: "Compliance Rate"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-gypsum-50 via-white to-gypsum-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://media.istockphoto.com/id/1250152635/photo/medicine-doctor-holding-electronic-medical-and-record-on-tablet-dna-digital-healthcare-and.jpg"
            alt="Healthcare innovation"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gypsum-50/90 via-white/95 to-gypsum-100/90" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-rhodamine-400/20 to-gulf-400/20 rounded-full blur-2xl"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-ocean-400/20 to-admiral-400/20 rounded-full blur-xl"
            animate={{
              y: [0, 20, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
          />
        </div>

        <div className="container px-6 md:px-8 relative z-10">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-admiral-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
              <Zap className="h-4 w-4 text-admiral-600" />
              <span className="text-sm font-semibold text-admiral-800 font-space-grotesk tracking-wide">
                OUR SERVICES
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">
              Comprehensive Solutions for Revolutionizing Specialty Pharmacy
            </h1>
            <p className="text-xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
              Transform your specialty pharmacy operations with our suite of next-gen technology-powered services designed to capture every opportunity while delivering exceptional patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-rhodamine-500 via-gulf-500 to-ocean-600 hover:from-rhodamine-600 hover:via-gulf-600 hover:to-ocean-700 text-white shadow-2xl shadow-rhodamine-500/25 hover:shadow-rhodamine-500/40 transition-all duration-500 rounded-2xl px-10 py-5 text-xl font-semibold font-space-grotesk group hover:scale-105 hover:-translate-y-2"
                >
                  <Target className="mr-3 h-6 w-6" />
                  Get Started
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="w-full py-20 md:py-32">
        <div className="container px-6 md:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 to-rhodamine-700 bg-clip-text text-transparent mb-6">
              Core Services
            </h2>
            <p className="text-xl text-admiral-600 max-w-3xl mx-auto font-space-grotesk">
              Our comprehensive suite of services designed to maximize your specialty pharmacy revenue potential
            </p>
          </ScrollReveal>

          {/* Stepper Bar */}
          <div className="flex gap-6 mb-10 justify-center">
            {coreServices.map((service, idx) => (
              <div
                key={service.title}
                className={`flex items-center gap-3 px-4 py-2 rounded-2xl transition-all duration-300 ${activeIndex === idx ? 'bg-gradient-to-r from-rhodamine-500 via-gulf-500 to-ocean-600 shadow-lg' : 'bg-admiral-200/40'} cursor-pointer`}
                onClick={() => setActiveIndex(idx)}
                style={{ minWidth: 160 }}
              >
                <div className={`rounded-xl p-3 ${activeIndex === idx ? 'bg-white/20 backdrop-blur-sm' : 'bg-white/60'} flex items-center justify-center`}>
                  {idx === 0 && <Sparkles className={`h-6 w-6 ${activeIndex === idx ? 'text-white' : 'text-admiral-900'}`} />}
                  {idx === 1 && <Pill className={`h-6 w-6 ${activeIndex === idx ? 'text-white' : 'text-admiral-900'}`} />}
                  {idx === 2 && <MonitorCheck className={`h-6 w-6 ${activeIndex === idx ? 'text-white' : 'text-admiral-900'}`} />}
                  {idx === 3 && <FileText className={`h-6 w-6 ${activeIndex === idx ? 'text-white' : 'text-admiral-900'}`} />}
                  {idx === 4 && <Dna className={`h-6 w-6 ${activeIndex === idx ? 'text-white' : 'text-admiral-900'}`} />}
                </div>
                <span className={`font-mono text-base font-semibold tracking-wide ${activeIndex === idx ? 'text-white' : 'text-admiral-900'}`}>
                  {idx === 0 ? 'Rx CAPTURE' : idx === 2 ? 'TECH' : idx === 3 ? 'MARKET ACCESS' : idx === 4 ? 'CGT Strategy' : service.title.toUpperCase().split(' ')[0]}
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

      {/* Technology Features Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-gypsum-100/80 via-gypsum-200/30 to-gypsum-300/30 backdrop-blur-sm">
        <div className="container px-6 md:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 to-rhodamine-700 bg-clip-text text-transparent mb-6">
              Powered by Advanced Technology
            </h2>
            <p className="text-xl text-admiral-600 max-w-3xl mx-auto font-space-grotesk">
              Our cutting-edge technology platform delivers the tools you need to succeed
            </p>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {technologyFeatures.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1} direction="up">
                <div className="text-center group">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gypsum-100 to-gypsum-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold font-outfit mb-3 text-admiral-900">{feature.title}</h3>
                  <p className="text-admiral-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-20 md:py-32">
        <div className="container px-6 md:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 to-rhodamine-700 bg-clip-text text-transparent mb-6">
              Why Choose Longitude Rx?
            </h2>
            <p className="text-xl text-admiral-600 max-w-3xl mx-auto font-space-grotesk">
              Discover the measurable impact our services deliver to health systems
            </p>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 0.1} direction="up">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm text-center h-full">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gypsum-100 to-gypsum-200 flex items-center justify-center`}>
                      <benefit.icon className="h-8 w-8 text-admiral-600" />
                    </div>
                    <h3 className="text-xl font-bold font-outfit mb-3 text-admiral-900">{benefit.title}</h3>
                    <p className="text-admiral-600 text-sm leading-relaxed mb-6">{benefit.description}</p>
                    <div className="text-2xl font-bold font-outfit bg-gradient-to-r from-admiral-900 to-rhodamine-700 bg-clip-text text-transparent">
                      {benefit.metric}
                    </div>
                    <p className="text-sm text-admiral-600 font-space-grotesk">{benefit.label}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
            </div>
      </section>

      {/* Trusted by Healthcare Leaders Carousel */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-gypsum-100/80 via-gypsum-200/30 to-gypsum-300/30 backdrop-blur-sm">
        <div className="container px-6 md:px-8">
          <div className="flex flex-col items-center text-center space-y-4 mb-10">
            <h2 className="text-3xl md:text-5xl font-bold font-outfit text-admiral-900">Designed by health systems, enabled by technology, focused on performance.</h2>
            <p className="text-admiral-600 text-base md:text-lg max-w-2xl mx-auto">Our founding partners represent some of the most respected health systems in the nation.</p>
          </div>
          <HealthcareLeadersScroll />
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