"use client"

import { DashboardLayout } from "@/src/components/dashboard/DashboardLayout"
import { TaxCompliance } from "@/src/components/tax/TaxCompliance"

export default function ROCFilingsPage() {
  return (
    <DashboardLayout>
      <TaxCompliance />
    </DashboardLayout>
  )
}
