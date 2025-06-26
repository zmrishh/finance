"use client"

import { useState } from "react"
import { WelcomeScreen } from "./WelcomeScreen"
import { SignupForm } from "./SignupForm"
import { CompanyProfileSetup } from "./CompanyProfileSetup"
import { TeamInvite } from "./TeamInvite"
import { BankConnection } from "./BankConnection"
import { AccountingSettings } from "./AccountingSettings"
import { KPIGoals } from "./KPIGoals"
import { SuccessScreen } from "./SuccessScreen"

interface OnboardingFlowProps {
  onComplete: () => void
}

export function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    { component: WelcomeScreen, title: "Welcome" },
    { component: SignupForm, title: "Sign Up" },
    { component: CompanyProfileSetup, title: "Company Profile" },
    { component: TeamInvite, title: "Team Setup" },
    { component: BankConnection, title: "Bank Connection" },
    { component: AccountingSettings, title: "Settings" },
    { component: KPIGoals, title: "Goals" },
    { component: SuccessScreen, title: "Complete" },
  ]

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete()
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const CurrentStepComponent = steps[currentStep].component

  return (
    <div className="min-h-screen bg-gray-50">
      <CurrentStepComponent onNext={nextStep} onPrev={prevStep} currentStep={currentStep} totalSteps={steps.length} />
    </div>
  )
}
