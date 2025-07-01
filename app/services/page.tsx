"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Brain,
  ChartBar,
  Users,
  Cog,
  ArrowRight,
  Zap,
  Shield,
  LineChart,
  Network,
  DollarSign,
  Target,
  BarChart3,
  CheckCircle,
  Building,
  Cpu,
  HeartHandshake,
  TrendingUp,
  Activity,
  Globe,
  Award,
  Star,
  Sparkles,
  Database,
  FileText,
  Phone,
  Mail,
  MapPin,
  Clock,
  Eye,
  Lock,
  RefreshCw,
  Monitor,
  Smartphone,
  Tablet,
  Server,
  Cloud,
  Key,
  Users2,
  Calendar,
  PieChart,
  BarChart,
  ArrowUpRight,
  Play,
  Pause,
  SkipForward,
  Volume2,
  Settings,
  Filter,
  Search,
  Download,
  Upload,
  Share2,
  Copy,
  Edit,
  Trash2,
  Plus,
  Minus,
  X,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  Menu,
  Home,
  Info,
  HelpCircle,
  AlertCircle,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Bell,
  BellOff,
  Volume,
  VolumeX,
  Wifi,
  WifiOff,
  Battery,
  BatteryCharging,
  Signal,
  SignalHigh,
  SignalMedium,
  SignalLow,
  SignalZero,
  WifiHigh,
  WifiMedium,
  WifiLow,
  WifiZero,
  Bluetooth,
  BluetoothOff,
  Airplay,
  Cast,
  MonitorOff,
  MonitorSpeaker,
  MonitorSmartphone,
  MonitorTablet,
  MonitorLaptop,
  MonitorDesktop,
  MonitorCheck,
  MonitorX,
  MonitorPause,
  MonitorPlay,
  MonitorStop,
  MonitorSkipBack,
  MonitorSkipForward,
  MonitorRewind,
  MonitorFastForward,
  MonitorVolume,
  MonitorVolume1,
  MonitorVolume2,
  MonitorVolumeX,
  MonitorMute,
  MonitorUnmute,
  MonitorPause2,
  MonitorPlay2,
  MonitorStop2,
  MonitorSkipBack2,
  MonitorSkipForward2,
  MonitorRewind2,
  MonitorFastForward2,
  MonitorVolume2_2,
  MonitorVolume12,
  MonitorVolume22,
  MonitorVolumeX2,
  MonitorMute2,
  MonitorUnmute2,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-animations"
import Image from "next/image"
import CounterAnimation from "@/components/counter-animation"

export default function ServicesPage() {
  const coreServices = [
    {
      title: "Next-Gen Script Capture",
      description: "Harness advanced next-gen technology to uncover every in-system prescription opportunity and maximize revenue capture.",
      icon: Brain,
      gradient: "from-rhodamine-500 to-rhodamine-600",
      features: [
        "Automated prescription routing and tracking",
        "Real-time prior authorization management",
        "Predictive analytics for prescription patterns",
        "Intelligent workflow optimization",
        "Cross-system prescription identification",
        "Automated refill reminders and capture"
      ],
      stats: {
        number: 95,
        suffix: "%",
        label: "Script Capture Rate"
      }
    },
    {
      title: "Revenue Cycle Optimization",
      description: "Maximize revenue potential through intelligent billing systems, payer management, and financial analytics.",
      icon: ChartBar,
      gradient: "from-gulf-500 to-gulf-600",
      features: [
        "340B program optimization",
        "Payer contract management",
        "Revenue forecasting and analytics",
        "Claims optimization and tracking",
        "Reimbursement workflow automation",
        "Financial performance dashboards"
      ],
      stats: {
        number: 40,
        suffix: "%",
        label: "Revenue Increase"
      }
    },
    {
      title: "Clinical Care Coordination",
      description: "Enhance patient care through integrated clinical services and comprehensive care coordination.",
      icon: Users,
      gradient: "from-ocean-500 to-ocean-600",
      features: [
        "Patient engagement programs",
        "Medication therapy management",
        "Clinical outcomes tracking",
        "Care team collaboration tools",
        "Patient education and support",
        "Clinical decision support"
      ],
      stats: {
        number: 85,
        suffix: "%",
        label: "Patient Satisfaction"
      }
    },
    {
      title: "Operational Excellence",
      description: "Streamline pharmacy operations with advanced technology and process optimization.",
      icon: Cog,
      gradient: "from-admiral-500 to-admiral-600",
      features: [
        "Inventory management optimization",
        "Workflow automation",
        "Quality assurance programs",
        "Performance analytics",
        "Staff productivity tools",
        "Compliance monitoring"
      ],
      stats: {
        number: 60,
        suffix: "%",
        label: "Efficiency Gain"
      }
    }
  ]

  const technologyFeatures = [
    {
      title: "Real-Time Analytics",
      description: "Live dashboards providing instant insights into revenue performance and operational metrics.",
      icon: Activity,
      color: "text-rhodamine-500"
    },
    {
      title: "Next-Gen Intelligence",
      description: "Next-generation algorithms that continuously optimize processes and identify revenue opportunities.",
      icon: Brain,
      color: "text-gulf-500"
    },
    {
      title: "Secure Cloud Platform",
      description: "HIPAA-compliant cloud infrastructure ensuring data security and system reliability.",
      icon: Shield,
      color: "text-ocean-500"
    },
    {
      title: "Seamless Integration",
      description: "Easy integration with existing health system infrastructure and workflows.",
      icon: Network,
      color: "text-admiral-500"
    }
  ]

  const benefits = [
    {
      title: "Increased Revenue Capture",
      description: "Capture every dollar of specialty pharmacy opportunity through next-gen technology-powered script identification.",
      icon: TrendingUp,
      metric: "$500M+",
      label: "Potential Revenue"
    },
    {
      title: "Operational Efficiency",
      description: "Streamline workflows and reduce manual processes through intelligent automation.",
      icon: Zap,
      metric: "60%",
      label: "Time Savings"
    },
    {
      title: "Enhanced Patient Care",
      description: "Improve clinical outcomes and patient satisfaction through coordinated care.",
      icon: HeartHandshake,
      metric: "85%",
      label: "Patient Satisfaction"
    },
    {
      title: "Compliance & Quality",
      description: "Ensure regulatory compliance and maintain high-quality standards across operations.",
      icon: Award,
      metric: "100%",
      label: "Compliance Rate"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-gypsum-50 via-white to-gypsum-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/healthcare-innovation.jpg"
            alt="Healthcare innovation"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gypsum-50/90 via-white/95 to-gypsum-100/90" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-rhodamine-400/20 to-gulf-400/20 rounded-full blur-2xl"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-ocean-400/20 to-admiral-400/20 rounded-full blur-xl"
            animate={{
              y: [0, 20, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
          />
        </div>

        <div className="container px-6 md:px-8 relative z-10">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/80 border border-admiral-200/50 rounded-full px-6 py-3 backdrop-blur-sm shadow-lg">
              <Zap className="h-4 w-4 text-admiral-600" />
              <span className="text-sm font-semibold text-admiral-800 font-space-grotesk tracking-wide">
                OUR SERVICES
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold bg-gradient-to-r from-admiral-900 via-rhodamine-700 to-ocean-700 bg-clip-text text-transparent">
              Revolutionizing Specialty Pharmacy Revenue
            </h1>
            <p className="text-lg font-semibold text-rhodamine-600 uppercase tracking-wider mt-2">
              Comprehensive solutions designed for health systems
            </p>
            <p className="text-xl text-admiral-600 max-w-3xl leading-relaxed font-space-grotesk">
              Transform your specialty pharmacy operations with our suite of next-gen technology-powered services designed to capture every dollar of opportunity while delivering exceptional patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-rhodamine-500 via-gulf-500 to-ocean-600 hover:from-rhodamine-600 hover:via-gulf-600 hover:to-ocean-700 text-white shadow-2xl shadow-rhodamine-500/25 hover:shadow-rhodamine-500/40 transition-all duration-500 rounded-2xl px-10 py-5 text-xl font-semibold font-space-grotesk group hover:scale-105 hover:-translate-y-2"
                >
                  <Target className="mr-3 h-6 w-6" />
                  Get Started
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 bg-gradient-to-r from-white via-gypsum-50 to-white">
        <div className="container px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: 500, prefix: "$", suffix: "M+", label: "Revenue Captured" },
              { number: 95, suffix: "%", label: "Script Capture Rate" },
              { number: 40, suffix: "%", label: "Revenue Increase" },
              { number: 85, suffix: "%", label: "Patient Satisfaction" }
            ].map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1} direction="up">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold font-outfit bg-gradient-to-r from-admiral-900 to-rhodamine-700 bg-clip-text text-transparent mb-2">
                    <CounterAnimation
                      end={stat.number}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={2000}
                    />
                  </div>
                  <p className="text-sm text-admiral-600 font-space-grotesk">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="w-full py-20 md:py-32">
        <div className="container px-6 md:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 to-rhodamine-700 bg-clip-text text-transparent mb-6">
              Core Services
            </h2>
            <p className="text-xl text-admiral-600 max-w-3xl mx-auto font-space-grotesk">
              Our comprehensive suite of services designed to maximize your specialty pharmacy revenue potential
            </p>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2 max-w-7xl mx-auto">
            {coreServices.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.2} direction="up">
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm overflow-hidden relative h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg flex items-center justify-center`}>
                        <service.icon className="h-8 w-8 text-white" />
                </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold font-outfit mb-3 text-admiral-900">{service.title}</h3>
                  <p className="text-admiral-600 leading-relaxed mb-6">{service.description}</p>
                        
                        {/* Stats */}
                        <div className="mb-6 p-4 bg-gradient-to-r from-gypsum-50 to-gypsum-100 rounded-xl">
                          <div className="text-3xl font-bold font-outfit bg-gradient-to-r from-admiral-900 to-rhodamine-700 bg-clip-text text-transparent">
                            <CounterAnimation
                              end={service.stats.number}
                              suffix={service.stats.suffix}
                              duration={2000}
                            />
                          </div>
                          <p className="text-sm text-admiral-600 font-space-grotesk">{service.stats.label}</p>
                        </div>

                        {/* Features */}
                        <div className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                            <div key={feature} className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-gulf-500 mt-0.5 flex-shrink-0" />
                              <span className="text-admiral-600 text-sm">{feature}</span>
                            </div>
                    ))}
                        </div>

                  <Link href="/contact">
                          <Button className="bg-gradient-to-r from-gulf-400 to-rhodamine-500 hover:from-gulf-500 hover:to-rhodamine-600 text-white rounded-xl px-6 py-2 font-medium font-space-grotesk">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Features Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-gypsum-100/80 via-gypsum-200/30 to-gypsum-300/30 backdrop-blur-sm">
        <div className="container px-6 md:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 to-rhodamine-700 bg-clip-text text-transparent mb-6">
              Powered by Advanced Technology
            </h2>
            <p className="text-xl text-admiral-600 max-w-3xl mx-auto font-space-grotesk">
              Our cutting-edge technology platform delivers the tools you need to succeed
            </p>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {technologyFeatures.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1} direction="up">
                <div className="text-center group">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gypsum-100 to-gypsum-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold font-outfit mb-3 text-admiral-900">{feature.title}</h3>
                  <p className="text-admiral-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-20 md:py-32">
        <div className="container px-6 md:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 to-rhodamine-700 bg-clip-text text-transparent mb-6">
              Why Choose Longitude Rx?
            </h2>
            <p className="text-xl text-admiral-600 max-w-3xl mx-auto font-space-grotesk">
              Discover the measurable impact our services deliver to health systems
            </p>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 0.1} direction="up">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm text-center h-full">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gypsum-100 to-gypsum-200 flex items-center justify-center`}>
                      <benefit.icon className="h-8 w-8 text-admiral-600" />
                    </div>
                    <h3 className="text-xl font-bold font-outfit mb-3 text-admiral-900">{benefit.title}</h3>
                    <p className="text-admiral-600 text-sm leading-relaxed mb-6">{benefit.description}</p>
                    <div className="text-2xl font-bold font-outfit bg-gradient-to-r from-admiral-900 to-rhodamine-700 bg-clip-text text-transparent">
                      {benefit.metric}
                    </div>
                    <p className="text-sm text-admiral-600 font-space-grotesk">{benefit.label}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
            </div>
      </section>

      {/* Founding Partners Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-gypsum-100/80 via-gypsum-200/30 to-gypsum-300/30 backdrop-blur-sm">
        <div className="container px-6 md:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-admiral-900 to-rhodamine-700 bg-clip-text text-transparent mb-6">
              Built by Health Systems, For Health Systems
            </h2>
            <p className="text-xl text-admiral-600 max-w-3xl mx-auto font-space-grotesk">
              Our founding partners represent some of the most respected health systems in the nation
            </p>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80">
            <Image src="/images/baylor-scott-white-logo.png" alt="Baylor Scott & White" width={120} height={60} className="grayscale hover:grayscale-0 transition-all duration-300" />
            <Image src="/images/memorial-hermann-logo.png" alt="Memorial Hermann" width={120} height={60} className="grayscale hover:grayscale-0 transition-all duration-300" />
            <Image src="/images/michigan-medicine-logo.png" alt="Michigan Medicine" width={120} height={60} className="grayscale hover:grayscale-0 transition-all duration-300" />
            <Image src="/images/novant-health-logo.png" alt="Novant Health" width={120} height={60} className="grayscale hover:grayscale-0 transition-all duration-300" />
            <Image src="/images/providence-logo.png" alt="Providence" width={120} height={60} className="grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-admiral-900 via-ocean-800 to-rhodamine-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-rhodamine-400/20 to-gulf-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-ocean-400/20 to-gulf-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container px-6 md:px-8 relative z-10">
          <ScrollReveal direction="up" className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Target className="h-4 w-4 text-gulf-400" />
              <span className="text-sm font-semibold text-gulf-300 font-space-grotesk tracking-wide">
                GET STARTED TODAY
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-to-r from-white via-gypsum-200 to-gulf-200 bg-clip-text text-transparent">
              Ready to Capture Every Dollar?
            </h2>
            <p className="text-xl text-gypsum-300 max-w-3xl leading-relaxed font-space-grotesk">
              Join leading health systems in revolutionizing specialty pharmacy revenue capture. Our team is ready to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-gulf-400 to-rhodamine-500 hover:from-gulf-300 hover:to-rhodamine-400 text-admiral-900 shadow-2xl shadow-gulf-500/25 hover:shadow-gulf-500/40 transition-all duration-500 rounded-full px-8 py-4 text-lg font-semibold font-space-grotesk group transform hover:scale-105"
                >
                  <DollarSign className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
} 