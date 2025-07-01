"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ArrowRight,
  Home,
  Search,
  MapPin,
  Zap,
  Brain,
  DollarSign,
  Users,
  ArrowUpRight,
  Sparkles,
  Navigation,
  Target,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export default function NotFound() {
  const quickLinks = [
    { name: "Home", href: "/", icon: Home, description: "Return to homepage" },
    { name: "Services", href: "/services", icon: Zap, description: "Explore our solutions" },
    { name: "Technology", href: "/technology", icon: Brain, description: "Learn about our tech" },
    { name: "About", href: "/about", icon: Users, description: "Meet our team" },
    { name: "Contact", href: "/contact", icon: MapPin, description: "Get in touch" },
  ]

  const floatingElements = [
    { icon: DollarSign, delay: 0, x: 20, y: -30 },
    { icon: Brain, delay: 0.5, x: -40, y: 20 },
    { icon: Users, delay: 1, x: 30, y: 40 },
    { icon: Target, delay: 1.5, x: -20, y: -20 },
    { icon: Zap, delay: 2, x: 50, y: -10 },
    { icon: Navigation, delay: 2.5, x: -30, y: 30 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gypsum-50 via-white to-gypsum-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-rhodamine-400/20 to-gulf-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-ocean-400/20 to-gulf-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-admiral-400/10 to-rhodamine-400/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-admiral-400/30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3], 
            scale: [1, 1.2, 1],
            x: [0, element.x, 0],
            y: [0, element.y, 0]
          }}
          transition={{ 
            duration: 8, 
            delay: element.delay, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: `${50 + element.x}%`,
            top: `${50 + element.y}%`,
          }}
        >
          <element.icon className="h-8 w-8" />
        </motion.div>
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Number */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent leading-none">
              404
            </h1>
          </motion.div>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-admiral-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg mb-6">
              <Search className="h-4 w-4 text-admiral-600" />
              <span className="text-sm font-semibold text-admiral-800 font-space-grotesk tracking-wide">
                PAGE NOT FOUND
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent mb-4">
              Oops! We've Lost Our Way
            </h2>
            <p className="text-xl text-admiral-600 max-w-2xl mx-auto leading-relaxed font-space-grotesk">
              The page you're looking for seems to have wandered off into the digital wilderness. 
              But don't worry - we've got plenty of amazing things to explore right here!
            </p>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-xl font-semibold text-admiral-800 mb-6 font-outfit">
              Quick Navigation
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <Link href={link.href}>
                    <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gypsum-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-admiral-100 to-admiral-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <link.icon className="h-6 w-6 text-admiral-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-admiral-900 font-outfit">{link.name}</h4>
                          <p className="text-sm text-admiral-600 font-space-grotesk">{link.description}</p>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-admiral-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="/">
              <Button
                size="lg"
                className="bg-gradient-to-r from-rhodamine-500 via-gulf-500 to-ocean-600 hover:from-rhodamine-600 hover:via-gulf-600 hover:to-ocean-700 text-white shadow-2xl shadow-rhodamine-500/25 hover:shadow-rhodamine-500/40 transition-all duration-500 rounded-full px-8 py-4 text-lg font-semibold font-space-grotesk group hover:scale-105"
              >
                <Home className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Back to Home
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-admiral-300 text-admiral-700 hover:bg-admiral-50 hover:border-admiral-400 rounded-full px-8 py-4 text-lg font-semibold font-space-grotesk transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/50"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Get Help
              </Button>
            </Link>
          </motion.div>

          {/* Fun Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-12 p-6 bg-gradient-to-r from-admiral-50 to-rhodamine-50 rounded-2xl border border-admiral-200/50 backdrop-blur-sm"
          >
            <p className="text-admiral-700 font-space-grotesk italic">
              💡 <strong>Pro tip:</strong> While you're here, why not explore our revolutionary specialty pharmacy technology? 
              You might just find what you were originally looking for!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 