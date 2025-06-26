"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Plus, TrendingUp, Users, FileText, Eye, Edit, Send, Search } from "lucide-react"

const salesData = [
  {
    id: 1,
    invoice: "INV-2024-001",
    client: "ABC Corporation",
    amount: "₹1,25,000",
    date: "2024-01-15",
    dueDate: "2024-02-15",
    status: "Paid",
    items: 3,
  },
  {
    id: 2,
    invoice: "INV-2024-002",
    client: "XYZ Technologies",
    amount: "₹89,500",
    date: "2024-01-12",
    dueDate: "2024-02-12",
    status: "Pending",
    items: 2,
  },
  {
    id: 3,
    invoice: "INV-2024-003",
    client: "Digital Solutions Ltd",
    amount: "₹2,45,000",
    date: "2024-01-10",
    dueDate: "2024-02-10",
    status: "Overdue",
    items: 5,
  },
  {
    id: 4,
    invoice: "INV-2024-004",
    client: "Tech Innovations",
    amount: "₹67,800",
    date: "2024-01-08",
    dueDate: "2024-02-08",
    status: "Draft",
    items: 2,
  },
]

const clients = [
  {
    id: 1,
    name: "ABC Corporation",
    email: "contact@abc.com",
    phone: "+91 98765 43210",
    totalSales: "₹3,45,000",
    invoices: 8,
    status: "Active",
  },
  {
    id: 2,
    name: "XYZ Technologies",
    email: "info@xyz.com",
    phone: "+91 87654 32109",
    totalSales: "₹2,89,500",
    invoices: 6,
    status: "Active",
  },
  {
    id: 3,
    name: "Digital Solutions Ltd",
    email: "hello@digital.com",
    phone: "+91 76543 21098",
    totalSales: "₹4,67,000",
    invoices: 12,
    status: "Active",
  },
]

const products = [
  {
    id: 1,
    name: "Web Development Service",
    price: "₹50,000",
    category: "Services",
    sold: 15,
    revenue: "₹7,50,000",
  },
  {
    id: 2,
    name: "Mobile App Development",
    price: "₹1,25,000",
    category: "Services",
    sold: 8,
    revenue: "₹10,00,000",
  },
  {
    id: 3,
    name: "Digital Marketing Package",
    price: "₹25,000",
    category: "Services",
    sold: 22,
    revenue: "₹5,50,000",
  },
]

export function Sales() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Sales Management</h1>
          <p className="text-muted-foreground">Track your sales, invoices, and customer relationships</p>
        </div>
        <Button className="bg-[#FF8C00] hover:bg-[#FF7700]">
          <Plus className="mr-2 h-4 w-4" />
          Create Invoice
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="clients">Clients</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Sales Metrics */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹23,00,000</div>
                <p className="text-xs text-muted-foreground">+15.2% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45</div>
                <p className="text-xs text-muted-foreground">+3 new this month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Invoices</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">₹4,56,800 pending</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Deal Size</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹95,600</div>
                <p className="text-xs text-muted-foreground">+8.5% from last month</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Sales Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Sales Activity</CardTitle>
              <CardDescription>Latest invoices and payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {salesData.slice(0, 5).map((sale) => (
                  <div key={sale.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{sale.invoice}</h3>
                        <p className="text-sm text-muted-foreground">{sale.client}</p>
                        <p className="text-xs text-muted-foreground">Due: {sale.dueDate}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{sale.amount}</p>
                      <Badge
                        variant={
                          sale.status === "Paid"
                            ? "default"
                            : sale.status === "Pending"
                              ? "secondary"
                              : sale.status === "Overdue"
                                ? "destructive"
                                : "outline"
                        }
                      >
                        {sale.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="invoices" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>All Invoices</CardTitle>
                  <CardDescription>Manage your sales invoices</CardDescription>
                </div>
                <div className="flex space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input placeholder="Search invoices..." className="pl-10 w-64" />
                  </div>
                  <Button className="bg-[#FF8C00] hover:bg-[#FF7700]">
                    <Plus className="mr-2 h-4 w-4" />
                    New Invoice
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {salesData.map((sale) => (
                  <div
                    key={sale.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{sale.invoice}</h3>
                        <p className="text-sm text-muted-foreground">{sale.client}</p>
                        <p className="text-xs text-muted-foreground">
                          {sale.items} items • Created: {sale.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-bold text-lg">{sale.amount}</p>
                        <Badge
                          variant={
                            sale.status === "Paid"
                              ? "default"
                              : sale.status === "Pending"
                                ? "secondary"
                                : sale.status === "Overdue"
                                  ? "destructive"
                                  : "outline"
                          }
                        >
                          {sale.status}
                        </Badge>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        {sale.status === "Draft" && (
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

        <TabsContent value="clients" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Client Management</CardTitle>
                  <CardDescription>Manage your customer relationships</CardDescription>
                </div>
                <Button className="bg-[#FF8C00] hover:bg-[#FF7700]">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Client
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {clients.map((client) => (
                  <div
                    key={client.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#FF8C00] rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {client.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold">{client.name}</h3>
                        <p className="text-sm text-muted-foreground">{client.email}</p>
                        <p className="text-xs text-muted-foreground">{client.phone}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{client.totalSales}</p>
                      <p className="text-sm text-muted-foreground">{client.invoices} invoices</p>
                      <Badge variant="default" className="mt-1">
                        {client.status}
                      </Badge>
                    </div>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Products & Services</CardTitle>
                  <CardDescription>Manage your product catalog</CardDescription>
                </div>
                <Button className="bg-[#FF8C00] hover:bg-[#FF7700]">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Product
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-green-100 rounded-full">
                        <ShoppingCart className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">{product.category}</p>
                        <p className="text-xs text-muted-foreground">Sold {product.sold} times</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{product.price}</p>
                      <p className="text-sm text-muted-foreground">Revenue: {product.revenue}</p>
                    </div>
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
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
