"use client"

import { DashboardLayout } from "@/src/components/dashboard/DashboardLayout"
import { Invoices } from "@/src/components/invoices/Invoices"

export default function InvoicesPage() {
  return (
    <DashboardLayout>
      <Invoices />
    </DashboardLayout>
  )
}
