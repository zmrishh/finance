"use client"

import { useState } from "react"
import { OnboardingFlow } from "@/components/onboarding/OnboardingFlow"
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { Dashboard } from "@/components/dashboard/Dashboard"

export default function Home() {
  const [currentView, setCurrentView] = useState<"onboarding" | "dashboard">("onboarding")

  if (currentView === "onboarding") {
    return <OnboardingFlow onComplete={() => setCurrentView("dashboard")} />
  }

  return (
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
  )
}
