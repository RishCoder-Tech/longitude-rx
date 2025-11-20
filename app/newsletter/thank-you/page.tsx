"use client";

import { motion } from "framer-motion";
import { CheckCircle, Mail, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function NewsletterThankYouPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-40 relative overflow-visible bg-gradient-to-br from-gypsum-50 via-white to-gypsum-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/healthcare-collaboration.jpg"
            alt="Healthcare collaboration"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gypsum-50/90 via-white/95 to-gypsum-100/90" />
        </div>
        <div className="container px-6 md:px-8 relative z-10 pb-8">
          <motion.div
            className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6"
            >
              <CheckCircle className="h-12 w-12 text-green-600" />
            </motion.div>

            <div className="inline-flex items-center space-x-2 bg-white/80 border border-rhodamine-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
              <Mail className="h-4 w-4 text-rhodamine-600" />
              <span className="text-sm font-semibold text-rhodamine-800 font-space-grotesk tracking-wide">
                THANK YOU
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-outfit font-bold leading-loose pb-4"
            >
              <span className="bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">
                Thank You for Joining Our Newsletter!
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk"
            >
              We're excited to have you on board! You'll now receive the latest news, expert insights, and educational webinars in specialty pharmacy innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              <Link href="/newsletter">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-rhodamine-500 to-gulf-600 hover:from-rhodamine-600 hover:to-gulf-700 text-white shadow-2xl shadow-rhodamine-500/25 hover:shadow-rhodamine-500/40 transition-all duration-500 rounded-2xl px-10 py-5 text-xl font-semibold font-space-grotesk group hover:scale-105 hover:-translate-y-2"
                >
                  <motion.div
                    animate={{ rotate: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <span className="mr-3 h-6 w-6">📰</span>
                  </motion.div>
                  Back to Newsroom
                  <motion.div
                    className="ml-3"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowRight className="h-6 w-6" />
                  </motion.div>
                </Button>
              </Link>
              <Link href="/">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-admiral-300 text-admiral-700 bg-white/80 rounded-2xl px-10 py-5 text-xl font-semibold font-space-grotesk backdrop-blur-sm hover:bg-admiral-50"
                >
                  Go to Homepage
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-white to-gypsum-50">
        <div className="container px-6 md:px-8">
          <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-rhodamine-500 to-gulf-500 rounded-full px-6 py-3 shadow-lg">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="h-4 w-4 text-white" />
              </motion.div>
              <span className="text-sm font-semibold text-white font-space-grotesk tracking-wide">
                WHAT'S NEXT
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent leading-loose pb-4">
              Stay Connected
            </h2>
            <p className="text-xl text-admiral-600 max-w-2xl leading-relaxed font-space-grotesk">
              Keep an eye on your inbox for our latest updates, industry insights, and exclusive content. We're committed to keeping you informed about the latest developments in specialty pharmacy innovation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

