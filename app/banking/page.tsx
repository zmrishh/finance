"use client"

import { DashboardLayout } from "@/src/components/dashboard/DashboardLayout"
import { Banking } from "@/src/components/banking/Banking"

export default function BankingPage() {
  return (
    <DashboardLayout>
      <Banking />
    </DashboardLayout>
  )
}
