"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Upload,
  FileCheck,
  AlertTriangle,
  Clock,
  CheckCircle,
  XCircle,
  Calendar,
  User,
  Download,
  Eye,
} from "lucide-react"

const complianceItems = [
  {
    id: 1,
    title: "GST Registration Certificate",
    category: "Tax Compliance",
    status: "Valid",
    expiryDate: "2025-03-31",
    lastUpdated: "2024-01-15",
    priority: "High",
    description: "Goods and Services Tax registration",
  },
  {
    id: 2,
    title: "PAN Card",
    category: "Tax Compliance",
    status: "Valid",
    expiryDate: "Permanent",
    lastUpdated: "2023-06-10",
    priority: "High",
    description: "Permanent Account Number",
  },
  {
    id: 3,
    title: "Professional Tax Registration",
    category: "State Compliance",
    status: "Expiring Soon",
    expiryDate: "2024-03-31",
    lastUpdated: "2023-04-01",
    priority: "Medium",
    description: "State professional tax registration",
  },
  {
    id: 4,
    title: "ESI Registration",
    category: "Labor Compliance",
    status: "Valid",
    expiryDate: "2025-12-31",
    lastUpdated: "2024-01-01",
    priority: "Medium",
    description: "Employee State Insurance registration",
  },
  {
    id: 5,
    title: "PF Registration",
    category: "Labor Compliance",
    status: "Action Required",
    expiryDate: "2024-02-28",
    lastUpdated: "2023-03-01",
    priority: "High",
    description: "Provident Fund registration",
  },
]

const auditTrail = [
  {
    id: 1,
    action: "Document Updated",
    document: "GST Registration Certificate",
    user: "Compliance Officer",
    timestamp: "2024-01-15 10:30 AM",
    details: "Certificate renewed for FY 2024-25",
  },
  {
    id: 2,
    action: "Compliance Check",
    document: "Professional Tax Registration",
    user: "System",
    timestamp: "2024-01-14 09:00 AM",
    details: "Automated expiry reminder sent",
  },
  {
    id: 3,
    action: "Document Uploaded",
    document: "ESI Registration",
    user: "HR Manager",
    timestamp: "2024-01-01 02:15 PM",
    details: "New registration certificate uploaded",
  },
]

const upcomingDeadlines = [
  {
    id: 1,
    title: "Professional Tax Return Filing",
    dueDate: "2024-02-15",
    daysLeft: 25,
    priority: "High",
    category: "Tax Filing",
  },
  {
    id: 2,
    title: "PF Registration Renewal",
    dueDate: "2024-02-28",
    daysLeft: 38,
    priority: "High",
    category: "Labor Compliance",
  },
  {
    id: 3,
    title: "Annual Compliance Report",
    dueDate: "2024-03-31",
    daysLeft: 70,
    priority: "Medium",
    category: "Regulatory",
  },
]

export function Compliance() {
  const [activeTab, setActiveTab] = useState("overview")

  const validCount = complianceItems.filter((item) => item.status === "Valid").length
  const expiringCount = complianceItems.filter((item) => item.status === "Expiring Soon").length
  const actionRequiredCount = complianceItems.filter((item) => item.status === "Action Required").length
  const complianceScore = Math.round((validCount / complianceItems.length) * 100)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Valid":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "Expiring Soon":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "Action Required":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <FileCheck className="h-4 w-4" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Valid":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{status}</Badge>
      case "Expiring Soon":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">{status}</Badge>
      case "Action Required":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">{status}</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "High":
        return <Badge variant="destructive">{priority}</Badge>
      case "Medium":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">{priority}</Badge>
      case "Low":
        return <Badge variant="secondary">{priority}</Badge>
      default:
        return <Badge variant="outline">{priority}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Compliance Management</h1>
          <p className="text-muted-foreground">Track regulatory compliance and legal requirements</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Upload Document
          </Button>
          <Button className="bg-[#FF8C00] hover:bg-[#FF7700]">Generate Report</Button>
        </div>
      </div>

      {/* Compliance Score Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
            <FileCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{complianceScore}%</div>
            <Progress value={complianceScore} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Valid Documents</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{validCount}</div>
            <p className="text-xs text-muted-foreground">Out of {complianceItems.length} total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expiring Soon</CardTitle>
            <Clock className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{expiringCount}</div>
            <p className="text-xs text-muted-foreground">Require attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Action Required</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{actionRequiredCount}</div>
            <p className="text-xs text-muted-foreground">Immediate action needed</p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="deadlines">Deadlines</TabsTrigger>
          <TabsTrigger value="audit">Audit Trail</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest compliance activities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {auditTrail.slice(0, 3).map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <User className="h-4 w-4 text-muted-foreground mt-1" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">{activity.document}</p>
                      <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Deadlines</CardTitle>
                <CardDescription>Important dates to remember</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingDeadlines.slice(0, 3).map((deadline) => (
                  <div key={deadline.id} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">{deadline.title}</p>
                      <p className="text-xs text-muted-foreground">{deadline.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{deadline.daysLeft} days</p>
                      {getPriorityBadge(deadline.priority)}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="documents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Documents</CardTitle>
              <CardDescription>Manage all compliance-related documents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {complianceItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(item.status)}
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline">{item.category}</Badge>
                          {getPriorityBadge(item.priority)}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm font-medium">Expires: {item.expiryDate}</p>
                        <p className="text-xs text-muted-foreground">Updated: {item.lastUpdated}</p>
                        {getStatusBadge(item.status)}
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="deadlines" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Deadlines</CardTitle>
              <CardDescription>Track important compliance deadlines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingDeadlines.map((deadline) => (
                  <div key={deadline.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <h4 className="font-medium">{deadline.title}</h4>
                        <p className="text-sm text-muted-foreground">{deadline.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm font-medium">Due: {deadline.dueDate}</p>
                        <p className="text-xs text-muted-foreground">{deadline.daysLeft} days remaining</p>
                      </div>
                      {getPriorityBadge(deadline.priority)}
                      <Button size="sm">Set Reminder</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audit" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Audit Trail</CardTitle>
              <CardDescription>Complete history of compliance activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {auditTrail.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                    <User className="h-5 w-5 text-muted-foreground mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{activity.action}</h4>
                        <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{activity.document}</p>
                      <p className="text-sm mt-2">{activity.details}</p>
                      <p className="text-xs text-muted-foreground mt-1">By: {activity.user}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
