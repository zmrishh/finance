"use client"

import { DashboardLayout } from "@/src/components/dashboard/DashboardLayout"
import { Expenses } from "@/src/components/expenses/Expenses"

export default function ExpensesPage() {
  return (
    <DashboardLayout>
      <Expenses />
    </DashboardLayout>
  )
}
