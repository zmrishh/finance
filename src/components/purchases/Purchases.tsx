"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Package, Plus, TrendingDown, Building2, Receipt, Eye, Edit, Check, Clock, Search } from "lucide-react"

const purchaseOrders = [
  {
    id: 1,
    poNumber: "PO-2024-001",
    vendor: "Office Supplies Co.",
    amount: "₹45,000",
    date: "2024-01-15",
    dueDate: "2024-02-15",
    status: "Delivered",
    items: 5,
  },
  {
    id: 2,
    poNumber: "PO-2024-002",
    vendor: "Tech Equipment Ltd",
    amount: "₹1,25,000",
    date: "2024-01-12",
    dueDate: "2024-02-12",
    status: "Pending",
    items: 3,
  },
  {
    id: 3,
    poNumber: "PO-2024-003",
    vendor: "Marketing Agency",
    amount: "₹75,000",
    date: "2024-01-10",
    dueDate: "2024-02-10",
    status: "Approved",
    items: 2,
  },
  {
    id: 4,
    poNumber: "PO-2024-004",
    vendor: "Software Solutions",
    amount: "₹89,500",
    date: "2024-01-08",
    dueDate: "2024-02-08",
    status: "Draft",
    items: 1,
  },
]

const vendors = [
  {
    id: 1,
    name: "Office Supplies Co.",
    email: "orders@officesupplies.com",
    phone: "+91 98765 43210",
    totalPurchases: "₹2,45,000",
    orders: 12,
    status: "Active",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Tech Equipment Ltd",
    email: "sales@techequip.com",
    phone: "+91 87654 32109",
    totalPurchases: "₹5,67,000",
    orders: 8,
    status: "Active",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Marketing Agency",
    email: "hello@marketing.com",
    phone: "+91 76543 21098",
    totalPurchases: "₹3,45,000",
    orders: 15,
    status: "Active",
    rating: 4.2,
  },
]

const expenses = [
  {
    id: 1,
    date: "2024-01-15",
    description: "Office Rent",
    category: "Rent & Utilities",
    amount: "₹25,000",
    vendor: "Property Management",
    status: "Paid",
  },
  {
    id: 2,
    date: "2024-01-14",
    description: "Software Licenses",
    category: "Software",
    amount: "₹15,000",
    vendor: "Software Solutions",
    status: "Pending",
  },
  {
    id: 3,
    date: "2024-01-13",
    description: "Marketing Campaign",
    category: "Marketing",
    amount: "₹35,000",
    vendor: "Marketing Agency",
    status: "Approved",
  },
  {
    id: 4,
    date: "2024-01-12",
    description: "Office Supplies",
    category: "Supplies",
    amount: "₹8,500",
    vendor: "Office Supplies Co.",
    status: "Paid",
  },
]

export function Purchases() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Purchase Management</h1>
          <p className="text-muted-foreground">Manage your purchases, vendors, and expenses</p>
        </div>
        <Button className="bg-[#FF8C00] hover:bg-[#FF7700]">
          <Plus className="mr-2 h-4 w-4" />
          Create Purchase Order
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="orders">Purchase Orders</TabsTrigger>
          <TabsTrigger value="vendors">Vendors</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Purchase Metrics */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Purchases</CardTitle>
                <TrendingDown className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹11,57,000</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Vendors</CardTitle>
                <Building2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28</div>
                <p className="text-xs text-muted-foreground">+2 new this month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">₹3,45,000 pending</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Order Value</CardTitle>
                <Receipt className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹67,500</div>
                <p className="text-xs text-muted-foreground">-5.2% from last month</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Purchase Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Purchase Activity</CardTitle>
              <CardDescription>Latest purchase orders and expenses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {purchaseOrders.slice(0, 5).map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-purple-100 rounded-full">
                        <Package className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{order.poNumber}</h3>
                        <p className="text-sm text-muted-foreground">{order.vendor}</p>
                        <p className="text-xs text-muted-foreground">Due: {order.dueDate}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{order.amount}</p>
                      <Badge
                        variant={
                          order.status === "Delivered"
                            ? "default"
                            : order.status === "Approved"
                              ? "secondary"
                              : order.status === "Pending"
                                ? "destructive"
                                : "outline"
                        }
                      >
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Purchase Orders</CardTitle>
                  <CardDescription>Manage your purchase orders</CardDescription>
                </div>
                <div className="flex space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input placeholder="Search orders..." className="pl-10 w-64" />
                  </div>
                  <Button className="bg-[#FF8C00] hover:bg-[#FF7700]">
                    <Plus className="mr-2 h-4 w-4" />
                    New Order
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {purchaseOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-purple-100 rounded-full">
                        <Package className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{order.poNumber}</h3>
                        <p className="text-sm text-muted-foreground">{order.vendor}</p>
                        <p className="text-xs text-muted-foreground">
                          {order.items} items • Created: {order.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-bold text-lg">{order.amount}</p>
                        <Badge
                          variant={
                            order.status === "Delivered"
                              ? "default"
                              : order.status === "Approved"
                                ? "secondary"
                                : order.status === "Pending"
                                  ? "destructive"
                                  : "outline"
                          }
                        >
                          {order.status}
                        </Badge>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        {order.status === "Approved" && (
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <Check className="h-4 w-4" />
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

        <TabsContent value="vendors" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Vendor Management</CardTitle>
                  <CardDescription>Manage your supplier relationships</CardDescription>
                </div>
                <Button className="bg-[#FF8C00] hover:bg-[#FF7700]">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Vendor
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {vendors.map((vendor) => (
                  <div
                    key={vendor.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#FF8C00] rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {vendor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold">{vendor.name}</h3>
                        <p className="text-sm text-muted-foreground">{vendor.email}</p>
                        <p className="text-xs text-muted-foreground">{vendor.phone}</p>
                        <div className="flex items-center space-x-1 mt-1">
                          <span className="text-xs">Rating:</span>
                          <span className="text-xs font-semibold text-yellow-600">★ {vendor.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{vendor.totalPurchases}</p>
                      <p className="text-sm text-muted-foreground">{vendor.orders} orders</p>
                      <Badge variant="default" className="mt-1">
                        {vendor.status}
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

        <TabsContent value="expenses" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Expense Tracking</CardTitle>
                  <CardDescription>Track and categorize your business expenses</CardDescription>
                </div>
                <Button className="bg-[#FF8C00] hover:bg-[#FF7700]">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Expense
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {expenses.map((expense) => (
                  <div
                    key={expense.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-red-100 rounded-full">
                        <Receipt className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{expense.description}</h3>
                        <p className="text-sm text-muted-foreground">{expense.category}</p>
                        <p className="text-xs text-muted-foreground">
                          {expense.vendor} • {expense.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-bold text-lg">{expense.amount}</p>
                        <Badge
                          variant={
                            expense.status === "Paid"
                              ? "default"
                              : expense.status === "Approved"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {expense.status === "Paid" && <Check className="mr-1 h-3 w-3" />}
                          {expense.status === "Pending" && <Clock className="mr-1 h-3 w-3" />}
                          {expense.status}
                        </Badge>
                      </div>
                      <Button size="sm" variant="outline">
                        View Receipt
                      </Button>
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
