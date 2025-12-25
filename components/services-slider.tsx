"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, Pause, ArrowRight } from "lucide-react"
import Link from "next/link"
import CounterAnimation from "@/components/counter-animation"
import { CheckCircle } from "lucide-react"

interface ValueProp {
  label: string;
  icon?: any;
}

interface Service {
  title: string;
  subtitle?: string;
  description: string;
  valueProps: ValueProp[];
  features: string[];
  image: string;
}

interface ServicesSliderProps {
  services: Service[]
  activeIndex?: number
  onChange?: (index: number) => void
}

export default function ServicesSlider({ services, activeIndex, onChange }: ServicesSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(activeIndex || 0)
  const [isPlaying, setIsPlaying] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Sync with external activeIndex
  useEffect(() => {
    if (activeIndex !== undefined && activeIndex !== currentIndex) {
      setCurrentIndex(activeIndex)
    }
  }, [activeIndex, currentIndex])

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % services.length
    setCurrentIndex(newIndex)
    onChange?.(newIndex)
  }

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + services.length) % services.length
    setCurrentIndex(newIndex)
    onChange?.(newIndex)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    onChange?.(index)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        nextSlide()
      }, 5000) // Change slide every 5 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, currentIndex])

  const currentService = services[currentIndex]

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Main Slider */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm overflow-hidden relative">
              <CardContent className="p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Left Side - Content */}
                  <div className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-bold font-outfit text-primary mb-1">
                      {currentService.title}
                    </h3>
                    {currentService.subtitle && (
                      <div className="text-lg font-semibold text-admiral-700 mb-2">
                        {currentService.subtitle}
                      </div>
                    )}
                    <p className="text-admiral-600 text-base md:text-lg mb-4">
                      {currentService.description}
                    </p>

                    {/* Value Props Row */}
                    <div className="flex flex-row justify-between items-center bg-gypsum-100 rounded-2xl py-4 px-6 mb-4">
                      {currentService.valueProps.map((vp, idx) => (
                        <div key={vp.label} className="flex flex-col items-center flex-1">
                          {vp.icon && <vp.icon className="h-8 w-8 text-admiral-900 mb-1" />}
                          <span className="text-admiral-900 font-semibold text-sm text-center">
                            {vp.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Features Checklist */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {currentService.features.map((feature, index) => (
                        <div key={feature} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-gulf-500 mt-1 flex-shrink-0" />
                          <span className="text-admiral-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More button for LRx Tech Platform */}
                    {currentIndex === 2 && (
                      <div className="flex justify-start mt-6">
                        <Link href="/technology">
                          <Button
                            size="lg"
                            className="bg-gradient-to-r from-rhodamine-500 via-gulf-500 to-ocean-600 hover:from-rhodamine-600 hover:via-gulf-600 hover:to-ocean-700 text-white shadow-2xl shadow-rhodamine-500/25 hover:shadow-rhodamine-500/40 transition-all duration-500 rounded-2xl px-8 py-4 text-lg font-semibold font-space-grotesk group hover:scale-105 hover:-translate-y-1"
                          >
                            Learn More
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Right Side - Image */}
                  <div className="flex items-center justify-center">
                    <img
                      src={currentService.image}
                      alt={currentService.title}
                      className={`rounded-3xl shadow-xl ${
                        currentIndex === 0 || currentIndex === 1 || currentIndex === 3 || currentIndex === 4 || currentIndex === 5
                          ? 'object-cover w-full h-72 md:h-80 max-w-xl'
                          : currentIndex === 2
                          ? 'object-cover w-full h-[298px] md:h-[330px] max-w-xl'
                          : 'object-contain w-full h-72 md:h-80 max-w-xl'
                      }`}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 z-10"
        >
          <ChevronLeft className="h-6 w-6 text-admiral-600" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 z-10"
        >
          <ChevronRight className="h-6 w-6 text-admiral-600" />
        </button>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center space-x-4 mt-8">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
        >
          {isPlaying ? (
            <Pause className="h-5 w-5 text-admiral-600" />
          ) : (
            <Play className="h-5 w-5 text-admiral-600" />
          )}
        </button>

        {/* Dots */}
        <div className="flex space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-gulf-500 to-rhodamine-500 scale-125"
                  : "bg-admiral-300 hover:bg-admiral-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-4 w-full bg-admiral-200 rounded-full h-1 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-gulf-500 to-rhodamine-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          key={currentIndex}
        />
      </div>
    </div>
  )
} 