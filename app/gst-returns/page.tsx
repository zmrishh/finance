"use client"

import { DashboardLayout } from "@/src/components/dashboard/DashboardLayout"
import { TaxCompliance } from "@/src/components/tax/TaxCompliance"

export default function GSTReturnsPage() {
  return (
    <DashboardLayout>
      <TaxCompliance />
    </DashboardLayout>
  )
}
