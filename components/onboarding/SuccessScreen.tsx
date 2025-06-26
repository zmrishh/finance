"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Sparkles } from "lucide-react"

interface SuccessScreenProps {
  onNext: () => void
}

export function SuccessScreen({ onNext }: SuccessScreenProps) {
  const [completedItems, setCompletedItems] = useState<number[]>([])

  const setupItems = [
    "Company Profile Created",
    "Team Members Invited",
    "Bank Account Connected",
    "Accounting Settings Configured",
    "Goals & KPIs Set",
  ]

  useEffect(() => {
    // Animate the completion of setup items
    setupItems.forEach((_, index) => {
      setTimeout(
        () => {
          setCompletedItems((prev) => [...prev, index])
        },
        (index + 1) * 500,
      )
    })
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Success Animation */}
        <div className="relative">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <CheckCircle className="h-12 w-12 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 animate-bounce">
            <Sparkles className="h-8 w-8 text-[#FF8C00]" />
          </div>
        </div>

        {/* Success Message */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">🎉 Congratulations!</h1>
          <p className="text-xl text-gray-600">Your workspace and dashboard are ready to use</p>
        </div>

        {/* Setup Checklist */}
        <Card className="max-w-md mx-auto">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4 text-left">Setup Complete:</h3>
            <div className="space-y-3">
              {setupItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 transition-all duration-500 ${
                    completedItems.includes(index)
                      ? "opacity-100 transform translate-x-0"
                      : "opacity-50 transform translate-x-4"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      completedItems.includes(index) ? "bg-green-500" : "bg-gray-300"
                    }`}
                  >
                    {completedItems.includes(index) && <CheckCircle className="h-3 w-3 text-white" />}
                  </div>
                  <span
                    className={`text-sm ${
                      completedItems.includes(index) ? "text-gray-900 font-medium" : "text-gray-500"
                    }`}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Dashboard Preview */}
        <div className="bg-white rounded-lg shadow-lg p-4 max-w-lg mx-auto">
          <div className="text-sm text-gray-500 mb-2">Preview of your dashboard:</div>
          <div className="bg-gray-100 rounded h-32 flex items-center justify-center">
            <div className="text-center space-y-2">
              <div className="w-8 h-8 bg-[#FF8C00] rounded mx-auto"></div>
              <div className="text-xs text-gray-600">Your financial data will appear here</div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <Button onClick={onNext} size="lg" className="bg-[#FF8C00] hover:bg-[#FF7700] text-white px-8 py-3 text-lg">
            Go to Dashboard
          </Button>
        </div>

        <p className="text-sm text-gray-500">You can always modify these settings later from your dashboard</p>
      </div>
    </div>
  )
}
