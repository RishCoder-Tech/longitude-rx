import type React from "react"
import type { Metadata } from "next"
import { Inter, Outfit, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import FooterConditional from "@/components/footer-conditional"
import { ScrollProgress } from "@/components/scroll-animations"
import Script from "next/script"
import { PostHogProvider } from "@/components/PostHogProvider"
import { ErrorBoundary } from "@/components/error-boundary"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })

export const metadata: Metadata = {
  title: "Longitude Rx Specialty Pharmacy",
  description:
    "Next-generation specialty pharmacy solutions powered by cutting-edge technology, machine learning, and advanced healthcare innovation. Transform patient outcomes with Longitude Rx.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W796TMZP');
            `,
          }}
        />
        {/* End Google Tag Manager */}
        
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HW5JXYXMD4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`            
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HW5JXYXMD4');
          `}
        </Script>
        {/* End Google tag (gtag.js) */}

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/images/longitude-logo.png" />
      </head>
      <body className={`${inter.variable} ${outfit.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-W796TMZP"
            height="0" 
            width="0" 
            style={{display:'none',visibility:'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        <PostHogProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
            <ErrorBoundary>
              <div className="flex min-h-screen flex-col bg-gradient-to-br from-gypsum-50 via-gypsum-100 to-gypsum-200 relative overflow-hidden">
                {/* Scroll Progress */}
                <ScrollProgress />

                <Navbar />
                <main className="flex-1 relative z-20">{children}</main>
                <FooterConditional />
              </div>
            </ErrorBoundary>
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  )
}