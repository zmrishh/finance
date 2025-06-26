"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Send, Sparkles, FileText, Calculator, TrendingUp, Receipt, Clock, MessageSquare } from "lucide-react"

const suggestedPrompts = [
  "Create an invoice for ABC Corp",
  "File GSTR-3B for April",
  "Generate profit and loss for Q1",
  "Summarize this bank statement",
  "Calculate tax liability for this quarter",
  "Show me overdue invoices",
  "Generate expense report for marketing",
  "Create payroll summary for December",
]

const recentPrompts = [
  { prompt: "Generate P&L statement", time: "2 hours ago", type: "report" },
  { prompt: "Create invoice INV-001", time: "5 hours ago", type: "invoice" },
  { prompt: "File GST return", time: "1 day ago", type: "tax" },
  { prompt: "Calculate employee salary", time: "2 days ago", type: "payroll" },
]

export function AIPromptConsole() {
  const [prompt, setPrompt] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [responses, setResponses] = useState<Array<{ prompt: string; response: string; type: string }>>([])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!prompt.trim()) return

    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const mockResponse = generateMockResponse(prompt)
      setResponses((prev) => [...prev, { prompt, response: mockResponse, type: "success" }])
      setPrompt("")
      setIsLoading(false)
    }, 2000)
  }

  const generateMockResponse = (prompt: string) => {
    if (prompt.toLowerCase().includes("invoice")) {
      return "I've created a new invoice (INV-2024-001) for the specified client. The invoice includes all line items and has been saved to your drafts. Would you like me to send it to the client?"
    } else if (prompt.toLowerCase().includes("gst") || prompt.toLowerCase().includes("tax")) {
      return "I've prepared your GST return with auto-calculated values. Total tax liability: ₹45,680. The return is ready for filing. Shall I proceed with the submission?"
    } else if (prompt.toLowerCase().includes("profit") || prompt.toLowerCase().includes("p&l")) {
      return "Here's your Q1 Profit & Loss summary: Revenue: ₹5,67,890 | Expenses: ₹3,45,670 | Net Profit: ₹2,22,220 (39.2% margin). Full report has been generated and saved to Reports section."
    } else {
      return "I've processed your request and generated the relevant financial documents. The results have been saved to your dashboard for review."
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Sparkles className="mr-2 h-5 w-5 text-[#FF8C00]" />
            AI Prompt Console
          </CardTitle>
          <CardDescription>
            Ask me anything about your finances. I can create invoices, file returns, generate reports, and more.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <Input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Type your request here... e.g., 'Create an invoice for ABC Corp'"
              className="flex-1"
              disabled={isLoading}
            />
            <Button type="submit" disabled={isLoading || !prompt.trim()} className="bg-[#FF8C00] hover:bg-[#FF7700]">
              {isLoading ? <Clock className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </Button>
          </form>

          {/* Suggested Prompts */}
          <div>
            <h4 className="text-sm font-medium mb-2">Suggested Prompts</h4>
            <div className="flex flex-wrap gap-2">
              {suggestedPrompts.slice(0, 4).map((suggestion, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="cursor-pointer hover:bg-orange-50 hover:border-orange-200"
                  onClick={() => setPrompt(suggestion)}
                >
                  {suggestion}
                </Badge>
              ))}
            </div>
          </div>

          {/* Responses */}
          {responses.length > 0 && (
            <div className="space-y-3 max-h-96 overflow-y-auto">
              <h4 className="text-sm font-medium">Responses</h4>
              {responses.map((item, index) => (
                <div key={index} className="space-y-2 p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <MessageSquare className="h-4 w-4 text-blue-500 mt-0.5" />
                    <p className="text-sm font-medium text-blue-700">{item.prompt}</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Sparkles className="h-4 w-4 text-[#FF8C00] mt-0.5" />
                    <p className="text-sm text-gray-700">{item.response}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent AI Interactions</CardTitle>
          <CardDescription>Your recent prompts and actions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentPrompts.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-orange-100 rounded-full">
                    {item.type === "report" && <TrendingUp className="h-4 w-4 text-[#FF8C00]" />}
                    {item.type === "invoice" && <FileText className="h-4 w-4 text-[#FF8C00]" />}
                    {item.type === "tax" && <Receipt className="h-4 w-4 text-[#FF8C00]" />}
                    {item.type === "payroll" && <Calculator className="h-4 w-4 text-[#FF8C00]" />}
                  </div>
                  <div>
                    <p className="font-medium">{item.prompt}</p>
                    <p className="text-sm text-muted-foreground">{item.time}</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  View Result
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
