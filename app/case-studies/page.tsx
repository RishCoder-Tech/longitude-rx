"use client"

import { useEffect, useState } from "react"
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
  LucideIcon,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-animations"
import Image from "next/image"
import { supabase } from "@/lib/supabaseClient"

interface Metric {
  label: string
  value: string
  icon: string // Store icon name as string
}

interface CaseStudy {
  id: number
  title: string
  organization: string
  description: string
  metrics: Metric[]
  image_url: string
  tag: string
}

const icons: { [key: string]: LucideIcon } = {
  TrendingUp,
  Clock,
  DollarSign,
  Target,
}

export default function CaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([])

  useEffect(() => {
    const fetchCaseStudies = async () => {
      if (!supabase) {
        console.warn('Supabase client not available')
        return
      }
      
      const { data, error } = await supabase.from("case_studies").select("*")
      if (error) {
        console.error("Error fetching case studies:", error)
      } else {
        // The metrics from Supabase will be a JSON string, so we need to parse it.
        // Also, the icon names will be strings, so we'll map them to the actual components.
        const formattedData = data.map(study => ({
          ...study,
          metrics: study.metrics.map((metric: any) => ({
            ...metric,
            icon: metric.icon, // Keep the icon name as string for now
          })),
        }))
        setCaseStudies(formattedData)
      }
    }

    fetchCaseStudies()
  }, [])

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {caseStudies.map((study, index) => (
              <ScrollReveal
                key={study.id}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <Card className="h-full bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gypsum-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <div className="w-full h-48 relative rounded-lg overflow-hidden mb-6">
                        <Image
                          src={study.image_url}
                          alt={study.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <span className="text-sm font-semibold text-ocean-800 bg-ocean-100 px-3 py-1 rounded-full">
                        {study.tag}
                      </span>
                      <h3 className="text-2xl font-bold font-outfit mt-4 text-admiral-900">{study.title}</h3>
                      <p className="text-admiral-700 mt-1 font-semibold">{study.organization}</p>
                      <p className="text-admiral-600 leading-relaxed mt-2">{study.description}</p>
                    </div>
                    <div className="mt-auto">
                      <h4 className="font-bold text-admiral-800 mb-4">Key Metrics</h4>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        {study.metrics.map((metric, metricIndex) => {
                          const IconComponent = icons[metric.icon as keyof typeof icons]
                          return (
                            <div key={metricIndex}>
                              <div className="bg-gypsum-100 rounded-lg p-4">
                                {IconComponent && <IconComponent className="h-8 w-8 text-admiral-600 mx-auto mb-2" />}
                                <p className="text-2xl font-bold text-admiral-900">{metric.value}</p>
                                <p className="text-sm text-admiral-600">{metric.label}</p>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </Card>
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