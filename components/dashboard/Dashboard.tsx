"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  FileText,
  CreditCard,
  Banknote,
  PiggyBank,
  CheckCircle,
  Plus,
  Eye,
  Download,
} from "lucide-react"
import { MetricCard } from "./MetricCard"
import { RevenueChart } from "./charts/RevenueChart"
import { CashFlowChart } from "./charts/CashFlowChart"
import { ExpensesChart } from "./charts/ExpensesChart"
import { NetIncomeChart } from "./charts/NetIncomeChart"

const dashboardMetrics = [
  {
    title: "Total Receivables",
    value: "₹2,45,680",
    change: "+12.5%",
    changeType: "positive" as const,
    icon: TrendingUp,
    description: "Outstanding invoices",
  },
  {
    title: "Total Payables",
    value: "₹1,23,450",
    change: "-8.2%",
    changeType: "negative" as const,
    icon: TrendingDown,
    description: "Pending payments",
  },
  {
    title: "Cash Flow",
    value: "₹3,67,890",
    change: "+15.3%",
    changeType: "positive" as const,
    icon: DollarSign,
    description: "Net cash position",
  },
  {
    title: "Monthly Expenses",
    value: "₹89,340",
    change: "+5.1%",
    changeType: "positive" as const,
    icon: CreditCard,
    description: "Current month spending",
  },
]

const itemsData = [
  { id: 1, name: "Office Supplies", purchaseDesc: "Stationery and office materials", purchaseRate: "₹2,500" },
  {
    id: 2,
    name: "Software License",
    purchaseDesc: "Annual subscription for accounting software",
    purchaseRate: "₹15,000",
  },
  { id: 3, name: "Equipment", purchaseDesc: "Laptop and accessories", purchaseRate: "₹65,000" },
  { id: 4, name: "Marketing Materials", purchaseDesc: "Brochures and promotional items", purchaseRate: "₹8,500" },
]

const bankingData = {
  cashInHand: "₹25,000",
  bankBalance: "₹4,56,780",
  activeAccounts: [
    { bank: "HDFC Bank", accountNo: "****1234", balance: "₹2,34,560", type: "Current" },
    { bank: "ICICI Bank", accountNo: "****5678", balance: "₹1,89,220", type: "Savings" },
    { bank: "SBI", accountNo: "****9012", balance: "₹33,000", type: "Current" },
  ],
  pendingChecks: [
    { checkNo: "CHQ001", amount: "₹15,000", date: "2024-01-15", status: "Pending" },
    { checkNo: "CHQ002", amount: "₹8,500", date: "2024-01-18", status: "Cleared" },
  ],
}

const salesData = [
  { id: 1, invoice: "INV-001", client: "ABC Corp", amount: "₹45,000", date: "2024-01-10", status: "Paid" },
  { id: 2, invoice: "INV-002", client: "XYZ Ltd", amount: "₹32,000", date: "2024-01-12", status: "Pending" },
  { id: 3, invoice: "INV-003", client: "Tech Solutions", amount: "₹78,000", date: "2024-01-15", status: "Overdue" },
]

const purchasesData = [
  { id: 1, vendor: "Office Depot", amount: "₹12,500", date: "2024-01-08", category: "Supplies", status: "Paid" },
  { id: 2, vendor: "Tech Store", amount: "₹65,000", date: "2024-01-10", category: "Equipment", status: "Pending" },
  { id: 3, vendor: "Marketing Co", amount: "₹8,500", date: "2024-01-12", category: "Marketing", status: "Paid" },
]

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your business overview.</p>
        </div>
        <Button className="bg-[#FF8C00] hover:bg-[#FF7700]">
          <Plus className="mr-2 h-4 w-4" />
          Quick Action
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="items">Items</TabsTrigger>
          <TabsTrigger value="banking">Banking</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="purchases">Purchases</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="home" className="space-y-6">
          {/* Metrics Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {dashboardMetrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid gap-6 md:grid-cols-2">
            <NetIncomeChart />
            <CashFlowChart />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <RevenueChart />
            <ExpensesChart />
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Latest financial activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { type: "Income", description: "Payment from ABC Corp", amount: "+₹45,000", time: "2 hours ago" },
                  { type: "Expense", description: "Office supplies purchase", amount: "-₹2,500", time: "5 hours ago" },
                  { type: "Income", description: "Consulting fee", amount: "+₹15,000", time: "1 day ago" },
                  { type: "Expense", description: "Software subscription", amount: "-₹8,000", time: "2 days ago" },
                ].map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-2 rounded-full ${transaction.type === "Income" ? "bg-green-100" : "bg-red-100"}`}
                      >
                        {transaction.type === "Income" ? (
                          <TrendingUp className="h-4 w-4 text-green-600" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        <p className="text-sm text-muted-foreground">{transaction.time}</p>
                      </div>
                    </div>
                    <span
                      className={`font-semibold ${transaction.type === "Income" ? "text-green-600" : "text-red-600"}`}
                    >
                      {transaction.amount}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="items" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Items Management</h2>
            <Button className="bg-[#FF8C00] hover:bg-[#FF7700]">
              <Plus className="mr-2 h-4 w-4" />
              Add Item
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Inventory Items</CardTitle>
              <CardDescription>Manage your products and services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {itemsData.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.purchaseDesc}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-[#FF8C00]">{item.purchaseRate}</p>
                      <div className="flex space-x-2 mt-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="banking" className="space-y-6">
          <h2 className="text-2xl font-bold">Banking Overview</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Banknote className="mr-2 h-5 w-5" />
                  Cash Position
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="font-medium">Cash in Hand</span>
                  <span className="font-bold text-green-600">{bankingData.cashInHand}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium">Total Bank Balance</span>
                  <span className="font-bold text-blue-600">{bankingData.bankBalance}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Pending Checks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {bankingData.pendingChecks.map((check, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{check.checkNo}</p>
                        <p className="text-sm text-muted-foreground">{check.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{check.amount}</p>
                        <Badge variant={check.status === "Cleared" ? "default" : "secondary"}>{check.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Active Bank Accounts</CardTitle>
              <CardDescription>Your connected bank accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bankingData.activeAccounts.map((account, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-[#FF8C00]/10 rounded-full">
                        <PiggyBank className="h-5 w-5 text-[#FF8C00]" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{account.bank}</h3>
                        <p className="text-sm text-muted-foreground">
                          {account.accountNo} • {account.type}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{account.balance}</p>
                      <Button size="sm" variant="outline" className="mt-2">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sales" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Sales Management</h2>
            <Button className="bg-[#FF8C00] hover:bg-[#FF7700]">
              <Plus className="mr-2 h-4 w-4" />
              Create Invoice
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
              <CardDescription>Track your invoices and payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {salesData.map((sale) => (
                  <div key={sale.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{sale.invoice}</h3>
                        <p className="text-sm text-muted-foreground">
                          {sale.client} • {sale.date}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{sale.amount}</p>
                      <Badge
                        variant={
                          sale.status === "Paid" ? "default" : sale.status === "Pending" ? "secondary" : "destructive"
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

        <TabsContent value="purchases" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Purchase Management</h2>
            <Button className="bg-[#FF8C00] hover:bg-[#FF7700]">
              <Plus className="mr-2 h-4 w-4" />
              Add Purchase
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Purchases</CardTitle>
              <CardDescription>Track your expenses and vendor payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {purchasesData.map((purchase) => (
                  <div key={purchase.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-red-100 rounded-full">
                        <CreditCard className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{purchase.vendor}</h3>
                        <p className="text-sm text-muted-foreground">
                          {purchase.category} • {purchase.date}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{purchase.amount}</p>
                      <Badge variant={purchase.status === "Paid" ? "default" : "secondary"}>{purchase.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <h2 className="text-2xl font-bold">Reports & Analytics</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Profit & Loss", description: "Monthly P&L statement", icon: TrendingUp },
              { title: "Balance Sheet", description: "Assets and liabilities", icon: FileText },
              { title: "Cash Flow", description: "Cash flow analysis", icon: DollarSign },
              { title: "Tax Reports", description: "GST and TDS reports", icon: FileText },
              { title: "Expense Analysis", description: "Category-wise expenses", icon: CreditCard },
              { title: "Revenue Trends", description: "Sales performance", icon: TrendingUp },
            ].map((report, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <report.icon className="mr-2 h-5 w-5 text-[#FF8C00]" />
                    {report.title}
                  </CardTitle>
                  <CardDescription>{report.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Generate Report
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
