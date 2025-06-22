"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
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
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-animations"
import Image from "next/image"

export default function ServicesPage() {
  const services = [
    {
      title: "AI-Powered Prescription Management",
      description: "Leverage advanced AI algorithms to optimize prescription workflows, improve capture rates, and streamline prior authorization processes.",
      icon: Brain,
      features: [
        "Automated prescription routing and tracking",
        "Real-time prior authorization management",
        "Predictive analytics for prescription patterns",
        "Intelligent workflow optimization"
      ]
    },
    {
      title: "Revenue Cycle Optimization",
      description: "Maximize revenue potential through intelligent billing systems, payer management, and financial analytics.",
      icon: ChartBar,
      features: [
        "340B program optimization",
        "Payer contract management",
        "Revenue forecasting",
        "Claims optimization and tracking"
      ]
    },
    {
      title: "Clinical Care Coordination",
      description: "Enhance patient care through integrated clinical services and comprehensive care coordination.",
      icon: Users,
      features: [
        "Patient engagement programs",
        "Medication therapy management",
        "Clinical outcomes tracking",
        "Care team collaboration tools"
      ]
    },
    {
      title: "Operational Excellence",
      description: "Streamline pharmacy operations with advanced technology and process optimization.",
      icon: Cog,
      features: [
        "Inventory management",
        "Workflow automation",
        "Quality assurance programs",
        "Performance analytics"
      ]
    }
  ]

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-gypsum-50 via-white to-gypsum-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/healthcare-innovation.jpg"
            alt="Healthcare innovation"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gypsum-50/90 via-white/95 to-gypsum-100/90" />
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
              Comprehensive Solutions for Modern Healthcare
            </h1>
            <p className="text-xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
              Transform your specialty pharmacy operations with our suite of innovative services designed specifically for health systems.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-20 md:py-32">
        <div className="container px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ScrollReveal
                key={service.title}
                direction={index % 2 === 0 ? "left" : "right"}
                className="group"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gypsum-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-admiral-100 to-admiral-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-7 w-7 text-admiral-600" />
                  </div>
                  <h3 className="text-2xl font-bold font-outfit mb-4 text-admiral-900">{service.title}</h3>
                  <p className="text-admiral-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-2">
                        <div className="mt-1">
                          <Shield className="h-4 w-4 text-admiral-600" />
                        </div>
                        <span className="text-admiral-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-20 md:py-32">
        <div className="container px-6 md:px-8">
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
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-admiral-900 via-ocean-800 to-rhodamine-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-rhodamine-400/20 to-gulf-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-ocean-400/20 to-gulf-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container px-6 md:px-8 relative z-10">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Target className="h-4 w-4 text-gulf-400" />
              <span className="text-sm font-semibold text-gulf-300 font-space-grotesk tracking-wide">
                CONTACT US
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-white via-gypsum-200 to-gulf-200 bg-clip-text text-transparent">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-gypsum-300 max-w-3xl leading-relaxed font-space-grotesk">
              Connect with our team to learn how our services can help you achieve your specialty pharmacy goals.
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
              <Link href="/case-studies">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-admiral-200 text-admiral-200 bg-admiral-800/10 rounded-2xl px-10 py-5 text-xl font-semibold font-space-grotesk backdrop-blur-sm"
                >
                  View Case Studies
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
} 