"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Briefcase,
  ArrowRight,
  Sparkles,
  Target,
  Heart,
  TrendingUp,
  Brain,
  Shield,
  Building,
  Coffee,
  Laptop,
  Award,
  Calendar,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-animations"
import Image from "next/image"
import { supabase } from "@/lib/supabaseClient"

interface JobOpening {
  id: number
  title: string
  department: string
  location: string
  type: string
  description: string
  requirements: string[]
  benefits: string[]
  is_urgent: boolean
  created_at: string
}

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [jobOpenings, setJobOpenings] = useState<JobOpening[]>([])

  useEffect(() => {
    const fetchJobs = async () => {
      const { data, error } = await supabase.from("job_postings").select("*")
      if (error) {
        console.error("Error fetching job postings:", error)
      } else {
        setJobOpenings(data || [])
      }
    }

    fetchJobs()
  }, [])

  const departments = [
    { id: "all", name: "All Departments", count: jobOpenings.length },
    { id: "engineering", name: "Engineering", count: jobOpenings.filter(j => j.department === 'engineering').length },
    { id: "data-science", name: "Data Science", count: jobOpenings.filter(j => j.department === 'data-science').length },
    { id: "product", name: "Product", count: jobOpenings.filter(j => j.department === 'product').length },
    { id: "sales", name: "Sales & Marketing", count: jobOpenings.filter(j => j.department === 'sales').length },
  ]

  const locations = [
    { id: "all", name: "All Locations" },
    { id: "remote", name: "Remote" },
    { id: "dallas", name: "Dallas, TX" },
    { id: "austin", name: "Austin, TX" },
    { id: "hybrid", name: "Hybrid" },
  ]

  const pillars = [
    {
      icon: Heart,
      title: "Comprehensive Health Coverage",
      description:
        "Medical, dental, and vision coverage designed to support you and your family's well-being at every life stage.",
    },
    {
      icon: TrendingUp,
      title: "Market-Leading Compensation",
      description:
        "Competitive base pay, plus a variety of incentive and pay opportunities based on role.",
    },
    {
      icon: Laptop,
      title: "Remote-First Flexibility",
      description:
        "Work from anywhere and thrive. Flexibility and support built for a seamless remote experience.",
    },
    {
      icon: Shield,
      title: "Retirement Benefits",
      description:
        "Supporting your goals beyond the paycheck with a 401(k) match starting Day 1.",
    },
    {
      icon: Users,
      title: "Team Connection & Culture",
      description:
        "Virtual events, team offsites, and shoutouts that keep us connected and celebrated.",
    },
    {
      icon: Calendar,
      title: "Work-Life Balance",
      description:
        "Generous PTO policy and a culture that respects boundaries to support a full life.",
    },
  ]

  const filteredJobs = jobOpenings.filter(job => {
    const departmentMatch =
      selectedDepartment === "all" || job.department === selectedDepartment
    const locationMatch =
      selectedLocation === "all" ||
      job.location === selectedLocation ||
      (selectedLocation === "hybrid" && job.location.toLowerCase().includes("hybrid")) ||
      (selectedLocation === "remote" && job.location.toLowerCase().includes("remote"))
    return departmentMatch && locationMatch
  })

  const benefits = [
    {
      icon: Heart,
      title: "Comprehensive Health Coverage",
      description: "Medical, dental, vision, and mental health support for you and your family",
    },
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Market-leading salaries plus equity participation in our mission",
    },
    {
      icon: Laptop,
      title: "Remote-First Culture",
      description: "Work from anywhere with flexible hours and home office stipend",
    },
    {
      icon: TrendingUp,
      title: "Professional Growth",
      description: "Learning budget, conference attendance, and mentorship opportunities",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Unlimited PTO, sabbatical options, and wellness programs",
    },
    {
      icon: Award,
      title: "Impact & Recognition",
      description: "Make a difference in healthcare while being recognized for your contributions",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're transforming healthcare economics to improve patient access to life-saving medications.",
    },
    {
      icon: Brain,
      title: "Innovation First",
      description: "We leverage cutting-edge AI and technology to solve complex healthcare challenges.",
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "We work together across disciplines to achieve breakthrough results for health systems.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest standards of ethics and transparency in everything we do.",
    },
  ]

  // Helper to calculate "posted ago" time
  const timeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000)
    let interval = seconds / 31536000
    if (interval > 1) {
      return Math.floor(interval) + " years ago"
    }
    interval = seconds / 2592000
    if (interval > 1) {
      return Math.floor(interval) + " months ago"
    }
    interval = seconds / 86400
    if (interval > 1) {
      return Math.floor(interval) + " days ago"
    }
    interval = seconds / 3600
    if (interval > 1) {
      return Math.floor(interval) + " hours ago"
    }
    interval = seconds / 60
    if (interval > 1) {
      return Math.floor(interval) + " minutes ago"
    }
    return Math.floor(seconds) + " seconds ago"
  }

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-40 relative overflow-hidden bg-gradient-to-br from-gypsum-50 via-white to-gypsum-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/healthcare-collaboration.jpg"
            alt="Healthcare team collaboration"
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
              <Briefcase className="h-4 w-4 text-rhodamine-600" />
              <span className="text-sm font-semibold text-rhodamine-800 font-space-grotesk tracking-wide">
                JOIN OUR MISSION
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-outfit font-bold leading-tight">
              <span className="bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">
                Build the Future of
              </span>
              <br />
              <span className="bg-gradient-to-r from-rhodamine-600 via-gulf-500 to-ocean-600 bg-clip-text text-transparent">
                Healthcare Economics
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
              Join our team of innovators transforming specialty medicine cost optimization through AI and cutting-edge
              technology. Help us make healthcare more affordable for millions of patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-rhodamine-500 via-gulf-500 to-ocean-600 hover:from-rhodamine-600 hover:via-gulf-600 hover:to-ocean-700 text-white shadow-2xl shadow-rhodamine-500/25 hover:shadow-rhodamine-500/40 transition-all duration-500 rounded-2xl px-8 py-4 text-lg font-semibold font-space-grotesk group hover:scale-105 hover:-translate-y-1"
                onClick={() => document.getElementById("open-positions")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-admiral-300 text-admiral-700 hover:bg-admiral-50 hover:border-admiral-400 rounded-2xl px-8 py-4 text-lg font-semibold font-space-grotesk transition-all duration-300 hover:scale-105 hover:-translate-y-1 backdrop-blur-sm bg-white/50"
              >
                Learn About Our Culture
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="w-full py-20 md:py-32">
        <div className="container px-6 md:px-8">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-ocean-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
              <Heart className="h-4 w-4 text-ocean-600" />
              <span className="text-sm font-semibold text-ocean-800 font-space-grotesk tracking-wide">OUR VALUES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">
              What Drives Us
            </h2>
            <p className="text-xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
              Our values guide everything we do, from how we build products to how we treat each other and our
              customers.
            </p>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1} direction="up">
                <motion.div
                  className="group h-full"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 h-full bg-white/80 backdrop-blur-sm border border-gypsum-200">
                    <CardContent className="p-8 text-center">
                      <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-rhodamine-500 to-gulf-500 shadow-lg mb-6 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                        <value.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-admiral-800 font-outfit">{value.title}</h3>
                      <p className="text-admiral-600 leading-relaxed font-space-grotesk">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-gypsum-100/80 via-gypsum-200/30 to-gypsum-300/30 backdrop-blur-sm">
        <div className="container px-6 md:px-8">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-gulf-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
              <Award className="h-4 w-4 text-gulf-600" />
              <span className="text-sm font-semibold text-gulf-800 font-space-grotesk tracking-wide">
                BENEFITS & PERKS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">
              Why You'll Love Working Here
            </h2>
            <p className="text-xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
              We believe in taking care of our team so they can focus on transforming healthcare economics.
            </p>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 0.1} direction="up">
                <motion.div className="group" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-gypsum-200">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-rhodamine-500 to-gulf-500 shadow-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <benefit.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3 text-admiral-800 font-outfit">{benefit.title}</h3>
                          <p className="text-admiral-600 leading-relaxed font-space-grotesk">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="w-full py-20 md:py-32">
        <div className="container px-6 md:px-8">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-rhodamine-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
              <Briefcase className="h-4 w-4 text-rhodamine-600" />
              <span className="text-sm font-semibold text-rhodamine-800 font-space-grotesk tracking-wide">
                OPEN POSITIONS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">
              Join Our Growing Team
            </h2>
            <p className="text-xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
              We're looking for talented individuals who share our passion for transforming healthcare through
              technology.
            </p>
          </ScrollReveal>

          {/* Filters */}
          <ScrollReveal direction="up" className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-admiral-700 mr-2">Department:</span>
                {departments.map((dept) => (
                  <Button
                    key={dept.id}
                    variant={selectedDepartment === dept.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDepartment(dept.id)}
                    className={`rounded-full ${
                      selectedDepartment === dept.id
                        ? "bg-gradient-to-r from-rhodamine-500 to-gulf-500 text-white"
                        : "border-admiral-300 text-admiral-700 hover:bg-admiral-50"
                    }`}
                  >
                    {dept.name} ({dept.count})
                  </Button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-admiral-700 mr-2">Location:</span>
                {locations.map((location) => (
                  <Button
                    key={location.id}
                    variant={selectedLocation === location.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLocation(location.id)}
                    className={`rounded-full ${
                      selectedLocation === location.id
                        ? "bg-gradient-to-r from-ocean-500 to-admiral-500 text-white"
                        : "border-admiral-300 text-admiral-700 hover:bg-admiral-50"
                    }`}
                  >
                    {location.name}
                  </Button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Job Listings */}
          <div className="grid gap-6 max-w-6xl mx-auto">
            {filteredJobs.map((job, index) => (
              <ScrollReveal key={job.id} delay={index * 0.05} direction="up">
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border border-gypsum-200">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-2xl font-bold text-admiral-800 font-outfit">{job.title}</h3>
                                {job.is_urgent && (
                                  <Badge className="bg-gradient-to-r from-rhodamine-500 to-gulf-500 text-white">
                                    Urgent
                                  </Badge>
                                )}
                              </div>
                              <div className="flex flex-wrap items-center gap-4 text-sm text-admiral-600 font-space-grotesk">
                                <div className="flex items-center gap-1">
                                  <Building className="h-4 w-4" />
                                  {job.department.charAt(0).toUpperCase() + job.department.slice(1).replace("-", " ")}
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4" />
                                  {job.location}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  {job.type}
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-admiral-600 leading-relaxed font-space-grotesk mb-4">{job.description}</p>
                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="font-semibold text-admiral-800 mb-2 font-outfit">Requirements:</h4>
                              <ul className="text-sm text-admiral-600 space-y-1 font-space-grotesk">
                                {job.requirements.map((req, idx) => (
                                  <li key={idx} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-rhodamine-500" />
                                    {req}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-admiral-800 mb-2 font-outfit">Benefits:</h4>
                              <div className="flex flex-wrap gap-2">
                                {job.benefits.map((benefit, idx) => (
                                  <Badge key={idx} variant="outline" className="text-xs">
                                    {benefit}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3 lg:ml-6">
                          <Link href="/contact">
                            <Button className="bg-gradient-to-r from-rhodamine-500 to-gulf-500 hover:from-rhodamine-600 hover:to-gulf-600 text-white shadow-lg transition-all duration-300 rounded-xl font-space-grotesk font-semibold group w-full lg:w-auto">
                              Apply Now
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                          </Link>
                          <Button
                            variant="outline"
                            className="border-admiral-300 text-admiral-700 hover:bg-admiral-50 rounded-xl font-space-grotesk w-full lg:w-auto"
                          >
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-admiral-600 font-space-grotesk">
                No positions match your current filters. Try adjusting your search criteria.
              </p>
            </div>
          )}
        </div>
      </section>

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
              <Sparkles className="h-4 w-4 text-gulf-400" />
              <span className="text-sm font-semibold text-gulf-300 font-space-grotesk tracking-wide">
                JOIN OUR MISSION
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold bg-gradient-to-r from-white via-gypsum-200 to-gulf-200 bg-clip-text text-transparent">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-xl text-gypsum-300 max-w-3xl leading-relaxed font-space-grotesk">
              We're always looking for exceptional talent. Send us your resume and tell us how you'd like to contribute
              to transforming healthcare economics.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-gulf-400 to-rhodamine-500 hover:from-gulf-300 hover:to-rhodamine-400 text-admiral-900 shadow-2xl shadow-gulf-500/25 hover:shadow-gulf-500/40 transition-all duration-500 rounded-full px-8 py-4 text-lg font-semibold font-space-grotesk group hover:scale-105 hover:-translate-y-1"
                >
                  <Users className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-admiral-200 text-admiral-200 bg-admiral-800/10 rounded-2xl px-10 py-5 text-xl font-semibold font-space-grotesk backdrop-blur-sm"
                >
                  Learn About Us
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
