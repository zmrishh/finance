"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, TrendingUp, DollarSign, PieChart, CheckCircle } from "lucide-react"
import { ProgressBar } from "./ProgressBar"

interface KPIGoalsProps {
  onNext: () => void
  onPrev: () => void
  currentStep: number
  totalSteps: number
}

interface Goal {
  id: string
  title: string
  description: string
  icon: any
  color: string
  selected: boolean
}

interface KPI {
  id: string
  name: string
  description: string
  selected: boolean
}

export function KPIGoals({ onNext, onPrev, currentStep, totalSteps }: KPIGoalsProps) {
  const [goals, setGoals] = useState<Goal[]>([
    {
      id: "growth",
      title: "Growth",
      description: "Focus on increasing revenue and expanding business",
      icon: TrendingUp,
      color: "bg-green-500",
      selected: false,
    },
    {
      id: "cashflow",
      title: "Cash Flow",
      description: "Optimize cash flow and improve liquidity",
      icon: DollarSign,
      color: "bg-blue-500",
      selected: false,
    },
    {
      id: "cost-optimization",
      title: "Cost Optimization",
      description: "Reduce expenses and improve profitability",
      icon: PieChart,
      color: "bg-purple-500",
      selected: false,
    },
  ])

  const [kpis, setKpis] = useState<KPI[]>([
    { id: "revenue", name: "Monthly Revenue", description: "Track monthly income", selected: false },
    { id: "expenses", name: "Monthly Expenses", description: "Monitor spending patterns", selected: false },
    { id: "profit-margin", name: "Profit Margin", description: "Calculate profitability percentage", selected: false },
    { id: "cash-flow", name: "Cash Flow", description: "Monitor cash in vs cash out", selected: false },
    {
      id: "accounts-receivable",
      name: "Accounts Receivable",
      description: "Track outstanding invoices",
      selected: false,
    },
    { id: "accounts-payable", name: "Accounts Payable", description: "Monitor pending payments", selected: false },
    { id: "burn-rate", name: "Burn Rate", description: "Track monthly cash consumption", selected: false },
    { id: "runway", name: "Cash Runway", description: "Estimate time until cash runs out", selected: false },
  ])

  const toggleGoal = (goalId: string) => {
    setGoals((prev) => prev.map((goal) => (goal.id === goalId ? { ...goal, selected: !goal.selected } : goal)))
  }

  const toggleKPI = (kpiId: string) => {
    setKpis((prev) => prev.map((kpi) => (kpi.id === kpiId ? { ...kpi, selected: !kpi.selected } : kpi)))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext()
  }

  const selectedGoals = goals.filter((goal) => goal.selected)
  const selectedKPIs = kpis.filter((kpi) => kpi.selected)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

        <Card className="mt-8">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center">
              <Target className="mr-2 h-6 w-6 text-[#FF8C00]" />
              Set Your Goals & KPIs
            </CardTitle>
            <p className="text-gray-600">Choose your business objectives and key metrics to track</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Business Goals */}
              <div className="space-y-4">
                <Label className="text-base font-semibold">Business Goals</Label>
                <p className="text-sm text-gray-600">
                  Select your primary business objectives (you can choose multiple)
                </p>

                <div className="grid gap-4">
                  {goals.map((goal) => (
                    <div
                      key={goal.id}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        goal.selected ? "border-[#FF8C00] bg-orange-50" : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => toggleGoal(goal.id)}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 ${goal.color} rounded-lg flex items-center justify-center`}>
                          <goal.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold">{goal.title}</h3>
                            {goal.selected && <CheckCircle className="h-5 w-5 text-[#FF8C00]" />}
                          </div>
                          <p className="text-sm text-gray-600">{goal.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* KPI Selection */}
              <div className="space-y-4">
                <Label className="text-base font-semibold">Key Performance Indicators (KPIs)</Label>
                <p className="text-sm text-gray-600">Select the metrics you want to track on your dashboard</p>

                <div className="grid grid-cols-2 gap-3">
                  {kpis.map((kpi) => (
                    <div
                      key={kpi.id}
                      className={`p-3 border rounded-lg cursor-pointer transition-all ${
                        kpi.selected ? "border-[#FF8C00] bg-orange-50" : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => toggleKPI(kpi.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-sm">{kpi.name}</h4>
                          <p className="text-xs text-gray-600">{kpi.description}</p>
                        </div>
                        {kpi.selected && <CheckCircle className="h-4 w-4 text-[#FF8C00]" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Selected Summary */}
              {(selectedGoals.length > 0 || selectedKPIs.length > 0) && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Your Selection:</h4>
                  <div className="space-y-2">
                    {selectedGoals.length > 0 && (
                      <div>
                        <p className="text-sm font-medium text-green-700">Goals:</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {selectedGoals.map((goal) => (
                            <Badge key={goal.id} variant="secondary" className="bg-green-100 text-green-800">
                              {goal.title}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    {selectedKPIs.length > 0 && (
                      <div>
                        <p className="text-sm font-medium text-green-700">KPIs ({selectedKPIs.length} selected):</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {selectedKPIs.slice(0, 4).map((kpi) => (
                            <Badge key={kpi.id} variant="secondary" className="bg-green-100 text-green-800">
                              {kpi.name}
                            </Badge>
                          ))}
                          {selectedKPIs.length > 4 && (
                            <Badge variant="secondary" className="bg-green-100 text-green-800">
                              +{selectedKPIs.length - 4} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Info Note */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> You can always change these goals and KPIs later from your dashboard settings.
                  This helps us customize your experience.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-6">
                <Button type="button" variant="outline" onClick={onPrev} className="flex-1">
                  Back
                </Button>
                <Button type="submit" className="flex-1 bg-[#FF8C00] hover:bg-[#FF7700]">
                  {selectedGoals.length > 0 || selectedKPIs.length > 0 ? "Set Goals & Proceed" : "Skip & Continue"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
