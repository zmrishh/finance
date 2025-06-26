"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import {
  LayoutDashboard,
  Plus,
  Zap,
  Calculator,
  BookOpen,
  Scale,
  TrendingUp,
  Receipt,
  FileText,
  FolderOpen,
  FileSignature,
  BarChart3,
  FileBarChart,
  Eye,
  Users,
  FileCheck,
  CreditCard,
  Building2,
  Wallet,
  ShoppingCart,
  Package,
  PieChart,
  Settings,
  HelpCircle,
  ChevronDown,
  ChevronRight,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface NavItem {
  title: string
  icon: any
  href: string
  subItems?: NavItem[]
}

interface NavSection {
  title: string
  items: NavItem[]
}

const navigationSections: NavSection[] = [
  {
    title: "Main",
    items: [
      { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
      { title: "New Transaction", icon: Plus, href: "/transactions/new" },
      { title: "Quick Actions", icon: Zap, href: "/quick-actions" },
    ],
  },
  {
    title: "Accounting",
    items: [
      { title: "Accounting", icon: Calculator, href: "/accounting" },
      { title: "Ledger", icon: BookOpen, href: "/ledger" },
      { title: "Balance Sheet", icon: Scale, href: "/balance-sheet" },
      { title: "Financial Statements", icon: TrendingUp, href: "/financial-statements" },
      {
        title: "Tax Management",
        icon: Receipt,
        href: "/tax-management",
        subItems: [
          { title: "Tax Reports", icon: FileText, href: "/tax-reports" },
          { title: "GST Returns", icon: FileCheck, href: "/gst-returns" },
          { title: "TDS Management", icon: CreditCard, href: "/tds-management" },
          { title: "ROC Filings", icon: Building2, href: "/roc-filings" },
        ],
      },
      { title: "Payroll", icon: Users, href: "/payroll" },
      { title: "Invoice", icon: FileText, href: "/invoices" },
    ],
  },
  {
    title: "Operations",
    items: [
      { title: "Banking", icon: Wallet, href: "/banking" },
      { title: "Sales", icon: ShoppingCart, href: "/sales" },
      { title: "Purchases", icon: Package, href: "/purchases" },
      { title: "Items", icon: Package, href: "/items" },
      { title: "Expenses", icon: CreditCard, href: "/expenses" },
    ],
  },
  {
    title: "Documents",
    items: [
      { title: "Documents", icon: FolderOpen, href: "/documents" },
      { title: "Contracts", icon: FileSignature, href: "/contracts" },
      { title: "Compliance Docs", icon: FileCheck, href: "/compliance" },
    ],
  },
  {
    title: "Reports & Analytics",
    items: [
      { title: "Analytics", icon: BarChart3, href: "/analytics" },
      { title: "Reports", icon: FileBarChart, href: "/reports" },
      { title: "Insights", icon: Eye, href: "/insights" },
      { title: "Forecasting", icon: PieChart, href: "/forecasting" },
    ],
  },
  {
    title: "Settings",
    items: [
      { title: "Settings", icon: Settings, href: "/settings" },
      { title: "Help & Support", icon: HelpCircle, href: "/help" },
    ],
  },
]

function NavItemComponent({ item, level = 0 }: { item: NavItem; level?: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const hasSubItems = item.subItems && item.subItems.length > 0
  const isActive = location.pathname === item.href

  if (hasSubItems) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className={cn("w-full justify-start h-9 px-3", level > 0 && "ml-4")}>
            <item.icon className="mr-2 h-4 w-4" />
            <span className="flex-1 text-left">{item.title}</span>
            {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-1">
          {item.subItems?.map((subItem, index) => (
            <NavItemComponent key={index} item={subItem} level={level + 1} />
          ))}
        </CollapsibleContent>
      </Collapsible>
    )
  }

  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start h-9 px-3 hover:bg-orange-100 hover:text-orange-900",
        level > 0 && "ml-4",
        isActive && "bg-orange-100 text-orange-900 font-medium",
      )}
      asChild
    >
      <Link to={item.href}>
        <item.icon className="mr-2 h-4 w-4" />
        {item.title}
      </Link>
    </Button>
  )
}

export function AppSidebar() {
  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <Link to="/dashboard" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#FF8C00] rounded-lg flex items-center justify-center">
            <Calculator className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold">Kenesis</span>
        </Link>
      </div>

      {/* Quick Create Button */}
      <div className="p-4">
        <Button className="w-full bg-[#FF8C00] hover:bg-[#FF7700] text-white" asChild>
          <Link to="/transactions/new">
            <Plus className="mr-2 h-4 w-4" />
            Quick Create
          </Link>
        </Button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="space-y-6">
          {navigationSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h4 className="mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">{section.title}</h4>
              <div className="space-y-1">
                {section.items.map((item, itemIndex) => (
                  <NavItemComponent key={itemIndex} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <Users className="h-4 w-4 text-gray-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
            <p className="text-xs text-gray-500 truncate">john@company.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
