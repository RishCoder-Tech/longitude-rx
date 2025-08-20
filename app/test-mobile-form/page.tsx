"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { useIsMobile } from "@/hooks/use-mobile"

export default function TestMobileForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    file: null as File | null
  })
  const { toast } = useToast()
  const isMobile = useIsMobile()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    if (!formData.file) {
      toast({
        title: "File Required",
        description: "Please upload a file.",
        variant: "destructive",
      })
      return
    }

    const formDataToSend = new FormData()
    formDataToSend.append('name', formData.name)
    formDataToSend.append('email', formData.email)
    formDataToSend.append('file', formData.file)

    try {
      const response = await fetch('/api/test-upload-debug', {
        method: 'POST',
        body: formDataToSend,
      })

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Form submitted successfully.",
        })
      } else {
        toast({
          title: "Error",
          description: "Failed to submit form.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while submitting the form.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Mobile Form Test</h1>
        
        <div className="mb-4 p-3 bg-blue-50 rounded">
          <p className="text-sm">
            <strong>Device:</strong> {isMobile ? 'Mobile' : 'Desktop'}
          </p>
          <p className="text-sm">
            <strong>User Agent:</strong> {typeof window !== 'undefined' ? window.navigator.userAgent : 'Unknown'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <Label htmlFor="file">File Upload *</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center file-upload-area">
              <input
                type="file"
                id="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setFormData(prev => ({ ...prev, file: e.target.files?.[0] || null }))}
                className="hidden"
              />
              <label htmlFor="file" className="cursor-pointer">
                <span className="text-blue-600 hover:text-blue-500 font-medium">
                  Click to upload
                </span>
              </label>
              <p className="text-sm text-gray-500 mt-2">PDF, DOC, or DOCX</p>
              {formData.file && (
                <div className="mt-4 text-sm text-gray-600">
                  <p>Selected: {formData.file.name}</p>
                  <p>Size: {(formData.file.size / 1024).toFixed(2)} KB</p>
                  <p>Type: {formData.file.type}</p>
                </div>
              )}
            </div>
          </div>

          <Button type="submit" className="w-full">
            Submit Test
          </Button>
        </form>
      </div>
    </div>
  )
} 