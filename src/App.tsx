"use client"

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { OnboardingFlow } from "./components/onboarding/OnboardingFlow"
import { DashboardLayout } from "./components/dashboard/DashboardLayout"
import { Dashboard } from "./components/dashboard/Dashboard"
import { AIPromptConsole } from "./components/ai/AIPromptConsole"
import { TaxCompliance } from "./components/tax/TaxCompliance"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Navigate to="/onboarding" replace />} />
          <Route path="/onboarding/*" element={<OnboardingFlow />} />
          <Route
            path="/dashboard"
            element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            }
          />
          <Route
            path="/ai-console"
            element={
              <DashboardLayout>
                <AIPromptConsole />
              </DashboardLayout>
            }
          />
          <Route
            path="/tax-management"
            element={
              <DashboardLayout>
                <TaxCompliance />
              </DashboardLayout>
            }
          />
          <Route
            path="/tax-reports"
            element={
              <DashboardLayout>
                <TaxCompliance />
              </DashboardLayout>
            }
          />
          <Route
            path="/gst-returns"
            element={
              <DashboardLayout>
                <TaxCompliance />
              </DashboardLayout>
            }
          />
          <Route
            path="/tds-management"
            element={
              <DashboardLayout>
                <TaxCompliance />
              </DashboardLayout>
            }
          />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
