'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { 
  Search, 
  Calendar, 
  MapPin, 
  Building, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Eye,
  Download,
  ExternalLink,
  ArrowLeft
} from 'lucide-react'
import Link from 'next/link'

interface Application {
  id: string
  jobTitle: string
  jobId: string
  company: string
  location: string
  appliedDate: string
  status: 'New' | 'Reviewing' | 'Interview' | 'Hired' | 'Rejected'
  lastUpdated: string
  department: string
  type: string
  salary?: string
  description?: string
  requirements?: string[]
  benefits?: string[]
  nextStep?: string
  estimatedTimeline?: string
}

const statusConfig = {
  New: {
    label: 'Application Received',
    color: 'bg-blue-100 text-blue-800',
    icon: CheckCircle,
    progress: 25
  },
  Reviewing: {
    label: 'Under Review',
    color: 'bg-yellow-100 text-yellow-800',
    icon: Eye,
    progress: 50
  },
  Interview: {
    label: 'Interview Stage',
    color: 'bg-purple-100 text-purple-800',
    icon: Calendar,
    progress: 75
  },
  Hired: {
    label: 'Offer Extended',
    color: 'bg-green-100 text-green-800',
    icon: CheckCircle,
    progress: 100
  },
  Rejected: {
    label: 'Not Selected',
    color: 'bg-red-100 text-red-800',
    icon: AlertCircle,
    progress: 100
  }
}

export default function ApplicationDashboard() {
  const [applications, setApplications] = useState<Application[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        // Get email from URL params or localStorage (for demo purposes)
        const urlParams = new URLSearchParams(window.location.search)
        const email = urlParams.get('email') || localStorage.getItem('applicantEmail')
        
        const response = await fetch(`/api/applications${email ? `?email=${email}` : ''}`)
        const data = await response.json()
        
        if (data.success) {
          setApplications(data.applications)
        } else {
          console.error('Failed to fetch applications:', data.error)
          // Fallback to mock data for demo
          setApplications([
            {
              id: '1',
              jobTitle: 'Senior Software Engineer',
              jobId: 'SWE-001',
              company: 'Longitude Rx',
              location: 'Remote',
              appliedDate: '2024-01-15',
              status: 'Reviewing',
              lastUpdated: '2024-01-16',
              department: 'Engineering',
              type: 'Full-time',
              salary: '$120,000 - $150,000',
              description: 'We are looking for a Senior Software Engineer to join our team...',
              requirements: ['5+ years experience', 'React/Next.js', 'TypeScript', 'Node.js'],
              benefits: ['Health insurance', '401k', 'Remote work', 'Flexible hours'],
              nextStep: 'Technical interview scheduled for next week',
              estimatedTimeline: '2-3 weeks'
            }
          ])
        }
      } catch (error) {
        console.error('Error fetching applications:', error)
        // Fallback to mock data
        setApplications([
          {
            id: '1',
            jobTitle: 'Senior Software Engineer',
            jobId: 'SWE-001',
            company: 'Longitude Rx',
            location: 'Remote',
            appliedDate: '2024-01-15',
            status: 'Reviewing',
            lastUpdated: '2024-01-16',
            department: 'Engineering',
            type: 'Full-time',
            salary: '$120,000 - $150,000',
            description: 'We are looking for a Senior Software Engineer to join our team...',
            requirements: ['5+ years experience', 'React/Next.js', 'TypeScript', 'Node.js'],
            benefits: ['Health insurance', '401k', 'Remote work', 'Flexible hours'],
            nextStep: 'Technical interview scheduled for next week',
            estimatedTimeline: '2-3 weeks'
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchApplications()
  }, [])

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || app.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const getStatusConfig = (status: Application['status']) => {
    return statusConfig[status] || statusConfig.New
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-admiral-50 to-gypsum-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-admiral-600 mx-auto mb-4"></div>
              <p className="text-admiral-600">Loading your applications...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-admiral-50 to-gypsum-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-admiral-900 mb-2">
                Application Dashboard
              </h1>
              <p className="text-admiral-600">
                Track the status of your job applications
              </p>
            </div>
            <Link href="/careers">
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Careers</span>
              </Button>
            </Link>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-admiral-400 h-4 w-4" />
                <Input
                  placeholder="Search applications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant={filterStatus === 'all' ? 'default' : 'outline'}
                onClick={() => setFilterStatus('all')}
                size="sm"
              >
                All ({applications.length})
              </Button>
              {Object.keys(statusConfig).map(status => (
                <Button
                  key={status}
                  variant={filterStatus === status ? 'default' : 'outline'}
                  onClick={() => setFilterStatus(status)}
                  size="sm"
                >
                  {status} ({applications.filter(app => app.status === status).length})
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Applications List */}
        {filteredApplications.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <div className="text-admiral-400 mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-admiral-900 mb-2">
                No applications found
              </h3>
              <p className="text-admiral-600 mb-4">
                {searchTerm || filterStatus !== 'all' 
                  ? 'Try adjusting your search or filters'
                  : 'You haven\'t submitted any applications yet'
                }
              </p>
              {!searchTerm && filterStatus === 'all' && (
                <Link href="/careers">
                  <Button className="bg-gradient-to-r from-rhodamine-500 to-gulf-500 hover:from-rhodamine-600 hover:to-gulf-600">
                    Browse Open Positions
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {filteredApplications.map((application) => {
              const statusInfo = getStatusConfig(application.status)
              const StatusIcon = statusInfo.icon

              return (
                <Card key={application.id} className="overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl text-admiral-900">
                            {application.jobTitle}
                          </CardTitle>
                          <Badge className={statusInfo.color}>
                            <StatusIcon className="h-3 w-3 mr-1" />
                            {statusInfo.label}
                          </Badge>
                        </div>
                        <CardDescription className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1">
                            <Building className="h-4 w-4" />
                            {application.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {application.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            Applied {formatDate(application.appliedDate)}
                          </span>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <Tabs defaultValue="overview" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="details">Job Details</TabsTrigger>
                        <TabsTrigger value="timeline">Timeline</TabsTrigger>
                      </TabsList>

                      <TabsContent value="overview" className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-admiral-900 mb-3">Application Progress</h4>
                            <div className="space-y-3">
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>Progress</span>
                                  <span>{statusInfo.progress}%</span>
                                </div>
                                <Progress value={statusInfo.progress} className="h-2" />
                              </div>
                              <div className="text-sm text-admiral-600">
                                <p><strong>Next Step:</strong> {application.nextStep}</p>
                                <p><strong>Estimated Timeline:</strong> {application.estimatedTimeline}</p>
                                <p><strong>Last Updated:</strong> {formatDate(application.lastUpdated)}</p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-admiral-900 mb-3">Quick Actions</h4>
                            <div className="space-y-2">
                              <Button variant="outline" className="w-full justify-start">
                                <Download className="h-4 w-4 mr-2" />
                                Download Application
                              </Button>
                              <Button variant="outline" className="w-full justify-start">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                View Job Posting
                              </Button>
                              <Button variant="outline" className="w-full justify-start">
                                <Calendar className="h-4 w-4 mr-2" />
                                Schedule Follow-up
                              </Button>
                            </div>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="details" className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-admiral-900 mb-3">Job Information</h4>
                            <div className="space-y-2 text-sm">
                              <p><strong>Department:</strong> {application.department}</p>
                              <p><strong>Type:</strong> {application.type}</p>
                              {application.salary && (
                                <p><strong>Salary:</strong> {application.salary}</p>
                              )}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-admiral-900 mb-3">Requirements</h4>
                            {application.requirements ? (
                              <ul className="space-y-1 text-sm">
                                {application.requirements.map((req, idx) => (
                                  <li key={idx} className="flex items-start space-x-2">
                                    <span className="w-1.5 h-1.5 bg-rhodamine-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>{req}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-admiral-600 text-sm">No specific requirements listed</p>
                            )}
                          </div>
                        </div>
                        {application.benefits && (
                          <div>
                            <h4 className="font-semibold text-admiral-900 mb-3">Benefits</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                              {application.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <span className="w-1.5 h-1.5 bg-gulf-500 rounded-full mt-2 flex-shrink-0"></span>
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </TabsContent>

                      <TabsContent value="timeline" className="space-y-4">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <div className="flex-1">
                              <p className="font-medium text-admiral-900">Application Submitted</p>
                              <p className="text-sm text-admiral-600">{formatDate(application.appliedDate)}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className={`w-3 h-3 rounded-full ${
                              ['Reviewing', 'Interview', 'Hired', 'Rejected'].includes(application.status) 
                                ? 'bg-blue-500' 
                                : 'bg-gray-300'
                            }`}></div>
                            <div className="flex-1">
                              <p className="font-medium text-admiral-900">Application Under Review</p>
                              <p className="text-sm text-admiral-600">Typically 1-2 business days</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className={`w-3 h-3 rounded-full ${
                              ['Interview', 'Hired', 'Rejected'].includes(application.status) 
                                ? 'bg-purple-500' 
                                : 'bg-gray-300'
                            }`}></div>
                            <div className="flex-1">
                              <p className="font-medium text-admiral-900">Interview Process</p>
                              <p className="text-sm text-admiral-600">Technical and cultural interviews</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className={`w-3 h-3 rounded-full ${
                              ['Hired', 'Rejected'].includes(application.status) 
                                ? 'bg-green-500' 
                                : 'bg-gray-300'
                            }`}></div>
                            <div className="flex-1">
                              <p className="font-medium text-admiral-900">Final Decision</p>
                              <p className="text-sm text-admiral-600">Offer or feedback provided</p>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
