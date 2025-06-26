"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string
  change: string
  changeType: "positive" | "negative"
  icon: LucideIcon
  description: string
}

export function MetricCard({ title, value, change, changeType, icon: Icon, description }: MetricCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
          <span
            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
              changeType === "positive" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {change}
          </span>
          <span>{description}</span>
        </div>
      </CardContent>
    </Card>
  )
}
