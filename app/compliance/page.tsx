"use client"

import { DashboardLayout } from "@/src/components/dashboard/DashboardLayout"
import { Compliance } from "@/src/components/documents/Compliance"

export default function CompliancePage() {
  return (
    <DashboardLayout>
      <Compliance />
    </DashboardLayout>
  )
}
