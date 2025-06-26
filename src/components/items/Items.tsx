"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Package, Plus, Boxes, AlertTriangle, TrendingUp, Eye, Edit, Search, Filter } from "lucide-react"

const inventoryItems = [
  {
    id: 1,
    name: "Wireless Mouse",
    sku: "WM-001",
    category: "Electronics",
    quantity: 45,
    minStock: 10,
    unitPrice: "₹1,200",
    totalValue: "₹54,000",
    supplier: "Tech Supplies Co.",
    status: "In Stock",
  },
  {
    id: 2,
    name: "Office Chair",
    sku: "OC-002",
    category: "Furniture",
    quantity: 8,
    minStock: 5,
    unitPrice: "₹8,500",
    totalValue: "₹68,000",
    supplier: "Furniture Plus",
    status: "Low Stock",
  },
  {
    id: 3,
    name: "Laptop Stand",
    sku: "LS-003",
    category: "Accessories",
    quantity: 0,
    minStock: 15,
    unitPrice: "₹2,500",
    totalValue: "₹0",
    supplier: "Office Depot",
    status: "Out of Stock",
  },
  {
    id: 4,
    name: "Notebook Set",
    sku: "NS-004",
    category: "Stationery",
    quantity: 120,
    minStock: 50,
    unitPrice: "₹150",
    totalValue: "₹18,000",
    supplier: "Paper Works",
    status: "In Stock",
  },
]

const services = [
  {
    id: 1,
    name: "Web Development",
    category: "Development",
    rate: "₹2,500/hour",
    description: "Custom website development services",
    totalRevenue: "₹4,50,000",
    projectsCompleted: 12,
  },
  {
    id: 2,
    name: "Digital Marketing",
    category: "Marketing",
    rate: "₹15,000/month",
    description: "Complete digital marketing package",
    totalRevenue: "₹3,60,000",
    projectsCompleted: 8,
  },
  {
    id: 3,
    name: "Consulting",
    category: "Consulting",
    rate: "₹3,000/hour",
    description: "Business strategy consulting",
    totalRevenue: "₹2,40,000",
    projectsCompleted: 15,
  },
]

const categories = [
  { name: "Electronics", items: 15, value: "₹2,45,000" },
  { name: "Furniture", items: 8, value: "₹1,68,000" },
  { name: "Stationery", items: 25, value: "₹45,000" },
  { name: "Accessories", items: 12, value: "₹78,000" },
]

export function Items() {
  const [activeTab, setActiveTab] = useState("inventory")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Items Management</h1>
          <p className="text-muted-foreground">Manage your inventory, products, and services</p>
        </div>
        <Button className="bg-[#FF8C00] hover:bg-[#FF7700]">
          <Plus className="mr-2 h-4 w-4" />
          Add Item
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="inventory" className="space-y-6">
          {/* Inventory Overview */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Items</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">173</div>
                <p className="text-xs text-muted-foreground">Across all categories</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Value</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹5,36,000</div>
                <p className="text-xs text-muted-foreground">Current inventory value</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
                <AlertTriangle className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">5</div>
                <p className="text-xs text-muted-foreground">Need reordering</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Out of Stock</CardTitle>
                <Boxes className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">2</div>
                <p className="text-xs text-muted-foreground">Urgent restock needed</p>
              </CardContent>
            </Card>
          </div>

          {/* Inventory Items */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Inventory Items</CardTitle>
                  <CardDescription>Manage your stock levels and pricing</CardDescription>
                </div>
                <div className="flex space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input placeholder="Search items..." className="pl-10 w-64" />
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
                {inventoryItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <Package className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          SKU: {item.sku} • {item.category}
                        </p>
                        <p className="text-xs text-muted-foreground">Supplier: {item.supplier}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Quantity</p>
                        <p className="font-semibold">{item.quantity}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Unit Price</p>
                        <p className="font-semibold">{item.unitPrice}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Total Value</p>
                        <p className="font-semibold">{item.totalValue}</p>
                      </div>
                      <div className="text-center">
                        <Badge
                          variant={
                            item.status === "In Stock"
                              ? "default"
                              : item.status === "Low Stock"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {item.status}
                        </Badge>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Services Catalog</CardTitle>
                  <CardDescription>Manage your service offerings and rates</CardDescription>
                </div>
                <Button className="bg-[#FF8C00] hover:bg-[#FF7700]">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Service
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-green-100 rounded-full">
                        <TrendingUp className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{service.name}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                        <p className="text-xs text-muted-foreground">Category: {service.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Rate</p>
                        <p className="font-semibold">{service.rate}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Revenue</p>
                        <p className="font-semibold">{service.totalRevenue}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Projects</p>
                        <p className="font-semibold">{service.projectsCompleted}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categories" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Item Categories</CardTitle>
                  <CardDescription>Organize your items by categories</CardDescription>
                </div>
                <Button className="bg-[#FF8C00] hover:bg-[#FF7700]">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Category
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {categories.map((category, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{category.name}</h3>
                        <p className="text-sm text-muted-foreground">{category.items} items</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{category.value}</p>
                        <Button size="sm" variant="outline" className="mt-2">
                          Manage
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Inventory Reports</CardTitle>
              <CardDescription>Generate reports for inventory analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Stock Valuation", description: "Current inventory value report" },
                  { title: "Low Stock Alert", description: "Items below minimum stock level" },
                  { title: "Movement Report", description: "Inventory in/out movements" },
                  { title: "ABC Analysis", description: "Categorize items by value" },
                  { title: "Aging Report", description: "Slow-moving inventory analysis" },
                  { title: "Reorder Report", description: "Items that need reordering" },
                ].map((report, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-base">{report.title}</CardTitle>
                      <CardDescription className="text-sm">{report.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" variant="outline">
                        Generate Report
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
