"use client"

import { DashboardLayout } from "@/src/components/dashboard/DashboardLayout"
import { Contracts } from "@/src/components/documents/Contracts"

export default function ContractsPage() {
  return (
    <DashboardLayout>
      <Contracts />
    </DashboardLayout>
  )
}
