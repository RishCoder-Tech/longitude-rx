"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Star,
  DollarSign,
  Shield,
  Users,
  TrendingUp,
  Sparkles,
  Zap,
  Globe,
  BarChart3,
  Beaker,
  Target,
  Brain,
  Activity,
  ShoppingCart,
  LineChart,
  Network,
} from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-animations"
import HealthcareLeadersScroll from "@/components/healthcare-leaders-scroll"
import CounterAnimation from "@/components/counter-animation"
import { useRef } from "react"
import Image from "next/image"

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  }

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Onvida Health Announcement */}
      <div className="w-full bg-gradient-to-r from-rhodamine-100 via-gulf-100 to-ocean-100 py-3 px-4 text-center text-lg font-semibold text-rhodamine-800 shadow-md mb-2">
        <span className="mr-2">🚀</span>
        <span>
          <strong>Announcement:</strong> Longitude Rx welcomes <strong>Onvida Health</strong> as our first external partner, expanding our specialty pharmacy platform beyond founding health systems! <a href="/onvida-press-release" className="underline text-rhodamine-700 hover:text-ocean-700 ml-2">Learn more</a>
        </span>
      </div>

      {/* Hero Section with Parallax */}
      <motion.section
        ref={heroRef}
        className="w-full py-10 md:py-16 lg:py-20 relative overflow-hidden bg-gradient-to-br from-gypsum-50 via-white to-gypsum-100"
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-medical-team.jpg"
            alt="Healthcare professionals collaborating"
            fill
            className="object-cover opacity-10"
            priority
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
          <motion.div
            className="flex flex-col items-center text-center space-y-10 max-w-6xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-7xl lg:text-8xl font-outfit font-bold leading-tight"
            >
              <motion.span
                className="bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              >
              </motion.span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-rhodamine-600 via-gulf-500 to-ocean-600 bg-clip-text text-transparent"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.5 }}
              >
                By Health Systems, For Health Systems
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk"
            >
              Unlock specialty pharmacy success with our services powered by AI driven technology that transforms how health systems manage complex medication access, reduce costs, and improve patient outcomes.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-8 pt-8">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-rhodamine-500 via-gulf-500 to-ocean-600 hover:from-rhodamine-600 hover:via-gulf-600 hover:to-ocean-700 text-white shadow-2xl shadow-rhodamine-500/25 hover:shadow-rhodamine-500/40 transition-all duration-500 rounded-2xl px-10 py-5 text-xl font-semibold font-space-grotesk group hover:scale-105 hover:-translate-y-2"
                >
                  <motion.div
                    animate={{ rotate: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Target className="mr-3 h-6 w-6" />
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
              <Link href="/platform">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-admiral-300 text-admiral-700 hover:bg-admiral-50 hover:border-admiral-400 rounded-2xl px-10 py-5 text-xl font-semibold font-space-grotesk transition-all duration-300 hover:scale-105 hover:-translate-y-2 backdrop-blur-sm bg-white/50"
                >
                  Explore Platform
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center items-center gap-8 pt-12 opacity-70"
            >
              <div className="flex items-center space-x-2 text-admiral-600 font-space-grotesk">
                <Shield className="h-5 w-5" />
                <span className="text-sm font-medium">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-admiral-600 font-space-grotesk">
                <Activity className="h-5 w-5" />
                <span className="text-sm font-medium">Real-time Analytics</span>
              </div>
              <div className="flex items-center space-x-2 text-admiral-600 font-space-grotesk">
                <Brain className="h-5 w-5" />
                <span className="text-sm font-medium">AI-Powered</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section with Enhanced Design */}
      <section className="w-full py-10 md:py-16 bg-gradient-to-r from-white via-gypsum-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="container px-6 md:px-8 relative z-10">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 to-rhodamine-700 bg-clip-text text-transparent mb-6">
              The Specialty Pharmacy Opportunity
            </h2>
            <p className="text-xl text-admiral-600 max-w-3xl mx-auto font-space-grotesk">
              Understanding the market dynamics driving the need for cost optimization
            </p>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                number: 35,
                suffix: "%",
                label: "Projected Revenue Growth by 2027 of Specialty Drugs",
                icon: BarChart3,
                gradient: "from-rhodamine-500 to-rhodamine-600",
                description: "",
              },
              {
                number: 2,
                suffix: "x",
                label: "Orphan Drug Sales By 2028",
                icon: TrendingUp,
                gradient: "from-gulf-500 to-gulf-600",
                description: "",
              },
              {
                number: 80,
                suffix: "%",
                label: "Of FDA Pipeline Are Specialty Medications",
                icon: Beaker,
                gradient: "from-ocean-500 to-ocean-600",
                description: "",
              },
            ].map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1} direction="scale">
                <motion.div className="group cursor-pointer" whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm overflow-hidden relative h-full min-h-[340px] flex flex-col">
                    <CardContent className="p-8 text-center flex flex-col flex-1">
                      <motion.div
                        className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${stat.gradient} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <stat.icon className="h-10 w-10 text-white" />
                      </motion.div>
                      <CounterAnimation
                        end={stat.number}
                        suffix={stat.suffix}
                        duration={2500}
                        className="text-5xl font-bold font-outfit bg-gradient-to-r from-admiral-900 to-rhodamine-700 bg-clip-text text-transparent mb-4"
                      />
                      <h3 className="text-lg font-semibold text-admiral-800 font-outfit mb-3">{stat.label}</h3>
                      <p className="text-sm text-admiral-600 font-space-grotesk leading-relaxed">{stat.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Solutions Section */}
      <section className="w-full py-10 md:py-16 bg-gradient-to-br from-gypsum-50 to-white relative">
        <div className="absolute inset-0">
          <Image
            src="/images/healthcare-technology.jpg"
            alt="Healthcare technology background"
            fill
            className="object-cover opacity-5"
          />
        </div>

        <div className="container px-6 md:px-8 relative z-10">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-8 mb-20">
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/80 border border-rhodamine-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Zap className="h-4 w-4 text-rhodamine-600" />
              </motion.div>
              <span className="text-sm font-semibold text-rhodamine-800 font-space-grotesk tracking-wide">
                COST OPTIMIZATION SOLUTIONS
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent max-w-5xl">
              Transformational Specialty Pharmacy Solutions
            </h2>
            <p className="text-2xl text-admiral-600 max-w-4xl leading-relaxed font-space-grotesk font-light">
              Experience a revolution in specialty pharmacy with our AI-driven solutions that transform patient care and optimize operational efficiency.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gypsum-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-admiral-100 to-admiral-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="h-7 w-7 text-admiral-600" />
              </div>
              <h3 className="text-2xl font-bold font-outfit mb-4 text-admiral-900 group-hover:text-admiral-700 transition-colors duration-300">Capture Specialty Rx Revenue</h3>
              <div className="space-y-4">
                <p className="text-admiral-600 leading-relaxed text-sm">
                  <span className="font-semibold text-admiral-800"></span> Achieve significant revenue growth by capturing a higher percentage of internal provider prescriptions, enhancing financial performance through our Medication Capture Strategy.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gypsum-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-admiral-100 to-admiral-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShoppingCart className="h-7 w-7 text-admiral-600" />
              </div>
              <h3 className="text-2xl font-bold font-outfit mb-4 text-admiral-900 group-hover:text-admiral-700 transition-colors duration-300">Optimize 340B Program</h3>
              <div className="space-y-4">
                <p className="text-admiral-600 leading-relaxed text-sm">
                  <span className="font-semibold text-admiral-800"></span> Maximize financial performance and compliance by optimizing 340B processes and contract pharmacy engagement.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gypsum-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-admiral-100 to-admiral-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <LineChart className="h-7 w-7 text-admiral-600" />
              </div>
              <h3 className="text-2xl font-bold font-outfit mb-4 text-admiral-900 group-hover:text-admiral-700 transition-colors duration-300">Expand Market and Payer Access</h3>
              <div className="space-y-4">
                <p className="text-admiral-600 leading-relaxed text-sm">
                  <span className="font-semibold text-admiral-800"></span> Grow market presence and increase script volume by securing network inclusion and manufacturer access, particularly for rare/orphan and cell/gene therapies, thereby boosting revenue streams.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gypsum-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-admiral-100 to-admiral-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Network className="h-7 w-7 text-admiral-600" />
              </div>
              <h3 className="text-2xl font-bold font-outfit mb-4 text-admiral-900 group-hover:text-admiral-700 transition-colors duration-300">Automate Efficiency with AI-Driven Technology</h3>
              <div className="space-y-4">
                <p className="text-admiral-600 leading-relaxed text-sm">
                  <span className="font-semibold text-admiral-800"></span> Leverage AI-driven solutions to streamline data integration and automate workflows, improving patient care delivery and increasing adherence rates.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Testimonials Section */}
          <motion.div
            variants={fadeInUp}
            className="mt-24 bg-gradient-to-br from-white/90 to-gypsum-50/90 backdrop-blur-sm rounded-2xl p-12 border border-gypsum-200 shadow-lg"
          >
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <img src="/onvida-logo.png" alt="Onvida Health" className="h-20 mx-auto mb-8" />
              </div>
              <blockquote className="text-2xl md:text-3xl font-outfit text-admiral-900 italic mb-8 leading-relaxed">
                "We selected Longitude Rx because they are mission-aligned, health-system owned and innovative in their approach. They bring the infrastructure and expertise to design and build the right pharmacy model for our community, while supporting our patients with clinical and financial oversight at every step."
              </blockquote>
              <div className="text-lg font-semibold text-admiral-800">
                Jake Childs, PharmD, COO
                <br />
                <span className="text-rhodamine-700">Onvida Health</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Healthcare Leaders Section */}
      <section className="w-full py-10 md:py-16 bg-gradient-to-br from-white via-gypsum-50 to-gypsum-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,119,198,0.1),transparent_50%)]"></div>

        <div className="container px-6 md:px-8 relative z-10">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-8 mb-20">
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/80 border border-ocean-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Globe className="h-4 w-4 text-ocean-600" />
              </motion.div>
              <span className="text-sm font-semibold text-ocean-800 font-space-grotesk tracking-wide">
                FOUNDING PARTNERS
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent max-w-5xl">
              Built by Healthcare Leaders
            </h2>
            <p className="text-2xl text-admiral-600 max-w-4xl leading-relaxed font-space-grotesk font-light">
              Founded by major health systems committed to revolutionizing specialty medicine cost management through
              collaborative innovation.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up">
            <HealthcareLeadersScroll />
          </ScrollReveal>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="w-full py-10 md:py-16 bg-gradient-to-br from-admiral-900 via-ocean-800 to-rhodamine-900 text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/medical-innovation.jpg"
            alt="Medical innovation background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-admiral-900/90 via-ocean-800/90 to-rhodamine-900/90" />
        </div>

        {/* Animated background elements */}
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
              className="text-5xl md:text-6xl lg:text-7xl font-outfit font-bold bg-gradient-to-r from-white via-gypsum-200 to-gulf-200 bg-clip-text text-transparent"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            >
              Ready to Grow Specialty Pharmacy Revenue?
            </motion.h2>
            <p className="text-2xl text-gypsum-300 max-w-4xl leading-relaxed font-space-grotesk font-light">
              Join leading health systems who are already saving millions on specialty medicine costs with our
              AI-powered optimization platform.
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
              <Link href="/platform">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-admiral-200 text-admiral-200 bg-admiral-800/10 rounded-2xl px-10 py-5 text-xl font-semibold font-space-grotesk backdrop-blur-sm"
                >
                  Explore Platform
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
