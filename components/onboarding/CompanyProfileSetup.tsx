"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Factory, Building2 } from "lucide-react"
import { ProgressBar } from "./ProgressBar"

interface CompanyProfileSetupProps {
  onNext: () => void
  onPrev: () => void
  currentStep: number
  totalSteps: number
}

export function CompanyProfileSetup({ onNext, onPrev, currentStep, totalSteps }: CompanyProfileSetupProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    country: "",
    state: "",
    currency: "",
    timezone: "",
    financialYear: "",
    logo: null as File | null,
  })

  const [logoPreview, setLogoPreview] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext()
  }

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData({ ...formData, logo: file })
      const reader = new FileReader()
      reader.onload = (e) => {
        setLogoPreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

        <Card className="mt-8">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Company Profile Setup</CardTitle>
            <p className="text-gray-600">Tell us about your business</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Name */}
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  placeholder="Enter your company name"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="focus:border-[#FF8C00] focus:ring-[#FF8C00]"
                  required
                />
                <p className="text-xs text-gray-500">This will appear on your invoices and reports</p>
              </div>

              {/* Logo Upload */}
              <div className="space-y-2">
                <Label>Company Logo</Label>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                    {logoPreview ? (
                      <img
                        src={logoPreview || "/placeholder.svg"}
                        alt="Logo preview"
                        className="w-full h-full object-contain rounded-lg"
                      />
                    ) : (
                      <Building2 className="h-8 w-8 text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <input type="file" id="logo" accept="image/*" onChange={handleLogoUpload} className="hidden" />
                    <Button type="button" variant="outline" onClick={() => document.getElementById("logo")?.click()}>
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Logo
                    </Button>
                    <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 2MB</p>
                  </div>
                </div>
              </div>

              {/* Industry */}
              <div className="space-y-2">
                <Label htmlFor="industry">Industry Type *</Label>
                <Select
                  value={formData.industry}
                  onValueChange={(value) => setFormData({ ...formData, industry: value })}
                >
                  <SelectTrigger className="focus:border-[#FF8C00] focus:ring-[#FF8C00]">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">
                      <div className="flex items-center">
                        <Factory className="mr-2 h-4 w-4" />
                        Technology
                      </div>
                    </SelectItem>
                    <SelectItem value="manufacturing">
                      <div className="flex items-center">
                        <Factory className="mr-2 h-4 w-4" />
                        Manufacturing
                      </div>
                    </SelectItem>
                    <SelectItem value="retail">
                      <div className="flex items-center">
                        <Factory className="mr-2 h-4 w-4" />
                        Retail
                      </div>
                    </SelectItem>
                    <SelectItem value="services">
                      <div className="flex items-center">
                        <Factory className="mr-2 h-4 w-4" />
                        Services
                      </div>
                    </SelectItem>
                    <SelectItem value="healthcare">
                      <div className="flex items-center">
                        <Factory className="mr-2 h-4 w-4" />
                        Healthcare
                      </div>
                    </SelectItem>
                    <SelectItem value="education">
                      <div className="flex items-center">
                        <Factory className="mr-2 h-4 w-4" />
                        Education
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-gray-500">Used to configure tax reports automatically</p>
              </div>

              {/* Location */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="country">Country *</Label>
                  <Select
                    value={formData.country}
                    onValueChange={(value) => setFormData({ ...formData, country: value })}
                  >
                    <SelectTrigger className="focus:border-[#FF8C00] focus:ring-[#FF8C00]">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="india">India</SelectItem>
                      <SelectItem value="usa">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                      <SelectItem value="australia">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state">State/Province *</Label>
                  <Select value={formData.state} onValueChange={(value) => setFormData({ ...formData, state: value })}>
                    <SelectTrigger className="focus:border-[#FF8C00] focus:ring-[#FF8C00]">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="gujarat">Gujarat</SelectItem>
                      <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Currency & Timezone */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="currency">Currency *</Label>
                  <Select
                    value={formData.currency}
                    onValueChange={(value) => setFormData({ ...formData, currency: value })}
                  >
                    <SelectTrigger className="focus:border-[#FF8C00] focus:ring-[#FF8C00]">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inr">INR (₹)</SelectItem>
                      <SelectItem value="usd">USD ($)</SelectItem>
                      <SelectItem value="eur">EUR (€)</SelectItem>
                      <SelectItem value="gbp">GBP (£)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone *</Label>
                  <Select
                    value={formData.timezone}
                    onValueChange={(value) => setFormData({ ...formData, timezone: value })}
                  >
                    <SelectTrigger className="focus:border-[#FF8C00] focus:ring-[#FF8C00]">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ist">IST (UTC+5:30)</SelectItem>
                      <SelectItem value="est">EST (UTC-5)</SelectItem>
                      <SelectItem value="pst">PST (UTC-8)</SelectItem>
                      <SelectItem value="gmt">GMT (UTC+0)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Financial Year */}
              <div className="space-y-2">
                <Label htmlFor="financialYear">Financial Year *</Label>
                <Select
                  value={formData.financialYear}
                  onValueChange={(value) => setFormData({ ...formData, financialYear: value })}
                >
                  <SelectTrigger className="focus:border-[#FF8C00] focus:ring-[#FF8C00]">
                    <SelectValue placeholder="Select financial year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="april-march">April - March</SelectItem>
                    <SelectItem value="january-december">January - December</SelectItem>
                    <SelectItem value="july-june">July - June</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-gray-500">This affects your tax reporting periods</p>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-6">
                <Button type="button" variant="outline" onClick={onPrev} className="flex-1">
                  Back
                </Button>
                <Button type="submit" className="flex-1 bg-[#FF8C00] hover:bg-[#FF7700]">
                  Continue
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
