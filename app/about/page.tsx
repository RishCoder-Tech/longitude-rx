"use client"

import { useState } from "react"
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
  Rocket,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-animations"
import { HealthcareLeadersScroll } from "@/components/healthcare-leaders-scroll"
import Image from "next/image"


export default function AboutPage() {
  const [expandedBio, setExpandedBio] = useState<string | null>(null)
  const leadershipTeam = [
    {
      name: "Jigar Thakkar",
      title: "Chief Executive Officer",
      headshot: "/Jigar Thakkar.png",
      bio: `Jigar Thakkar, PharmD, MBA, MHCDS, FACHE is the CEO of Longitude Rx, an inaugural role for the newly created specialty pharmacy operating company within Longitude Health. Previously, Jigar served as the enterprise Chief Administrative Officer (CAO) and SVP of Growth Integration at OU Health as well as the Chief Pharmacy Officer.   \n\nJigar has extensive experience in academic healthcare, as well as large integrated delivery networks, with a successful track record of leading complex hospital operations, strategic growth, and revenue diversification. At OU Health, Jigar established a specialty pharmacy business, taking it from a highly fragmented environment under multiple companies and integrating it under an operating model which resulted in revenue growth from $0 to over $470m annually within four years, leading to a $200m annual contribution margin impact. He was instrumental in transforming OU Health into a more clinically integrated academic health system. Prior to joining OU Health, Jigar was a Managing Director at FTI Consulting, a global, publicly traded consulting firm where Jigar served as U.S. lead for pharmacy services with a focus on leading vision, strategy, and implementation phases of engagements. He has delivered strategic and operational excellence work to the executive leadership of hospitals and health systems, Fortune 100 companies, pharmacy wholesalers, national retail pharmacy chains, private equity firms, and law firms. Jigar has also provided extensive 340B Drug Pricing Program advisory services related to compliance for many health systems across the U.S. Jigar serves as a Fellow of the American College of Healthcare Executives (FACHE) and serves on the hospital advisory board of Cencora (a recent top 10 Fortune 500 company). \n\nJigar grew up in Chicago where he received his PharmD. He completed his Executive MBA at Northwestern University's Kellogg School of Management and received his Master of Health Care Delivery Science (MHCDS) from Dartmouth College.`,
      linkedin: "https://www.linkedin.com/in/jigar24/",
    },
    {
      name: "Sinthu Sinnadurai",
      title: "Senior Vice President of Operations",
      headshot: "/Sinthu Sinnadurai.jpg",
      bio: "Sinthu Sinnadurai brings extensive operational expertise to Longitude Rx, overseeing critical operational functions that drive efficiency and excellence across our specialty pharmacy services. With a proven track record in healthcare operations, Sinthu ensures our systems and processes deliver optimal outcomes for health system partners.",
    },
    {
      name: "Toni Giglio",
      title: "Senior Vice President of Market Access",
      headshot: "/Toni Giglio.jpg",
      bio: "Toni Giglio leads our market access strategy, developing innovative approaches to expand specialty pharmacy services and optimize patient access to critical medications. Her expertise in healthcare market dynamics and payer relationships drives sustainable growth and improved patient outcomes.",
    },
    {
      name: "Arpit Parikh",
      title: "Senior Vice President of Finance",
      headshot: "/Arpit Parikh.jpg",
      bio: "Arpit is a seasoned finance executive with 18 years of experience leading financial strategy across Fortune 50 corporations, high-growth technology startups, and healthcare organizations. He brings deep expertise in financial analysis, capital planning, and corporate development and strategy, with a consistent track record of aligning financial operations with enterprise-wide objectives to drive growth and long-term value creation.\n\nAt Longitude Rx, Arpit oversees all facets of financial operations, strategy, and planning. As the steward of the company's economic engine, he plays a critical role in shaping future-ready decisions that support innovation, scalability, and fiscal discipline. Prior to joining Longitude Rx, he served as Head of Finance at autonomous vehicle pioneer Cruise and held successive senior finance leadership roles at PepsiCo, where he led multi-billion-dollar initiatives across pricing, revenue management, and supply chain finance. He began his career as a management consultant at Accenture.\n\nArpit holds an MBA from Northwestern University's Kellogg School of Management and a BBA from the University of Texas at Austin's McCombs School of Business.",
    },
    {
      name: "Jonathan Williams",
      title: "Vice President of 340B Operations",
      headshot: "/Jonathan Williams.png",
      bio: "Jonathan Williams specializes in 340B program operations, ensuring compliance and optimization of this critical program for health system partners. His deep understanding of 340B regulations and operational requirements helps maximize program benefits while maintaining strict compliance standards.",
    },
    {
      name: "Katie McMillen",
      title: "Vice President of Market Access",
      headshot: "/Katie McMillen.jpg",
      bio: "Katie McMillen focuses on expanding market access opportunities and building strategic partnerships that enhance our specialty pharmacy capabilities. Her expertise in healthcare market dynamics and relationship management drives growth and improved patient access to specialty medications.",
    },
    {
      name: "Rachel Bolton",
      title: "Vice President of Human Resources",
      headshot: "/Rachel Bolton.jpg",
      bio: "Rachel Bolton serves as Vice President of Human Resources at Longitude Rx, where she leads the company's enterprise people strategy to enable growth, operational scale, and a high-performing culture. She oversees all HR functions, including talent acquisition, workforce planning, organizational development, employee engagement, performance management, and compliance.\n\nPrior to joining Longitude Rx, Rachel served as Associate Vice President of Talent Acquisition at OU Health, the state's only comprehensive academic health system. She led the transformation of enterprise-wide hiring operations, implemented data-driven strategies, and established system-wide job architecture and leveling frameworks. She integrated workforce planning with financial and operational forecasting and launched workforce development initiatives to strengthen retention and build career mobility.\n\nRachel holds both her undergraduate and graduate degree from the University of Oklahoma. She brings to Longitude Rx a performance-driven leadership approach grounded in operational rigor, strategic alignment, and a commitment to building scalable, people-first organizations.",
    },
    {
      name: "Nicole Ostrowski",
      title: "Executive Director of Strategy and Operations",
      headshot: "/Nicole Ostrowski.png",
      bio: "Nicole Ostrowski, Ph.D., currently serves as the Executive Director of Strategy & Operations at Longitude Rx, where she leads enterprise planning and operational execution to support strategic growth. Prior to this, she held several leadership roles at Highmark Health, including Director of Operations & Planning, where she partnered with senior executives to address over $16M in budget pressures within the Human Resources and internal consulting functions.\n\nNicole is known for her collaborative, adaptable leadership style and her ability to create structure in complex environments. She builds strong cross-functional relationships and consistently delivers results by aligning strategic vision with practical execution. She brings a unique blend of scientific rigor and business acumen to her work, supported by a strong foundation in project management, financial planning, and change leadership.\n\nNicole holds a Ph.D. in Bioengineering and a B.S. in Materials Science & Engineering from the University of Pittsburgh.",
      linkedin: "https://www.linkedin.com/in/nicolejostrowski/",
    },
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
                SPECIALTY PHARMACY OPTIMIZATION LEADERS
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-outfit font-bold leading-tight">
              <span className="bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">
                Transforming Specialty Pharmacy through Innovation & Collaboration
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-admiral-600 max-w-4xl leading-relaxed font-space-grotesk mt-8">
              Longitude Rx is a pioneering specialty pharmacy service that enhances health systems' specialty pharmacy operations, financial performance, and clinical outcomes through deep health system partnerships and state-of-the-art technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founding Partners Section */}
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
              Longitude Health
                </h2>
            <p className="text-xl text-admiral-600 max-w-4xl leading-relaxed font-space-grotesk">
              Longitude Health ("LH") is a collaborative initiative currently owned and funded by five leading not-for-profit health systems – Baylor Scott & White Health, Memorial Hermann Health System, Michigan Medicine, Novant Health and Providence – comprised of $60 billion in consolidated net patient service revenue. LH aims to revolutionize the way health systems operate by creating bold, innovative solutions designed and built by health systems for health systems. The organization identifies, develops, and implements initiatives that drive meaningful change: delivering high-quality, affordable care, improving access, and enhancing the patient experience. For more information, visit <a href="https://longitudehealth.org/" target="_blank" rel="noopener noreferrer" className="text-ocean-600 hover:text-ocean-800 underline font-semibold">Longitudehealth.org</a>.
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
                  icon: Rocket,
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

      {/* We're not just a platform, we're a partner Section */}
      <section className="w-full py-20 md:py-32">
        <div className="container px-6 md:px-8">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-ocean-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
              <Building className="h-4 w-4 text-ocean-600" />
              <span className="text-sm font-semibold text-ocean-800 font-space-grotesk tracking-wide">
                WHY WE'RE DIFFERENT
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">
              We're not just a platform, we're a partner  
            </h2>
            <p className="text-xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
              We go beyond technology to become an extension of your team—collaborating closely, sharing expertise, and supporting your goals at every step. Longitude Rx is your partner in specialty pharmacy transformation, working side-by-side to drive sustainable growth and deliver better outcomes for your patients and your health system.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <ScrollReveal direction="left" className="group">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gypsum-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-rhodamine-500 via-gulf-400 to-ocean-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Activity className="h-6 w-6 md:h-7 md:w-7 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-outfit mb-3 md:mb-4 text-admiral-900">Built by health systems</h3>
                <p className="text-admiral-600 leading-relaxed text-base">
                  Owned & governed by health system CEOs, our platform is built with deep understanding of healthcare operations. We know your challenges because we've lived them, ensuring solutions that truly work for health systems.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" className="group">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gypsum-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-gulf-500 via-ocean-400 to-rhodamine-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Rocket className="h-6 w-6 md:h-7 md:w-7 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-outfit mb-3 md:mb-4 text-admiral-900">Built for health systems</h3>
                <p className="text-admiral-600 leading-relaxed text-base">
                  Designed by pharmacy leadership, our solutions are specifically crafted to address the unique challenges and opportunities of health system specialty pharmacies. We understand the complexities of your operations and provide tailored solutions that integrate seamlessly with your existing workflows.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="group">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gypsum-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-rhodamine-500 via-gulf-400 to-ocean-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Users className="h-6 w-6 md:h-7 md:w-7 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-outfit mb-3 md:mb-4 text-admiral-900">Integrated care teams</h3>
                <p className="text-admiral-600 leading-relaxed text-base">
                  Our specialized teams become an extension of your organization, working directly within your health system to optimize specialty pharmacy operations, drive revenue growth, and enhance patient care outcomes. Focused on improving health system outcomes and patient care.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" className="group">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gypsum-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-gulf-500 via-ocean-400 to-rhodamine-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Rocket className="h-6 w-6 md:h-7 md:w-7 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-outfit mb-3 md:mb-4 text-admiral-900">Powered by next gen technology</h3>
                <p className="text-admiral-600 leading-relaxed text-base">
                  Our next-gen technology has demonstrated significant improvements in prescription capture, operational efficiency, and patient outcomes. With cutting-edge technology at your fingertips, you can streamline processes and make data-driven decisions.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="w-full py-20 md:py-32">
        <div className="container px-6 md:px-8">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-rhodamine-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
              <Award className="h-4 w-4 text-rhodamine-600" />
              <span className="text-sm font-semibold text-rhodamine-800 font-space-grotesk tracking-wide">
                VISIONARY LEADERSHIP
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent max-w-5xl">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
              Industry pioneers and visionaries driving the future of specialty pharmacy optimization.
            </p>

          </ScrollReveal>

          {/* Leadership Team Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {leadershipTeam.map((member, index) => (
                <ScrollReveal
                  key={member.name}
                  direction="up"
                  delay={index * 0.1}
                  className="group"
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gypsum-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group-hover:-translate-y-1">
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      <Image
                        src={member.headshot}
                        alt={member.name}
                        fill
                        className="object-cover rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold font-outfit mb-2 text-admiral-900">
                      {member.name}
                    </h3>
                    <p className="text-admiral-600 font-medium mb-4">
                      {member.title}
                    </p>
                    
                    {/* Clickable Bio Section */}
                    <div className="space-y-3">
                      <button
                        onClick={() => setExpandedBio(expandedBio === member.name ? null : member.name)}
                        className="text-sm text-admiral-600 hover:text-admiral-800 font-medium transition-colors duration-200 underline"
                      >
                        {expandedBio === member.name ? 'Hide Bio' : 'Read Bio'}
                      </button>
                      
                      {expandedBio === member.name && (
                        <div className="text-left">
                          <p className="text-admiral-600 text-sm leading-relaxed mb-4">
                            {member.bio}
                          </p>
                          {member.linkedin && (
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                              <Button variant="outline" size="sm" className="text-admiral-700 border-admiral-300 hover:bg-admiral-50">
                                <Linkedin className="mr-2 h-4 w-4" />
                                LinkedIn
                              </Button>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-gypsum-100/80 via-gypsum-200/30 to-gypsum-300/30 backdrop-blur-sm">
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
                  Revolutionizing Specialty Pharmacy Operations
            </h2>
                <p className="text-lg text-admiral-600 leading-relaxed font-space-grotesk">
                  Longitude Rx exists to help health systems capture every dollar of specialty pharmacy opportunity. We harness AI to uncover every in-system script, streamline reimbursement workflows, and open new payer and manufacturer channels driving sustainable top-line growth in your specialty pharmacy.
                </p>
                <p className="text-lg text-admiral-600 leading-relaxed font-space-grotesk">
                  Beyond boosting revenue, we're building an intelligent ecosystem that brings health systems, payers, and providers together. By unifying data, automating workflows, and applying cutting-edge analytics, we ensure you keep more of your hard-earned margin while delivering best-in-class patient care.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" className="relative">
              <div className="relative w-full h-80 md:h-[420px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/Mission Image 5.png"
                  alt="Our mission"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Longitude Health Section */}
      <section className="w-full py-4">
        <div className="container px-6 md:px-8">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center gap-2">
              <Globe className="h-5 w-5 text-admiral-400" />
              <span className="text-lg md:text-2xl font-outfit text-admiral-900 font-bold">
                Established in 2024 as a part of <Link href="http://longitudehealth.org" target="_blank" rel="noopener noreferrer" className="underline text-primary font-bold hover:text-gulf-600">Longitude Health</Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - replaced with homepage version */}
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
              Ready to grow your specialty pharmacy program?
            </motion.h2>
            <p className="text-2xl text-gypsum-300 max-w-4xl leading-relaxed font-space-grotesk font-light">
              Join leading health systems who are already capturing millions of added revenue on specialty medications and therapies.
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
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
