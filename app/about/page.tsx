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
  X,
} from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-animations"
import { HealthcareLeadersScroll } from "@/components/healthcare-leaders-scroll"
import Image from "next/image"


export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<any>(null)
  const leadershipTeam = [
    {
      name: "Jigar Thakkar",
      title: "Chief Executive Officer",
      headshot: "/Jigar Thakkar.png",
      bio: `Jigar Thakkar, PharmD, MBA, MHCDS, FACHE is the CEO of Longitude Rx, an inaugural role for the newly created specialty pharmacy operating company within Longitude Health. Previously, Jigar served as the enterprise Chief Administrative Officer (CAO) and SVP of Growth Integration at OU Health as well as the Chief Pharmacy Officer.\n\nJigar has extensive experience in academic healthcare, as well as large integrated delivery networks, with a successful track record of leading complex hospital operations, strategic growth, and revenue diversification. At OU Health, Jigar established a specialty pharmacy business, taking it from a highly fragmented environment under multiple companies and integrating it under an operating model which resulted in revenue growth from $0 to over $470m annually within four years, leading to a $200m annual contribution margin impact. He was instrumental in transforming OU Health into a more clinically integrated academic health system. Prior to joining OU Health, Jigar was a Managing Director at FTI Consulting, a global, publicly traded consulting firm where Jigar served as U.S. lead for pharmacy services with a focus on leading vision, strategy, and implementation phases of engagements. He has delivered strategic and operational excellence work to the executive leadership of hospitals and health systems, Fortune 100 companies, pharmacy wholesalers, national retail pharmacy chains, private equity firms, and law firms. Jigar has also provided extensive 340B Drug Pricing Program advisory services related to compliance for many health systems across the U.S. Jigar serves as a Fellow of the American College of Healthcare Executives (FACHE) and serves on the hospital advisory board of Cencora (a recent top 10 Fortune 500 company).\n\nJigar grew up in Chicago where he received his PharmD. He completed his Executive MBA at Northwestern University's Kellogg School of Management and received his Master of Health Care Delivery Science (MHCDS) from Dartmouth College.`,
      linkedin: "https://www.linkedin.com/in/jigar24/",
    },
    {
      name: "Sinthu Sinnadurai",
      title: "Senior Vice President of Operations",
      headshot: "/Sinthu Sinnadurai.jpg",
      bio: "As the Senior Vice-President of Operations, Sinthu Sinnadurai, MHA, CSSBB, leads Longitude Rx's pharmacy operations and strategic initiatives for the company. Sinthu possesses extensive experience in building specialty pharmacies and health system pharmacy programs including 340B programs, pharmacy benefit management (PBM), billing, and supply chain.\n\nBefore joining Longitude Rx, Sinthu served as the President at InScript and Vice President at Beth Israel Lahey Health. During his tenure at Beth Israel Lahey Health, Sinthu built a full-service pharmacy benefit management (PBM) company, 340B Claims Qualification Engine, and a rare disease patient identification technology platform. Additionally, he led the 340B contract pharmacy program, payer contracting and commercial engagements. Prior to joining Beth Israel Lahey Health, Sinthu served as the Director of Business Operations and Strategic Initiatives for Clinical Operations at Stanford Health Care where he had management and oversight of a $1.2B portfolio including pharmacy supply chain, 340B program, contract pharmacy program, specialty pharmacy, and ambulatory pharmacy services.\n\nSinthu earned his Master of Health Administration (MHA) from Cornell University and completed his Administrative Fellowship at Stanford Health Care.",
      linkedin: "https://www.linkedin.com/in/sinthusan/",
    },
    {
      name: "Toni Giglio",
      title: "Senior Vice President of Market Access",
      headshot: "/Toni Giglio.jpg",
      bio: "Toni Giglio is a dynamic, entrepreneurial healthcare executive with over 25 years of experience in the pharmacy services and healthcare industry. She currently serves as Senior Vice President of Market Access at Longitude Rx, where she leads strategic initiatives to establish impactful programs and partnerships with pharmaceutical manufacturers and payers. Her work is focused on improving medication access for the company's health system partners through innovative and results-driven strategies.\n\nThroughout her career, Toni has specialized in business development, strategic planning, sales leadership, and operational management. She is recognized for her ability to deliver multimillion-dollar growth in both startup and scaling environments by identifying new market opportunities, optimizing revenue strategies, and leading high-performing teams.\n\nBefore joining Longitude Rx, Toni was the National Vice President of Payer & Infusion Solutions at Cencora, a Fortune 10 pharmaceutical distributor. There, she led the development and commercialization of Accelerate Specialty Network—the nation's first specialty pharmacy PSAO—and directed infusion strategy consulting and solutions for Cencora's health system clients. Her earlier roles include VP of Payer Strategy at US Bioservices, and leadership positions at Walgreens and Option Care, where she played a pivotal role in launching infusion suites across the country, including the first Nurse Practitioner-led infusion center in the U.S.\n\nToni studied Business Management at Flagler College and the University of Tampa. She currently resides in Tampa, Florida.",
      linkedin: "https://www.linkedin.com/in/tonigiglio/",
    },
    {
      name: "Jonathan Williams",
      title: "Vice President of 340B Operations",
      headshot: "/Jonathan Williams.png",
      bio: "Jonathan Williams, PharmD, MS, 340B ACE, joined Longitude Health as Vice President of 340B Operations, a key role focused on supporting 340B program performance and compliance within its member organizations. He brings deep expertise in health system pharmacy operations, integrating data and technology with regulatory guidance to drive efficiency and maximize program impact.\n\nPreviously, Jonathan was a Senior Director in the Department of Pharmacy at Cleveland Clinic, where he led 340B, benchmarking, and productivity initiatives. Over his sixteen-year tenure, he was the primary contact for nine covered entities, overseeing more than 500 child sites and over 300 contract pharmacy relationships. His leadership was instrumental in optimizing compliance and financial benefits while advancing data-driven decision-making. In addition to 340B, he worked on pharmacy supply chain strategies, procurement and inventory management, technology implementation, and resource optimization.\n\nJonathan has been actively involved in national and state organizations, including Vizient, the Partnership for DSCSA Governance (PDG), the Ohio Society for Health-System Pharmacists (OSHP), and the American Society for Health-System Pharmacists (ASHP). He served as OSHP's Educational Affairs Director from 2011 to 2013 and was a PDG board member from 2019 to 2021.\n\nHe earned his PharmD from The Ohio State University, along with a master's degree and a residency in Health-System Pharmacy Administration.",
      linkedin: "https://www.linkedin.com/in/jonathan-williams-26a30286/",
    },
    {
      name: "Katie McMillen",
      title: "Vice President of Market Access",
      headshot: "/Katie McMillen.jpg",
      bio: "Katie McMillen, PharmD, MPH, FACHE, has joined Longitude Rx as the VP of Market Access, where she will help lead efforts to establish and maintain strategic partnerships with manufacturers and develop innovative programs to expand access for Longitude Rx members.\n\nPrior to joining Longitude Rx, Katie served as Senior Director of Strategic Accounts at G1 Therapeutics, where she directed a national team to strengthen partnerships with large oncology practices, academic centers, and integrated delivery networks. She played a pivotal role in driving strategic growth, mentoring team members, and fostering multi-level relationships with senior stakeholders, including corporate, medical, quality, and pharmacy leaders. Her leadership supported G1 Therapeutics' objectives to improve oncology care, integrate innovative products into clinical protocols, and enhance the patient experience.\n\nBefore her tenure at G1 Therapeutics, Katie served as the Vice President of Operations at Cencora leading Integrated Health Outcomes Coalition (IHOC). She led data integration and research projects to demonstrate the value of health system specialty pharmacies. She facilitated initiatives for IHOC members to achieve strategic goals while supporting the coalition's mission to improve patient outcomes and expand access to specialty products.\n\nEarlier in her career, Katie was the Director of Pharmacy for the oncology service line and specialty pharmacy services at Froedtert and the Medical College of Wisconsin, where she led the strategic development and operational execution of cancer centers, community infusion sites, and inpatient oncology services. She also developed and managed Froedtert's URAC-accredited specialty pharmacy program.\n\nKatie began her career as an Operations Manager at the University of Pittsburgh Medical Center (UPMC), where she completed a two-year health care administration residency. She earned a PharmD and MPH with an emphasis in pharmacy administration from the University of Pittsburgh. She currently resides in Atlanta, Georgia.",
    },
    {
      name: "Arpit Parikh",
      title: "Senior Vice President of Finance",
      headshot: "/Arpit Parikh.jpg",
      bio: "Arpit is a seasoned finance executive with 18 years of experience leading financial strategy across Fortune 50 corporations, high-growth technology startups, healthcare organizations. He brings deep expertise in financial analysis, capital planning, and corporate development and strategy, with a consistent track record of aligning financial operations with enterprise-wide objectives to drive growth and long-term value creation.\n\nAt Longitude Rx, Arpit oversees all facets of financial operations, strategy, and planning. As the steward of the company's economic engine, he plays a critical role in shaping future-ready decisions that support innovation, scalability, and fiscal discipline. Prior to joining Longitude Rx, he served as Head of Finance at autonomous vehicle pioneer Cruise and held successive senior finance leadership roles at PepsiCo, where he led multi-billion-dollar initiatives across pricing, revenue management, and supply chain finance. He began his career as a management consultant at Accenture.\n\nArpit holds an MBA from Northwestern University's Kellogg School of Management and a BBA from the University of Texas at Austin's McCombs School of Business. He resides in Dallas with his wife and three children and is an avid sports fan who enjoys cheering on his hometown teams.",
      linkedin: "https://www.linkedin.com/in/arpitparikh/",
    },
    {
      name: "Rachel Bolton",
      title: "Vice President of Human Resources",
      headshot: "/Rachel Bolton.jpg",
      bio: "Rachel Bolton serves as Vice President of Human Resources at Longitude Rx, where she leads the company's enterprise people strategy to enable growth, operational scale, and a high-performing culture. She oversees all HR functions, including talent acquisition, workforce planning, organizational development, employee engagement, performance management, and compliance. Her focus is building the infrastructure, capabilities, and culture required for sustainable success in a fast-scaling environment.\n\nPrior to joining Longitude Rx, Rachel served as Associate Vice President of Talent Acquisition at OU Health, the state's only comprehensive academic health system. She led the transformation of enterprise-wide hiring operations, implemented data-driven strategies, and established system-wide job architecture and leveling frameworks. She integrated workforce planning with financial and operational forecasting and launched workforce development initiatives to strengthen retention and build career mobility. Her leadership spanned both clinical and non-clinical domains and positioned HR as a strategic partner during large-scale organizational change, system redesigns, workforce optimization, and executive transitions.\n\nRachel holds both her undergraduate and graduate degree from the University of Oklahoma. She brings to Longitude Rx a performance-driven leadership approach grounded in operational rigor, strategic alignment, and a commitment to building scalable, people-first organizations.",
      linkedin: "https://www.linkedin.com/in/rachel-bolton-mba-shrm-scp-7a8194126/",
    },
    {
      name: "Thomas Kotronis",
      title: "Senior Director, Specialty Pharmacy New Business Development",
      headshot: "/Tom Kotronis.jpg",
      bio: "With more than 20 years of experience in pharmacy operations and healthcare management, Thomas Kotronis is a seasoned executive known for his leadership in driving operational excellence and innovative business strategies within the healthcare and pharmacy industries. As Senior Director of Specialty Pharmacy New Business Development at Longitude Health, Thomas is at the forefront of expanding new business opportunities and enhancing the delivery of specialized pharmacy services.\n\nThroughout his career, Thomas has demonstrated an exceptional ability to lead large teams, optimize business operations, and drive sustainable growth. He has held senior leadership roles at prominent organizations, including Walgreens, CVS Health, and McKesson, where he successfully led initiatives to improve patient outcomes, boost regulatory compliance, and increase operational efficiency.\n\nAs Vice President of Pharmacy Operations at McKesson, Thomas spearheaded the strategic expansion of outpatient, specialty, and long-term care services across the U.S., Canada, Puerto Rico, and Hawaii. His leadership resulted in notable improvements in business development, patient care and regulatory performance, earning him several accolades, including the prestigious President's Award for Outstanding Leadership.\n\nIn addition to his corporate leadership roles, Thomas served as the Principal of Pharmacy Solutions Consulting, where he provided expert consulting services in outpatient, retail, long-term care, and specialty pharmacy operations. His expertise in pharmacy business transformation has made him a trusted advisor across multiple healthcare settings.\n\nA forward-thinking leader passionate about pharmacy innovation, Thomas is committed to shaping the future of healthcare by continuously exploring new opportunities to enhance service delivery. He holds a B.S. in Pharmaceutical Sciences from Wayne State University and is licensed as a pharmacist in Florida, Michigan, and New Jersey.",
      linkedin: "https://www.linkedin.com/in/tom-kotronis/",
    },
    {
      name: "Nicole Ostrowski",
      title: "Executive Director of Strategy and Operations",
      headshot: "/Nicole Ostrowski.png",
      bio: "Nicole Ostrowski, Ph.D., currently serves as the Executive Director of Strategy & Operations at Longitude Rx, where she leads enterprise planning and operational execution to support strategic growth. Prior to this, she held several leadership roles at Highmark Health, including Director of Operations & Planning, where she partnered with senior executives to address over $16M in budget pressures within the Human Resources and internal consulting functions, and implemented financial review processes that improved fiscal transparency and accountability. She led a team responsible for maintaining Salesforce CRM infrastructure used by vice presidents across the company and drove continuous improvement initiatives that reduced administrative burden through automation and self-service tools. In earlier roles at Highmark, Nicole led strategic consulting engagements that delivered more than $10M in annual contribution margin and $7M+ in cost savings through operational redesign and process optimization.\n\nNicole is known for her collaborative, adaptable leadership style and her ability to create structure in complex environments. She builds strong cross-functional relationships and consistently delivers results by aligning strategic vision with practical execution. She brings a unique blend of scientific rigor and business acumen to her work, supported by a strong foundation in project management, financial planning, and change leadership. Nicole holds a Ph.D. in Bioengineering and a B.S. in Materials Science & Engineering from the University of Pittsburgh.",
      linkedin: "https://www.linkedin.com/in/nicolejostrowski/",
    },
    {
      name: "Avani Patel",
      title: "Vice President of Strategic Operations",
      headshot: "/Avani Patel.png",
      bio: "Avani Patel is a seasoned healthcare executive with over 20 years of experience with the 340B program and Pharmacy Operations. Most recently, she served as Vice President at Optum Specialty Pharmacy, part of United Healthcare Group, where she led strategic initiatives to optimize 340B savings, expand pharmacy networks, and enhance operational performance across five business segments. As the escalated point of contact for all pharmacy-related matters, Avani played a pivotal role in aligning cross-functional teams and delivering high-impact solutions for health systems nationwide.\n\nHer career also includes leadership roles at Omnicell, Commcare Specialty Pharmacy, Life Extension Foundation, and RxStrategies (now Pillr Health), where she built and scaled pharmacy networks, managed multi-disciplinary teams, and spearheaded compliance and client success across contract pharmacy services. Avani is known for her deep expertise in 340B program development, inventory management, and client relations, as well as her ability to navigate complex regulatory landscapes and deliver measurable results.\n\nShe holds an MBA, a Bachelor's in Healthcare Administration, and is a certified Apexus 340B Expert. Avani's passion lies in transforming pharmacy operations to enhance patient care, streamline workflows, and empower healthcare organizations to thrive.",
      linkedin: "https://www.linkedin.com/in/avani-patel-mba-ace-3899118/",
    },
    {
      name: "Shilpa Paul",
      title: "Director of Product and Innovation",
      headshot: "/Shilpa Patel.jpg",
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipTeam.map((member, index) => (
                <ScrollReveal
                  key={member.name}
                  direction="up"
                  delay={index * 0.1}
                  className="group"
                >
                  <div className="text-center group-hover:-translate-y-1 transition-transform duration-300">
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="relative w-32 h-32 mx-auto mb-6 block group-hover:scale-105 transition-transform duration-300"
                    >
                      <Image
                        src={member.headshot}
                        alt={member.name}
                        fill
                        className="object-cover object-center object-[center_30%] rounded-lg shadow-lg"
                      />
                    </button>
                    <h3 className="text-xl font-bold font-outfit mb-2 text-admiral-900">
                      {member.name}
                    </h3>
                    <p className="text-admiral-600 font-medium">
                      {member.title}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Modal */}
          <AnimatePresence>
            {selectedMember && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
                >
                  {/* Close Button */}
                  <div className="flex justify-end p-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setSelectedMember(null)}
                      className="text-admiral-700 border-admiral-300 hover:bg-admiral-50"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Main Content */}
                  <div className="flex p-6 pt-0">
                    {/* Left Side - Photo and LinkedIn */}
                    <div className="flex-shrink-0 w-48 flex flex-col items-center space-y-4">
                      {/* Photo */}
                      <div className="relative w-32 h-32">
                        <Image
                          src={selectedMember.headshot}
                          alt={selectedMember.name}
                          fill
                          className="object-cover object-center object-[center_20%] rounded-full shadow-lg"
                        />
                      </div>
                      
                      {/* LinkedIn Link */}
                      {selectedMember.linkedin && (
                        <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer">
                          <Button className="bg-gradient-to-r from-admiral-600 to-ocean-600 hover:from-admiral-500 hover:to-ocean-500 text-white px-4 py-2 text-sm font-semibold">
                            <Linkedin className="mr-2 h-4 w-4" />
                            LinkedIn
                          </Button>
                        </a>
                      )}
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex-1 pl-6 overflow-y-auto max-h-[60vh]">
                      {/* Name */}
                      <h2 className="text-2xl font-bold font-outfit text-admiral-900 mb-2">
                        {selectedMember.name}
                      </h2>
                      
                      {/* Title */}
                      <p className="text-lg text-ocean-600 font-medium mb-4">
                        {selectedMember.title}
                      </p>
                      
                      {/* Bio */}
                      <div className="text-admiral-600 leading-relaxed whitespace-pre-line text-sm">
                        {selectedMember.bio}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
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
