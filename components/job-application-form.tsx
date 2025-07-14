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
import { X, Upload, FileText, Send, MapPin, DollarSign, Building, ArrowRight, CheckCircle } from "lucide-react"

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
        alert('Please fill in all required fields.');
        return false;
      }
      // Simple email validation
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
        alert('Please enter a valid email address.');
        return false;
      }
    }
    if (step === 2) {
      if (!formData.education || !formData.salaryExpectation || !formData.startDate) {
        alert('Please fill in all required fields for Professional Background.');
        return false;
      }
    }
    if (step === 3) {
      if (!formData.resume) {
        alert('Please upload your resume.');
        return false;
      }
    }
    if (step === 4) {
      if (!formData.workAuthorization || !formData.agreeToTerms || !formData.infoAccurate || formData.visaSponsorship === undefined) {
        alert('Please complete all required fields for Additional Information.');
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
      alert('You must agree to the terms and conditions.');
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

      // REMOVE OR DISABLE AUTO-SUBMIT LOGIC HERE
      // Submission only occurs when user clicks submit on last step
      // (No auto-submit anywhere else)

      const response = await fetch('/api/job-application-monday', {
        method: 'POST',
        body: formDataToSend,
      })

      if (response.ok) {
        const result = await response.json()
        console.log('Application submitted successfully:', result)
        
        // Store email for dashboard access
        localStorage.setItem('applicantEmail', formData.email)
        
        // Show success modal instead of redirecting
        setShowSuccessModal(true)
      } else {
        const errorData = await response.json()
        console.error('Submission error:', errorData)
        
        let errorMessage = errorData.error || 'Failed to submit application. Please try again.'
        
        if (errorData.setupRequired) {
          errorMessage = 'Application system is being configured. Please try again later or contact us directly.'
        }
        
        alert(errorMessage) // Replace with proper toast notification
      }
    } catch (error) {
      console.error('Error submitting application:', error)
      alert('An error occurred while submitting your application. Please try again.')
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

  const handleGoToDashboard = () => {
    window.location.href = '/application-dashboard'
  }

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            placeholder="Enter your first name"
            required
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
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center"
          onDragOver={e => { e.preventDefault(); e.stopPropagation(); }}
          onDrop={e => {
            e.preventDefault();
            e.stopPropagation();
            const file = e.dataTransfer.files[0];
            if (file) handleFileChange('resume', file);
          }}
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
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
              <span className="text-gray-500"> or drag and drop</span>
            </label>
            <p className="text-sm text-gray-500 mt-2">PDF, DOC, or DOCX (max 10MB)</p>
          </div>
          {formData.resume && (
            <div className="mt-4 flex items-center justify-center space-x-2 text-sm text-gray-600">
              <FileText className="h-4 w-4" />
              <span>{formData.resume.name}</span>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="portfolio">Portfolio/Work Samples (Optional)</Label>
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center"
          onDragOver={e => { e.preventDefault(); e.stopPropagation(); }}
          onDrop={e => {
            e.preventDefault();
            e.stopPropagation();
            const file = e.dataTransfer.files[0];
            if (file) handleFileChange('portfolio', file);
          }}
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
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
              <span className="text-gray-500"> or drag and drop</span>
            </label>
            <p className="text-sm text-gray-500 mt-2">PDF or ZIP file (max 25MB)</p>
          </div>
          {formData.portfolio && (
            <div className="mt-4 flex items-center justify-center space-x-2 text-sm text-gray-600">
              <FileText className="h-4 w-4" />
              <span>{formData.portfolio.name}</span>
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
          rows={6}
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
            required
          />
          <Label htmlFor="visaSponsorship">
            Will you now or in the future require sponsorship for employment visa status? <span className="text-red-500">*</span>
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

  const renderJobDetails = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-admiral-50 to-gypsum-50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-admiral-900">{jobData?.title || jobTitle}</h2>
          <div className="flex space-x-2">
            <Badge className="bg-rhodamine-100 text-rhodamine-800">
              {jobData?.department}
            </Badge>
            <Badge className="bg-gulf-100 text-gulf-800">
              {jobData?.type}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center space-x-2 text-admiral-600">
            <MapPin className="h-4 w-4" />
            <span>{jobData?.location}</span>
          </div>
          {jobData?.salary && (
            <div className="flex items-center space-x-2 text-admiral-600">
              <DollarSign className="h-4 w-4" />
              <span>{jobData.salary}</span>
            </div>
          )}
          <div className="flex items-center space-x-2 text-admiral-600">
            <Building className="h-4 w-4" />
            <span>{jobData?.department}</span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-admiral-900 mb-2">Job Description</h3>
            <p className="text-admiral-600 leading-relaxed">{jobData?.description}</p>
          </div>

          {jobData?.requirements && jobData.requirements.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-admiral-900 mb-2">Requirements</h3>
              <ul className="space-y-1">
                {jobData.requirements.map((req, idx) => (
                  <li key={idx} className="text-admiral-600 flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-rhodamine-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {jobData?.benefits && jobData.benefits.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-admiral-900 mb-2">Benefits</h3>
              <ul className="space-y-1">
                {jobData.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-admiral-600 flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-gulf-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="text-center">
        <Button
          onClick={() => setShowJobDetails(false)}
          className="bg-gradient-to-r from-rhodamine-500 to-gulf-500 hover:from-rhodamine-600 hover:to-gulf-600 text-white px-8 py-3 text-lg"
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
        <DialogContent className="max-w-md">
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
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle className="text-2xl font-bold text-admiral-900">
                  {showJobDetails ? 'Job Details' : `Apply for ${jobTitle}`}
                </DialogTitle>
                {!showJobDetails && (
                  <p className="text-admiral-600 mt-2">
                    Step {currentStep} of {totalSteps}: {getStepTitle()}
                  </p>
                )}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>

          {showJobDetails ? (
            <ScrollArea className="h-[70vh] pr-4">
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
                <ScrollArea className="h-[60vh] pr-4">
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
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                  >
                    Previous
                  </Button>

                  <div className="flex space-x-3">
                    {currentStep < totalSteps ? (
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="bg-gradient-to-r from-rhodamine-500 to-gulf-500 hover:from-rhodamine-600 hover:to-gulf-600"
                      >
                        Next Step
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-rhodamine-500 to-gulf-500 hover:from-rhodamine-600 hover:to-gulf-600"
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
