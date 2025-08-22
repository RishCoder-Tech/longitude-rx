"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send, ChevronDown, ChevronUp, Sparkles, Globe, Zap, ArrowRight, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      // Check if the response indicates success (lead was created)
      if (response.ok && result.success) {
        setSubmitStatus('success')
        e.currentTarget.reset()
      } else if (response.ok && result.itemId) {
        // If we have an itemId, the lead was created successfully
        // even if there were minor issues with the update
        setSubmitStatus('success')
        e.currentTarget.reset()
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.error || 'Failed to submit contact form. Please try again.')
        // Don't reset the form on error so user can fix and retry
      }
    } catch (error) {
      console.error('Contact form submission error:', error)
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const faqs = [
    {
      question: "What makes Longitude Rx different from traditional specialty pharmacy solutions?",
      answer:
        "Longitude Rx leverages cutting-edge technology and deep specialty pharmacy expertise to proactively identify patient needs, optimize medication access, and eliminate barriers before they occur. Our teams and technology integrate intuitively with health systems and provide real-time analytics that traditional vendors simply cannot match.",
    },
    {
      question: "How can Longitude Rx transform my health system's pharmacy operations?",
      answer:
        "Our AI-powered technology provides comprehensive solutions including predictive analytics, automated workflows, real-time synchronization, and advanced business intelligence. We help health systems reduce costs, improve patient outcomes, and streamline operations.",
    },
    {
      question: "When will the full Longitude Rx technology be available?",
      answer:
        "The revolutionary Longitude Rx technology is launching in late 2025. We're currently onboarding select healthcare partners for our beta program. Contact us to learn about early access opportunities and how you can be part of the healthcare revolution.",
    },
    {
      question: "How do I become a partner with Longitude Rx?",
      answer:
        "We're actively seeking visionary healthcare organizations to join our network. If you're interested in partnering with Longitude Rx, please contact us through this form or email us directly. We'll schedule a consultation to discuss how we can help revolutionize your specialty pharmacy operations.",
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
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-rhodamine-100 to-gulf-100 rounded-full px-4 py-2">
              <Globe className="h-4 w-4 text-rhodamine-600" />
              <span className="text-sm font-semibold text-rhodamine-800 font-space-grotesk tracking-wide">
                CONNECT WITH INNOVATION
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-outfit font-bold leading-tight">
              <span className="bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">
                Let's Transform
              </span>
              <br />
              <span className="bg-gradient-to-r from-rhodamine-600 via-gulf-500 to-ocean-600 bg-clip-text text-transparent">
                Healthcare Together
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
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
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-rhodamine-100 to-gulf-100 rounded-full px-4 py-2">
                  <Zap className="h-4 w-4 text-rhodamine-600" />
                  <span className="text-sm font-semibold text-rhodamine-800 font-space-grotesk tracking-wide">
                    GET IN TOUCH
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">
                  Start Your Innovation Journey
                </h2>
                <p className="text-lg text-admiral-600 leading-relaxed font-space-grotesk">
                  Our team of healthcare technology experts is ready to discuss how Longitude Rx can transform your
                  specialty pharmacy operations and improve patient outcomes.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: "info@longituderx.org",
                    description: "Get in touch with our team",
                    gradient: "from-rhodamine-500 to-gulf-500",
                    link: "mailto:info@longituderx.org"
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    content: "Dallas, TX Innovation Hub",
                    description: "Experience our technology center",
                    gradient: "from-gulf-500 to-ocean-500",
                    link: undefined
                  },
                  {
                    icon: Linkedin,
                    title: "Connect on LinkedIn",
                    content: "linkedin.com/company/longituderx",
                    description: "Follow us for updates and insights",
                    gradient: "from-blue-600 to-blue-400",
                    link: "https://www.linkedin.com/company/longituderx"
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
                          {contact.link ? (
                            <a href={contact.link} target="_blank" rel="noopener noreferrer"
                              className={`text-lg font-semibold bg-gradient-to-r ${contact.gradient} bg-clip-text text-transparent font-space-grotesk mb-1 hover:underline`}
                            >
                              {contact.content}
                            </a>
                          ) : (
                            <p className={`text-lg font-semibold bg-gradient-to-r ${contact.gradient} bg-clip-text text-transparent font-space-grotesk mb-1`}>
                              {contact.content}
                            </p>
                          )}
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
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-semibold text-slate-700 font-space-grotesk">
                          First Name *
                        </label>
                        <Input
                          id="first-name"
                          name="firstName"
                          placeholder="Enter your first name"
                          className="border-2 border-gypsum-200 focus:border-rhodamine-500 focus:ring-rhodamine-500/20 transition-all duration-300 rounded-xl h-12 font-space-grotesk"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-semibold text-slate-700 font-space-grotesk">
                          Last Name *
                        </label>
                        <Input
                          id="last-name"
                          name="lastName"
                          placeholder="Enter your last name"
                          className="border-2 border-gypsum-200 focus:border-rhodamine-500 focus:ring-rhodamine-500/20 transition-all duration-300 rounded-xl h-12 font-space-grotesk"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-slate-700 font-space-grotesk">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="border-2 border-gypsum-200 focus:border-rhodamine-500 focus:ring-rhodamine-500/20 transition-all duration-300 rounded-xl h-12 font-space-grotesk"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="organization" className="text-sm font-semibold text-slate-700 font-space-grotesk">
                        Organization *
                      </label>
                      <Input
                        id="organization"
                        name="organization"
                        placeholder="Enter your organization name"
                        className="border-2 border-gypsum-200 focus:border-rhodamine-500 focus:ring-rhodamine-500/20 transition-all duration-300 rounded-xl h-12 font-space-grotesk"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="role" className="text-sm font-semibold text-slate-700 font-space-grotesk">
                        Your Role
                      </label>
                      <Input
                        id="role"
                        name="role"
                        placeholder="e.g., Chief Pharmacy Officer, IT Director"
                        className="border-2 border-gypsum-200 focus:border-rhodamine-500 focus:ring-rhodamine-500/20 transition-all duration-300 rounded-xl h-12 font-space-grotesk"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-slate-700 font-space-grotesk">
                        How can we help transform your operations? *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your current challenges and goals..."
                        className="min-h-[120px] border-2 border-gypsum-200 focus:border-rhodamine-500 focus:ring-rhodamine-500/20 transition-all duration-300 rounded-xl font-space-grotesk"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-rhodamine-500 via-gulf-500 to-ocean-600 hover:from-rhodamine-600 hover:via-gulf-600 hover:to-ocean-700 text-white shadow-2xl shadow-rhodamine-500/25 hover:shadow-rhodamine-500/40 transition-all duration-500 rounded-full py-4 text-lg font-semibold font-space-grotesk group transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                          Contact Us
                          <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                        </>
                      )}
                    </Button>

                    {/* Success/Error Messages */}
                    {submitStatus === 'success' && (
                      <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                            <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-green-800 font-semibold text-lg">Message Sent Successfully!</p>
                            <p className="text-green-700 text-sm">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="p-6 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                            <svg className="h-5 w-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-red-800 font-semibold text-lg">Submission Failed</p>
                            <p className="text-red-700 text-sm">{errorMessage}</p>
                          </div>
                        </div>
                      </div>
                    )}
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
              Get answers to common questions about Longitude Rx and our revolutionary healthcare technology.
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
                    className="cursor-pointer p-6 hover:bg-gradient-to-r hover:from-rhodamine-50/50 hover:to-gulf-50/50 transition-all duration-300"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl font-outfit font-bold text-admiral-800 group-hover:text-rhodamine-800 transition-colors duration-300">
                        {faq.question}
                      </CardTitle>
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-rhodamine-100 to-gulf-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {openFaq === index ? (
                          <ChevronUp className="h-5 w-5 text-rhodamine-600" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-admiral-600" />
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

      {/* Enhanced CTA Section */}
      <section className="w-full py-10 md:py-16 bg-gradient-to-br from-admiral-900 via-ocean-800 to-rhodamine-900 text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/medical-innovation.jpg"
            alt="Medical innovation background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-admiral-900/90 via-ocean-800/90 to-rhodamine-900/90" />
        </div>

        {/* Animated background elements */}
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
          <motion.div
            className="flex flex-col items-center text-center space-y-10 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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
              Ready to Grow Specialty Pharmacy Revenue?
            </motion.h2>
            <p className="text-2xl text-gypsum-300 max-w-4xl leading-relaxed font-space-grotesk font-light">
              Join leading health systems who are already saving millions on specialty medicine costs with our
              AI-powered optimization technology.
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
          </motion.div>
        </div>
      </section>
    </div>
  )
}
