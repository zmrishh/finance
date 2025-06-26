"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wallet, Plus } from "lucide-react"

export function Banking() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Banking</h1>
          <p className="text-muted-foreground">Manage your bank accounts and transactions</p>
        </div>
        <Button className="bg-[#FF8C00] hover:bg-[#FF7700]">
          <Plus className="mr-2 h-4 w-4" />
          Connect Bank
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Wallet className="mr-2 h-5 w-5" />
            Banking Module
          </CardTitle>
          <CardDescription>Banking features coming soon</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground py-8">Banking management features will be available here</p>
        </CardContent>
      </Card>
    </div>
  )
}
