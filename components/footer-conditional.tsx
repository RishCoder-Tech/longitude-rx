"use client"

import { usePathname } from "next/navigation"
import Footer from "@/components/footer"

export default function FooterConditional() {
  const pathname = usePathname()
  if (pathname === "/contact") return null
  return <Footer />
} 