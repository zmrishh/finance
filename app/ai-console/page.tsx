"use client"

import { DashboardLayout } from "@/src/components/dashboard/DashboardLayout"
import { AIPromptConsole } from "@/src/components/ai/AIPromptConsole"

export default function AIConsolePage() {
  return (
    <DashboardLayout>
      <AIPromptConsole />
    </DashboardLayout>
  )
}
