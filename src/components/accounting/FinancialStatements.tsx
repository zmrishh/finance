"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, Download, Calendar } from "lucide-react"

export function FinancialStatements() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Financial Statements</h1>
          <p className="text-muted-foreground">Comprehensive financial reports and statements</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Change Period
          </Button>
          <Button className="bg-[#FF8C00] hover:bg-[#FF7700]">
            <Download className="mr-2 h-4 w-4" />
            Export All
          </Button>
        </div>
      </div>

      <Tabs defaultValue="profit-loss" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profit-loss">Profit & Loss</TabsTrigger>
          <TabsTrigger value="balance-sheet">Balance Sheet</TabsTrigger>
          <TabsTrigger value="cash-flow">Cash Flow</TabsTrigger>
          <TabsTrigger value="trial-balance">Trial Balance</TabsTrigger>
        </TabsList>

        <TabsContent value="profit-loss">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-[#FF8C00]" />
                Profit & Loss Statement
              </CardTitle>
              <CardDescription>For the period January 1, 2024 - December 31, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Revenue */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-green-600 border-b pb-2">REVENUE</h3>
                  {[
                    { item: "Sales Revenue", amount: "₹5,67,890" },
                    { item: "Service Revenue", amount: "₹2,34,560" },
                    { item: "Other Income", amount: "₹45,670" },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-1">
                      <span className="text-sm">{item.item}</span>
                      <span className="font-medium">{item.amount}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center py-2 font-semibold border-t">
                    <span>Total Revenue</span>
                    <span className="text-green-600">₹8,48,120</span>
                  </div>
                </div>

                {/* Expenses */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-red-600 border-b pb-2">EXPENSES</h3>
                  {[
                    { item: "Cost of Goods Sold", amount: "₹2,34,560" },
                    { item: "Office Rent", amount: "₹1,20,000" },
                    { item: "Salaries & Wages", amount: "₹2,45,000" },
                    { item: "Marketing Expenses", amount: "₹89,340" },
                    { item: "Utilities", amount: "₹34,560" },
                    { item: "Insurance", amount: "₹23,450" },
                    { item: "Depreciation", amount: "₹45,670" },
                    { item: "Other Expenses", amount: "₹67,890" },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-1">
                      <span className="text-sm">{item.item}</span>
                      <span className="font-medium">{item.amount}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center py-2 font-semibold border-t">
                    <span>Total Expenses</span>
                    <span className="text-red-600">₹6,60,470</span>
                  </div>
                </div>

                {/* Net Income */}
                <div className="bg-[#FF8C00]/10 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">NET INCOME</span>
                    <span className="text-xl font-bold text-[#FF8C00]">₹1,87,650</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">22.1% profit margin</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="balance-sheet">
          <Card>
            <CardHeader>
              <CardTitle>Balance Sheet</CardTitle>
              <CardDescription>As of December 31, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-8">Balance sheet details coming soon...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cash-flow">
          <Card>
            <CardHeader>
              <CardTitle>Cash Flow Statement</CardTitle>
              <CardDescription>For the period January 1, 2024 - December 31, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-8">Cash flow statement coming soon...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trial-balance">
          <Card>
            <CardHeader>
              <CardTitle>Trial Balance</CardTitle>
              <CardDescription>As of December 31, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-8">Trial balance coming soon...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
