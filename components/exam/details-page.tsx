"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"

interface DetailsPageProps {
  onSubmit: () => void
}

export default function DetailsPage({ onSubmit }: DetailsPageProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [qualification, setQualification] = useState(false)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

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

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Add Your Details</h2>

            <div className="space-y-6">
              {/* Photo Upload */}
              <div className="flex flex-col items-center">
                <label className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-500 transition-colors overflow-hidden">
                  {photoPreview ? (
                    <Image
                      src={photoPreview || "/placeholder.svg"}
                      alt="Profile"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-gray-400 text-center">
                      <div className="text-2xl mb-1">+</div>
                      <div className="text-xs">Add photo</div>
                    </div>
                  )}
                  <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                </label>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name*</label>
                <Input
                  type="text"
                  placeholder="Enter your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="Enter your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Qualification */}
              <div className="flex items-center gap-3">
                <Checkbox
                  id="qualification"
                  checked={qualification}
                  onCheckedChange={(checked) => setQualification(checked as boolean)}
                />
                <label htmlFor="qualification" className="text-sm text-gray-700 cursor-pointer">
                  Your qualification*
                </label>
              </div>

              <Button
                onClick={onSubmit}
                disabled={!name.trim()}
                className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg mt-8"
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
