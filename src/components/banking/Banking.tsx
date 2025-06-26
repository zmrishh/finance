"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  Wallet,
  Plus,
  Building2,
  CreditCard,
  ArrowUpRight,
  ArrowDownLeft,
  FolderSyncIcon as Sync,
  Download,
  Search,
  Filter,
} from "lucide-react"

const bankAccounts = [
  {
    id: 1,
    bank: "HDFC Bank",
    accountNo: "****1234",
    type: "Current Account",
    balance: "₹4,56,780",
    status: "Active",
    lastSync: "2 hours ago",
  },
  {
    id: 2,
    bank: "ICICI Bank",
    accountNo: "****5678",
    type: "Savings Account",
    balance: "₹2,34,560",
    status: "Active",
    lastSync: "1 hour ago",
  },
  {
    id: 3,
    bank: "State Bank of India",
    accountNo: "****9012",
    type: "Current Account",
    balance: "₹1,23,450",
    status: "Active",
    lastSync: "30 minutes ago",
  },
]

const transactions = [
  {
    id: 1,
    date: "2024-01-15",
    description: "Payment from ABC Corp",
    type: "Credit",
    amount: "₹45,000",
    balance: "₹4,56,780",
    account: "HDFC Bank",
  },
  {
    id: 2,
    date: "2024-01-14",
    description: "Office Rent Payment",
    type: "Debit",
    amount: "₹25,000",
    balance: "₹4,11,780",
    account: "HDFC Bank",
  },
  {
    id: 3,
    date: "2024-01-13",
    description: "Software Subscription",
    type: "Debit",
    amount: "₹8,500",
    balance: "₹4,36,780",
    account: "ICICI Bank",
  },
  {
    id: 4,
    date: "2024-01-12",
    description: "Client Payment - XYZ Ltd",
    type: "Credit",
    amount: "₹32,000",
    balance: "₹2,45,280",
    account: "ICICI Bank",
  },
]

export function Banking() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Banking</h1>
          <p className="text-muted-foreground">Manage your bank accounts and transactions</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Sync className="mr-2 h-4 w-4" />
            Sync All
          </Button>
          <Button className="bg-[#FF8C00] hover:bg-[#FF7700]">
            <Plus className="mr-2 h-4 w-4" />
            Connect Bank
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="accounts">Accounts</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="reconciliation">Reconciliation</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Summary Cards */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                <Wallet className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹8,14,790</div>
                <p className="text-xs text-muted-foreground">Across all accounts</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Accounts</CardTitle>
                <Building2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">Connected banks</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Today's Inflow</CardTitle>
                <ArrowDownLeft className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">₹45,000</div>
                <p className="text-xs text-muted-foreground">2 transactions</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Today's Outflow</CardTitle>
                <ArrowUpRight className="h-4 w-4 text-red-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">₹33,500</div>
                <p className="text-xs text-muted-foreground">3 transactions</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-4">
                <Button variant="outline" className="h-20 flex-col">
                  <Plus className="h-6 w-6 mb-2" />
                  Transfer Money
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <Download className="h-6 w-6 mb-2" />
                  Export Statement
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <Sync className="h-6 w-6 mb-2" />
                  Reconcile Account
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <CreditCard className="h-6 w-6 mb-2" />
                  Add Transaction
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Latest banking activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transactions.slice(0, 5).map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-2 rounded-full ${transaction.type === "Credit" ? "bg-green-100" : "bg-red-100"}`}
                      >
                        {transaction.type === "Credit" ? (
                          <ArrowDownLeft className="h-4 w-4 text-green-600" />
                        ) : (
                          <ArrowUpRight className="h-4 w-4 text-red-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        <p className="text-sm text-muted-foreground">
                          {transaction.account} • {transaction.date}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className={`font-semibold ${transaction.type === "Credit" ? "text-green-600" : "text-red-600"}`}
                      >
                        {transaction.type === "Credit" ? "+" : "-"}
                        {transaction.amount}
                      </p>
                      <p className="text-sm text-muted-foreground">Bal: {transaction.balance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="accounts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Connected Bank Accounts</CardTitle>
              <CardDescription>Manage your connected banking accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bankAccounts.map((account) => (
                  <div key={account.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-[#FF8C00]/10 rounded-full">
                        <Building2 className="h-6 w-6 text-[#FF8C00]" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{account.bank}</h3>
                        <p className="text-sm text-muted-foreground">
                          {account.accountNo} • {account.type}
                        </p>
                        <p className="text-xs text-muted-foreground">Last sync: {account.lastSync}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">{account.balance}</p>
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        {account.status}
                      </Badge>
                      <div className="flex space-x-2 mt-2">
                        <Button size="sm" variant="outline">
                          Sync
                        </Button>
                        <Button size="sm" variant="outline">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>All Transactions</CardTitle>
                  <CardDescription>Complete transaction history</CardDescription>
                </div>
                <div className="flex space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input placeholder="Search transactions..." className="pl-10 w-64" />
                  </div>
                  <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-2 rounded-full ${transaction.type === "Credit" ? "bg-green-100" : "bg-red-100"}`}
                      >
                        {transaction.type === "Credit" ? (
                          <ArrowDownLeft className="h-4 w-4 text-green-600" />
                        ) : (
                          <ArrowUpRight className="h-4 w-4 text-red-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        <p className="text-sm text-muted-foreground">{transaction.account}</p>
                        <p className="text-xs text-muted-foreground">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className={`text-lg font-semibold ${transaction.type === "Credit" ? "text-green-600" : "text-red-600"}`}
                      >
                        {transaction.type === "Credit" ? "+" : "-"}
                        {transaction.amount}
                      </p>
                      <p className="text-sm text-muted-foreground">Balance: {transaction.balance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reconciliation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Bank Reconciliation</CardTitle>
              <CardDescription>Reconcile your bank statements with accounting records</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-4 border rounded-lg text-center">
                    <h3 className="font-semibold text-green-600">Matched</h3>
                    <p className="text-2xl font-bold">156</p>
                    <p className="text-sm text-muted-foreground">Transactions</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <h3 className="font-semibold text-orange-600">Pending</h3>
                    <p className="text-2xl font-bold">12</p>
                    <p className="text-sm text-muted-foreground">Transactions</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <h3 className="font-semibold text-red-600">Unmatched</h3>
                    <p className="text-2xl font-bold">3</p>
                    <p className="text-sm text-muted-foreground">Transactions</p>
                  </div>
                </div>

                <Button className="w-full bg-[#FF8C00] hover:bg-[#FF7700]">Start Reconciliation</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
