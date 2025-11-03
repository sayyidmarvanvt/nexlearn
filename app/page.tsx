"use client"

import { useState } from "react"
import PhoneNumberPage from "@/components/exam/phone-number-page"
import OtpPage from "@/components/exam/otp-page"
import DetailsPage from "@/components/exam/details-page"
import InstructionsPage from "@/components/exam/instructions-page"
import ExamPage from "@/components/exam/exam-page"
import ResultPage from "@/components/exam/result-page"

export default function Home() {
  const [currentStep, setCurrentStep] = useState<"phone" | "otp" | "details" | "instructions" | "exam" | "result">(
    "phone",
  )

  const handlePhoneSubmit = () => setCurrentStep("otp")
  const handleOtpSubmit = () => setCurrentStep("details")
  const handleDetailsSubmit = () => setCurrentStep("instructions")
  const handleStartExam = () => setCurrentStep("exam")
  const handleExamSubmit = () => setCurrentStep("result")

  return (
    <main className="min-h-screen bg-background">
      {currentStep === "phone" && <PhoneNumberPage onSubmit={handlePhoneSubmit} />}
      {currentStep === "otp" && <OtpPage onSubmit={handleOtpSubmit} />}
      {currentStep === "details" && <DetailsPage onSubmit={handleDetailsSubmit} />}
      {currentStep === "instructions" && <InstructionsPage onStartExam={handleStartExam} />}
      {currentStep === "exam" && <ExamPage onSubmit={handleExamSubmit} />}
      {currentStep === "result" && <ResultPage />}
    </main>
  )
}
