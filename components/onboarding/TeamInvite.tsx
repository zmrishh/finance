"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Plus, X, Mail, UserPlus, CheckCircle } from "lucide-react"
import { ProgressBar } from "./ProgressBar"

interface TeamInviteProps {
  onNext: () => void
  onPrev: () => void
  currentStep: number
  totalSteps: number
}

interface TeamMember {
  id: string
  email: string
  role: string
  status: "pending" | "invited" | "joined"
}

export function TeamInvite({ onNext, onPrev, currentStep, totalSteps }: TeamInviteProps) {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([{ id: "1", email: "", role: "", status: "pending" }])
  const [invitedMembers, setInvitedMembers] = useState<TeamMember[]>([])

  const addTeamMember = () => {
    const newMember: TeamMember = {
      id: Date.now().toString(),
      email: "",
      role: "",
      status: "pending",
    }
    setTeamMembers([...teamMembers, newMember])
  }

  const removeTeamMember = (id: string) => {
    setTeamMembers(teamMembers.filter((member) => member.id !== id))
  }

  const updateTeamMember = (id: string, field: keyof TeamMember, value: string) => {
    setTeamMembers(teamMembers.map((member) => (member.id === id ? { ...member, [field]: value } : member)))
  }

  const sendInvites = () => {
    const validMembers = teamMembers.filter((member) => member.email && member.role)
    const invitedMembers = validMembers.map((member) => ({ ...member, status: "invited" as const }))
    setInvitedMembers(invitedMembers)

    // Simulate invitation process
    setTimeout(() => {
      setInvitedMembers((prev) => prev.map((member) => ({ ...member, status: "invited" as const })))
    }, 1000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext()
  }

  const roles = [
    { value: "admin", label: "Admin", description: "Full access to all features" },
    { value: "accountant", label: "Accountant", description: "Access to financial data and reports" },
    { value: "manager", label: "Manager", description: "View reports and approve transactions" },
    { value: "employee", label: "Employee", description: "Limited access to expense reporting" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

        <Card className="mt-8">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center">
              <UserPlus className="mr-2 h-6 w-6 text-[#FF8C00]" />
              Invite Your Team
            </CardTitle>
            <p className="text-gray-600">Add team members and assign roles</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Team Members Input */}
              <div className="space-y-4">
                <Label className="text-base font-semibold">Team Members</Label>

                {teamMembers.map((member, index) => (
                  <div key={member.id} className="flex items-center space-x-3 p-4 border rounded-lg bg-gray-50">
                    <div className="flex-1 grid grid-cols-2 gap-3">
                      <div>
                        <Input
                          type="email"
                          placeholder="Email address"
                          value={member.email}
                          onChange={(e) => updateTeamMember(member.id, "email", e.target.value)}
                          className="focus:border-[#FF8C00] focus:ring-[#FF8C00]"
                        />
                      </div>
                      <div>
                        <Select
                          value={member.role}
                          onValueChange={(value) => updateTeamMember(member.id, "role", value)}
                        >
                          <SelectTrigger className="focus:border-[#FF8C00] focus:ring-[#FF8C00]">
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                          <SelectContent>
                            {roles.map((role) => (
                              <SelectItem key={role.value} value={role.value}>
                                <div>
                                  <div className="font-medium">{role.label}</div>
                                  <div className="text-xs text-gray-500">{role.description}</div>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {teamMembers.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeTeamMember(member.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}

                <Button
                  type="button"
                  variant="outline"
                  onClick={addTeamMember}
                  className="w-full border-dashed border-2 hover:border-[#FF8C00] hover:text-[#FF8C00]"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add Another Team Member
                </Button>
              </div>

              {/* Invited Members */}
              {invitedMembers.length > 0 && (
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Invited Members</Label>
                  {invitedMembers.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium">{member.email}</p>
                          <p className="text-sm text-gray-600 capitalize">{member.role}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Invited
                      </Badge>
                    </div>
                  ))}
                </div>
              )}

              {/* Send Invites Button */}
              {teamMembers.some((member) => member.email && member.role) && invitedMembers.length === 0 && (
                <Button type="button" onClick={sendInvites} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Invites
                </Button>
              )}

              {/* Info Note */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> You can invite more users later from the Team Settings page. Team members will
                  receive an email invitation to join your workspace.
                </p>
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
