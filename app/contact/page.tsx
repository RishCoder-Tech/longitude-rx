"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, ChevronDown, ChevronUp, Sparkles, Globe, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "What makes Longitude Rx different from traditional specialty pharmacies?",
      answer:
        "Longitude Rx leverages cutting-edge AI and machine learning to predict patient needs, optimize medication access, and eliminate barriers before they occur. Our platform integrates seamlessly with health systems and provides real-time analytics that traditional pharmacies simply cannot match.",
    },
    {
      question: "How can Longitude Rx transform my health system's operations?",
      answer:
        "Our AI-powered platform provides comprehensive solutions including predictive analytics, automated workflows, real-time synchronization, and advanced business intelligence. We help health systems reduce costs, improve patient outcomes, and streamline specialty pharmacy operations through innovative technology.",
    },
    {
      question: "When will the full Longitude Rx platform be available?",
      answer:
        "The revolutionary Longitude Rx platform is launching in early 2025. We're currently onboarding select healthcare partners for our beta program. Contact us to learn about early access opportunities and how you can be part of the healthcare transformation.",
    },
    {
      question: "How do I become a partner with Longitude Rx?",
      answer:
        "We're actively seeking visionary healthcare organizations to join our network. If you're interested in partnering with Longitude Rx, please contact us through this form or email us directly. We'll schedule a consultation to discuss how our platform can revolutionize your specialty pharmacy operations.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-40 relative overflow-hidden">
        <div className="container px-6 md:px-8 relative z-10">
          <motion.div
            className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full px-4 py-2">
              <Globe className="h-4 w-4 text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-800 font-space-grotesk tracking-wide">
                CONNECT WITH INNOVATION
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-outfit font-bold leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Let's Transform
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Healthcare Together
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed font-space-grotesk">
              Ready to revolutionize your specialty pharmacy operations? Connect with our team of healthcare innovation
              experts and discover the future of patient care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-20 md:py-32">
        <div className="container px-6 md:px-8">
          <div className="grid gap-16 lg:grid-cols-2 max-w-7xl mx-auto">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-cyan-100 rounded-full px-4 py-2">
                  <Zap className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm font-semibold text-emerald-800 font-space-grotesk tracking-wide">
                    GET IN TOUCH
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                  Start Your Innovation Journey
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-space-grotesk">
                  Our team of healthcare technology experts is ready to discuss how Longitude Rx can transform your
                  specialty pharmacy operations and improve patient outcomes.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: "innovation@longituderx.com",
                    description: "Get in touch with our innovation team",
                    gradient: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: "(555) 123-4567",
                    description: "Speak directly with our specialists",
                    gradient: "from-purple-500 to-pink-500",
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    content: "Dallas, TX Innovation Hub",
                    description: "Experience our technology center",
                    gradient: "from-emerald-500 to-teal-500",
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={contact.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm hover:scale-105 transform group">
                      <CardContent className="p-6 flex items-center space-x-4">
                        <div
                          className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${contact.gradient} shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <contact.icon className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold font-outfit text-slate-800 mb-1">{contact.title}</h3>
                          <p
                            className={`text-lg font-semibold bg-gradient-to-r ${contact.gradient} bg-clip-text text-transparent font-space-grotesk mb-1`}
                          >
                            {contact.content}
                          </p>
                          <p className="text-sm text-slate-500 font-space-grotesk">{contact.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5"></div>
                <CardHeader className="relative pb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-outfit font-bold text-slate-800">
                        Contact Us
                      </CardTitle>
                      <p className="text-slate-500 font-space-grotesk">Let us know how we can help you</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative space-y-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-semibold text-slate-700 font-space-grotesk">
                          First Name *
                        </label>
                        <Input
                          id="first-name"
                          placeholder="Enter your first name"
                          className="border-2 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300 rounded-xl h-12 font-space-grotesk"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-semibold text-slate-700 font-space-grotesk">
                          Last Name *
                        </label>
                        <Input
                          id="last-name"
                          placeholder="Enter your last name"
                          className="border-2 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300 rounded-xl h-12 font-space-grotesk"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-slate-700 font-space-grotesk">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="border-2 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300 rounded-xl h-12 font-space-grotesk"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="organization" className="text-sm font-semibold text-slate-700 font-space-grotesk">
                        Organization *
                      </label>
                      <Input
                        id="organization"
                        placeholder="Enter your organization name"
                        className="border-2 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300 rounded-xl h-12 font-space-grotesk"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="role" className="text-sm font-semibold text-slate-700 font-space-grotesk">
                        Your Role
                      </label>
                      <Input
                        id="role"
                        placeholder="e.g., Chief Pharmacy Officer, IT Director"
                        className="border-2 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300 rounded-xl h-12 font-space-grotesk"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-slate-700 font-space-grotesk">
                        How can we help transform your operations? *
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your current challenges and goals..."
                        className="min-h-[120px] border-2 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300 rounded-xl font-space-grotesk"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-500 rounded-full py-4 text-lg font-semibold font-space-grotesk group transform hover:scale-105"
                    >
                      <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      Contact Us
                      <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
        <div className="container px-6 md:px-8">
          <motion.div
            className="flex flex-col items-center text-center space-y-6 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-4 py-2">
              <ChevronDown className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-800 font-space-grotesk tracking-wide">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Everything You Need to Know
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl leading-relaxed font-space-grotesk">
              Get answers to common questions about Longitude Rx and our revolutionary healthcare platform.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm overflow-hidden group">
                  <CardHeader
                    className="cursor-pointer p-6 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-all duration-300"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl font-outfit font-bold text-slate-800 group-hover:text-blue-800 transition-colors duration-300">
                        {faq.question}
                      </CardTitle>
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {openFaq === index ? (
                          <ChevronUp className="h-5 w-5 text-blue-600" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-slate-600" />
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  {openFaq === index && (
                    <CardContent className="px-6 pb-6 pt-0">
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-slate-100 pt-4"
                      >
                        <p className="text-slate-600 leading-relaxed font-space-grotesk">{faq.answer}</p>
                      </motion.div>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container px-6 md:px-8 relative z-10">
          <motion.div
            className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Sparkles className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300 font-space-grotesk tracking-wide">
                READY TO INNOVATE?
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              The Future of Healthcare Awaits
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed font-space-grotesk">
              Don't wait for the future of healthcare—create it with us. Join the revolution and transform your
              specialty pharmacy operations today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-900 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-500 rounded-full px-8 py-4 text-lg font-semibold font-space-grotesk group transform hover:scale-105"
              >
                <Zap className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Book Demo Now
                <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-admiral-200 text-admiral-200 bg-admiral-800/10 rounded-2xl px-10 py-5 text-xl font-semibold font-space-grotesk backdrop-blur-sm"
                >
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
