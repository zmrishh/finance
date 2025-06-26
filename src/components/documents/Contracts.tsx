"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileSignature } from "lucide-react"

export function Contracts() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Contracts</h1>
        <p className="text-muted-foreground">Manage your business contracts</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileSignature className="mr-2 h-5 w-5" />
            Contracts Module
          </CardTitle>
          <CardDescription>Contract management features coming soon</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground py-8">Contract management features will be available here</p>
        </CardContent>
      </Card>
    </div>
  )
}
