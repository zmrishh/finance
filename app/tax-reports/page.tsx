"use client"

import { DashboardLayout } from "@/src/components/dashboard/DashboardLayout"
import { TaxCompliance } from "@/src/components/tax/TaxCompliance"

export default function TaxReportsPage() {
  return (
    <DashboardLayout>
      <TaxCompliance />
    </DashboardLayout>
  )
}
