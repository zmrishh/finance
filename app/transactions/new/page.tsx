"use client"

import { DashboardLayout } from "@/src/components/dashboard/DashboardLayout"
import { NewTransaction } from "@/src/components/transactions/NewTransaction"

export default function NewTransactionPage() {
  return (
    <DashboardLayout>
      <NewTransaction />
    </DashboardLayout>
  )
}
