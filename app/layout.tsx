import type React from "react"
import type { Metadata } from "next"
import { Inter, Outfit, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-animations"

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
            {/* Scroll Progress */}
            <ScrollProgress />

            <Navbar />
            <main className="flex-1 relative z-20">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
