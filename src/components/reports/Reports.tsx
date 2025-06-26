"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileBarChart } from "lucide-react"

export function Reports() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <p className="text-muted-foreground">Generate and view financial reports</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileBarChart className="mr-2 h-5 w-5" />
            Reports Module
          </CardTitle>
          <CardDescription>Report generation features coming soon</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground py-8">Report generation features will be available here</p>
        </CardContent>
      </Card>
    </div>
  )
}
