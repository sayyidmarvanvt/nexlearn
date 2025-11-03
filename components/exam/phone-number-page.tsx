"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface PhoneNumberPageProps {
  onSubmit: () => void
}

export default function PhoneNumberPage({ onSubmit }: PhoneNumberPageProps) {
  const [phone, setPhone] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl overflow-hidden shadow-2xl">
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Branding */}
          <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-700 to-slate-800 p-8 flex-col justify-between text-white">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-900">⎓</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold">NexLearn</h1>
                  <p className="text-sm text-gray-300">futuristic learning</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <Image
                src="/students-learning-online-with-charts-and-books.jpg"
                alt="Learning illustration"
                width={400}
                height={300}
                className="rounded-lg w-full"
              />
            </div>
          </div>

          {/* Right side - Form */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12 bg-white flex flex-col justify-center">
            <div className="lg:hidden mb-6 text-center">
              <h1 className="text-2xl font-bold text-gray-900">NexLearn</h1>
              <p className="text-sm text-gray-600">futuristic learning</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-2">Enter your phone number</h2>
            <p className="text-gray-600 mb-8">We use your mobile number to identify your account</p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone number</label>
                <div className="flex gap-2">
                  <select className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 font-medium">
                    <option>🇮🇳 +91</option>
                  </select>
                  <Input
                    type="tel"
                    placeholder="1234 567891"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>

              <p className="text-xs text-gray-500">
                By tapping Get started, you agree to the{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms & Conditions
                </a>
              </p>

              <Button
                onClick={onSubmit}
                disabled={!phone.trim()}
                className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
