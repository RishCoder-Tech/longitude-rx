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
  CheckCircle,
  Cpu,
  HeartHandshake,
  Linkedin,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-animations"
import HealthcareLeadersScroll from "@/components/healthcare-leaders-scroll"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function AboutPage() {
  const leadershipTeam = [
    {
      name: "Jigar Thakkar",
      title: "CEO of Longitude Rx",
      headshot: "/Jigar Thakkar.png",
      bio: "Jigar is a visionary leader with over 20 years of experience in the healthcare industry. He is passionate about leveraging technology to improve patient outcomes and reduce healthcare costs.",
      linkedin: "https://www.linkedin.com/in/jigar24/",
    },
    {
      name: "Jonathan Williams",
      title: "Vice President of 340B Operations",
      headshot: "/Jonathan Williams.png",
      bio: "Jonathan is an expert in 340B operations, with a deep understanding of the complexities of the program. He is dedicated to helping health systems optimize their 340B programs.",
      linkedin: "https://www.linkedin.com/in/jonathan-williams-26a30286/",
    },
    {
      name: "Sinthu Sinnadurai",
      title: "Senior Vice-President of Operations",
      headshot: "/Sinthu Sinnadurai.jpg",
      bio: "Sinthu is a seasoned operations leader with a proven track record of driving efficiency and growth. He is committed to building a world-class operations team at Longitude Rx.",
      linkedin: "https://www.linkedin.com/in/sinthusan/",
    },
    {
      name: "Nicole Ostrowski",
      title: "Executive Director of Strategy & Operations",
      headshot: "/Nicole Ostrowski.png",
      bio: "Nicole is a strategic thinker with a passion for innovation. She is responsible for developing and executing Longitude Rx's corporate strategy.",
      linkedin: "https://www.linkedin.com/in/nicolejostrowski/",
    },
    {
      name: "Toni Giglio",
      title: "SVP, Market Access for Longitude Rx",
      headshot: "/Toni Giglio.jpg",
      bio: "Toni is a market access expert with a deep understanding of the payer landscape. She is dedicated to ensuring that patients have access to the medications they need.",
      linkedin: "https://www.linkedin.com/in/tonigiglio/",
    },
    {
      name: "Rachel Bolton, MBA, SHRM-SCP",
      title: "VP Human Resources",
      headshot: "/Rachel Bolton.jpg",
      bio: "Rachel is a passionate HR leader with a focus on building a strong and inclusive culture. She is committed to attracting and retaining top talent at Longitude Rx.",
      linkedin: "https://www.linkedin.com/in/rachel-bolton-mba-shrm-scp-7a8194126/",
    },
    {
      name: "Tom Kotronis",
      title: "Senior Director of Specialty Pharmacy New Business Development",
      headshot: "/Tom Kotronis.jpg",
      bio: "Tom is a business development expert with a proven track record of driving growth. He is responsible for building and managing Longitude Rx's sales pipeline.",
      linkedin: "https://www.linkedin.com/in/tom-kotronis/",
    },
    // Add other team members here...
  ]

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
              Longitude Rx is a pioneering specialty pharmacy service that enhances health systems' specialty pharmacy operations, financial performance, and clinical outcomes through state-of-the-art AI-enabled technologies.
            </p>
          </motion.div>
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
            {leadershipTeam.map((member) => (
              <Dialog key={member.name}>
                <DialogTrigger asChild>
                  <div className="text-center cursor-pointer group">
                    <div className="relative w-48 h-48 mx-auto mb-4 transition-transform duration-300 transform group-hover:scale-105">
                      <Image
                        src={member.headshot}
                        alt={member.name}
                        fill
                        className="object-cover object-top rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-gray-600">{member.title}</p>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>{member.name}</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="relative w-48 h-48 mx-auto mb-4">
                      <Image
                        src={member.headshot}
                        alt={member.name}
                        fill
                        className="object-cover object-top rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                    <p className="text-gray-600 text-center">{member.title}</p>
                    <p className="text-gray-600 text-center">{member.bio}</p>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full">
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
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
                    "Revolutionary AI-powered specialty medicine cost optimization technology launches, marking the beginning of a new era in healthcare economics.",
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
        <div className="h-9"></div>

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
              Join us in revolutionizing specialty medicine cost management and discover how our innovative technology can
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
              <Link href="/services">
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
