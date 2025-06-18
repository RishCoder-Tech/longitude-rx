"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Calendar,
  Building,
  Users,
  Target,
  Globe,
  Award,
  TrendingUp,
  Brain,
  Shield,
  Network,
  DollarSign,
  Activity,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-animations"
import HealthcareLeadersScroll from "@/components/healthcare-leaders-scroll"
import Image from "next/image"

export default function AboutPage() {
  // Dynamically generate leadership team from public headshots
  const headshots = [
    "Jigar Thakkar.png",
    "Toni Giglio.jpg",
    "Tom Kotronis.jpg",
    "Sinthu Sinnadurai.jpg",
    "Rachel Bolton.jpg",
    "Nicole Ostrowski.png",
    "Katie McMillen.jpg",
    "Jonathan Williams.png",
    "Arpit Parikh.jpg",
  ];
  const leadershipTeam = headshots.map((filename) => {
    const name = filename.replace(/\.(jpg|jpeg|png)$/i, "").replace(/_/g, " ");
    return {
      name,
      title: "1",
      headshot: `/${filename}`,
    };
  });

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-40 relative overflow-hidden bg-gradient-to-br from-gypsum-50 via-white to-gypsum-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/healthcare-collaboration.jpg"
            alt="Healthcare collaboration"
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
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-ocean-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
              <Globe className="h-4 w-4 text-ocean-600" />
              <span className="text-sm font-semibold text-ocean-800 font-space-grotesk tracking-wide">
                SPECIALTY MEDICINE COST OPTIMIZATION LEADERS
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-outfit font-bold leading-tight">
              <span className="bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">
                Transforming Specialty Pharmacy
              </span>
              <br />
              <span className="bg-gradient-to-r from-rhodamine-600 via-gulf-500 to-ocean-600 bg-clip-text text-transparent">
                Through AI & Innovation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-admiral-600 max-w-4xl leading-relaxed font-space-grotesk mt-8">
              Longitude Rx is a pioneering specialty pharmacy service that enhances health systems' specialty pharmacy operations, financial performance, and clinical outcomes through state-of-the-art AI-enabled technology platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-20 md:py-32">
        <div className="container px-6 md:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center max-w-7xl mx-auto">
            <ScrollReveal direction="left" className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-white/80 border border-rhodamine-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
                  <Target className="h-4 w-4 text-rhodamine-600" />
                  <span className="text-sm font-semibold text-rhodamine-800 font-space-grotesk tracking-wide">
                    OUR MISSION
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">
                  Revolutionizing Cost Management
                </h2>
                <p className="text-lg text-admiral-600 leading-relaxed font-space-grotesk">
                  Longitude Rx is pioneering the future of specialty medicine cost optimization through AI-powered
                  solutions that eliminate waste, optimize spending, and transform patient access. We're not just
                  reducing costs—we're reimagining healthcare economics.
                </p>
                <p className="text-lg text-admiral-600 leading-relaxed font-space-grotesk">
                  Our mission extends beyond traditional cost management. We're building an intelligent ecosystem that
                  connects health systems, payers, and providers through cutting-edge technology, ensuring optimal
                  specialty medicine economics while maintaining the highest quality of care.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" className="relative">
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/data-analytics.jpg"
                  alt="Healthcare cost analytics and optimization"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-rhodamine-500/20 to-gulf-600/20 backdrop-blur-sm z-10"></div>
                {/* Floating elements */}
                <div className="absolute top-6 right-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 flex items-center justify-center z-20">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <div className="absolute bottom-6 left-6 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 flex items-center justify-center z-20">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Leadership Section - moved above Founders logos */}
      <section className="w-full py-20 md:py-32">
        <div className="container px-6 md:px-8">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-rhodamine-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
              <Award className="h-4 w-4 text-rhodamine-600" />
              <span className="text-sm font-semibold text-rhodamine-800 font-space-grotesk tracking-wide">
                VISIONARY LEADERSHIP
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
              Industry pioneers and healthcare visionaries driving the future of specialty medicine cost optimization.
            </p>
          </ScrollReveal>

          {/* CEO and Leadership Team Grid - all on same level, multiple rows allowed */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/Jigar Thakkar.png"
                  alt="Jigar Thakkar"
                  fill
                  className="object-cover object-top rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Jigar Thakkar</h3>
              <p className="text-gray-600">CEO of Longitude Rx</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/Jonathan Williams.png"
                  alt="Jonathan Williams"
                  fill
                  className="object-cover object-top rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Jonathan Williams</h3>
              <p className="text-gray-600">Vice President of 340B Operations</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/Katie McMillen.jpg"
                  alt="Katie McMillen"
                  fill
                  className="object-cover object-top rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Katie McMillen</h3>
              <p className="text-gray-600">VP of Market Access</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/Nicole Ostrowski.png"
                  alt="Nicole Ostrowski"
                  fill
                  className="object-cover object-top rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Nicole Ostrowski</h3>
              <p className="text-gray-600">Executive Director of Strategy & Operations</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/Sinthu Sinnadurai.jpg"
                  alt="Sinthu Sinnadurai"
                  fill
                  className="object-cover object-top rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Sinthu Sinnadurai</h3>
              <p className="text-gray-600">Senior Vice-President of Operations</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/Tom Kotronis.jpg"
                  alt="Tom Kotronis"
                  fill
                  className="object-cover object-top rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Tom Kotronis</h3>
              <p className="text-gray-600">Senior Director of Specialty Pharmacy New Business Development</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/Rachel Bolton.jpg"
                  alt="Rachel Bolton"
                  fill
                  className="object-cover object-top rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Rachel Bolton, MBA, SHRM-SCP</h3>
              <p className="text-gray-600">VP Human Resources</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="/Toni Giglio.jpg"
                  alt="Toni Giglio"
                  fill
                  className="object-cover object-top rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Toni Giglio</h3>
              <p className="text-gray-600">SVP, Market Access for Longitude Rx</p>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Leaders Auto-Scrolling Section (Founders logos) */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-gypsum-100/80 via-gypsum-200/30 to-gypsum-300/30 backdrop-blur-sm">
        <div className="container px-6 md:px-8">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-ocean-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
              <Building className="h-4 w-4 text-ocean-600" />
              <span className="text-sm font-semibold text-ocean-800 font-space-grotesk tracking-wide">
                FOUNDING PARTNERS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent max-w-4xl">
              Powered by Healthcare Giants
            </h2>
            <p className="text-xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
              Four visionary health systems united to revolutionize specialty medicine cost optimization through
              collaborative innovation and shared expertise.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up">
            <HealthcareLeadersScroll />
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-gypsum-100/80 via-gypsum-200/30 to-gypsum-300/30 backdrop-blur-sm">
        <div className="container px-6 md:px-8">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-gulf-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
              <Calendar className="h-4 w-4 text-gulf-600" />
              <span className="text-sm font-semibold text-gulf-800 font-space-grotesk tracking-wide">OUR JOURNEY</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">
              Innovation Timeline
            </h2>
            <p className="text-xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
              From vision to reality: The evolution of Longitude Rx and our mission to transform specialty medicine
              economics.
            </p>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-rhodamine-200 via-gulf-200 to-ocean-200"></div>

            {/* Timeline Items */}
            <div className="relative z-10 space-y-16">
              {[
                {
                  year: "2024",
                  title: "Formation of Longitude Health",
                  description:
                    "Four major health systems unite to create Longitude Health, establishing the foundation for collaborative specialty medicine cost optimization.",
                  icon: Building,
                  gradient: "from-rhodamine-500 to-gulf-500",
                  side: "left",
                },
                {
                  year: "Early 2025",
                  title: "Launch of Longitude Rx",
                  description:
                    "Revolutionary AI-powered specialty medicine cost optimization platform launches, marking the beginning of a new era in healthcare economics.",
                  icon: DollarSign,
                  gradient: "from-gulf-500 to-ocean-500",
                  side: "right",
                },
                {
                  year: "Future",
                  title: "Global Cost Optimization",
                  description:
                    "Expanding partnerships and AI capabilities to revolutionize specialty medicine cost management worldwide.",
                  icon: Globe,
                  gradient: "from-ocean-500 to-admiral-500",
                  side: "left",
                },
              ].map((item, index) => (
                <ScrollReveal
                  key={item.year}
                  delay={index * 0.2}
                  direction={item.side === "left" ? "left" : "right"}
                  className={`flex items-center ${item.side === "left" ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`md:w-1/2 ${item.side === "left" ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border border-gypsum-200">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div
                            className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg flex items-center justify-center`}
                          >
                            <item.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold font-outfit text-admiral-800">{item.title}</h3>
                            <p
                              className={`text-lg font-semibold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent font-space-grotesk`}
                            >
                              {item.year}
                            </p>
                          </div>
                        </div>
                        <p className="text-admiral-600 leading-relaxed font-space-grotesk">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="md:w-0 flex items-center justify-center">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.gradient} shadow-lg flex items-center justify-center z-10 border-4 border-white`}
                    >
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <div className="mt-24 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-8 text-admiral-900">
          Our Mission
        </h2>
        <p className="text-lg text-admiral-600 leading-relaxed mb-8">
          We empower health systems to deliver exceptional specialty pharmacy care while optimizing financial performance. Our AI-driven platform streamlines operations, enhances patient care, and maximizes revenue capture—all while maintaining the highest standards of clinical excellence.
        </p>
      </div>

      {/* Key Differentiators */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gypsum-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="w-14 h-14 bg-gradient-to-br from-admiral-100 to-admiral-50 rounded-xl flex items-center justify-center mb-6">
            <Brain className="h-7 w-7 text-admiral-600" />
          </div>
          <h3 className="text-2xl font-bold font-outfit mb-4 text-admiral-900">AI-Powered Innovation</h3>
          <div className="space-y-4">
            <p className="text-admiral-600 leading-relaxed">
              <span className="font-semibold text-admiral-800">Technology:</span> State-of-the-art AI platform optimizing specialty pharmacy operations
            </p>
            <p className="text-admiral-600 leading-relaxed">
              <span className="font-semibold text-admiral-800">Impact:</span> Unprecedented efficiency in prescription capture and patient care coordination
            </p>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gypsum-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="w-14 h-14 bg-gradient-to-br from-admiral-100 to-admiral-50 rounded-xl flex items-center justify-center mb-6">
            <Activity className="h-7 w-7 text-admiral-600" />
          </div>
          <h3 className="text-2xl font-bold font-outfit mb-4 text-admiral-900">Financial Excellence</h3>
          <div className="space-y-4">
            <p className="text-admiral-600 leading-relaxed">
              <span className="font-semibold text-admiral-800">Strategy:</span> Advanced analytics and optimized 340B participation
            </p>
            <p className="text-admiral-600 leading-relaxed">
              <span className="font-semibold text-admiral-800">Impact:</span> Maximized revenue through strategic payer relationships
            </p>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gypsum-200 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="w-14 h-14 bg-gradient-to-br from-admiral-100 to-admiral-50 rounded-xl flex items-center justify-center mb-6">
            <Users className="h-7 w-7 text-admiral-600" />
          </div>
          <h3 className="text-2xl font-bold font-outfit mb-4 text-admiral-900">Clinical Impact</h3>
          <div className="space-y-4">
            <p className="text-admiral-600 leading-relaxed">
              <span className="font-semibold text-admiral-800">Approach:</span> Integrated care coordination between providers and pharmacy teams
            </p>
            <p className="text-admiral-600 leading-relaxed">
              <span className="font-semibold text-admiral-800">Impact:</span> Improved medication adherence and better patient outcomes
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-24 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-8 text-admiral-900">
          Why Choose Longitude Rx?
        </h2>
        <div className="space-y-6">
          <p className="text-lg text-admiral-600 leading-relaxed">
            <span className="font-semibold text-admiral-800">Built for Health Systems:</span> Our solutions are specifically designed to address the unique challenges and opportunities of health system specialty pharmacies.
          </p>
          <p className="text-lg text-admiral-600 leading-relaxed">
            <span className="font-semibold text-admiral-800">Proven Technology:</span> Our AI-enabled platform has demonstrated significant improvements in prescription capture, operational efficiency, and patient outcomes.
          </p>
          <p className="text-lg text-admiral-600 leading-relaxed">
            <span className="font-semibold text-admiral-800">Comprehensive Support:</span> From implementation to ongoing optimization, we provide end-to-end support to ensure your success.
          </p>
          <p className="text-lg text-admiral-600 leading-relaxed">
            <span className="font-semibold text-admiral-800">Results-Driven:</span> We focus on measurable outcomes, helping you achieve both financial and clinical excellence in specialty pharmacy services.
          </p>
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
                START OPTIMIZING
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold bg-gradient-to-r from-white via-gypsum-200 to-gulf-200 bg-clip-text text-transparent">
              Ready to Optimize Your Costs?
            </h2>
            <p className="text-xl text-gypsum-300 max-w-3xl leading-relaxed font-space-grotesk">
              Join us in revolutionizing specialty medicine cost management and discover how our innovative platform can
              transform your healthcare economics.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-gulf-400 to-rhodamine-500 hover:from-gulf-300 hover:to-rhodamine-400 text-admiral-900 shadow-2xl shadow-gulf-500/25 hover:shadow-gulf-500/40 transition-all duration-500 rounded-full px-8 py-4 text-lg font-semibold font-space-grotesk group transform hover:scale-105"
                >
                  <DollarSign className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link href="/solutions">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-admiral-200 text-admiral-200 bg-admiral-800/10 rounded-2xl px-10 py-5 text-xl font-semibold font-space-grotesk backdrop-blur-sm"
                >
                  Explore Solutions
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
