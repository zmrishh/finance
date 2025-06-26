"use client"

import { DashboardLayout } from "@/src/components/dashboard/DashboardLayout"
import { Ledger } from "@/src/components/accounting/Ledger"

export default function LedgerPage() {
  return (
    <DashboardLayout>
      <Ledger />
    </DashboardLayout>
  )
}
