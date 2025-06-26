"use client"

import { DashboardLayout } from "@/src/components/dashboard/DashboardLayout"
import { Sales } from "@/src/components/sales/Sales"

export default function SalesPage() {
  return (
    <DashboardLayout>
      <Sales />
    </DashboardLayout>
  )
}
