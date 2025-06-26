"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Plus, Eye, Download } from "lucide-react"

export function Invoices() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Invoices</h1>
          <p className="text-muted-foreground">Create and manage your invoices</p>
        </div>
        <Button className="bg-[#FF8C00] hover:bg-[#FF7700]">
          <Plus className="mr-2 h-4 w-4" />
          Create Invoice
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Invoices</TabsTrigger>
          <TabsTrigger value="draft">Drafts</TabsTrigger>
          <TabsTrigger value="sent">Sent</TabsTrigger>
          <TabsTrigger value="paid">Paid</TabsTrigger>
          <TabsTrigger value="overdue">Overdue</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Invoices</CardTitle>
              <CardDescription>Complete list of all invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: "INV-001",
                    client: "ABC Corp",
                    amount: "₹45,000",
                    date: "2024-01-15",
                    status: "Paid",
                    dueDate: "2024-02-15",
                  },
                  {
                    id: "INV-002",
                    client: "XYZ Ltd",
                    amount: "₹32,000",
                    date: "2024-01-12",
                    status: "Sent",
                    dueDate: "2024-02-12",
                  },
                  {
                    id: "INV-003",
                    client: "Tech Solutions",
                    amount: "₹78,000",
                    date: "2024-01-10",
                    status: "Overdue",
                    dueDate: "2024-02-10",
                  },
                  {
                    id: "INV-004",
                    client: "Digital Agency",
                    amount: "₹56,500",
                    date: "2024-01-08",
                    status: "Draft",
                    dueDate: "2024-02-08",
                  },
                  {
                    id: "INV-005",
                    client: "StartupCo",
                    amount: "₹23,400",
                    date: "2024-01-05",
                    status: "Paid",
                    dueDate: "2024-02-05",
                  },
                ].map((invoice, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{invoice.id}</h3>
                        <p className="text-sm text-muted-foreground">{invoice.client}</p>
                        <p className="text-xs text-muted-foreground">Due: {invoice.dueDate}</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="font-bold">{invoice.amount}</p>
                      <Badge
                        variant={
                          invoice.status === "Paid"
                            ? "default"
                            : invoice.status === "Sent"
                              ? "secondary"
                              : invoice.status === "Overdue"
                                ? "destructive"
                                : "outline"
                        }
                      >
                        {invoice.status}
                      </Badge>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="draft">
          <Card>
            <CardHeader>
              <CardTitle>Draft Invoices</CardTitle>
              <CardDescription>Invoices that haven't been sent yet</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-8">No draft invoices found</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sent">
          <Card>
            <CardHeader>
              <CardTitle>Sent Invoices</CardTitle>
              <CardDescription>Invoices sent to clients</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-8">Sent invoices will appear here</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="paid">
          <Card>
            <CardHeader>
              <CardTitle>Paid Invoices</CardTitle>
              <CardDescription>Successfully paid invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-8">Paid invoices will appear here</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="overdue">
          <Card>
            <CardHeader>
              <CardTitle>Overdue Invoices</CardTitle>
              <CardDescription>Invoices past their due date</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-8">Overdue invoices will appear here</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
