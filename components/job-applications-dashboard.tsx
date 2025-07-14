"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Calendar,
  Mail,
  Phone,
  MapPin,
  Building,
  GraduationCap,
  ExternalLink
} from "lucide-react"

interface JobApplication {
  sys: {
    id: string
    createdAt: string
  }
  fields: {
    firstName: string
    lastName: string
    email: string
    phone: string
    location: string
    currentCompany: string
    currentTitle: string
    experience: string
    education: string
    jobTitle: string
    status: string
    applicationDate: string
    linkedinUrl?: string
    portfolioUrl?: string
    coverLetter?: string
  }
}

export default function JobApplicationsDashboard() {
  const [applications, setApplications] = useState<JobApplication[]>([])
  const [filteredApplications, setFilteredApplications] = useState<JobApplication[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [jobFilter, setJobFilter] = useState("all")

  useEffect(() => {
    fetchApplications()
  }, [])

  useEffect(() => {
    filterApplications()
  }, [applications, searchTerm, statusFilter, jobFilter])

  const fetchApplications = async () => {
    try {
      const response = await fetch('/api/job-applications')
      if (response.ok) {
        const data = await response.json()
        setApplications(data.applications)
      }
    } catch (error) {
      console.error('Error fetching applications:', error)
    } finally {
      setLoading(false)
    }
  }

  const filterApplications = () => {
    let filtered = applications

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(app => 
        app.fields.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.fields.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.fields.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.fields.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter(app => app.fields.status === statusFilter)
    }

    // Job filter
    if (jobFilter !== "all") {
      filtered = filtered.filter(app => app.fields.jobTitle === jobFilter)
    }

    setFilteredApplications(filtered)
  }

  const updateApplicationStatus = async (applicationId: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/job-applications/${applicationId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      })

      if (response.ok) {
        // Update local state
        setApplications(prev => 
          prev.map(app => 
            app.sys.id === applicationId 
              ? { ...app, fields: { ...app.fields, status: newStatus } }
              : app
          )
        )
      }
    } catch (error) {
      console.error('Error updating application status:', error)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New':
        return 'bg-blue-100 text-blue-800'
      case 'Reviewing':
        return 'bg-yellow-100 text-yellow-800'
      case 'Interview':
        return 'bg-purple-100 text-purple-800'
      case 'Hired':
        return 'bg-green-100 text-green-800'
      case 'Rejected':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const exportApplications = () => {
    const csvContent = [
      ['Name', 'Email', 'Phone', 'Location', 'Current Company', 'Experience', 'Job Title', 'Status', 'Application Date'],
      ...filteredApplications.map(app => [
        `${app.fields.firstName} ${app.fields.lastName}`,
        app.fields.email,
        app.fields.phone || '',
        app.fields.location,
        app.fields.currentCompany || '',
        app.fields.experience,
        app.fields.jobTitle,
        app.fields.status,
        new Date(app.fields.applicationDate).toLocaleDateString()
      ])
    ].map(row => row.join(',')).join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `job-applications-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-rhodamine-500"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-admiral-900 mb-2">Job Applications Dashboard</h1>
        <p className="text-admiral-600">
          Manage and review job applications from candidates
        </p>
      </div>

      {/* Filters and Search */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search applications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="New">New</SelectItem>
                <SelectItem value="Reviewing">Reviewing</SelectItem>
                <SelectItem value="Interview">Interview</SelectItem>
                <SelectItem value="Hired">Hired</SelectItem>
                <SelectItem value="Rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>

            <Select value={jobFilter} onValueChange={setJobFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by job" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Jobs</SelectItem>
                {Array.from(new Set(applications.map(app => app.fields.jobTitle))).map(job => (
                  <SelectItem key={job} value={job}>{job}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button onClick={exportApplications} className="bg-gradient-to-r from-rhodamine-500 to-gulf-500">
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Applications List */}
      <div className="grid gap-6">
        {filteredApplications.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-admiral-600">No applications found matching your criteria.</p>
            </CardContent>
          </Card>
        ) : (
          filteredApplications.map((application) => (
            <Card key={application.sys.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-admiral-900">
                          {application.fields.firstName} {application.fields.lastName}
                        </h3>
                        <p className="text-admiral-600">{application.fields.email}</p>
                      </div>
                      <Badge className={getStatusColor(application.fields.status)}>
                        {application.fields.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-admiral-600">
                        <Phone className="h-4 w-4" />
                        <span>{application.fields.phone || 'Not provided'}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-admiral-600">
                        <MapPin className="h-4 w-4" />
                        <span>{application.fields.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-admiral-600">
                        <Building className="h-4 w-4" />
                        <span>{application.fields.currentCompany || 'Not provided'}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-admiral-600">
                        <GraduationCap className="h-4 w-4" />
                        <span>{application.fields.experience} years</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-admiral-900 mb-2">Applied for:</h4>
                      <p className="text-admiral-600">{application.fields.jobTitle}</p>
                    </div>

                    {application.fields.coverLetter && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-admiral-900 mb-2">Cover Letter:</h4>
                        <p className="text-admiral-600 text-sm line-clamp-2">
                          {application.fields.coverLetter}
                        </p>
                      </div>
                    )}

                    <div className="flex items-center space-x-4 text-sm text-admiral-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Applied: {new Date(application.fields.applicationDate).toLocaleDateString()}</span>
                      </div>
                      {application.fields.linkedinUrl && (
                        <a 
                          href={application.fields.linkedinUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-rhodamine-600 hover:text-rhodamine-700"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>LinkedIn</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 lg:ml-4">
                    <Select 
                      value={application.fields.status} 
                      onValueChange={(value) => updateApplicationStatus(application.sys.id, value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="New">New</SelectItem>
                        <SelectItem value="Reviewing">Reviewing</SelectItem>
                        <SelectItem value="Interview">Interview</SelectItem>
                        <SelectItem value="Hired">Hired</SelectItem>
                        <SelectItem value="Rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>

                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.location.href = `mailto:${application.fields.email}`}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Summary Stats */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Application Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-admiral-900">{applications.length}</div>
              <div className="text-sm text-admiral-600">Total Applications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {applications.filter(app => app.fields.status === 'New').length}
              </div>
              <div className="text-sm text-admiral-600">New</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">
                {applications.filter(app => app.fields.status === 'Reviewing').length}
              </div>
              <div className="text-sm text-admiral-600">Reviewing</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {applications.filter(app => app.fields.status === 'Interview').length}
              </div>
              <div className="text-sm text-admiral-600">Interview</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {applications.filter(app => app.fields.status === 'Hired').length}
              </div>
              <div className="text-sm text-admiral-600">Hired</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 