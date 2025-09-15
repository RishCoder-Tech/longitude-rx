"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight } from "lucide-react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import { MagneticButton } from "@/components/scroll-animations"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  const navbarY = useTransform(scrollY, [0, 100], [0, -5])
  const navbarOpacity = useTransform(scrollY, [0, 100], [1, 0.98])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <motion.header
      className="navbar fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4"
      style={{ y: navbarY, opacity: navbarOpacity }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className={cn(
          "w-full max-w-7xl mx-auto transition-all duration-500 rounded-2xl border backdrop-blur-2xl",
          scrolled
            ? "bg-gypsum-100/90 shadow-2xl shadow-admiral-900/10 border-admiral-200/30"
            : "bg-gypsum-100/70 shadow-xl shadow-admiral-900/5 border-admiral-200/20",
        )}
        whileHover={{
          boxShadow: scrolled ? "0 25px 50px -12px rgba(0, 0, 0, 0.15)" : "0 20px 40px -12px rgba(0, 0, 0, 0.1)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex h-16 md:h-18 items-center justify-between px-6 md:px-8">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex items-center space-x-3">
              <div className="h-9 w-auto md:h-10 rounded-xl flex items-center justify-center p-1 space-x-2">
                  <Image
                    src="/images/longitude-logo.png"
                  alt="Favicon"
                  width={24}
                  height={24}
                  className="object-contain h-6 w-6 mr-2"
                />
                <Image
                  src="/longitude-logo-navbar.png"
                    alt="Longitude Rx Logo"
                  width={160}
                  height={40}
                  className="object-contain h-8 md:h-9 w-auto"
                  priority
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {[
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/technology", label: "Technology" },
              { href: "/newsletter", label: "News" },
              { href: "/careers", label: "Careers" },
              { href: "/case-studies", label: "Case Studies" },
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={item.href}
                    className="relative text-admiral-700 hover:text-admiral-900 transition-all duration-300 font-medium font-space-grotesk group text-sm lg:text-base"
                  >
                    {item.label}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-rhodamine-600 to-gulf-600 transition-all duration-300"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                    />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <MagneticButton>
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-rhodamine-500 via-gulf-500 to-ocean-600 hover:from-rhodamine-600 hover:via-gulf-600 hover:to-ocean-700 text-white shadow-lg shadow-rhodamine-500/25 hover:shadow-rhodamine-500/40 transition-all duration-300 rounded-full px-5 py-2 text-sm font-medium font-space-grotesk group">
                    Contact Us
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowRight className="h-3.5 w-3.5" />
                    </motion.div>
                  </Button>
                </Link>
              </MagneticButton>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden relative h-9 w-9" onClick={toggleMenu}>
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-admiral-200/20 rounded-b-2xl"
            >
              <motion.nav
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, staggerChildren: 0.1 }}
                className="py-6 flex flex-col space-y-4 px-6"
              >
                {[
                  { href: "/about", label: "About" },
                  { href: "/services", label: "Services" },
                  { href: "/technology", label: "Technology" },
                  { href: "/newsletter", label: "News" },
                  { href: "/careers", label: "Careers" },
                  { href: "/case-studies", label: "Case Studies" },
                ].map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-lg font-medium text-admiral-700 hover:text-admiral-900 transition-colors duration-200 font-space-grotesk py-2 block"
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <Link href="/contact" onClick={toggleMenu}>
                    <Button className="w-full bg-gradient-to-r from-rhodamine-500 via-gulf-500 to-ocean-600 hover:from-rhodamine-600 hover:via-gulf-600 hover:to-ocean-700 text-white shadow-lg shadow-rhodamine-500/25 rounded-full px-6 py-3 font-medium font-space-grotesk mt-4">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  )
}
