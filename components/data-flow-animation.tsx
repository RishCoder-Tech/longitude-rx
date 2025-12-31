"use client"

import { motion, AnimatePresence, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import {
  Database,
  Zap,
  Target,
  BarChart3,
  Brain,
  Shield,
  Users,
  TrendingUp,
  Activity,
  Pill,
  FileText,
  Heart,
  BarChart,
  X,
  CheckCircle,
  FileCheck,
  Wallet,
  ShieldCheck,
  RefreshCw,
  ClipboardList,
  MessageSquare,
  ClipboardCheck,
  DollarSign,
  RotateCw,
  Stethoscope,
  UserCheck,
} from "lucide-react"

const dataSources = [
  {
    id: "pharmacy",
    name: "Pharmacy",
    icon: Pill,
    color: "from-rhodamine-500 to-rhodamine-600",
    description:
      "Medication dispensing records, prescription history, adherence data, and specialty pharmacy fulfillment information.",
  },
  {
    id: "claims",
    name: "Claims",
    icon: FileText,
    color: "from-gulf-400 to-gulf-500",
    description:
      "Insurance claims data including procedure codes, diagnosis codes, service dates, and reimbursement information.",
  },
  {
    id: "emrs",
    name: "EMRs",
    icon: Database,
    color: "from-[#4559A8] to-gulf-400",
    description:
      "Electronic Medical Records containing patient history, clinical notes, treatment plans, and provider documentation.",
  },
  {
    id: "wholesaler",
    name: "Wholesaler",
    icon: Users,
    color: "from-admiral-900 to-admiral-800",
    description:
      "Data from pharmaceutical wholesalers, including inventory, distribution, and supply chain logistics.",
  },
  {
    id: "340b",
    name: "340B TPA",
    icon: Heart,
    color: "from-gulf-400 to-admiral-900",
    description:
      "340B third-party administrator data including eligibility, claims, and compliance information for specialty pharmacy optimization.",
  },
  {
    id: "thirdparty",
    name: "Third-party Data",
    icon: BarChart,
    color: "from-rhodamine-400 to-[#4559A8]",
    description:
      "External datasets including demographic information, geographic data, and public health statistics for enriched analysis.",
  },
]

const processSteps = [
  {
    id: "priorauth",
    title: "Prior Authorization & Appeals",
    description: "Improve time-to-therapy",
    icon: ClipboardCheck,
    pattern: "grid",
    isDefault: true,
    detailedDescription:
      "Automates benefit verification, submission, tracking, and follow-ups, reducing administrative burden for providers while ensuring patients receive timely approval for medically necessary treatments. It aims for faster decisions, quicker therapy starts, fewer treatment interruptions, and improved overall care delivery.",
    keyFeatures: [
      "Automated benefit check",
      "Prior authorization automation",
      "Automated appeals",
    ],
  },
  {
    id: "financialassistance",
    title: "Financial Assistance",
    description: "Make therapy affordable",
    icon: DollarSign,
    pattern: "grid",
    detailedDescription:
      "Reduces financial barriers to care by automatically identifying, matching, and enrolling patients in appropriate financial assistance programs. It streamlines the process from eligibility screening to enrollment, minimizing out-of-pocket costs, easing financial stress, and improving therapy affordability and access across diverse populations.",
    keyFeatures: [
      "Automated financial assistance matching",
      "Enrollment automation",
    ],
  },
  {
    id: "340bcheck",
    title: "340B Pre-qualification check",
    description: "Ensure compliance",
    icon: ShieldCheck,
    pattern: "grid",
    detailedDescription:
      "Ensures regulatory compliance while maximizing eligible drug cost savings through automated 340B validation. It verifies entity and patient eligibility in real time, reduces audit risk, and optimizes program utilization. By embedding intelligent checks into the workflow, organizations can protect revenue, maintain compliance, and achieve sustainable cost efficiencies without increasing operational complexity.",
    keyFeatures: [
      "Automated 340B pre-qualification check",
      "Predictive analytics",
    ],
  },
  {
    id: "refillmanagement",
    title: "Refill Management",
    description: "Improve adherence",
    icon: RotateCw,
    pattern: "grid",
    detailedDescription:
      "Improves continuity of care and patient adherence through intelligent, proactive refill automation. Predictive analytics identify refill risks before gaps occur, while automated reminders and status tracking ensure patients stay on therapy without disruption. This reduces missed doses, prevents therapy abandonment, and supports better clinical outcomes through consistent medication access.",
    keyFeatures: [
      "Proactive refill reminders",
      "Automate refills",
      "Refill status tracking",
    ],
  },
  {
    id: "medicationtherapy",
    title: "Medication Therapy Management",
    description: "Improve patient outcomes",
    icon: Stethoscope,
    pattern: "grid",
    detailedDescription:
      "Enhances clinical outcomes through data-driven, personalized medication optimization. This solution embeds real-time clinical intelligence into provider workflows, enabling comprehensive medication reviews, drug interaction monitoring, and therapy adjustments. By integrating directly with patient data systems, it empowers care teams to deliver safer, more effective, and more individualized treatment plans.",
    keyFeatures: [
      "Embedded clinical tools",
      "Real time integrations of patient clinical information",
      "Therapy optimization workflow",
    ],
  },
  {
    id: "patientengagement",
    title: "Patient Engagement",
    description: "Strengthen patient satisfaction",
    icon: UserCheck,
    pattern: "grid",
    detailedDescription:
      "Strengthens patient relationships and improves outcomes through real-time, personalized communication and education. This solution delivers status alerts, educational content, appointment scheduling, and proactive reminders, keeping patients informed, empowered, and actively involved in their care journey. The result is higher satisfaction, improved adherence, and stronger long-term engagement.",
    keyFeatures: [
      "Real-time status alerts and education",
      "Educational content and resources",
      "Scheduling support and appointment reminders",
    ],
  },
]

const outcomes = [
  {
    id: "access",
    title: "Enhance patient access & adherence",
    icon: TrendingUp,
    color: "from-ocean-500 to-ocean-600",
    description:
      "Enable health systems to build end-to-end visibility of the specialty pharmacy patient journey, reducing prior authorization delays and financial hurdles and integrating fragmented data sources. Build faster processes and reduce medication non-compliance.",
    source: "darwinresearch.com",
  },
  {
    id: "coordination",
    title: "Embed clinical care coordination",
    icon: Brain,
    color: "from-purple-500 to-purple-600",
    description:
      "Embedded care and central hub teams, comprised of experienced pharmacists and care coordinators, work side-by-side with providers, supporting complex therapies from cell & gene treatments to rare-disease meds. This improves monitoring, adjustments, and patient experience.",
    source: "hcinnovationgroup.com",
  },
  {
    id: "resilience",
    title: "Drive financial & operational resilience",
    icon: Shield,
    color: "from-cyan-500 to-cyan-600",
    description:
      "Turn specialty pharmacy into a clinical and financial asset. Capture up to 20% of net patient service revenue, manage drug shortages, reduce costs, and scale smart operations across health systems.",
  },
]

const PatternDisplay = ({ pattern, isActive }: { pattern: string; isActive: boolean }) => {
  const dotClass = `w-2 h-2 rounded-full transition-all duration-300 ${isActive ? "bg-white" : "bg-white/40"}`

  switch (pattern) {
    case "grid":
      return (
        <div className="grid grid-cols-3 gap-2 p-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <motion.div
              key={i}
              className={dotClass}
              initial={{ scale: 0 }}
              animate={{ scale: isActive ? 1 : 0.6 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
            />
          ))}
        </div>
      )
    case "dots":
      return (
        <div className="flex flex-col items-center gap-2 p-4">
          {Array.from({ length: 3 }).map((_, row) => (
            <div key={row} className="flex gap-2">
              {Array.from({ length: 3 }).map((_, col) => (
                <motion.div
                  key={col}
                  className={dotClass}
                  initial={{ scale: 0 }}
                  animate={{ scale: isActive ? 1 : 0.6 }}
                  transition={{ delay: (row * 3 + col) * 0.05, duration: 0.3 }}
                />
              ))}
            </div>
          ))}
        </div>
      )
    case "circle":
      return (
        <div className="relative p-4">
          <div className="relative w-16 h-16">
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = i * 30 * (Math.PI / 180)
              const x = Math.cos(angle) * 24
              const y = Math.sin(angle) * 24
              return (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-white rounded-full"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: isActive ? 1 : 0.6 }}
                  transition={{ delay: i * 0.03, duration: 0.3 }}
                />
              )
            })}
            <motion.div
              className="absolute top-1/2 left-1/2 w-8 h-8 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0 }}
              animate={{ scale: isActive ? 1 : 0.7 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            />
          </div>
        </div>
      )
    case "diamond":
      return (
        <div className="p-4">
          <div className="relative w-12 h-12">
            <motion.div
              className="absolute top-0 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2"
              initial={{ scale: 0 }}
              animate={{ scale: isActive ? 1 : 0.6 }}
              transition={{ delay: 0, duration: 0.3 }}
            />
            <motion.div
              className="absolute top-1/2 right-0 w-2 h-2 bg-white rounded-full transform -translate-y-1/2"
              initial={{ scale: 0 }}
              animate={{ scale: isActive ? 1 : 0.6 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            />
            <motion.div
              className="absolute bottom-0 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2"
              initial={{ scale: 0 }}
              animate={{ scale: isActive ? 1 : 0.6 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            />
            <motion.div
              className="absolute top-1/2 left-0 w-2 h-2 bg-white rounded-full transform -translate-y-1/2"
              initial={{ scale: 0 }}
              animate={{ scale: isActive ? 1 : 0.6 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            />
          </div>
        </div>
      )
    case "matrix":
      return (
        <div className="grid grid-cols-4 gap-1 p-4">
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 bg-white"
              style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
              initial={{ scale: 0, rotate: 0 }}
              animate={{
                scale: isActive ? 1 : 0.6,
                rotate: 45,
              }}
              transition={{ delay: i * 0.02, duration: 0.3 }}
            />
          ))}
        </div>
      )
    default:
      return null
  }
}

const DataFlowDot = ({
  startDelay = 0,
  duration = 2,
  isActive = false,
}: {
  startDelay?: number
  duration?: number
  isActive?: boolean
}) => {
  return (
    <motion.div
      className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
      initial={{ x: 0, opacity: 0 }}
      animate={
        isActive
          ? {
              x: [0, 100],
              opacity: [0, 1, 1, 0],
              transition: {
                duration,
                delay: startDelay,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 3,
                ease: "easeInOut",
              },
            }
          : { x: 0, opacity: 0 }
      }
      style={{ top: "50%", transform: "translateY(-50%)" }}
    />
  )
}

const ExplanationModal = ({
  isOpen,
  onClose,
  title,
  description,
  icon: Icon,
  color,
  keyFeatures = [],
  detailedDescription = "",
}: {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  icon: any
  color: string
  keyFeatures?: string[]
  detailedDescription?: string
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-slate-400" />
              </button>

              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white font-outfit">{title}</h3>
              </div>

              <div className="space-y-6">
                <p className="text-slate-300 font-space-grotesk leading-relaxed">
                  {detailedDescription || description}
                </p>

                {keyFeatures.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 font-outfit">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {keyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span className="text-slate-300 font-space-grotesk text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function DataFlowAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedStep, setSelectedStep] = useState("priorauth")
  const [dataFlowActive, setDataFlowActive] = useState(false)
  const [modalInfo, setModalInfo] = useState<{
    isOpen: boolean
    title: string
    description: string
    icon: any
    color: string
    keyFeatures?: string[]
    detailedDescription?: string
  }>({
    isOpen: false,
    title: "",
    description: "",
    icon: Database,
    color: "",
    keyFeatures: [],
    detailedDescription: "",
  })

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setDataFlowActive(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  const handleStepClick = (stepId: string) => {
    setSelectedStep(stepId)
    const step = processSteps.find((s) => s.id === stepId)
    if (step) {
      setModalInfo({
        isOpen: true,
        title: step.title,
        description: step.description,
        icon: step.icon,
        color: "from-ocean-500 to-ocean-600",
        keyFeatures: step.keyFeatures,
        detailedDescription: step.detailedDescription,
      })
    }
  }

  const handleSourceClick = (sourceId: string) => {
    const source = dataSources.find((s) => s.id === sourceId)
    if (source) {
      setModalInfo({
        isOpen: true,
        title: source.name,
        description: source.description,
        icon: source.icon,
        color: source.color,
      })
    }
  }

  const handleOutcomeClick = (outcomeId: string) => {
    const outcome = outcomes.find((o) => o.id === outcomeId)
    if (outcome) {
      setModalInfo({
        isOpen: true,
        title: outcome.title,
        description: outcome.description,
        icon: outcome.icon,
        color: outcome.color,
      })
    }
  }

  const closeModal = () => {
    setModalInfo((prev) => ({ ...prev, isOpen: false }))
  }

  return (
    <div
      ref={ref}
      className="w-full bg-gradient-to-br from-ocean-900 to-rhodamine-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold font-outfit mb-4 bg-gradient-to-r from-white to-ocean-200 bg-clip-text text-transparent">
            Next-Gen Data Intelligence Pipeline
          </h3>
          <p className="text-lg text-ocean-200 font-space-grotesk max-w-3xl mx-auto">
            Click on any element to explore how we transform healthcare data into actionable insights
          </p>
        </motion.div>

        {/* Outcomes - Now Horizontal Above Cards */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {outcomes.map((outcome, index) => (
            <motion.button
              key={outcome.id}
              className="text-center relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              onClick={() => handleOutcomeClick(outcome.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${outcome.color} shadow-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
              >
                <outcome.icon className="w-8 h-8 text-white" />
              </motion.div>
              <p className="text-sm font-medium font-space-grotesk text-slate-200 leading-tight max-w-32 mx-auto">
                {outcome.title}
              </p>
            </motion.button>
          ))}
        </motion.div>

        {/* Data Sources - Horizontal Layout */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {dataSources.map((source, index) => (
            <motion.button
              key={source.id}
              className="flex flex-col items-center p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 relative group text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSourceClick(source.id)}
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${source.color} flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <source.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium font-space-grotesk text-slate-200">{source.name}</span>

              {/* Arrow pointing down to Process Flow */}
              <div className="absolute bottom-0 left-1/2 w-px h-8 bg-gradient-to-b from-slate-600 to-transparent transform -translate-x-1/2 translate-y-full" />
              <div className="absolute bottom-0 left-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-slate-600 transform -translate-x-1/2 translate-y-full" />

              {/* Flowing data dot */}
              <DataFlowDot startDelay={index * 0.3} duration={1.5} isActive={dataFlowActive} />
            </motion.button>
          ))}
        </motion.div>

        {/* Process Flow */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 max-w-7xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center relative">
                {/* Step Card */}
                <motion.button
                  onClick={() => handleStepClick(step.id)}
                  className={`relative p-6 rounded-2xl border-2 transition-all duration-500 w-full h-64 flex flex-col cursor-pointer group ${
                    selectedStep === step.id
                      ? index >= 3
                        ? "bg-gradient-to-br from-gulf-400 to-gulf-500 border-gulf-300 shadow-2xl shadow-gulf-400/25 scale-105"
                        : "bg-gradient-to-br from-ocean-600 to-ocean-700 border-ocean-400 shadow-2xl shadow-ocean-500/25 scale-105"
                      : "bg-slate-800/30 border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Icon Display - Fixed Position */}
                  <div className="flex justify-center h-16 items-center mb-4">
                    <motion.div
                      className={`flex items-center justify-center transition-all duration-300 ${
                        selectedStep === step.id ? "scale-110" : "scale-100"
                      }`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: selectedStep === step.id ? 1.1 : 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <step.icon className={`w-12 h-12 text-white ${selectedStep === step.id ? "opacity-100" : "opacity-70"}`} />
                    </motion.div>
                  </div>

                  {/* Step Content - Fixed Layout */}
                  <div className="text-center w-full flex flex-col">
                    {/* Title - Fixed Height Container */}
                    <div className="h-20 flex items-start justify-center mb-3 px-2">
                      <h4 className="text-base md:text-lg font-bold font-outfit text-white leading-[1.3] text-center w-full">{step.title}</h4>
                    </div>
                    {/* Description - Fixed Position */}
                    <div className="h-10 flex items-center justify-center px-1">
                      <p className="text-sm text-slate-300 font-space-grotesk leading-relaxed text-center">{step.description}</p>
                    </div>
                  </div>

                  {/* Click indicator */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>

                {/* Connection Line and Data Flow - Only show on larger screens in horizontal layout */}
                {index < processSteps.length - 1 && (
                  <div className="hidden xl:block absolute top-1/2 -right-2 w-4 h-px bg-gradient-to-r from-slate-600 to-slate-600 transform -translate-y-1/2">
                    {/* Arrow */}
                    <div className="absolute right-0 top-1/2 w-0 h-0 border-l-2 border-l-slate-600 border-t-1 border-b-1 border-t-transparent border-b-transparent transform -translate-y-1/2" />

                    {/* Flowing data dot */}
                    <DataFlowDot startDelay={1 + index * 0.4} duration={1.2} isActive={dataFlowActive} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Explanation Modal */}
      <ExplanationModal
        isOpen={modalInfo.isOpen}
        onClose={closeModal}
        title={modalInfo.title}
        description={modalInfo.description}
        icon={modalInfo.icon}
        color={modalInfo.color}
        keyFeatures={modalInfo.keyFeatures}
        detailedDescription={modalInfo.detailedDescription}
      />
    </div>
  )
}
