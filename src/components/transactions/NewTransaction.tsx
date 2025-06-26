"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Save, X } from "lucide-react"

export function NewTransaction() {
  const [transactionType, setTransactionType] = useState("")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">New Transaction</h1>
          <p className="text-muted-foreground">Create a new financial transaction</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Quick Transaction Types */}
        <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setTransactionType("income")}>
          <CardHeader className="text-center">
            <CardTitle className="text-green-600">Income</CardTitle>
            <CardDescription>Record money received</CardDescription>
          </CardHeader>
        </Card>

        <Card
          className="cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => setTransactionType("expense")}
        >
          <CardHeader className="text-center">
            <CardTitle className="text-red-600">Expense</CardTitle>
            <CardDescription>Record money spent</CardDescription>
          </CardHeader>
        </Card>

        <Card
          className="cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => setTransactionType("transfer")}
        >
          <CardHeader className="text-center">
            <CardTitle className="text-blue-600">Transfer</CardTitle>
            <CardDescription>Move money between accounts</CardDescription>
          </CardHeader>
        </Card>
      </div>

      {transactionType && (
        <Card>
          <CardHeader>
            <CardTitle>Transaction Details</CardTitle>
            <CardDescription>Enter the transaction information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <Input id="amount" placeholder="₹0.00" type="number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="office-supplies">Office Supplies</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="travel">Travel</SelectItem>
                  <SelectItem value="software">Software</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Enter transaction description" />
            </div>

            <div className="flex space-x-2">
              <Button className="bg-[#FF8C00] hover:bg-[#FF7700]">
                <Save className="mr-2 h-4 w-4" />
                Save Transaction
              </Button>
              <Button variant="outline" onClick={() => setTransactionType("")}>
                <X className="mr-2 h-4 w-4" />
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
