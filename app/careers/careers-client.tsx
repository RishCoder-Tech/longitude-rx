"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-animations"
import JobApplicationForm from "@/components/job-application-form"
import {
  Briefcase,
  Target,
  Brain,
  HeartHandshake,
  Shield,
  ArrowRight,
  Globe,
  Calendar,
  DollarSign,
  Star,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  Clock,
  Users,
  Users2,
  MapPin,
  Building,
  Clock as ClockIcon,
  RefreshCw,
} from "lucide-react"

interface Job {
  sys: {
    id: string
  }
  fields: {
    title: string
    department: string
    location: string
    type: string
    description: string
    requirements: string[]
    benefits: string[]
    salary?: string
  }
}

// Helper function to extract plain text from Rich Text
function extractTextFromRichText(richText: any): string {
  if (!richText || !richText.content) return ''
  
  return richText.content
    .map((node: any) => 
      node.content
        ?.map((contentNode: any) => contentNode.value || '')
        .join('') || ''
    )
    .join(' ')
}

// Helper function to safely get string value from Contentful field
function getStringValue(field: any): string {
  if (typeof field === 'string') return field
  if (typeof field === 'object' && field !== null) {
    return extractTextFromRichText(field)
  }
  return ''
}

// Helper function to safely get array of strings from Contentful field
function getStringArray(field: any): string[] {
  if (!Array.isArray(field)) return []
  return field.map(item => getStringValue(item))
}

export default function CareersClient() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(false)

  // Function to fetch jobs from Contentful
  const fetchJobs = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch('/api/jobs')
      if (!response.ok) {
        throw new Error('Failed to fetch jobs')
      }
      
      const jobsData = await response.json()
      setJobs(jobsData)
      setLastUpdated(new Date())
      console.log(`Fetched ${jobsData.length} jobs from Contentful`)
    } catch (err) {
      console.error('Error fetching jobs:', err)
      setError('Failed to load job postings. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  // Fetch jobs on component mount
  useEffect(() => {
    fetchJobs()
  }, [])

  // Set up periodic refresh every 5 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      fetchJobs()
    }, 5 * 60 * 1000) // 5 minutes

    return () => clearInterval(interval)
  }, [])

  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "We're transforming healthcare to improve patient access to life-saving medications.",
      gradient: "from-rhodamine-500 to-rhodamine-600",
    },
    {
      icon: Brain,
      title: "Innovation",
      description: "We're leveraging cutting-edge technology to solve complex healthcare challenges.",
      gradient: "from-gulf-500 to-gulf-600",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work together across disciplines to achieve breakthrough results for patients and health systems.",
      gradient: "from-ocean-500 to-ocean-600",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest standards of ethics and transparency in everything we do.",
      gradient: "from-admiral-500 to-admiral-600",
    },
  ]

  const benefits = [
    {
      icon: HeartHandshake,
      title: "Comprehensive Health Coverage",
      description: "Medical, dental, and vision coverage designed to support you and your family's well-being at every life stage.",
      gradient: "from-rhodamine-500 to-rhodamine-600",
    },
    {
      icon: DollarSign,
      title: "Market-Leading Compensation",
      description: "Competitive base pay, plus a variety of incentive and pay opportunities based on role.",
      gradient: "from-gulf-500 to-gulf-600",
    },
    {
      icon: Globe,
      title: "Remote-First Flexibility",
      description: "Work from anywhere and thrive. Flexibility and support built for a seamless remote experience.",
      gradient: "from-ocean-500 to-ocean-600",
    },
    {
      icon: Shield,
      title: "Retirement Benefits",
      description: "Supporting your goals beyond the paycheck with a 401(k) match starting Day 1.",
      gradient: "from-admiral-500 to-admiral-600",
    },
    {
      icon: Users2,
      title: "Team Connection & Culture",
      description: "Regular team events, virtual happy hours, and opportunities to connect with colleagues across the organization.",
      gradient: "from-rhodamine-500 to-gulf-500",
    },
    {
      icon: Calendar,
      title: "Work-Life Balance",
      description: "Flexible PTO, paid holidays, and a culture that respects your time both in and out of the office.",
      gradient: "from-ocean-500 to-admiral-500",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-admiral-50 via-white to-gypsum-50"></div>
        <div className="relative container px-6 md:px-8">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
            {/* <div className="inline-flex items-center space-x-2 bg-white/80 border border-rhodamine-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
              <Briefcase className="h-4 w-4 text-rhodamine-600" />
              <span className="text-sm font-semibold text-rhodamine-800 font-space-grotesk tracking-wide">
                Join Our Team
              </span>
            </div> */}
            <h1 className="text-4xl md:text-6xl font-bold font-outfit text-admiral-900 leading-tight">
              Build the Future of
              <span className="bg-gradient-to-r from-rhodamine-600 via-gulf-600 to-ocean-600 bg-clip-text text-transparent">
                {" "}Healthcare Technology
              </span>
            </h1>
            <p className="text-xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
            Join us in revolutionizing specialty pharmacy operations through solutions that transform patient care and bolster health system financial performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-rhodamine-500 to-gulf-500 hover:from-rhodamine-600 hover:to-gulf-600 text-white px-8 py-3 text-lg"
                onClick={() => {
                  const jobsSection = document.getElementById('open-positions')
                  jobsSection?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                View Open Positions Soon
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="w-full py-20 md:py-32">
        <div className="container px-6 md:px-8">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-admiral-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
              <Target className="h-4 w-4 text-admiral-600" />
              <span className="text-sm font-semibold text-admiral-800 font-space-grotesk tracking-wide">
                Our Values
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-outfit text-admiral-900">
              What Drives Us
            </h2>
            <p className="text-xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
              Our core values guide everything we do, from product development to team collaboration.
            </p>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1} direction="up">
                <motion.div className="group" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border border-gypsum-200 h-80">
                    <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                      <div>
                        <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${value.gradient} shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <value.icon className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-xl font-bold font-outfit mb-4 text-admiral-900">{value.title}</h3>
                        <p className="text-admiral-600 leading-relaxed font-space-grotesk text-sm">{value.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why You'll Love Working Here */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-gypsum-50 to-white">
        <div className="container px-6 md:px-8">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-rhodamine-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
              <Star className="h-4 w-4 text-rhodamine-600" />
              <span className="text-sm font-semibold text-rhodamine-800 font-space-grotesk tracking-wide">
                Benefits & Perks
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-outfit text-admiral-900">
              Why You'll Love Working Here
            </h2>
            <p className="text-xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
              At our core, we believe great people build great companies. We are proud to invest in our employees and their families by providing a comprehensive Total Rewards experience and development opportunities that advance as we grow together.
            </p>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 0.1} direction="up">
                <motion.div className="group" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border border-gypsum-200 h-80">
                    <CardContent className="p-8 h-full flex flex-col justify-between">
                      <div>
                        <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${benefit.gradient} shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <benefit.icon className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-xl font-bold font-outfit mb-4 text-admiral-900 text-center">{benefit.title}</h3>
                        <p className="text-admiral-600 leading-relaxed font-space-grotesk text-sm text-center">{benefit.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions - HIDDEN */}
      {/* <section id="open-positions" className="w-full py-20 md:py-32">
        <div className="container px-6 md:px-8">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-admiral-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
              <Briefcase className="h-4 w-4 text-admiral-600" />
              <span className="text-sm font-semibold text-admiral-800 font-space-grotesk tracking-wide">
                Open Positions
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-outfit text-admiral-900">
              Join Our Team
            </h2>
            <p className="text-xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
              Explore our current openings and find the perfect role to grow your career with us.
            </p>
          </ScrollReveal>

          {loading ? (
            <div className="text-center py-12">
              <div className="text-admiral-400 mb-4">
                <RefreshCw className="h-12 w-12 mx-auto animate-spin" />
              </div>
              <h3 className="text-lg font-semibold text-admiral-900 mb-2">
                Loading job postings...
              </h3>
              <p className="text-admiral-600">
                Fetching the latest opportunities for you.
              </p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <div className="text-red-400 mb-4">
                <Briefcase className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-admiral-900 mb-2">
                Unable to load job postings
              </h3>
              <p className="text-admiral-600 mb-4">
                {error}
              </p>
              <Button 
                variant="outline"
                onClick={fetchJobs}
                className="border-2 border-admiral-300 hover:border-admiral-400 text-admiral-700"
              >
                Try Again
              </Button>
            </div>
          ) : jobs.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-admiral-400 mb-4">
                <Briefcase className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-admiral-900 mb-2">
                No open positions at the moment
              </h3>
              <p className="text-admiral-600 mb-4">
                We don't have any open positions right now, but we're always looking for great talent.
              </p>
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/contact'}
                className="border-2 border-admiral-300 hover:border-admiral-400 text-admiral-700"
              >
                Contact Us
              </Button>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              {jobs.map((job, index) => (
                <ScrollReveal key={job.sys.id} delay={index * 0.1} direction="up">
                  <motion.div className="group" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border border-gypsum-200 h-full">
                      <CardContent className="p-8 h-full flex flex-col">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold font-outfit text-admiral-900 group-hover:text-rhodamine-600 transition-colors">
                              {getStringValue(job.fields.title) || 'Untitled Position'}
                            </h3>
                            <div className="flex space-x-2">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rhodamine-100 text-rhodamine-800">
                                {getStringValue(job.fields.department) || 'General'}
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gulf-100 text-gulf-800">
                                {getStringValue(job.fields.type) || 'Full-time'}
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 mb-4 text-sm text-admiral-600">
                            <span className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{getStringValue(job.fields.location) || 'Remote'}</span>
                            </span>
                            {job.fields.salary && (
                              <span className="flex items-center space-x-1">
                                <DollarSign className="h-4 w-4" />
                                <span>{getStringValue(job.fields.salary) || 'Competitive'}</span>
                              </span>
                            )}
                          </div>
                          
                          <p className="text-admiral-600 mb-6 line-clamp-3 leading-relaxed font-space-grotesk text-sm">
                            {getStringValue(job.fields.description) || 'No description available'}
                          </p>
                          
                          {job.fields.requirements && job.fields.requirements.length > 0 && (
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold text-admiral-900 mb-2">Key Requirements:</h4>
                              <ul className="space-y-1">
                                {getStringArray(job.fields.requirements).slice(0, 3).map((req, idx) => (
                                  <li key={idx} className="text-admiral-600 text-xs flex items-start space-x-2">
                                    <span className="w-1 h-1 bg-rhodamine-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                    <span>{req}</span>
                                  </li>
                                ))}
                                {getStringArray(job.fields.requirements).length > 3 && (
                                  <li className="text-admiral-500 text-xs">
                                    +{getStringArray(job.fields.requirements).length - 3} more requirements
                                  </li>
                                )}
                              </ul>
                            </div>
                          )}
                        </div>
                        
                        <div className="mt-6 pt-6 border-t border-gypsum-200">
                          <Button 
                            className="w-full bg-gradient-to-r from-rhodamine-500 to-gulf-500 hover:from-rhodamine-600 hover:to-gulf-600 text-white"
                            onClick={() => {
                              setSelectedJob(job)
                              setIsApplicationFormOpen(true)
                            }}
                          >
                            Apply Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section> */}

      {/* Job Application Form */}
      {selectedJob && (
        <JobApplicationForm
          isOpen={isApplicationFormOpen}
          onClose={() => {
            setIsApplicationFormOpen(false)
            setSelectedJob(null)
          }}
          jobTitle={getStringValue(selectedJob.fields.title) || 'Untitled Position'}
          jobId={selectedJob.sys.id}
          jobData={selectedJob.fields}
        />
      )}

      {/* Contact Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-admiral-50 to-white">
        <div className="container px-6 md:px-8">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-admiral-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
              <Phone className="h-4 w-4 text-admiral-600" />
              <span className="text-sm font-semibold text-admiral-800 font-space-grotesk tracking-wide">
                Get In Touch
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-outfit text-admiral-900">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
              Have questions about our culture, benefits, or open positions? We'd love to hear from you.
            </p>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            <ScrollReveal direction="up" delay={0.1}>
              <motion.div className="group" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border border-gypsum-200 text-center h-80">
                  <CardContent className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-rhodamine-500 to-rhodamine-600 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Mail className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold font-outfit mb-4 text-admiral-900">Email Us</h3>
                      <p className="text-admiral-600 leading-relaxed font-space-grotesk text-sm mb-4">
                        Send us a message and we'll get back to you within 24 hours.
                      </p>
                    </div>
                    <Button 
                      variant="outline" 
                      className="border-admiral-200 text-admiral-700 hover:bg-admiral-50"
                      onClick={() => window.location.href = 'mailto:hr@longituderx.org'}
                    >
                      hr@longituderx.org
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <motion.div className="group" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border border-gypsum-200 text-center h-80">
                  <CardContent className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gulf-500 to-gulf-600 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <MapPinIcon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold font-outfit mb-4 text-admiral-900">Visit Us</h3>
                      <p className="text-admiral-600 leading-relaxed font-space-grotesk text-sm mb-4">
                        Our headquarters in Dallas, Texas, or connect with us remotely.
                      </p>
                    </div>
                    <p className="text-admiral-600 font-space-grotesk text-sm font-semibold">
                      Dallas, Texas
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <motion.div className="group" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border border-gypsum-200 text-center h-80">
                  <CardContent className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-ocean-500 to-ocean-600 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Clock className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold font-outfit mb-4 text-admiral-900">Response Time</h3>
                      <p className="text-admiral-600 leading-relaxed font-space-grotesk text-sm mb-4">
                        We typically respond to all inquiries within 24 hours.
                      </p>
                    </div>
                    <p className="text-admiral-600 font-space-grotesk text-sm font-semibold">
                      Mon-Fri, 9AM-6PM CST
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
