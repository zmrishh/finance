"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileCheck } from "lucide-react"

export function Compliance() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Compliance Documents</h1>
        <p className="text-muted-foreground">Manage compliance and regulatory documents</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileCheck className="mr-2 h-5 w-5" />
            Compliance Module
          </CardTitle>
          <CardDescription>Compliance management features coming soon</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground py-8">
            Compliance management features will be available here
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
