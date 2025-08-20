"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-animations"
import { 
  Wrench, 
  Clock, 
  Mail, 
  ArrowLeft,
  Construction
} from "lucide-react"

export default function CareersClient() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Maintenance Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-admiral-50 via-white to-gypsum-50"></div>
        <div className="relative container px-6 md:px-8">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-amber-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
              <Construction className="h-4 w-4 text-amber-600" />
              <span className="text-sm font-semibold text-amber-800 font-space-grotesk tracking-wide">
                Under Maintenance
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-outfit text-admiral-900 leading-tight">
              Careers Page
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                {" "}Under Maintenance
              </span>
            </h1>
            <p className="text-xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
              We're currently updating our careers page to bring you better opportunities and an improved experience. Please check back soon!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-admiral-300 hover:border-admiral-400 text-admiral-700 px-8 py-3 text-lg"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Go Back
              </Button>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 text-lg"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Maintenance Details */}
      <section className="w-full py-20 md:py-32">
        <div className="container px-6 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <ScrollReveal direction="up" delay={0.1}>
              <motion.div className="group" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border border-gypsum-200 h-80">
                  <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                    <div>
                      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Wrench className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold font-outfit mb-4 text-admiral-900">What We're Doing</h3>
                      <p className="text-admiral-600 leading-relaxed font-space-grotesk text-sm">
                        Updating our job listings, improving the application process, and enhancing the overall user experience for potential candidates.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <motion.div className="group" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border border-gypsum-200 h-80">
                  <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                    <div>
                      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Clock className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold font-outfit mb-4 text-admiral-900">Expected Timeline</h3>
                      <p className="text-admiral-600 leading-relaxed font-space-grotesk text-sm">
                        We're working hard to get everything ready. The careers page should be back online within the next few days.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-gypsum-50 to-white">
        <div className="container px-6 md:px-8">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-6 mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-admiral-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
              <Mail className="h-4 w-4 text-admiral-600" />
              <span className="text-sm font-semibold text-admiral-800 font-space-grotesk tracking-wide">
                Still Interested?
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-outfit text-admiral-900">
              Get In Touch With Us
            </h2>
            <p className="text-xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
              While we're updating our careers page, you can still reach out to us directly to learn about opportunities or ask questions.
            </p>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto">
            <ScrollReveal direction="up">
              <motion.div className="group" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border border-gypsum-200">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-rhodamine-500 to-gulf-500 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-outfit mb-4 text-admiral-900">Contact Our HR Team</h3>
                    <p className="text-admiral-600 leading-relaxed font-space-grotesk text-sm mb-6">
                      Send us an email and we'll get back to you with information about current opportunities and our hiring process.
                    </p>
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-rhodamine-500 to-gulf-500 hover:from-rhodamine-600 hover:to-gulf-600 text-white px-8 py-3"
                      onClick={() => window.location.href = 'mailto:hr@longituderx.org'}
                    >
                      hr@longituderx.org
                    </Button>
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
