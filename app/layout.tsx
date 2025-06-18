import type React from "react"
import type { Metadata } from "next"
import { Inter, Outfit, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WebGLBackground from "@/components/webgl-background"
import ParticleSystem from "@/components/particle-system"
import { ScrollProgress, FloatingElements } from "@/components/scroll-animations"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })

export const metadata: Metadata = {
  title: "Longitude Rx - Revolutionary AI-Powered Specialty Pharmacy",
  description:
    "Next-generation specialty pharmacy solutions powered by cutting-edge AI, machine learning, and advanced healthcare technology. Transform patient outcomes with Longitude Rx.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="flex min-h-screen flex-col bg-gradient-to-br from-gypsum-50 via-gypsum-100 to-gypsum-200 relative overflow-hidden">
            {/* WebGL Background */}
            <WebGLBackground />

            {/* Particle System */}
            <ParticleSystem />

            {/* Floating Elements */}
            <FloatingElements />

            {/* Scroll Progress */}
            <ScrollProgress />

            {/* Static background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-rhodamine-400/10 to-gulf-400/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-ocean-400/10 to-gulf-400/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-rhodamine-400/5 to-admiral-400/5 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="fixed inset-0 bg-[linear-gradient(rgba(21,36,44,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(21,36,44,0.01)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none z-0"></div>

            <Navbar />
            <main className="flex-1 relative z-20">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
