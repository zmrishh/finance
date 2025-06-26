"use client"

import { DashboardLayout } from "@/src/components/dashboard/DashboardLayout"
import { Payroll } from "@/src/components/payroll/Payroll"

export default function PayrollPage() {
  return (
    <DashboardLayout>
      <Payroll />
    </DashboardLayout>
  )
}
