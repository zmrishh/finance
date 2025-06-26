"use client"

import { useState } from "react"
import { OnboardingFlow } from "@/components/onboarding/OnboardingFlow"
import { DashboardLayout } from "@/src/components/dashboard/DashboardLayout"
import { Dashboard } from "@/src/components/dashboard/Dashboard"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { NewTransaction } from "@/src/components/transactions/NewTransaction"
import { QuickActions } from "@/src/components/actions/QuickActions"
import { Accounting } from "@/src/components/accounting/Accounting"
import { Ledger } from "@/src/components/accounting/Ledger"
import { BalanceSheet } from "@/src/components/accounting/BalanceSheet"
import { FinancialStatements } from "@/src/components/accounting/FinancialStatements"
import { TaxCompliance } from "@/src/components/tax/TaxCompliance"
import { Payroll } from "@/src/components/payroll/Payroll"
import { Invoices } from "@/src/components/invoices/Invoices"
import { Banking } from "@/src/components/banking/Banking"
import { Sales } from "@/src/components/sales/Sales"
import { Purchases } from "@/src/components/purchases/Purchases"
import { Items } from "@/src/components/items/Items"
import { Expenses } from "@/src/components/expenses/Expenses"
import { Documents } from "@/src/components/documents/Documents"
import { Contracts } from "@/src/components/documents/Contracts"
import { Compliance } from "@/src/components/documents/Compliance"
import { Analytics } from "@/src/components/analytics/Analytics"
import { Reports } from "@/src/components/reports/Reports"
import { Insights } from "@/src/components/analytics/Insights"
import { Forecasting } from "@/src/components/analytics/Forecasting"
import { Settings } from "@/src/components/settings/Settings"
import { Help } from "@/src/components/help/Help"
import { AIPromptConsole } from "@/src/components/ai/AIPromptConsole"

export default function Home() {
  const [currentView, setCurrentView] = useState<"onboarding" | "dashboard">("dashboard")

  if (currentView === "onboarding") {
    return <OnboardingFlow onComplete={() => setCurrentView("dashboard")} />
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/onboarding" element={<OnboardingFlow onComplete={() => setCurrentView("dashboard")} />} />

          {/* Dashboard Routes */}
          <Route
            path="/dashboard"
            element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            }
          />

          {/* Main Routes */}
          <Route
            path="/transactions/new"
            element={
              <DashboardLayout>
                <NewTransaction />
              </DashboardLayout>
            }
          />
          <Route
            path="/quick-actions"
            element={
              <DashboardLayout>
                <QuickActions />
              </DashboardLayout>
            }
          />

          {/* Accounting Routes */}
          <Route
            path="/accounting"
            element={
              <DashboardLayout>
                <Accounting />
              </DashboardLayout>
            }
          />
          <Route
            path="/ledger"
            element={
              <DashboardLayout>
                <Ledger />
              </DashboardLayout>
            }
          />
          <Route
            path="/balance-sheet"
            element={
              <DashboardLayout>
                <BalanceSheet />
              </DashboardLayout>
            }
          />
          <Route
            path="/financial-statements"
            element={
              <DashboardLayout>
                <FinancialStatements />
              </DashboardLayout>
            }
          />

          {/* Tax Management Routes */}
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
          <Route
            path="/roc-filings"
            element={
              <DashboardLayout>
                <TaxCompliance />
              </DashboardLayout>
            }
          />

          {/* Other Routes */}
          <Route
            path="/payroll"
            element={
              <DashboardLayout>
                <Payroll />
              </DashboardLayout>
            }
          />
          <Route
            path="/invoices"
            element={
              <DashboardLayout>
                <Invoices />
              </DashboardLayout>
            }
          />

          {/* Operations Routes */}
          <Route
            path="/banking"
            element={
              <DashboardLayout>
                <Banking />
              </DashboardLayout>
            }
          />
          <Route
            path="/sales"
            element={
              <DashboardLayout>
                <Sales />
              </DashboardLayout>
            }
          />
          <Route
            path="/purchases"
            element={
              <DashboardLayout>
                <Purchases />
              </DashboardLayout>
            }
          />
          <Route
            path="/items"
            element={
              <DashboardLayout>
                <Items />
              </DashboardLayout>
            }
          />
          <Route
            path="/expenses"
            element={
              <DashboardLayout>
                <Expenses />
              </DashboardLayout>
            }
          />

          {/* Documents Routes */}
          <Route
            path="/documents"
            element={
              <DashboardLayout>
                <Documents />
              </DashboardLayout>
            }
          />
          <Route
            path="/contracts"
            element={
              <DashboardLayout>
                <Contracts />
              </DashboardLayout>
            }
          />
          <Route
            path="/compliance"
            element={
              <DashboardLayout>
                <Compliance />
              </DashboardLayout>
            }
          />

          {/* Reports & Analytics Routes */}
          <Route
            path="/analytics"
            element={
              <DashboardLayout>
                <Analytics />
              </DashboardLayout>
            }
          />
          <Route
            path="/reports"
            element={
              <DashboardLayout>
                <Reports />
              </DashboardLayout>
            }
          />
          <Route
            path="/insights"
            element={
              <DashboardLayout>
                <Insights />
              </DashboardLayout>
            }
          />
          <Route
            path="/forecasting"
            element={
              <DashboardLayout>
                <Forecasting />
              </DashboardLayout>
            }
          />

          {/* Settings Routes */}
          <Route
            path="/settings"
            element={
              <DashboardLayout>
                <Settings />
              </DashboardLayout>
            }
          />
          <Route
            path="/help"
            element={
              <DashboardLayout>
                <Help />
              </DashboardLayout>
            }
          />

          {/* AI Console */}
          <Route
            path="/ai-console"
            element={
              <DashboardLayout>
                <AIPromptConsole />
              </DashboardLayout>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}
