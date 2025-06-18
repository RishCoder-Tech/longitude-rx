"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Mail,
  Send,
  CheckCircle,
  TrendingUp,
  Brain,
  DollarSign,
  Users,
  Calendar,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-animations"
import { useState } from "react"
import Image from "next/image"

export default function NewsletterPage() {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [organization, setOrganization] = useState("")
  const [interests, setInterests] = useState<string[]>([])
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleInterestChange = (interest: string, checked: boolean) => {
    if (checked) {
      setInterests([...interests, interest])
    } else {
      setInterests(interests.filter((i) => i !== interest))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && firstName && lastName) {
      setIsSubscribed(true)
      // Reset form
      setEmail("")
      setFirstName("")
      setLastName("")
      setOrganization("")
      setInterests([])
      setTimeout(() => setIsSubscribed(false), 5000)
    }
  }

  const interestOptions = [
    {
      id: "cost-optimization",
      label: "Cost Optimization Strategies",
      description: "Latest trends in specialty medicine cost management",
      icon: DollarSign,
    },
    {
      id: "ai-healthcare",
      label: "AI in Healthcare",
      description: "Artificial intelligence applications in healthcare economics",
      icon: Brain,
    },
    {
      id: "health-systems",
      label: "Health Systems Innovation",
      description: "Best practices and innovations in health system management",
      icon: Users,
    },
    {
      id: "industry-trends",
      label: "Industry Trends",
      description: "Market insights and specialty medicine industry developments",
      icon: TrendingUp,
    },
  ]

  const recentIssues = [
    {
      title: "The Future of Specialty Medicine Cost Optimization",
      date: "March 2025",
      description: "How AI is transforming cost management strategies across health systems",
      readTime: "5 min read",
    },
    {
      title: "Breaking Down Orphan Drug Economics",
      date: "February 2025",
      description: "Understanding the financial impact of rare disease treatments on health systems",
      readTime: "7 min read",
    },
    {
      title: "Collaborative Purchasing Power in Action",
      date: "January 2025",
      description: "Case studies from health systems achieving significant cost savings through collaboration",
      readTime: "6 min read",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Blog Hero Section */}
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
            className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-rhodamine-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
              <Mail className="h-4 w-4 text-rhodamine-600" />
              <span className="text-sm font-semibold text-rhodamine-800 font-space-grotesk tracking-wide">
                BLOG
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-outfit font-bold leading-tight">
              <span className="bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">
                The Longitude Rx Blog
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
              Insights, strategies, and innovations in specialty pharmacy—built by and for health systems. Learn how technology, collaboration, and clinical expertise are transforming care for complex, chronic, and rare conditions. Subscribe for updates from the leaders in specialty pharmacy reengineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="w-full py-20 md:py-32">
        <div className="container px-6 md:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-start max-w-7xl mx-auto">
            {/* Signup Form */}
            <ScrollReveal direction="left">
              <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm border border-gypsum-200">
                <CardHeader className="pb-6">
                  <CardTitle className="text-3xl font-outfit font-bold text-admiral-800 mb-2">
                    Subscribe for Updates
                  </CardTitle>
                  <p className="text-admiral-600 font-space-grotesk">
                    Get the latest on specialty pharmacy innovation, health system strategies, and patient care breakthroughs—direct to your inbox.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-admiral-700 mb-2">
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="rounded-xl border-gypsum-300 focus:border-rhodamine-400 focus:ring-rhodamine-400/20"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-admiral-700 mb-2">
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="rounded-xl border-gypsum-300 focus:border-rhodamine-400 focus:ring-rhodamine-400/20"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-admiral-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="rounded-xl border-gypsum-300 focus:border-rhodamine-400 focus:ring-rhodamine-400/20"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-admiral-700 mb-2">
                        Organization
                      </label>
                      <Input
                        id="organization"
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        className="rounded-xl border-gypsum-300 focus:border-rhodamine-400 focus:ring-rhodamine-400/20"
                        placeholder="Your health system or organization"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-admiral-700 mb-4">
                        What topics interest you most? (Select all that apply)
                      </label>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {interestOptions.map((option) => (
                          <div key={option.id} className="flex items-start space-x-3">
                            <Checkbox
                              id={option.id}
                              checked={interests.includes(option.id)}
                              onCheckedChange={(checked) => handleInterestChange(option.id, checked as boolean)}
                              className="mt-1"
                            />
                            <div className="flex-1">
                              <label
                                htmlFor={option.id}
                                className="text-sm font-medium text-admiral-700 cursor-pointer flex items-center"
                              >
                                <option.icon className="h-4 w-4 mr-2 text-rhodamine-600" />
                                {option.label}
                              </label>
                              <p className="text-xs text-admiral-500 mt-1">{option.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-rhodamine-500 via-gulf-500 to-ocean-600 hover:from-rhodamine-600 hover:via-gulf-600 hover:to-ocean-700 text-white shadow-lg transition-all duration-300 rounded-xl font-space-grotesk font-semibold py-3 group"
                      disabled={isSubscribed}
                    >
                      {isSubscribed ? (
                        <>
                          <CheckCircle className="mr-2 h-5 w-5" />
                          Subscribed Successfully!
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                          Subscribe to Newsletter
                        </>
                      )}
                    </Button>

                    {isSubscribed && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-green-600 text-sm text-center font-space-grotesk"
                      >
                        Thank you for subscribing! You'll receive our next newsletter soon.
                      </motion.p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Benefits & Recent Issues */}
            <ScrollReveal direction="right" className="space-y-8">
              {/* Benefits */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm border border-gypsum-200">
                <CardHeader>
                  <CardTitle className="text-2xl font-outfit font-bold text-admiral-800 flex items-center">
                    <Sparkles className="h-6 w-6 mr-2 text-rhodamine-600" />
                    Why Subscribe?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      icon: DollarSign,
                      title: "Cost Optimization Strategies",
                      description: "Proven methods to reduce specialty medicine costs by up to 30%",
                    },
                    {
                      icon: Brain,
                      title: "AI Innovation Updates",
                      description: "Latest developments in healthcare AI and automation",
                    },
                    {
                      icon: TrendingUp,
                      title: "Market Insights",
                      description: "Industry trends and regulatory changes affecting your bottom line",
                    },
                    {
                      icon: Users,
                      title: "Peer Learning",
                      description: "Case studies and best practices from leading health systems",
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-rhodamine-500 to-gulf-500 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-admiral-800 font-outfit">{benefit.title}</h4>
                        <p className="text-sm text-admiral-600 font-space-grotesk">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Issues */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm border border-gypsum-200">
                <CardHeader>
                  <CardTitle className="text-2xl font-outfit font-bold text-admiral-800 flex items-center">
                    <Calendar className="h-6 w-6 mr-2 text-ocean-600" />
                    Latest Blog Posts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentIssues.map((issue, index) => (
                    <div key={index} className="border-l-4 border-rhodamine-400 pl-4 py-2">
                      <h4 className="font-semibold text-admiral-800 font-outfit mb-1">{issue.title}</h4>
                      <p className="text-sm text-admiral-600 font-space-grotesk mb-2">{issue.description}</p>
                      <div className="flex items-center justify-between text-xs text-admiral-500">
                        <span>{issue.date}</span>
                        <span>{issue.readTime}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
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

        <div className="container px-6 md:px-8 relative z-10">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-white via-gypsum-200 to-gulf-200 bg-clip-text text-transparent">
              Ready to Optimize Your Costs?
            </h2>
            <p className="text-xl text-gypsum-300 max-w-3xl leading-relaxed font-space-grotesk">
              Don't just read about cost optimization—experience it. Schedule a demo to see how our platform can
              transform your specialty medicine economics.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-gulf-400 to-rhodamine-500 hover:from-gulf-300 hover:to-rhodamine-400 text-admiral-900 shadow-2xl shadow-gulf-500/25 hover:shadow-gulf-500/40 transition-all duration-500 rounded-full px-8 py-4 text-lg font-semibold font-space-grotesk group hover:scale-105 hover:-translate-y-1"
            >
              <DollarSign className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
