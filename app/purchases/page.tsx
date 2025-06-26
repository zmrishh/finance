"use client"

import { DashboardLayout } from "@/src/components/dashboard/DashboardLayout"
import { Purchases } from "@/src/components/purchases/Purchases"

export default function PurchasesPage() {
  return (
    <DashboardLayout>
      <Purchases />
    </DashboardLayout>
  )
}
