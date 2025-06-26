"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  FileText,
  CheckCircle,
  AlertTriangle,
  Clock,
  Download,
  Upload,
  Calculator,
  Building2,
  CreditCard,
} from "lucide-react"

const gstReturns = [
  { period: "April 2024", type: "GSTR-1", status: "Filed", dueDate: "2024-05-11", amount: "₹45,680" },
  { period: "April 2024", type: "GSTR-3B", status: "Pending", dueDate: "2024-05-20", amount: "₹32,450" },
  { period: "March 2024", type: "GSTR-1", status: "Filed", dueDate: "2024-04-11", amount: "₹38,920" },
  { period: "March 2024", type: "GSTR-3B", status: "Filed", dueDate: "2024-04-20", amount: "₹28,760" },
]

const tdsReturns = [
  { quarter: "Q4 2023-24", form: "26Q", status: "Filed", dueDate: "2024-05-31", amount: "₹15,680" },
  { quarter: "Q3 2023-24", form: "24Q", status: "Filed", dueDate: "2024-02-29", amount: "₹12,450" },
  { quarter: "Q4 2023-24", form: "24Q", status: "Pending", dueDate: "2024-05-31", amount: "₹18,920" },
]

const rocFilings = [
  {
    form: "AOC-4",
    year: "2023-24",
    status: "Pending",
    dueDate: "2024-09-30",
    description: "Annual Financial Statement",
  },
  { form: "MGT-7", year: "2023-24", status: "Draft", dueDate: "2024-10-30", description: "Annual Return" },
  { form: "DIR-3 KYC", year: "2024-25", status: "Completed", dueDate: "2024-04-30", description: "Director KYC" },
]

export function TaxCompliance() {
  const [activeTab, setActiveTab] = useState("gst")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tax & Compliance</h1>
          <p className="text-muted-foreground">Manage your statutory compliance and tax filings</p>
        </div>
        <Button className="bg-[#FF8C00] hover:bg-[#FF7700]">
          <Upload className="mr-2 h-4 w-4" />
          Upload Documents
        </Button>
      </div>

      {/* Compliance Overview */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">GST Compliance</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">85%</div>
            <p className="text-xs text-muted-foreground">Returns filed on time</p>
            <Progress value={85} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">TDS Compliance</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">92%</div>
            <p className="text-xs text-muted-foreground">Deductions filed</p>
            <Progress value={92} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ROC Filings</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">67%</div>
            <p className="text-xs text-muted-foreground">Annual filings complete</p>
            <Progress value={67} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="gst">GST Returns</TabsTrigger>
          <TabsTrigger value="tds">TDS Compliance</TabsTrigger>
          <TabsTrigger value="roc">ROC Filings</TabsTrigger>
        </TabsList>

        <TabsContent value="gst" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>GST Returns Management</CardTitle>
              <CardDescription>Auto-calculated GSTR-1 and GSTR-3B with reconciliation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {gstReturns.map((gst, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">
                          {gst.type} - {gst.period}
                        </h3>
                        <p className="text-sm text-muted-foreground">Due: {gst.dueDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-semibold">{gst.amount}</p>
                        <Badge
                          variant={gst.status === "Filed" ? "default" : "secondary"}
                          className={gst.status === "Filed" ? "bg-green-100 text-green-800" : ""}
                        >
                          {gst.status === "Filed" ? (
                            <CheckCircle className="mr-1 h-3 w-3" />
                          ) : (
                            <Clock className="mr-1 h-3 w-3" />
                          )}
                          {gst.status}
                        </Badge>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                        {gst.status === "Pending" && (
                          <Button size="sm" className="bg-[#FF8C00] hover:bg-[#FF7700]">
                            File Now
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

        <TabsContent value="tds" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>TDS Compliance</CardTitle>
              <CardDescription>Monthly deduction reports and quarterly return filing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tdsReturns.map((tds, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-purple-100 rounded-full">
                        <Calculator className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">
                          {tds.form} - {tds.quarter}
                        </h3>
                        <p className="text-sm text-muted-foreground">Due: {tds.dueDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-semibold">{tds.amount}</p>
                        <Badge
                          variant={tds.status === "Filed" ? "default" : "secondary"}
                          className={tds.status === "Filed" ? "bg-green-100 text-green-800" : ""}
                        >
                          {tds.status === "Filed" ? (
                            <CheckCircle className="mr-1 h-3 w-3" />
                          ) : (
                            <Clock className="mr-1 h-3 w-3" />
                          )}
                          {tds.status}
                        </Badge>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                        {tds.status === "Pending" && (
                          <Button size="sm" className="bg-[#FF8C00] hover:bg-[#FF7700]">
                            File Now
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

        <TabsContent value="roc" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>ROC & Other Filings</CardTitle>
              <CardDescription>Annual returns and director compliance management</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {rocFilings.map((roc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-green-100 rounded-full">
                        <Building2 className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">
                          {roc.form} - {roc.year}
                        </h3>
                        <p className="text-sm text-muted-foreground">{roc.description}</p>
                        <p className="text-xs text-muted-foreground">Due: {roc.dueDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge
                        variant={
                          roc.status === "Completed" ? "default" : roc.status === "Pending" ? "secondary" : "outline"
                        }
                        className={
                          roc.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : roc.status === "Pending"
                              ? "bg-orange-100 text-orange-800"
                              : ""
                        }
                      >
                        {roc.status === "Completed" ? (
                          <CheckCircle className="mr-1 h-3 w-3" />
                        ) : roc.status === "Pending" ? (
                          <AlertTriangle className="mr-1 h-3 w-3" />
                        ) : (
                          <Clock className="mr-1 h-3 w-3" />
                        )}
                        {roc.status}
                      </Badge>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                        {roc.status !== "Completed" && (
                          <Button size="sm" className="bg-[#FF8C00] hover:bg-[#FF7700]">
                            {roc.status === "Draft" ? "Complete" : "File Now"}
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
      </Tabs>
    </div>
  )
}
