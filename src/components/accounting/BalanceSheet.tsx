"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scale, Download, Calendar } from "lucide-react"

export function BalanceSheet() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Balance Sheet</h1>
          <p className="text-muted-foreground">Assets, Liabilities, and Equity statement</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Change Period
          </Button>
          <Button className="bg-[#FF8C00] hover:bg-[#FF7700]">
            <Download className="mr-2 h-4 w-4" />
            Export PDF
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Assets */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Scale className="mr-2 h-5 w-5 text-green-600" />
              Assets
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-gray-600 uppercase">Current Assets</h4>
              {[
                { name: "Cash and Cash Equivalents", amount: "₹2,59,560" },
                { name: "Accounts Receivable", amount: "₹1,45,680" },
                { name: "Inventory", amount: "₹89,340" },
                { name: "Prepaid Expenses", amount: "₹23,450" },
              ].map((asset, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm">{asset.name}</span>
                  <span className="font-medium">{asset.amount}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-2 font-semibold border-t">
                <span>Total Current Assets</span>
                <span>₹5,18,030</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-gray-600 uppercase">Fixed Assets</h4>
              {[
                { name: "Office Equipment", amount: "₹3,45,000" },
                { name: "Furniture & Fixtures", amount: "₹1,23,450" },
                { name: "Computer Equipment", amount: "₹89,670" },
              ].map((asset, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm">{asset.name}</span>
                  <span className="font-medium">{asset.amount}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-2 font-semibold border-t">
                <span>Total Fixed Assets</span>
                <span>₹5,58,120</span>
              </div>
            </div>

            <div className="flex justify-between items-center py-3 font-bold text-lg border-t-2 border-green-600">
              <span>TOTAL ASSETS</span>
              <span className="text-green-600">₹10,76,150</span>
            </div>
          </CardContent>
        </Card>

        {/* Liabilities & Equity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Scale className="mr-2 h-5 w-5 text-red-600" />
              Liabilities & Equity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-gray-600 uppercase">Current Liabilities</h4>
              {[
                { name: "Accounts Payable", amount: "₹89,340" },
                { name: "Accrued Expenses", amount: "₹34,560" },
                { name: "Short-term Loans", amount: "₹1,50,000" },
                { name: "Tax Payable", amount: "₹45,680" },
              ].map((liability, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm">{liability.name}</span>
                  <span className="font-medium">{liability.amount}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-2 font-semibold border-t">
                <span>Total Current Liabilities</span>
                <span>₹3,19,580</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-gray-600 uppercase">Long-term Liabilities</h4>
              {[
                { name: "Long-term Loans", amount: "₹2,50,000" },
                { name: "Equipment Loans", amount: "₹1,25,000" },
              ].map((liability, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm">{liability.name}</span>
                  <span className="font-medium">{liability.amount}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-2 font-semibold border-t">
                <span>Total Long-term Liabilities</span>
                <span>₹3,75,000</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-gray-600 uppercase">Equity</h4>
              {[
                { name: "Owner's Equity", amount: "₹5,00,000" },
                { name: "Retained Earnings", amount: "₹-1,18,430" },
              ].map((equity, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm">{equity.name}</span>
                  <span className="font-medium">{equity.amount}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-2 font-semibold border-t">
                <span>Total Equity</span>
                <span>₹3,81,570</span>
              </div>
            </div>

            <div className="flex justify-between items-center py-3 font-bold text-lg border-t-2 border-red-600">
              <span>TOTAL LIABILITIES & EQUITY</span>
              <span className="text-red-600">₹10,76,150</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
