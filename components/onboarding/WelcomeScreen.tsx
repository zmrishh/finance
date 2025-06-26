"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, BarChart3, Settings, Users } from "lucide-react"

interface WelcomeScreenProps {
  onNext: () => void
}

export function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-900">
                Welcome to <span className="text-[#FF8C00]">Kenesis</span>!
              </h1>
              <p className="text-lg text-gray-600">
                Your AI-powered accounting platform that simplifies financial management
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-[#FF8C00]" />
                    Explore the Dashboard
                  </h3>
                  <p className="text-gray-600">Get insights into your financial performance</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold flex items-center">
                    <Settings className="h-5 w-5 mr-2 text-[#FF8C00]" />
                    Customize Settings
                  </h3>
                  <p className="text-gray-600">Configure your accounting preferences</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold flex items-center">
                    <Users className="h-5 w-5 mr-2 text-[#FF8C00]" />
                    Invite Your Team
                  </h3>
                  <p className="text-gray-600">Collaborate with your team members</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-sm text-gray-500">
                By continuing, you agree to our{" "}
                <a href="#" className="text-[#FF8C00] hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#FF8C00] hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="flex justify-center">
            <Card className="w-full max-w-sm">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-[#FF8C00] rounded-full flex items-center justify-center mx-auto">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Ready to get started?</h2>
                  <p className="text-gray-600 text-sm">Set up your account in just a few minutes</p>
                </div>
                <Button onClick={onNext} className="w-full bg-[#FF8C00] hover:bg-[#FF7700] text-white py-3" size="lg">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
