"use client"

import { DashboardLayout } from "@/src/components/dashboard/DashboardLayout"
import { FinancialStatements } from "@/src/components/accounting/FinancialStatements"

export default function FinancialStatementsPage() {
  return (
    <DashboardLayout>
      <FinancialStatements />
    </DashboardLayout>
  )
}
