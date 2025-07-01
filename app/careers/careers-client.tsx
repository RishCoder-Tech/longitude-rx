"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-animations"
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
} from "lucide-react"

export default function CareersClient({ jobs }) {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're transforming healthcare to improve patient access to life-saving medications.",
    },
    {
      icon: Brain,
      title: "Innovation First",
      description: "We're leveraging cutting-edge technology to solve complex healthcare challenges.",
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "We work together across disciplines to achieve breakthrough results for patients and health systems.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest standards of ethics and transparency in everything we do.",
    },
  ]

  const benefits = [
    {
      icon: HeartHandshake,
      title: "Comprehensive Health Coverage",
      description: "Medical, dental, and vision coverage designed to support you and your family's well-being at every life stage.",
    },
    {
      icon: DollarSign,
      title: "Market-Leading Compensation",
      description: "Competitive base pay, plus a variety of incentive and pay opportunities based on role.",
    },
    {
      icon: Globe,
      title: "Remote-First Flexibility",
      description: "Work from anywhere and thrive. Flexibility and support built for a seamless remote experience.",
    },
    {
      icon: Shield,
      title: "Retirement Benefits",
      description: "Supporting your goals beyond the paycheck with a 401(k) match starting Day 1.",
    },
    {
      icon: Users2,
      title: "Team Connection & Culture",
      description: "Regular team events, virtual happy hours, and opportunities to connect with colleagues across the organization.",
    },
    {
      icon: Calendar,
      title: "Work-Life Balance",
      description: "Flexible PTO, paid holidays, and a culture that respects your time both in and out of the office.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-admiral-50 via-white to-gypsum-50"></div>
        <div className="relative container px-6 md:px-8">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-rhodamine-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
              <Briefcase className="h-4 w-4 text-rhodamine-600" />
              <span className="text-sm font-semibold text-rhodamine-800 font-space-grotesk tracking-wide">
                Join Our Team
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-outfit text-admiral-900 leading-tight">
              Build the Future of
              <span className="bg-gradient-to-r from-rhodamine-600 via-gulf-600 to-ocean-600 bg-clip-text text-transparent">
                {" "}Healthcare Technology
              </span>
            </h1>
            <p className="text-xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
              Join us in revolutionizing specialty pharmacy revenue optimization through AI-powered solutions that transform patient care and financial performance.
            </p>
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
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-gypsum-200 h-full">
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-admiral-100 to-admiral-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <value.icon className="h-8 w-8 text-admiral-600" />
                      </div>
                      <h3 className="text-xl font-bold font-outfit mb-3 text-admiral-900">{value.title}</h3>
                      <p className="text-admiral-600 leading-relaxed font-space-grotesk text-sm">{value.description}</p>
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
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-gypsum-200 h-full">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gypsum-100 to-gypsum-200 flex items-center justify-center`}>
                        <benefit.icon className="h-8 w-8 text-admiral-600" />
                      </div>
                      <h3 className="text-xl font-bold font-outfit mb-3 text-admiral-900 text-center">{benefit.title}</h3>
                      <p className="text-admiral-600 leading-relaxed font-space-grotesk text-sm text-center">{benefit.description}</p>
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
                Join Our Team
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-outfit text-admiral-900">
              Open Positions
            </h2>
            <p className="text-xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
              We're going live with an ATS very soon. Instead of posting jobs here, we'll just want a button to connect to the ATS.
            </p>
          </ScrollReveal>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-rhodamine-500 via-gulf-500 to-ocean-600 hover:from-rhodamine-600 hover:via-gulf-600 hover:to-ocean-700 text-white px-8 py-4 text-lg font-semibold"
            >
              Explore Open Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-admiral-200 text-admiral-700 hover:bg-admiral-50 px-8 py-4 text-lg font-semibold"
              onClick={() => window.location.href = 'mailto:hr@longituderx.org'}
            >
              Do you have questions about working with Longitude Rx? Contact Us
              <Mail className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

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
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-gypsum-200 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-admiral-100 to-admiral-200 flex items-center justify-center">
                      <Mail className="h-8 w-8 text-admiral-600" />
                    </div>
                    <h3 className="text-xl font-bold font-outfit mb-3 text-admiral-900">Email Us</h3>
                    <p className="text-admiral-600 leading-relaxed font-space-grotesk text-sm mb-4">
                      Send us a message and we'll get back to you within 24 hours.
                    </p>
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
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-gypsum-200 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-admiral-100 to-admiral-200 flex items-center justify-center">
                      <MapPinIcon className="h-8 w-8 text-admiral-600" />
                    </div>
                    <h3 className="text-xl font-bold font-outfit mb-3 text-admiral-900">Visit Us</h3>
                    <p className="text-admiral-600 leading-relaxed font-space-grotesk text-sm mb-4">
                      Our headquarters in Dallas, Texas, or connect with us remotely.
                    </p>
                    <p className="text-admiral-600 font-space-grotesk text-sm">
                      Dallas, Texas
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <motion.div className="group" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-gypsum-200 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-admiral-100 to-admiral-200 flex items-center justify-center">
                      <Clock className="h-8 w-8 text-admiral-600" />
                    </div>
                    <h3 className="text-xl font-bold font-outfit mb-3 text-admiral-900">Response Time</h3>
                    <p className="text-admiral-600 leading-relaxed font-space-grotesk text-sm mb-4">
                      We typically respond to all inquiries within 24 hours.
                    </p>
                    <p className="text-admiral-600 font-space-grotesk text-sm">
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
