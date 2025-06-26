"use client"

import { DashboardLayout } from "@/src/components/dashboard/DashboardLayout"
import { BalanceSheet } from "@/src/components/accounting/BalanceSheet"

export default function BalanceSheetPage() {
  return (
    <DashboardLayout>
      <BalanceSheet />
    </DashboardLayout>
  )
}
