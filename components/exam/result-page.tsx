"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ResultPage() {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 lg:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-lg font-bold">⎓</span>
          </div>
          <div>
            <h1 className="font-bold text-gray-900">NexLearn</h1>
            <p className="text-xs text-gray-500">futuristic learning</p>
          </div>
        </div>
        <Button variant="outline" className="text-teal-600 border-teal-600 bg-transparent">
          Logout
        </Button>
      </header>

      <main className="px-6 lg:px-12 py-12">
        <div className="max-w-2xl mx-auto text-center">
          {/* Score Display */}
          <Card className="bg-teal-600 text-white p-8 mb-8 rounded-2xl">
            <p className="text-lg mb-2">Marks Obtained:</p>
            <p className="text-6xl font-bold">100 / 100</p>
          </Card>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card className="p-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-2xl">📄</span>
              </div>
              <p className="text-sm text-gray-600 mb-1">Total Questions:</p>
              <p className="text-3xl font-bold text-gray-900">100</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-2xl">✓</span>
              </div>
              <p className="text-sm text-gray-600 mb-1">Correct Answers:</p>
              <p className="text-3xl font-bold text-green-600">003</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-2xl">✗</span>
              </div>
              <p className="text-sm text-gray-600 mb-1">Incorrect Answers:</p>
              <p className="text-3xl font-bold text-red-600">001</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-2xl">⊘</span>
              </div>
              <p className="text-sm text-gray-600 mb-1">Not Attended Questions:</p>
              <p className="text-3xl font-bold text-gray-600">096</p>
            </Card>
          </div>

          {/* Action Button */}
          <Button className="bg-slate-900 hover:bg-slate-800 text-white px-12 py-3 rounded-lg h-12 font-semibold">
            Done
          </Button>
        </div>
      </main>
    </div>
  )
}
