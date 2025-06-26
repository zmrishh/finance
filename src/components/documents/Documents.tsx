"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { FolderOpen, Plus, FileText, Upload, Download, Eye, Share, Search, Filter, Calendar } from "lucide-react"

const documents = [
  {
    id: 1,
    name: "Annual Financial Report 2023",
    type: "PDF",
    size: "2.4 MB",
    category: "Financial Reports",
    uploadDate: "2024-01-15",
    uploadedBy: "John Doe",
    status: "Active",
    tags: ["Annual", "Financial", "2023"],
  },
  {
    id: 2,
    name: "Tax Return Documents",
    type: "ZIP",
    size: "5.1 MB",
    category: "Tax Documents",
    uploadDate: "2024-01-12",
    uploadedBy: "Jane Smith",
    status: "Active",
    tags: ["Tax", "Returns", "2023"],
  },
  {
    id: 3,
    name: "Employee Handbook",
    type: "PDF",
    size: "1.8 MB",
    category: "HR Documents",
    uploadDate: "2024-01-10",
    uploadedBy: "HR Team",
    status: "Active",
    tags: ["HR", "Handbook", "Policies"],
  },
  {
    id: 4,
    name: "Vendor Agreements",
    type: "DOCX",
    size: "890 KB",
    category: "Contracts",
    uploadDate: "2024-01-08",
    uploadedBy: "Legal Team",
    status: "Draft",
    tags: ["Vendor", "Agreement", "Contract"],
  },
]

const folders = [
  {
    id: 1,
    name: "Financial Reports",
    documentCount: 15,
    lastModified: "2024-01-15",
    size: "45.2 MB",
  },
  {
    id: 2,
    name: "Tax Documents",
    documentCount: 8,
    lastModified: "2024-01-12",
    size: "23.1 MB",
  },
  {
    id: 3,
    name: "HR Documents",
    documentCount: 12,
    lastModified: "2024-01-10",
    size: "18.7 MB",
  },
  {
    id: 4,
    name: "Contracts",
    documentCount: 6,
    lastModified: "2024-01-08",
    size: "12.4 MB",
  },
]

const recentActivity = [
  {
    id: 1,
    action: "Uploaded",
    document: "Annual Financial Report 2023",
    user: "John Doe",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    action: "Shared",
    document: "Tax Return Documents",
    user: "Jane Smith",
    timestamp: "5 hours ago",
  },
  {
    id: 3,
    action: "Modified",
    document: "Employee Handbook",
    user: "HR Team",
    timestamp: "1 day ago",
  },
  {
    id: 4,
    action: "Created",
    document: "Vendor Agreements",
    user: "Legal Team",
    timestamp: "2 days ago",
  },
]

export function Documents() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Document Management</h1>
          <p className="text-muted-foreground">Organize and manage your business documents</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Upload
          </Button>
          <Button className="bg-[#FF8C00] hover:bg-[#FF7700]">
            <Plus className="mr-2 h-4 w-4" />
            New Folder
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="documents">All Documents</TabsTrigger>
          <TabsTrigger value="folders">Folders</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Document Stats */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">156</div>
                <p className="text-xs text-muted-foreground">Across all folders</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
                <FolderOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.4 GB</div>
                <p className="text-xs text-muted-foreground">of 10 GB available</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Shared Documents</CardTitle>
                <Share className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">23</div>
                <p className="text-xs text-muted-foreground">With team members</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Recent Uploads</CardTitle>
                <Upload className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">This week</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Access Folders */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Access</CardTitle>
              <CardDescription>Frequently used folders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {folders.map((folder) => (
                  <div key={folder.id} className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <FolderOpen className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{folder.name}</h3>
                        <p className="text-sm text-muted-foreground">{folder.documentCount} documents</p>
                        <p className="text-xs text-muted-foreground">{folder.size}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Documents */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Documents</CardTitle>
              <CardDescription>Recently uploaded or modified documents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {documents.slice(0, 5).map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-green-100 rounded-full">
                        <FileText className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{doc.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {doc.category} • {doc.size}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          By {doc.uploadedBy} • {doc.uploadDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={doc.status === "Active" ? "default" : "outline"}>{doc.status}</Badge>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>All Documents</CardTitle>
                  <CardDescription>Complete document library</CardDescription>
                </div>
                <div className="flex space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input placeholder="Search documents..." className="pl-10 w-64" />
                  </div>
                  <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-green-100 rounded-full">
                        <FileText className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{doc.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {doc.category} • {doc.type} • {doc.size}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Uploaded by {doc.uploadedBy} on {doc.uploadDate}
                        </p>
                        <div className="flex space-x-1 mt-1">
                          {doc.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge variant={doc.status === "Active" ? "default" : "outline"}>{doc.status}</Badge>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Share className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="folders" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Folder Structure</CardTitle>
                  <CardDescription>Organize documents in folders</CardDescription>
                </div>
                <Button className="bg-[#FF8C00] hover:bg-[#FF7700]">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Folder
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {folders.map((folder) => (
                  <div key={folder.id} className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-blue-100 rounded-full">
                          <FolderOpen className="h-8 w-8 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{folder.name}</h3>
                          <p className="text-sm text-muted-foreground">{folder.documentCount} documents</p>
                          <p className="text-xs text-muted-foreground">Modified: {folder.lastModified}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{folder.size}</p>
                        <Button size="sm" variant="outline" className="mt-2">
                          Open
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Document activity and changes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-4 p-3 border rounded-lg">
                    <div className="p-2 bg-gray-100 rounded-full">
                      {activity.action === "Uploaded" && <Upload className="h-4 w-4 text-blue-600" />}
                      {activity.action === "Shared" && <Share className="h-4 w-4 text-green-600" />}
                      {activity.action === "Modified" && <FileText className="h-4 w-4 text-orange-600" />}
                      {activity.action === "Created" && <Plus className="h-4 w-4 text-purple-600" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">
                        <span className="text-[#FF8C00]">{activity.user}</span> {activity.action.toLowerCase()}
                        <span className="font-semibold"> {activity.document}</span>
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {activity.timestamp}
                      </p>
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
