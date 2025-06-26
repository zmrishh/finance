"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Building2, Loader2, AlertCircle } from "lucide-react"
import { ProgressBar } from "./ProgressBar"

interface BankConnectionProps {
  onNext: () => void
  onPrev: () => void
  currentStep: number
  totalSteps: number
}

interface Bank {
  id: string
  name: string
  logo: string
  popular: boolean
  status: "available" | "connecting" | "connected" | "error"
}

export function BankConnection({ onNext, onPrev, currentStep, totalSteps }: BankConnectionProps) {
  const [banks, setBanks] = useState<Bank[]>([
    { id: "hdfc", name: "HDFC Bank", logo: "🏦", popular: true, status: "available" },
    { id: "icici", name: "ICICI Bank", logo: "🏛️", popular: true, status: "available" },
    { id: "sbi", name: "State Bank of India", logo: "🏪", popular: true, status: "available" },
    { id: "axis", name: "Axis Bank", logo: "🏢", popular: true, status: "available" },
    { id: "kotak", name: "Kotak Mahindra Bank", logo: "🏦", popular: false, status: "available" },
    { id: "yes", name: "Yes Bank", logo: "🏛️", popular: false, status: "available" },
  ])

  const [connectionStep, setConnectionStep] = useState<"select" | "connecting" | "success">("select")
  const [connectedBanks, setConnectedBanks] = useState<Bank[]>([])

  const connectBank = async (bankId: string) => {
    setBanks((prev) => prev.map((bank) => (bank.id === bankId ? { ...bank, status: "connecting" } : bank)))

    setConnectionStep("connecting")

    // Simulate connection process
    setTimeout(() => {
      const connectedBank = banks.find((bank) => bank.id === bankId)
      if (connectedBank) {
        setBanks((prev) => prev.map((bank) => (bank.id === bankId ? { ...bank, status: "connected" } : bank)))
        setConnectedBanks((prev) => [...prev, { ...connectedBank, status: "connected" }])
        setConnectionStep("success")
      }
    }, 3000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext()
  }

  if (connectionStep === "connecting") {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4">
          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

          <Card className="mt-8">
            <CardContent className="p-12 text-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-[#FF8C00] rounded-full flex items-center justify-center mx-auto">
                  <Loader2 className="h-8 w-8 text-white animate-spin" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Connecting to your bank...</h2>
                  <p className="text-gray-600">Please wait while we securely connect to your bank account</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Verifying credentials</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Loader2 className="h-4 w-4 animate-spin text-[#FF8C00]" />
                    <span className="text-sm">Establishing secure connection</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 opacity-50">
                    <div className="h-4 w-4 rounded-full border-2 border-gray-300" />
                    <span className="text-sm">Syncing account data</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (connectionStep === "success") {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4">
          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

          <Card className="mt-8">
            <CardContent className="p-12 text-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">✅ Congratulations!</h2>
                  <p className="text-gray-600">Your bank account has been successfully connected</p>
                </div>

                {/* Connected Banks */}
                <div className="space-y-3">
                  <h3 className="font-semibold">Connected Accounts:</h3>
                  {connectedBanks.map((bank) => (
                    <div
                      key={bank.id}
                      className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{bank.logo}</span>
                        <span className="font-medium">{bank.name}</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Connected</Badge>
                    </div>
                  ))}
                </div>

                {/* Success Checklist */}
                <div className="space-y-2 text-left max-w-md mx-auto">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Bank account connected</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Data sync started</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Accounts selected</span>
                  </div>
                </div>

                <Button onClick={handleSubmit} className="bg-[#FF8C00] hover:bg-[#FF7700] px-8">
                  Continue to Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

        <Card className="mt-8">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center">
              <Building2 className="mr-2 h-6 w-6 text-[#FF8C00]" />
              Connect Your Bank
            </CardTitle>
            <p className="text-gray-600">Securely connect your bank account for automatic transaction sync</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Popular Banks */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Popular Banks</h3>
                  <Badge variant="secondary">Recommended</Badge>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {banks
                    .filter((bank) => bank.popular)
                    .map((bank) => (
                      <Button
                        key={bank.id}
                        type="button"
                        variant="outline"
                        className="h-16 flex items-center justify-center space-x-3 hover:border-[#FF8C00] hover:text-[#FF8C00]"
                        onClick={() => connectBank(bank.id)}
                        disabled={bank.status === "connecting" || bank.status === "connected"}
                      >
                        <span className="text-2xl">{bank.logo}</span>
                        <span className="font-medium">{bank.name}</span>
                        {bank.status === "connected" && <CheckCircle className="h-4 w-4 text-green-500" />}
                      </Button>
                    ))}
                </div>
              </div>

              {/* Other Banks */}
              <div className="space-y-4">
                <h3 className="font-semibold">Other Banks</h3>
                <div className="space-y-2">
                  {banks
                    .filter((bank) => !bank.popular)
                    .map((bank) => (
                      <Button
                        key={bank.id}
                        type="button"
                        variant="outline"
                        className="w-full h-12 flex items-center justify-between hover:border-[#FF8C00] hover:text-[#FF8C00]"
                        onClick={() => connectBank(bank.id)}
                        disabled={bank.status === "connecting" || bank.status === "connected"}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-xl">{bank.logo}</span>
                          <span className="font-medium">{bank.name}</span>
                        </div>
                        {bank.status === "connected" && <CheckCircle className="h-4 w-4 text-green-500" />}
                      </Button>
                    ))}
                </div>
              </div>

              {/* Security Note */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <p className="font-medium mb-1">Your data is secure</p>
                    <p>
                      We use bank-level encryption and never store your banking credentials. Your connection is
                      read-only and can be revoked at any time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-6">
                <Button type="button" variant="outline" onClick={onPrev} className="flex-1">
                  Back
                </Button>
                <Button type="submit" variant="outline" className="flex-1">
                  Skip for Now
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
