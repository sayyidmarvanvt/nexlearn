"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface OtpPageProps {
  onSubmit: () => void
}

export default function OtpPage({ onSubmit }: OtpPageProps) {
  const [otp, setOtp] = useState("")

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
            <Image
              src="/students-learning-online-with-charts-and-books.jpg"
              alt="Learning illustration"
              width={400}
              height={300}
              className="rounded-lg w-full"
            />
          </div>

          {/* Right side - Form */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12 bg-white flex flex-col justify-center">
            <div className="lg:hidden mb-6 text-center">
              <h1 className="text-2xl font-bold text-gray-900">NexLearn</h1>
              <p className="text-sm text-gray-600">futuristic learning</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-2">Enter the code we texted you</h2>
            <p className="text-gray-600 mb-2">We've sent an SMS to +91 1234 567891</p>

            <div className="space-y-4 mt-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">SMS code</label>
                <Input
                  type="text"
                  placeholder="123 456"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\s/g, ""))}
                  className="text-center text-xl tracking-widest"
                  maxLength={6}
                />
                <p className="text-xs text-gray-500 mt-2">
                  Your 6 digit code is on its way. This can sometimes take a few moments to arrive.
                </p>
              </div>

              <button className="text-blue-600 hover:underline text-sm font-medium">Resend code</button>

              <Button
                onClick={onSubmit}
                disabled={otp.length !== 6}
                className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg mt-6"
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
