"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Search } from "lucide-react"

export function Ledger() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">General Ledger</h1>
          <p className="text-muted-foreground">View and manage your general ledger accounts</p>
        </div>
        <Button className="bg-[#FF8C00] hover:bg-[#FF7700]">
          <BookOpen className="mr-2 h-4 w-4" />
          Export Ledger
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search accounts..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Account Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="assets">Assets</SelectItem>
                <SelectItem value="liabilities">Liabilities</SelectItem>
                <SelectItem value="equity">Equity</SelectItem>
                <SelectItem value="revenue">Revenue</SelectItem>
                <SelectItem value="expenses">Expenses</SelectItem>
              </SelectContent>
            </Select>
            <Input type="date" placeholder="From Date" />
            <Input type="date" placeholder="To Date" />
          </div>
        </CardContent>
      </Card>

      {/* Ledger Accounts */}
      <Card>
        <CardHeader>
          <CardTitle>Ledger Accounts</CardTitle>
          <CardDescription>All general ledger accounts and their balances</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { account: "Cash in Hand", type: "Asset", balance: "₹25,000", transactions: 45 },
              { account: "Bank Account - HDFC", type: "Asset", balance: "₹2,34,560", transactions: 128 },
              { account: "Accounts Receivable", type: "Asset", balance: "₹1,45,680", transactions: 67 },
              { account: "Office Equipment", type: "Asset", balance: "₹3,45,000", transactions: 23 },
              { account: "Accounts Payable", type: "Liability", balance: "₹89,340", transactions: 34 },
              { account: "Sales Revenue", type: "Revenue", balance: "₹5,67,890", transactions: 156 },
              { account: "Office Rent", type: "Expense", balance: "₹75,000", transactions: 12 },
              { account: "Marketing Expenses", type: "Expense", balance: "₹45,600", transactions: 28 },
            ].map((account, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex-1">
                  <h3 className="font-semibold">{account.account}</h3>
                  <p className="text-sm text-muted-foreground">{account.type}</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold">{account.balance}</p>
                  <p className="text-sm text-muted-foreground">{account.transactions} transactions</p>
                </div>
                <Button size="sm" variant="outline">
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
