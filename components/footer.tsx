"use client"

import type React from "react"

import Link from "next/link"
import { ArrowUpRight, Mail, MapPin, Send, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import Image from "next/image"
import { Linkedin } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState("")

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage("")

    try {
      const formData = new FormData()
      formData.append('email', email)
      formData.append('source', 'Footer')

      const response = await fetch('/api/newsletter-subscription', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        setEmail("")
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.error || 'Failed to subscribe. Please try again.')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleContactClick = (type: string) => {
    switch (type) {
      case "email":
        window.location.href = "mailto:info@longituderx.org"
        break
      case "linkedin":
        window.open("https://www.linkedin.com/company/longituderx", "_blank")
        break
      case "location":
        window.open("https://maps.google.com/?q=Dallas,TX", "_blank")
        break
    }
  }

  return (
    <footer className="w-full bg-gradient-to-br from-admiral-900 via-ocean-800 to-rhodamine-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-rhodamine-400/20 to-gulf-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-ocean-400/20 to-gulf-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container px-6 md:px-8 py-16 relative z-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="h-10 w-10 rounded-2xl bg-white shadow-lg shadow-rhodamine-500/25 flex items-center justify-center p-1">
                  <Image
                    src="/images/longitude-logo.png"
                    alt="Longitude Rx Logo"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rhodamine-400 via-gulf-500 to-ocean-400 blur-md opacity-50 animate-pulse"></div>
              </div>
              <span className="text-2xl font-outfit font-bold bg-gradient-to-r from-white to-gypsum-200 bg-clip-text text-transparent">
                Longitude Rx
              </span>
            </div>
            <p className="text-gypsum-300 max-w-xs leading-relaxed font-space-grotesk">
            Longitude Rx is your partner in specialty pharmacy transformation, working side-by-side to drive sustainable growth and deliver better outcomes for your patients and your health system.

            </p>
            <div className="flex space-x-4">
              <motion.button
                onClick={() => handleContactClick("email")}
                className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title="Email us"
              >
                <Mail className="h-4 w-4 text-white/70 group-hover:text-white transition-colors" />
              </motion.button>
                <motion.button
                onClick={() => handleContactClick("linkedin")}
                  className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                title="LinkedIn"
                >
                <Linkedin className="h-4 w-4 text-white/70 group-hover:text-white transition-colors" />
                </motion.button>
            </div>
          </motion.div>

          {/* Quick Links */}
          {[
            {
              title: "Our Offerings",
              links: [
                { name: "Technology", href: "/technology" },
                { name: "Services", href: "/services" },
                // { name: "Case Studies", href: "/case-studies" }, // Hidden as requested
              ],
            },
            {
              title: "Company",
              links: [
                { name: "About Us", href: "/about" },
                { name: "Careers", href: "/careers" },
                { name: "Newsletter", href: "/newsletter" },
                { name: "Contact", href: "/contact" },
              ],
            },
          ].map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <h3 className="mb-6 text-sm font-semibold tracking-wider uppercase text-white/90 font-outfit">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: sectionIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gypsum-300 hover:text-white flex items-center group transition-all duration-300 font-space-grotesk"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="mb-6 text-sm font-semibold tracking-wider uppercase text-white/90 font-outfit">
              Stay Updated
            </h3>
            <p className="text-gypsum-300 mb-4 font-space-grotesk">
              Get the latest insights delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-rhodamine-400 focus:ring-rhodamine-400/20 rounded-xl font-space-grotesk"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-rhodamine-500 to-gulf-500 hover:from-rhodamine-600 hover:to-gulf-600 text-white shadow-lg transition-all duration-300 rounded-xl font-space-grotesk font-semibold group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Subscribing...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    Subscribe
                  </>
                )}
              </Button>
            </form>
            {submitStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 text-sm mt-2 font-space-grotesk"
              >
                Thank you for subscribing!
              </motion.p>
            )}

            {submitStatus === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm mt-2 font-space-grotesk"
              >
                {errorMessage}
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gypsum-400 text-sm font-space-grotesk">
              © 2025 Longitude Rx. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
