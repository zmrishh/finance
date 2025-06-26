"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart } from "lucide-react"

export function Forecasting() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Forecasting</h1>
        <p className="text-muted-foreground">Financial forecasting and predictions</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <PieChart className="mr-2 h-5 w-5" />
            Forecasting Module
          </CardTitle>
          <CardDescription>Forecasting features coming soon</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground py-8">
            Financial forecasting features will be available here
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
