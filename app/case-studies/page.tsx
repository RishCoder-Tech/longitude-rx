"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ArrowRight,
  LineChart,
  Users,
  Building,
  Target,
  ChevronRight,
  BarChart3,
  TrendingUp,
  Clock,
  DollarSign,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-animations"
import Image from "next/image"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Major Health System Achieves 300% Increase in Prescription Capture",
      organization: "Leading Midwest Healthcare Network",
      description: "A prominent health system transformed their specialty pharmacy operations using Longitude Rx's AI-powered technology, resulting in dramatic improvements in prescription capture rates and patient care coordination.",
      metrics: [
        { label: "Increase in Rx Capture", value: "300%", icon: TrendingUp },
        { label: "Time Savings", value: "65%", icon: Clock },
        { label: "Revenue Growth", value: "$12M+", icon: DollarSign },
      ],
      image: "/images/case-study-1.svg",
      tag: "Prescription Management"
    },
    {
      title: "Regional Hospital Network Optimizes 340B Program",
      organization: "Southeast Regional Healthcare",
      description: "Implementation of Longitude Rx's revenue cycle optimization solutions led to significant improvements in 340B program management and overall financial performance.",
      metrics: [
        { label: "340B Savings", value: "$8.5M", icon: DollarSign },
        { label: "Process Efficiency", value: "85%", icon: TrendingUp },
        { label: "Compliance Rate", value: "99.9%", icon: Target },
      ],
      image: "/images/case-study-2.svg",
      tag: "Revenue Optimization"
    },
    {
      title: "Multi-State System Enhances Patient Outcomes",
      organization: "Pacific Healthcare Alliance",
      description: "Through implementation of our clinical care coordination technology, this healthcare system achieved remarkable improvements in patient adherence and outcomes.",
      metrics: [
        { label: "Patient Adherence", value: "92%", icon: Users },
        { label: "Care Coordination", value: "+75%", icon: TrendingUp },
        { label: "Patient Satisfaction", value: "4.9/5", icon: Target },
      ],
      image: "/images/case-study-3.svg",
      tag: "Clinical Excellence"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-gypsum-50 via-white to-gypsum-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/healthcare-success.svg"
            alt="Healthcare success stories"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gypsum-50/90 via-white/95 to-gypsum-100/90" />
        </div>

        <div className="container px-6 md:px-8 relative z-10">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-admiral-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
              <BarChart3 className="h-4 w-4 text-admiral-600" />
              <span className="text-sm font-semibold text-admiral-800 font-space-grotesk tracking-wide">
                SUCCESS STORIES
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">
              Real Results, Real Impact
            </h1>
            <p className="text-xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
              Discover how leading health systems are transforming their specialty pharmacy operations with Longitude Rx.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="w-full py-20 md:py-32">
        <div className="container px-6 md:px-8">
          <div className="space-y-16 max-w-7xl mx-auto">
            {caseStudies.map((study, index) => (
              <ScrollReveal
                key={study.title}
                direction={index % 2 === 0 ? "left" : "right"}
                className="group"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gypsum-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    <div className="relative h-64 md:h-full rounded-xl overflow-hidden">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-admiral-900/40 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <span className="inline-flex items-center rounded-full bg-white/90 px-4 py-1 text-sm font-medium text-admiral-900 backdrop-blur-sm">
                          {study.tag}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold font-outfit mb-2 text-admiral-900">{study.title}</h3>
                        <p className="text-admiral-600 font-semibold">{study.organization}</p>
                      </div>
                      <p className="text-admiral-600 leading-relaxed">{study.description}</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {study.metrics.map((metric) => (
                          <div key={metric.label} className="space-y-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-admiral-100 to-admiral-50 rounded-lg flex items-center justify-center">
                              <metric.icon className="h-5 w-5 text-admiral-600" />
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-admiral-900">{metric.value}</div>
                              <div className="text-sm text-admiral-600">{metric.label}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button
                        className="group/btn bg-gradient-to-r from-admiral-600 to-ocean-600 hover:from-admiral-500 hover:to-ocean-500 text-white rounded-full px-6 py-2"
                      >
                        Read Full Case Study
                        <ChevronRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
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
              <Building className="h-4 w-4 text-gulf-400" />
              <span className="text-sm font-semibold text-gulf-300 font-space-grotesk tracking-wide">
                YOUR SUCCESS STORY
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-white via-gypsum-200 to-gulf-200 bg-clip-text text-transparent">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gypsum-300 max-w-3xl leading-relaxed font-space-grotesk">
              Join the growing network of health systems transforming their specialty pharmacy operations with Longitude Rx.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-gulf-400 to-rhodamine-500 hover:from-gulf-300 hover:to-rhodamine-400 text-admiral-900 shadow-2xl shadow-gulf-500/25 hover:shadow-gulf-500/40 transition-all duration-500 rounded-full px-8 py-4 text-lg font-semibold font-space-grotesk group transform hover:scale-105"
                >
                  <Target className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-admiral-200 text-admiral-200 bg-admiral-800/10 rounded-2xl px-10 py-5 text-xl font-semibold font-space-grotesk backdrop-blur-sm"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
} 