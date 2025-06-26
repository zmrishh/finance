"use client"

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { OnboardingFlow } from "./components/onboarding/OnboardingFlow"
import { DashboardLayout } from "./components/dashboard/DashboardLayout"
import { Dashboard } from "./components/dashboard/Dashboard"
import { AIPromptConsole } from "./components/ai/AIPromptConsole"
import { TaxCompliance } from "./components/tax/TaxCompliance"
import { NewTransaction } from "./components/transactions/NewTransaction"
import { QuickActions } from "./components/actions/QuickActions"
import { Accounting } from "./components/accounting/Accounting"
import { Ledger } from "./components/accounting/Ledger"
import { BalanceSheet } from "./components/accounting/BalanceSheet"
import { FinancialStatements } from "./components/accounting/FinancialStatements"
import { Payroll } from "./components/payroll/Payroll"
import { Invoices } from "./components/invoices/Invoices"
import { Banking } from "./components/banking/Banking"
import { Sales } from "./components/sales/Sales"
import { Purchases } from "./components/purchases/Purchases"
import { Items } from "./components/items/Items"
import { Expenses } from "./components/expenses/Expenses"
import { Documents } from "./components/documents/Documents"
import { Contracts } from "./components/documents/Contracts"
import { Compliance } from "./components/documents/Compliance"
import { Analytics } from "./components/analytics/Analytics"
import { Reports } from "./components/reports/Reports"
import { Insights } from "./components/analytics/Insights"
import { Forecasting } from "./components/analytics/Forecasting"
import { Settings } from "./components/settings/Settings"
import { Help } from "./components/help/Help"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Navigate to="/onboarding" replace />} />
          <Route path="/onboarding/*" element={<OnboardingFlow />} />

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

export default App
