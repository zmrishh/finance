"use client"

import { CheckCircle } from "lucide-react"

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const steps = Array.from({ length: totalSteps }, (_, i) => i)

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center">
            {/* Step Circle */}
            <div className="relative">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  index < currentStep
                    ? "bg-orange-500 border-orange-500 text-white"
                    : index === currentStep
                      ? "bg-orange-500 border-orange-500 text-white"
                      : "bg-white border-gray-300 text-gray-400"
                }`}
              >
                {index < currentStep ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <span className="text-sm font-semibold">{index + 1}</span>
                )}
              </div>
            </div>

            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div
                className={`h-1 w-16 mx-2 transition-all duration-300 ${
                  index < currentStep ? "bg-green-500" : "bg-gray-300"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Labels */}
      <div className="flex justify-between mt-4 text-xs text-gray-600">
        <span>Welcome</span>
        <span>Sign Up</span>
        <span>Company</span>
        <span>Team</span>
        <span>Banking</span>
        <span>Settings</span>
        <span>Goals</span>
        <span>Complete</span>
      </div>
    </div>
  )
}
