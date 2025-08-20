"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { X, Upload, FileText, Send, MapPin, DollarSign, Building, ArrowRight, CheckCircle, Clock } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useIsMobile } from "@/hooks/use-mobile"

interface JobApplicationFormProps {
  isOpen: boolean
  onClose: () => void
  jobTitle: string
  jobId: string
  jobData?: {
    title: string
    department: string
    location: string
    type: string
    description: string
    requirements: string[]
    benefits: string[]
    salary?: string
  }
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  location: string
  linkedinUrl: string
  portfolioUrl: string
  currentCompany: string
  currentTitle: string
  experience: string
  education: string
  coverLetter: string
  resume: File | null
  portfolio: File | null
  workAuthorization: boolean
  remoteWork: boolean
  salaryExpectation: string
  startDate: string
  source: string
  diversity: string
  agreeToTerms: boolean
  visaSponsorship: boolean
  infoAccurate: boolean
  race?: string
  ethnicity?: string
  disability?: string
  veteran?: string
}

export default function JobApplicationForm({ isOpen, onClose, jobTitle, jobId, jobData }: JobApplicationFormProps) {
  const [showJobDetails, setShowJobDetails] = useState(true)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    linkedinUrl: "",
    portfolioUrl: "",
    currentCompany: "",
    currentTitle: "",
    experience: "",
    education: "",
    coverLetter: "",
    resume: null,
    portfolio: null,
    workAuthorization: false,
    remoteWork: false,
    salaryExpectation: "",
    startDate: "",
    source: "",
    diversity: "",
    agreeToTerms: false,
    visaSponsorship: false,
    infoAccurate: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4
  const { toast } = useToast()
  const isMobile = useIsMobile()
  

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (field: 'resume' | 'portfolio', file: File | null) => {
    setFormData(prev => ({ ...prev, [field]: file }))
  }

  const validateStep = (stepOverride?: number) => {
    const step = stepOverride ?? currentStep;
    if (step === 1) {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.location) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields.",
          variant: "destructive",
        })
        return false;
      }
      // Simple email validation
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
        toast({
          title: "Invalid Email",
          description: "Please enter a valid email address.",
          variant: "destructive",
        })
        return false;
      }
    }
    if (step === 2) {
      if (!formData.education || !formData.salaryExpectation || !formData.startDate) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields for Professional Background.",
          variant: "destructive",
        })
        return false;
      }
    }
    if (step === 3) {
      if (!formData.resume) {
        toast({
          title: "Resume Required",
          description: "Please upload your resume.",
          variant: "destructive",
        })
        return false;
      }
    }
    if (step === 4) {
      if (!formData.workAuthorization || !formData.agreeToTerms || !formData.infoAccurate) {
        toast({
          title: "Missing Information",
          description: "Please complete all required fields for Additional Information.",
          variant: "destructive",
        })
        return false;
      }
    }
    return true;
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      if (!validateStep()) return;
      setCurrentStep(currentStep + 1);
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Prevent submission unless on last step and validation passes
    if (currentStep !== totalSteps) {
      return;
    }
    // Only check agreeToTerms here
    if (!formData.agreeToTerms) {
      toast({
        title: "Terms Agreement Required",
        description: "You must agree to the terms and conditions.",
        variant: "destructive",
      })
      return;
    }
    if (!validateStep(currentStep)) {
      return;
    }
    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData()
      
      // Add all form fields
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          if (value instanceof File) {
            formDataToSend.append(key, value)
          } else {
            formDataToSend.append(key, String(value))
          }
        }
      })
      
      formDataToSend.append('jobTitle', jobTitle)
      formDataToSend.append('jobId', jobId)

      const response = await fetch('/api/job-application-monday', {
        method: 'POST',
        body: formDataToSend,
      })

      if (response.ok) {
        const result = await response.json()
        console.log('Application submitted successfully:', result)
        
        // Show success modal
        setShowSuccessModal(true)
      } else {
        const errorData = await response.json()
        console.error('Submission error:', errorData)
        
        let errorMessage = errorData.error || 'Failed to submit application. Please try again.'
        
        if (errorData.setupRequired) {
          errorMessage = 'Application system is being configured. Please try again later or contact us directly.'
        }
        
        toast({
          title: "Submission Failed",
          description: errorMessage,
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Error submitting application:', error)
      toast({
        title: "Submission Error",
        description: "An error occurred while submitting your application. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false)
    onClose()
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      linkedinUrl: "",
      portfolioUrl: "",
      currentCompany: "",
      currentTitle: "",
      experience: "",
      education: "",
      coverLetter: "",
      resume: null,
      portfolio: null,
      workAuthorization: false,
      remoteWork: false,
      salaryExpectation: "",
      startDate: "",
      source: "",
      diversity: "",
      agreeToTerms: false,
      visaSponsorship: false,
      infoAccurate: false,
    })
    setCurrentStep(1)
    setShowJobDetails(true)
  }



  const renderStep1 = () => (
    <div className="space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            placeholder="Enter your first name"
            required
            className="h-12 md:h-10"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            placeholder="Enter your last name"
            required
            className="h-12 md:h-10"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          placeholder="your.email@example.com"
          required
          className="h-12 md:h-10"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          placeholder="+1 (555) 123-4567"
          className="h-12 md:h-10"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location *</Label>
        <Input
          id="location"
          value={formData.location}
          onChange={(e) => handleInputChange('location', e.target.value)}
          placeholder="City, State/Province, Country"
          required
          className="h-12 md:h-10"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="linkedinUrl">LinkedIn Profile</Label>
          <Input
            id="linkedinUrl"
            type="url"
            value={formData.linkedinUrl}
            onChange={(e) => handleInputChange('linkedinUrl', e.target.value)}
            placeholder="https://linkedin.com/in/yourprofile"
            className="h-12 md:h-10"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="portfolioUrl">Portfolio Website</Label>
          <Input
            id="portfolioUrl"
            type="url"
            value={formData.portfolioUrl}
            onChange={(e) => handleInputChange('portfolioUrl', e.target.value)}
            placeholder="https://yourportfolio.com"
            className="h-12 md:h-10"
          />
        </div>
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="currentCompany">Current Company</Label>
          <Input
            id="currentCompany"
            value={formData.currentCompany}
            onChange={(e) => handleInputChange('currentCompany', e.target.value)}
            placeholder="Your current employer"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="currentTitle">Current Title</Label>
          <Input
            id="currentTitle"
            value={formData.currentTitle}
            onChange={(e) => handleInputChange('currentTitle', e.target.value)}
            placeholder="Your current job title"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="education">Highest Education Level<span className='text-red-500'>*</span></Label>
        <Select value={formData.education} onValueChange={(value) => handleInputChange('education', value)} required>
          <SelectTrigger>
            <SelectValue placeholder="Select education level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="high-school">High School</SelectItem>
            <SelectItem value="associate">Associate's Degree</SelectItem>
            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
            <SelectItem value="master">Master's Degree</SelectItem>
            <SelectItem value="phd">PhD</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="salaryExpectation">Salary Expectation<span className='text-red-500'>*</span></Label>
        <Input
          id="salaryExpectation"
          value={formData.salaryExpectation}
          onChange={(e) => handleInputChange('salaryExpectation', e.target.value)}
          placeholder="Enter your salary expectation"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="startDate">Earliest Start Date<span className='text-red-500'>*</span></Label>
        <Input
          id="startDate"
          type="date"
          value={formData.startDate}
          onChange={(e) => handleInputChange('startDate', e.target.value)}
          required
        />
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="resume">Resume/CV *</Label>
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-4 md:p-6 text-center file-upload-area"
          onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
          onDrop={(e) => {
            e.preventDefault();
            e.stopPropagation();
            const file = e.dataTransfer.files[0];
            if (file) handleFileChange('resume', file);
          }}
        >
          <Upload className="mx-auto h-8 w-8 md:h-12 md:w-12 text-gray-400" />
          <div className="mt-4">
            <input
              type="file"
              id="resume"
              accept=".pdf,.doc,.docx"
              onChange={(e) => handleFileChange('resume', e.target.files?.[0] || null)}
              className="hidden"
            />
            <label htmlFor="resume" className="cursor-pointer">
              <span className="text-blue-600 hover:text-blue-500 font-medium">
                Click to upload
              </span>
              <span className="text-gray-500 hidden md:inline"> or drag and drop</span>
            </label>
            <p className="text-sm text-gray-500 mt-2">PDF, DOC, or DOCX (max 10MB)</p>
          </div>
          {formData.resume && (
            <div className="mt-4 flex items-center justify-center space-x-2 text-sm text-gray-600">
              <FileText className="h-4 w-4" />
              <span className="truncate max-w-[200px] md:max-w-none">{formData.resume.name}</span>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="portfolio">Portfolio/Work Samples (Optional)</Label>
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-4 md:p-6 text-center file-upload-area"
          onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
          onDrop={(e) => {
            e.preventDefault();
            e.stopPropagation();
            const file = e.dataTransfer.files[0];
            if (file) handleFileChange('portfolio', file);
          }}
        >
          <Upload className="mx-auto h-8 w-8 md:h-12 md:w-12 text-gray-400" />
          <div className="mt-4">
            <input
              type="file"
              id="portfolio"
              accept=".pdf,.zip,.rar"
              onChange={(e) => handleFileChange('portfolio', e.target.files?.[0] || null)}
              className="hidden"
            />
            <label htmlFor="portfolio" className="cursor-pointer">
              <span className="text-blue-600 hover:text-blue-500 font-medium">
                Click to upload
              </span>
              <span className="text-gray-500 hidden md:inline"> or drag and drop</span>
            </label>
            <p className="text-sm text-gray-500 mt-2">PDF or ZIP file (max 25MB)</p>
          </div>
          {formData.portfolio && (
            <div className="mt-4 flex items-center justify-center space-x-2 text-sm text-gray-600">
              <FileText className="h-4 w-4" />
              <span className="truncate max-w-[200px] md:max-w-none">{formData.portfolio.name}</span>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="coverLetter">Cover Letter</Label>
        <Textarea
          id="coverLetter"
          value={formData.coverLetter}
          onChange={(e) => handleInputChange('coverLetter', e.target.value)}
          placeholder="Tell us why you're interested in this position and why you'd be a great fit..."
          rows={isMobile ? 4 : 6}
        />
      </div>
    </div>
  )

  const renderStep4 = () => (
    <div className="space-y-6">
      {/* How did you hear about this position? */}
      <div className="space-y-2">
        <Label htmlFor="source">How did you hear about this position?</Label>
        <Select value={formData.source} onValueChange={(value) => handleInputChange('source', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select source" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="linkedin">LinkedIn</SelectItem>
            <SelectItem value="indeed">Indeed</SelectItem>
            <SelectItem value="glassdoor">Glassdoor</SelectItem>
            <SelectItem value="company-website">Company Website</SelectItem>
            <SelectItem value="referral">Employee Referral</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Work Authorization & Terms */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="workAuthorization"
            checked={formData.workAuthorization}
            onCheckedChange={(checked) => handleInputChange('workAuthorization', checked)}
            required
          />
          <Label htmlFor="workAuthorization">
            Are you authorized to work in the U.S.? <span className="text-red-500">*</span>
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="visaSponsorship"
            checked={formData.visaSponsorship || false}
            onCheckedChange={(checked) => handleInputChange('visaSponsorship', checked)}
          />
          <Label htmlFor="visaSponsorship">
            Will you now or in the future require sponsorship for employment visa status?
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="agreeToTerms"
            checked={formData.agreeToTerms}
            onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked)}
            required
          />
          <Label htmlFor="agreeToTerms">
            I agree to the terms and conditions and consent to the processing of my personal data <span className="text-red-500">*</span>
            <br />
            <span className="text-xs text-gray-400">I consent to the processing of my personal data. Longitude Rx will never sell your personal data.</span>
          </Label>
      </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="infoAccurate"
            checked={formData.infoAccurate || false}
            onCheckedChange={(checked) => handleInputChange('infoAccurate', checked)}
            required
          />
          <Label htmlFor="infoAccurate">
            By submitting this application I certify that all information provided is accurate. I acknowledge that submitting incorrect information may disqualify me from consideration or result in termination if employed. <span className="text-red-500">*</span>
          </Label>
          </div>
          </div>

      {/* DE&I section removed */}
    </div>
  )

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return renderStep1()
      case 2:
        return renderStep2()
      case 3:
        return renderStep3()
      case 4:
        return renderStep4()
      default:
        return renderStep1()
    }
  }

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Personal Information"
      case 2:
        return "Professional Background"
      case 3:
        return "Documents & Cover Letter"
      case 4:
        return "Additional Information"
      default:
        return "Personal Information"
    }
  }

  // Helper function to safely get string value from Contentful field
  const getStringValue = (field: any): string => {
    if (typeof field === 'string') return field
    if (typeof field === 'object' && field !== null) {
      // Handle Rich Text objects
      if (field.content && Array.isArray(field.content)) {
        return field.content
          .map((node: any) => 
            node.content
              ?.map((contentNode: any) => contentNode.value || '')
              .join('') || ''
          )
          .join(' ')
      }
      // If it's an object but not rich text, try to stringify it safely
      try {
        return JSON.stringify(field)
      } catch {
        return ''
      }
    }
    return ''
  }

  // Helper function to safely get array of strings from Contentful field
  const getStringArray = (field: any): string[] => {
    if (!Array.isArray(field)) return []
    return field.map(item => getStringValue(item)).filter(item => item !== '')
  }

  const renderJobDetails = () => (
    <div className="space-y-8">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-rhodamine-500 via-gulf-600 to-admiral-800 text-white rounded-t-xl p-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
            LONGITUDE Rx
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold font-space-grotesk">
            {getStringValue(jobData?.title) || jobTitle}
          </h2>
        </div>
      </div>

      {/* Content section */}
      <div className="bg-white rounded-b-xl shadow-lg p-8">
        {/* About Longitude Rx */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-admiral-900 mb-4 font-outfit">About Longitude Rx</h3>
          <p className="text-admiral-700 leading-relaxed font-space-grotesk">
            Longitude Rx "LRx" aims to transform access and management of specialty medications through tech-enabled solutions. 
            Our platform focuses on improving patient outcomes, reducing care costs, and scaling efficiently for healthcare organizations. 
            We support hospital-based specialty pharmacies, serving patients with complex, chronic, and rare conditions requiring expert clinical oversight.
          </p>
        </div>

        {/* Job Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-admiral-900 font-outfit">
            {getStringValue(jobData?.title) || jobTitle}
          </h2>
        </div>

        {/* Position Summary */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-admiral-900 mb-4 font-outfit">Position Summary</h3>
          <div className="space-y-4 text-admiral-700 font-space-grotesk">
            <p>
              Longitude Rx emphasizes a flexible work approach centered on trust, culture, connection, clarity, and evolving business needs.
            </p>
            <p>
              {getStringValue(jobData?.description) || 'This role is for a key strategic business partner who will work closely with cross-functional teams to drive business success and innovation.'}
            </p>
            <p>
              Key traits for success are strict attention to detail, ability to meet tight deadlines, a curious mindset, and a bias for action.
            </p>
          </div>
        </div>

        {/* Core Responsibilities */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-admiral-900 mb-4 font-outfit">Core Responsibilities</h3>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-admiral-800 font-space-grotesk">Strategic Thinking</h4>
            <ul className="space-y-2">
              {jobData?.requirements && jobData.requirements.length > 0 ? (
                getStringArray(jobData.requirements).map((req, idx) => (
                  <li key={idx} className="text-admiral-700 flex items-start space-x-3 font-space-grotesk">
                    <span className="w-2 h-2 bg-rhodamine-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{req}</span>
                  </li>
                ))
              ) : (
                <>
                  <li className="text-admiral-700 flex items-start space-x-3 font-space-grotesk">
                    <span className="w-2 h-2 bg-rhodamine-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Lead long-range and annual planning processes, and monthly financial forecasting</span>
                  </li>
                  <li className="text-admiral-700 flex items-start space-x-3 font-space-grotesk">
                    <span className="w-2 h-2 bg-rhodamine-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Partner with senior executives to develop and execute solutions for global finance strategies, initiatives, and key investments</span>
                  </li>
                  <li className="text-admiral-700 flex items-start space-x-3 font-space-grotesk">
                    <span className="w-2 h-2 bg-rhodamine-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Develop frameworks for rigorous and analytical decision-making</span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

        {/* Job Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex items-center space-x-3 text-admiral-700">
            <MapPin className="h-5 w-5 text-rhodamine-500" />
            <span className="font-space-grotesk">{getStringValue(jobData?.location) || 'Remote'}</span>
          </div>
          <div className="flex items-center space-x-3 text-admiral-700">
            <Building className="h-5 w-5 text-gulf-500" />
            <span className="font-space-grotesk">{getStringValue(jobData?.department) || 'General'}</span>
          </div>
          {jobData?.salary && (
            <div className="flex items-center space-x-3 text-admiral-700">
              <DollarSign className="h-5 w-5 text-admiral-500" />
              <span className="font-space-grotesk">{getStringValue(jobData.salary)}</span>
            </div>
          )}
          <div className="flex items-center space-x-3 text-admiral-700">
            <Clock className="h-5 w-5 text-ocean-500" />
            <span className="font-space-grotesk">{getStringValue(jobData?.type) || 'Full-time'}</span>
          </div>
        </div>

        {/* Benefits Section */}
        {jobData?.benefits && jobData.benefits.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-bold text-admiral-900 mb-4 font-outfit">Benefits</h3>
            <ul className="space-y-2">
              {getStringArray(jobData.benefits).map((benefit, idx) => (
                <li key={idx} className="text-admiral-700 flex items-start space-x-3 font-space-grotesk">
                  <span className="w-2 h-2 bg-gulf-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Continue Button */}
      <div className="text-center">
        <Button
          onClick={() => setShowJobDetails(false)}
          className="bg-gradient-to-r from-rhodamine-500 to-gulf-500 hover:from-rhodamine-600 hover:to-gulf-600 text-white px-8 py-4 text-lg font-semibold font-space-grotesk shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Continue to Application
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  )

  // Confetti component
  const Confetti = () => {
    const colors = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899']
    return (
      <div className="fixed inset-0 pointer-events-none z-50">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: colors[Math.floor(Math.random() * colors.length)],
              left: `${Math.random() * 100}%`,
              top: '-10px',
            }}
            initial={{ y: -10, opacity: 1 }}
            animate={{
              y: window.innerHeight + 10,
              opacity: 0,
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              ease: "easeOut",
              delay: Math.random() * 0.5,
            }}
          />
        ))}
      </div>
    )
  }

  return (
    <>
      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={handleCloseSuccessModal}>
        <DialogContent className="max-w-md mx-4">
          <div className="text-center py-8">
            {showSuccessModal && <Confetti />}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
            >
              <CheckCircle className="h-10 w-10 text-green-600" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-admiral-900 mb-4"
            >
              Application Submitted!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-admiral-600 mb-8"
            >
              Thank you for your application! We've received your submission and will review it carefully. We'll be in touch soon.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center mt-4"
            >
              <Button
                onClick={handleCloseSuccessModal}
                variant="outline"
                className="border-admiral-200 text-admiral-700 bg-white hover:bg-admiral-50"
              >
                Close
              </Button>
            </motion.div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Main Application Form */}
      <Dialog open={isOpen && !showSuccessModal} onOpenChange={onClose}>
        <DialogContent className={`${isMobile ? 'max-w-[95vw] mx-2' : 'max-w-4xl'} max-h-[95vh] overflow-hidden`}>
          <DialogHeader>
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <DialogTitle className="text-lg md:text-2xl font-bold text-admiral-900 truncate">
                  {showJobDetails ? 'Job Details' : `Apply for ${jobTitle}`}
                </DialogTitle>
                {!showJobDetails && (
                  <p className="text-admiral-600 mt-1 md:mt-2 text-xs md:text-base">
                    Step {currentStep} of {totalSteps}: {getStepTitle()}
                  </p>
                )}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="h-10 w-10 md:h-8 md:w-8 p-0 ml-2 flex-shrink-0"
              >
                <X className="h-5 w-5 md:h-4 md:w-4" />
              </Button>
            </div>
          </DialogHeader>

          {showJobDetails ? (
            <ScrollArea className={`${isMobile ? 'h-[60vh]' : 'h-[70vh]'} pr-4`}>
              {renderJobDetails()}
            </ScrollArea>
          ) : (
            <>
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                <div
                  className="bg-gradient-to-r from-rhodamine-500 to-gulf-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <ScrollArea className={`${isMobile ? 'h-[50vh]' : 'h-[60vh]'} pr-4`}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {renderStepContent()}
                    </motion.div>
                  </AnimatePresence>
                </ScrollArea>

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6 border-t">
                  {currentStep > 1 ? (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      className="text-sm md:text-base h-12 md:h-10 px-6 md:px-4"
                    >
                      Previous
                    </Button>
                  ) : (
                    <div></div>
                  )}

                  <div className="flex space-x-2 md:space-x-3">
                    {currentStep < totalSteps ? (
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="bg-gradient-to-r from-rhodamine-500 to-gulf-500 hover:from-rhodamine-600 hover:to-gulf-600 text-sm md:text-base h-12 md:h-10 px-6 md:px-4"
                      >
                        Next Step
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-rhodamine-500 to-gulf-500 hover:from-rhodamine-600 hover:to-gulf-600 text-sm md:text-base h-12 md:h-10 px-6 md:px-4"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center space-x-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                            <span>Submitting...</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <Send className="h-4 w-4" />
                            <span>Submit Application</span>
                          </div>
                        )}
                      </Button>
                    )}
                  </div>
                </div>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
