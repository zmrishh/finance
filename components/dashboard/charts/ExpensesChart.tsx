"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from "recharts"

const data = [
  { name: "Office Rent", value: 25000, color: "#FF8C00" },
  { name: "Salaries", value: 45000, color: "#10b981" },
  { name: "Marketing", value: 12000, color: "#3b82f6" },
  { name: "Utilities", value: 8000, color: "#f59e0b" },
  { name: "Software", value: 15000, color: "#8b5cf6" },
  { name: "Others", value: 7000, color: "#ef4444" },
]

export function ExpensesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Expense Breakdown</CardTitle>
        <CardDescription>Category-wise expense distribution</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value: number) => [`₹${value.toLocaleString()}`, "Amount"]} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
