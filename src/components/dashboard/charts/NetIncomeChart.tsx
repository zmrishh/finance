"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", income: 13000 },
  { month: "Feb", income: 17000 },
  { month: "Mar", income: 15000 },
  { month: "Apr", income: 23000 },
  { month: "May", income: 19000 },
  { month: "Jun", income: 25000 },
]

export function NetIncomeChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Net Income Trend</CardTitle>
        <CardDescription>Monthly net income after expenses</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF8C00" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FF8C00" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip
              formatter={(value: number) => [`₹${value.toLocaleString()}`, "Net Income"]}
              labelFormatter={(label) => `Month: ${label}`}
            />
            <Area type="monotone" dataKey="income" stroke="#FF8C00" strokeWidth={2} fill="url(#incomeGradient)" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
