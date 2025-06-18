"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Star,
  DollarSign,
  Shield,
  Users,
  TrendingUp,
  Sparkles,
  Zap,
  Globe,
  BarChart3,
  Beaker,
  Target,
  Brain,
  Activity,
  ShoppingCart,
  LineChart,
  Network,
  Mail,
} from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-animations"
import HealthcareLeadersScroll from "@/components/healthcare-leaders-scroll"
import CounterAnimation from "@/components/counter-animation"
import { useRef } from "react"
import Image from "next/image"
import Lottie from "lottie-react"
import heroAnimation from "@/public/hero-lottie.json"

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gypsum-50 via-white to-gypsum-100">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[70vh] py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-rhodamine-100/60 via-gulf-100/40 to-ocean-100/60 animate-gradient-move" />
          <Lottie animationData={heroAnimation} loop className="absolute inset-0 w-full h-full opacity-30" />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent mb-6 drop-shadow-lg animate-fade-in">
          By Health Systems, For Health Systems
        </h1>
        <p className="text-xl md:text-2xl text-admiral-700 max-w-2xl mx-auto mb-8 animate-fade-in delay-100">
          Unlock specialty pharmacy success with AI-driven technology that transforms how health systems manage complex medication access, reduce costs, and improve patient outcomes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-200">
          <a href="/contact">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-gulf-400 to-rhodamine-500 text-white text-lg font-bold shadow-xl hover:scale-105 transition-transform flex items-center gap-2">
              <Mail className="h-5 w-5" /> Contact Us <ArrowRight className="h-5 w-5" />
            </button>
          </a>
          <a href="/platform">
            <button className="px-8 py-4 rounded-full border-2 border-admiral-300 bg-white/80 text-admiral-900 text-lg font-bold shadow hover:scale-105 transition-transform flex items-center gap-2">
              Explore Platform
            </button>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-transparent">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="glass-card p-8 rounded-3xl shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform">
            <Brain className="h-12 w-12 text-rhodamine-600 mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold mb-2">AI-Powered Innovation</h3>
            <p className="text-admiral-700">State-of-the-art AI platform optimizing specialty pharmacy operations for efficiency and impact.</p>
          </div>
          <div className="glass-card p-8 rounded-3xl shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform">
            <Shield className="h-12 w-12 text-gulf-600 mb-4 animate-bounce delay-100" />
            <h3 className="text-2xl font-bold mb-2">Security & Compliance</h3>
            <p className="text-admiral-700">HIPAA-compliant, secure infrastructure for safe, reliable specialty medicine management.</p>
          </div>
          <div className="glass-card p-8 rounded-3xl shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform">
            <TrendingUp className="h-12 w-12 text-admiral-600 mb-4 animate-bounce delay-200" />
            <h3 className="text-2xl font-bold mb-2">Proven Results</h3>
            <p className="text-admiral-700">Unprecedented efficiency in prescription capture, patient care, and financial outcomes.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-white via-gypsum-50 to-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 text-center">
          <div>
            <div className="text-5xl font-extrabold text-rhodamine-600 animate-count">$100M+</div>
            <div className="text-admiral-700 mt-2">Specialty drug savings delivered</div>
          </div>
          <div>
            <div className="text-5xl font-extrabold text-gulf-600 animate-count">99.9%</div>
            <div className="text-admiral-700 mt-2">Uptime & reliability</div>
          </div>
          <div>
            <div className="text-5xl font-extrabold text-admiral-600 animate-count">24/7</div>
            <div className="text-admiral-700 mt-2">Clinical & technical support</div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 md:py-20 bg-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">Trusted by Leading Health Systems</h2>
          <div className="flex items-center justify-center gap-8 overflow-x-auto py-4 animate-scroll-x">
            <img src="/onvida-logo.png" alt="Onvida Health" className="h-12 grayscale opacity-80 hover:opacity-100 transition" />
            <img src="/images/partner1.png" alt="Partner 1" className="h-12 grayscale opacity-80 hover:opacity-100 transition" />
            <img src="/images/partner2.png" alt="Partner 2" className="h-12 grayscale opacity-80 hover:opacity-100 transition" />
            <img src="/images/partner3.png" alt="Partner 3" className="h-12 grayscale opacity-80 hover:opacity-100 transition" />
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-white via-gypsum-50 to-gypsum-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">Meet Our Leadership</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            {/* Example headshots, update src/alt as needed */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg mb-3 border-4 border-white group-hover:border-rhodamine-400 transition-all">
                <img src="/Jigar Thakkar.png" alt="Jigar Thakkar" className="object-cover object-top w-full h-full group-hover:scale-105 transition-transform" />
              </div>
              <div className="font-bold">Jigar Thakkar</div>
              <div className="text-admiral-600 text-sm">CEO of Longitude Rx</div>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg mb-3 border-4 border-white group-hover:border-gulf-400 transition-all">
                <img src="/Jonathan Williams.png" alt="Jonathan Williams" className="object-cover object-top w-full h-full group-hover:scale-105 transition-transform" />
              </div>
              <div className="font-bold">Jonathan Williams</div>
              <div className="text-admiral-600 text-sm">Vice President of 340B Operations</div>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg mb-3 border-4 border-white group-hover:border-admiral-400 transition-all">
                <img src="/Katie McMillen.jpg" alt="Katie McMillen" className="object-cover object-top w-full h-full group-hover:scale-105 transition-transform" />
              </div>
              <div className="font-bold">Katie McMillen</div>
              <div className="text-admiral-600 text-sm">VP of Market Access</div>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg mb-3 border-4 border-white group-hover:border-rhodamine-400 transition-all">
                <img src="/Nicole Ostrowski.png" alt="Nicole Ostrowski" className="object-cover object-top w-full h-full group-hover:scale-105 transition-transform" />
              </div>
              <div className="font-bold">Nicole Ostrowski</div>
              <div className="text-admiral-600 text-sm">Executive Director of Strategy & Operations</div>
            </div>
            {/* Add more as needed */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-admiral-900 via-ocean-800 to-rhodamine-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-admiral-900/80 via-ocean-800/80 to-rhodamine-900/80 z-0" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gypsum-200 to-gulf-200 bg-clip-text text-transparent">Ready to Transform Specialty Pharmacy?</h2>
          <p className="text-xl mb-8 text-gypsum-200">Join leading health systems already saving millions with our AI-powered optimization platform.</p>
          <a href="/contact">
            <button className="px-10 py-5 rounded-full bg-gradient-to-r from-gulf-400 to-rhodamine-500 text-white text-xl font-bold shadow-xl hover:scale-105 transition-transform flex items-center gap-2">
              <Mail className="h-6 w-6" /> Contact Us <ArrowRight className="h-6 w-6" />
            </button>
          </a>
        </div>
      </section>
    </div>
  )
}
