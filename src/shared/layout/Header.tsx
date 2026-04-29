"use client"

import Link from "next/link"
import { Button } from "@/components/ui/Button"

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="font-semibold text-lg">
          AI Kharcha hisab
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <Link href="#features" className="hover:text-black">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-black">
            Pricing
          </Link>
          <Link href="#about" className="hover:text-black">
            About
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link href="/login" className="text-sm text-gray-600 hover:text-black">
            Login
          </Link>

          <Button>
            Start Free
          </Button>
        </div>
      </div>
    </header>
  )
}