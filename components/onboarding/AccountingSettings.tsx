"use client"

import type React from "react"
import { Package } from "lucide-react" // Import Package here

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Settings, Calculator, DollarSign, Users, Globe } from "lucide-react"
import { ProgressBar } from "./ProgressBar"

interface AccountingSettingsProps {
  onNext: () => void
  onPrev: () => void
  currentStep: number
  totalSteps: number
}

export function AccountingSettings({ onNext, onPrev, currentStep, totalSteps }: AccountingSettingsProps) {
  const [settings, setSettings] = useState({
    accountingMethod: "",
    filingFrequency: "",
    enablePayroll: false,
    enableMultiCurrency: false,
    enableInventory: false,
    enableProjects: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext()
  }

  const updateSetting = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

        <Card className="mt-8">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center">
              <Settings className="mr-2 h-6 w-6 text-[#FF8C00]" />
              Accounting Settings
            </CardTitle>
            <p className="text-gray-600">Configure your accounting preferences</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Accounting Method */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Calculator className="h-5 w-5 text-[#FF8C00]" />
                  <Label className="text-base font-semibold">Accounting Method</Label>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      settings.accountingMethod === "cash"
                        ? "border-[#FF8C00] bg-orange-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => updateSetting("accountingMethod", "cash")}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <input
                        type="radio"
                        checked={settings.accountingMethod === "cash"}
                        onChange={() => updateSetting("accountingMethod", "cash")}
                        className="text-[#FF8C00]"
                      />
                      <span className="font-medium">Cash Basis</span>
                    </div>
                    <p className="text-sm text-gray-600">Record transactions when money changes hands</p>
                  </div>

                  <div
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      settings.accountingMethod === "accrual"
                        ? "border-[#FF8C00] bg-orange-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => updateSetting("accountingMethod", "accrual")}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <input
                        type="radio"
                        checked={settings.accountingMethod === "accrual"}
                        onChange={() => updateSetting("accountingMethod", "accrual")}
                        className="text-[#FF8C00]"
                      />
                      <span className="font-medium">Accrual Basis</span>
                    </div>
                    <p className="text-sm text-gray-600">Record transactions when they occur</p>
                  </div>
                </div>
              </div>

              {/* Filing Frequency */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">Tax Filing Frequency</Label>
                <Select
                  value={settings.filingFrequency}
                  onValueChange={(value) => updateSetting("filingFrequency", value)}
                >
                  <SelectTrigger className="focus:border-[#FF8C00] focus:ring-[#FF8C00]">
                    <SelectValue placeholder="Select filing frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="annually">Annually</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-gray-500">This affects your tax reporting schedule</p>
              </div>

              {/* Feature Toggles */}
              <div className="space-y-6">
                <Label className="text-base font-semibold">Enable Features</Label>

                {/* Payroll */}
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-[#FF8C00]" />
                    <div>
                      <p className="font-medium">Payroll Management</p>
                      <p className="text-sm text-gray-600">Manage employee salaries and deductions</p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.enablePayroll}
                    onCheckedChange={(checked) => updateSetting("enablePayroll", checked)}
                  />
                </div>

                {/* Multi-Currency */}
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-[#FF8C00]" />
                    <div>
                      <p className="font-medium">Multi-Currency Support</p>
                      <p className="text-sm text-gray-600">Handle transactions in multiple currencies</p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.enableMultiCurrency}
                    onCheckedChange={(checked) => updateSetting("enableMultiCurrency", checked)}
                  />
                </div>

                {/* Inventory */}
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Package className="h-5 w-5 text-[#FF8C00]" />
                    <div>
                      <p className="font-medium">Inventory Tracking</p>
                      <p className="text-sm text-gray-600">Track stock levels and product costs</p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.enableInventory}
                    onCheckedChange={(checked) => updateSetting("enableInventory", checked)}
                  />
                </div>

                {/* Projects */}
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-5 w-5 text-[#FF8C00]" />
                    <div>
                      <p className="font-medium">Project Tracking</p>
                      <p className="text-sm text-gray-600">Track income and expenses by project</p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.enableProjects}
                    onCheckedChange={(checked) => updateSetting("enableProjects", checked)}
                  />
                </div>
              </div>

              {/* Info Note */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> You can change these settings later from your dashboard. These preferences will
                  help us customize your experience.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-6">
                <Button type="button" variant="outline" onClick={onPrev} className="flex-1">
                  Back
                </Button>
                <Button type="submit" className="flex-1 bg-[#FF8C00] hover:bg-[#FF7700]">
                  Save & Continue
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
