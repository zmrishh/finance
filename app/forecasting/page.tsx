"use client"

import { DashboardLayout } from "@/src/components/dashboard/DashboardLayout"
import { Forecasting } from "@/src/components/analytics/Forecasting"

export default function ForecastingPage() {
  return (
    <DashboardLayout>
      <Forecasting />
    </DashboardLayout>
  )
}
