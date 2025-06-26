"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { FileSignature, Plus, Calendar, AlertTriangle, CheckCircle, Clock, Eye, Edit, Send, Search } from "lucide-react"

const contracts = [
  {
    id: 1,
    title: "Software Development Agreement",
    client: "Tech Innovations Ltd",
    value: "₹5,00,000",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    status: "Active",
    signedDate: "2023-12-15",
    type: "Service Agreement",
    renewalDate: "2024-11-30",
  },
  {
    id: 2,
    title: "Office Lease Agreement",
    client: "Property Management Co.",
    value: "₹3,00,000",
    startDate: "2024-01-01",
    endDate: "2026-12-31",
    status: "Active",
    signedDate: "2023-11-20",
    type: "Lease Agreement",
    renewalDate: "2026-10-31",
  },
  {
    id: 3,
    title: "Marketing Services Contract",
    client: "Digital Marketing Agency",
    value: "₹2,50,000",
    startDate: "2024-02-01",
    endDate: "2024-07-31",
    status: "Pending Signature",
    signedDate: null,
    type: "Service Agreement",
    renewalDate: "2024-06-30",
  },
  {
    id: 4,
    title: "Equipment Purchase Agreement",
    client: "Tech Equipment Supplier",
    value: "₹1,50,000",
    startDate: "2024-01-15",
    endDate: "2024-01-30",
    status: "Completed",
    signedDate: "2024-01-10",
    type: "Purchase Agreement",
    renewalDate: null,
  },
]

const templates = [
  {
    id: 1,
    name: "Service Agreement Template",
    description: "Standard template for service contracts",
    category: "Service Contracts",
    lastUsed: "2024-01-10",
    usageCount: 15,
  },
  {
    id: 2,
    name: "NDA Template",
    description: "Non-disclosure agreement template",
    category: "Legal Documents",
    lastUsed: "2024-01-08",
    usageCount: 8,
  },
  {
    id: 3,
    name: "Employment Contract",
    description: "Standard employment agreement",
    category: "HR Documents",
    lastUsed: "2024-01-05",
    usageCount: 12,
  },
  {
    id: 4,
    name: "Vendor Agreement",
    description: "Template for vendor partnerships",
    category: "Vendor Contracts",
    lastUsed: "2024-01-03",
    usageCount: 6,
  },
]

const upcomingRenewals = [
  {
    id: 1,
    contract: "Software Development Agreement",
    client: "Tech Innovations Ltd",
    renewalDate: "2024-11-30",
    daysUntilRenewal: 45,
    value: "₹5,00,000",
  },
  {
    id: 2,
    contract: "Marketing Services Contract",
    client: "Digital Marketing Agency",
    renewalDate: "2024-06-30",
    daysUntilRenewal: 120,
    value: "₹2,50,000",
  },
]

export function Contracts() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Contract Management</h1>
          <p className="text-muted-foreground">Manage contracts, agreements, and legal documents</p>
        </div>
        <Button className="bg-[#FF8C00] hover:bg-[#FF7700]">
          <Plus className="mr-2 h-4 w-4" />
          New Contract
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="contracts">All Contracts</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="renewals">Renewals</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Contract Stats */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Contracts</CardTitle>
                <FileSignature className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">Currently active</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Value</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹45,00,000</div>
                <p className="text-xs text-muted-foreground">Active contracts value</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Signatures</CardTitle>
                <Clock className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">3</div>
                <p className="text-xs text-muted-foreground">Awaiting signatures</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Expiring Soon</CardTitle>
                <AlertTriangle className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">2</div>
                <p className="text-xs text-muted-foreground">Within 60 days</p>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Renewals */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Renewals</CardTitle>
              <CardDescription>Contracts requiring renewal attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingRenewals.map((renewal) => (
                  <div
                    key={renewal.id}
                    className="flex items-center justify-between p-4 border rounded-lg bg-orange-50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-orange-100 rounded-full">
                        <AlertTriangle className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{renewal.contract}</h3>
                        <p className="text-sm text-muted-foreground">{renewal.client}</p>
                        <p className="text-xs text-muted-foreground">Renewal due: {renewal.renewalDate}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{renewal.value}</p>
                      <p className="text-sm text-orange-600">{renewal.daysUntilRenewal} days remaining</p>
                      <Button size="sm" className="mt-2 bg-[#FF8C00] hover:bg-[#FF7700]">
                        Start Renewal
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Contracts */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Contracts</CardTitle>
              <CardDescription>Recently created or modified contracts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contracts.slice(0, 4).map((contract) => (
                  <div key={contract.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <FileSignature className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{contract.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {contract.client} • {contract.type}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {contract.startDate} - {contract.endDate}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{contract.value}</p>
                      <Badge
                        variant={
                          contract.status === "Active"
                            ? "default"
                            : contract.status === "Pending Signature"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {contract.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contracts" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>All Contracts</CardTitle>
                  <CardDescription>Complete contract database</CardDescription>
                </div>
                <div className="flex space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input placeholder="Search contracts..." className="pl-10 w-64" />
                  </div>
                  <Button className="bg-[#FF8C00] hover:bg-[#FF7700]">
                    <Plus className="mr-2 h-4 w-4" />
                    New Contract
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contracts.map((contract) => (
                  <div
                    key={contract.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <FileSignature className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{contract.title}</h3>
                        <p className="text-sm text-muted-foreground">{contract.client}</p>
                        <p className="text-xs text-muted-foreground">
                          {contract.type} • {contract.startDate} - {contract.endDate}
                        </p>
                        {contract.signedDate && <p className="text-xs text-green-600">Signed: {contract.signedDate}</p>}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-bold text-lg">{contract.value}</p>
                        <Badge
                          variant={
                            contract.status === "Active"
                              ? "default"
                              : contract.status === "Pending Signature"
                                ? "secondary"
                                : contract.status === "Completed"
                                  ? "outline"
                                  : "destructive"
                          }
                        >
                          {contract.status === "Active" && <CheckCircle className="mr-1 h-3 w-3" />}
                          {contract.status === "Pending Signature" && <Clock className="mr-1 h-3 w-3" />}
                          {contract.status}
                        </Badge>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        {contract.status === "Pending Signature" && (
                          <Button size="sm" className="bg-[#FF8C00] hover:bg-[#FF7700]">
                            <Send className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Contract Templates</CardTitle>
                  <CardDescription>Reusable contract templates</CardDescription>
                </div>
                <Button className="bg-[#FF8C00] hover:bg-[#FF7700]">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Template
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {templates.map((template) => (
                  <div key={template.id} className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-purple-100 rounded-full">
                          <FileSignature className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{template.name}</h3>
                          <p className="text-sm text-muted-foreground">{template.description}</p>
                          <p className="text-xs text-muted-foreground">
                            {template.category} • Used {template.usageCount} times
                          </p>
                          <p className="text-xs text-muted-foreground">Last used: {template.lastUsed}</p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-[#FF8C00] hover:bg-[#FF7700]">
                        Use Template
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="renewals" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contract Renewals</CardTitle>
              <CardDescription>Track and manage contract renewals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-4 border rounded-lg text-center">
                    <h3 className="font-semibold text-red-600">Due This Month</h3>
                    <p className="text-2xl font-bold">2</p>
                    <p className="text-sm text-muted-foreground">Contracts</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <h3 className="font-semibold text-orange-600">Due Next Month</h3>
                    <p className="text-2xl font-bold">1</p>
                    <p className="text-sm text-muted-foreground">Contract</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <h3 className="font-semibold text-green-600">Auto-Renewal</h3>
                    <p className="text-2xl font-bold">8</p>
                    <p className="text-sm text-muted-foreground">Contracts</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {upcomingRenewals.map((renewal) => (
                    <div key={renewal.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-orange-100 rounded-full">
                          <Calendar className="h-5 w-5 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{renewal.contract}</h3>
                          <p className="text-sm text-muted-foreground">{renewal.client}</p>
                          <p className="text-xs text-muted-foreground">Renewal date: {renewal.renewalDate}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{renewal.value}</p>
                        <p className="text-sm text-orange-600 font-medium">{renewal.daysUntilRenewal} days left</p>
                        <div className="flex space-x-2 mt-2">
                          <Button size="sm" variant="outline">
                            Review
                          </Button>
                          <Button size="sm" className="bg-[#FF8C00] hover:bg-[#FF7700]">
                            Renew
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
