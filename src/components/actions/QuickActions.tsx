"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, CreditCard, Users, Receipt, Calculator, TrendingUp, Plus, Zap } from "lucide-react"

const quickActions = [
  {
    title: "Create Invoice",
    description: "Generate a new invoice for clients",
    icon: FileText,
    color: "bg-blue-500",
    action: "invoice",
  },
  {
    title: "Record Expense",
    description: "Add a new business expense",
    icon: CreditCard,
    color: "bg-red-500",
    action: "expense",
  },
  {
    title: "Add Employee",
    description: "Register a new team member",
    icon: Users,
    color: "bg-green-500",
    action: "employee",
  },
  {
    title: "File Tax Return",
    description: "Submit GST or TDS returns",
    icon: Receipt,
    color: "bg-purple-500",
    action: "tax",
  },
  {
    title: "Generate Report",
    description: "Create financial reports",
    icon: TrendingUp,
    color: "bg-orange-500",
    action: "report",
  },
  {
    title: "Calculate Tax",
    description: "Estimate tax liability",
    icon: Calculator,
    color: "bg-indigo-500",
    action: "calculate",
  },
]

export function QuickActions() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Quick Actions</h1>
          <p className="text-muted-foreground">Perform common tasks quickly</p>
        </div>
        <Button className="bg-[#FF8C00] hover:bg-[#FF7700]">
          <Zap className="mr-2 h-4 w-4" />
          AI Assistant
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {quickActions.map((action, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className={`p-2 rounded-lg ${action.color} mr-3`}>
                  <action.icon className="h-5 w-5 text-white" />
                </div>
                {action.title}
              </CardTitle>
              <CardDescription>{action.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                <Plus className="mr-2 h-4 w-4" />
                Start Action
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Actions</CardTitle>
          <CardDescription>Your recently performed quick actions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { action: "Created Invoice INV-001", time: "2 hours ago", type: "invoice" },
              { action: "Recorded office supplies expense", time: "5 hours ago", type: "expense" },
              { action: "Generated P&L report", time: "1 day ago", type: "report" },
              { action: "Filed GSTR-3B return", time: "2 days ago", type: "tax" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{item.action}</p>
                  <p className="text-sm text-muted-foreground">{item.time}</p>
                </div>
                <Button size="sm" variant="outline">
                  View
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
