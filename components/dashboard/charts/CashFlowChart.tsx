"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, ResponsiveContainer, Tooltip, XAxis, YAxis, Line, ComposedChart } from "recharts"

const data = [
  { month: "Jan", inflow: 65000, outflow: 45000, net: 20000 },
  { month: "Feb", inflow: 72000, outflow: 52000, net: 20000 },
  { month: "Mar", inflow: 68000, outflow: 48000, net: 20000 },
  { month: "Apr", inflow: 81000, outflow: 61000, net: 20000 },
  { month: "May", inflow: 75000, outflow: 55000, net: 20000 },
  { month: "Jun", inflow: 87000, outflow: 67000, net: 20000 },
]

export function CashFlowChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cash Flow Analysis</CardTitle>
        <CardDescription>Monthly cash inflow vs outflow with net trend</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip
              formatter={(value: number) => [`₹${value.toLocaleString()}`, ""]}
              labelFormatter={(label) => `Month: ${label}`}
            />
            <Bar dataKey="inflow" fill="#10b981" name="Cash Inflow" />
            <Bar dataKey="outflow" fill="#ef4444" name="Cash Outflow" />
            <Line type="monotone" dataKey="net" stroke="#FF8C00" strokeWidth={3} name="Net Cash Flow" />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
