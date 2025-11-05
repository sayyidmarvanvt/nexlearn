"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import FloatingInput from "@/components/ui/floatingInput";
import AuthWrapper from "../wrapper/authWrapper";
import { useApiHandler } from "@/hooks/useApiHandler";

interface OtpPageProps {
  mobile: string;
}

export default function OtpPage({ mobile }: OtpPageProps) {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const { loading, error, sendRequest, clearError } = useApiHandler();

  useEffect(() => {
    if (error && otp.length > 0) clearError();
  }, [otp]);

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) return;

    const formData = new FormData();
    formData.append("mobile", mobile);
    formData.append("otp", otp);

    sendRequest({
      url: "/api/auth/verify-otp",
      data: formData,
      onSuccess: () => router.push("/details"),
    });
  };

  const handleResendOtp = async () => {
    const formData = new FormData();
    formData.append("mobile", mobile);

    await sendRequest({
      url: "/api/auth/send-otp",
      data: formData,
      onSuccess: () => setOtp(""),
    });
  };

  const formatMobile = (num: string) =>
    num.replace(/(\+\d{2})(\d{5})(\d{5})/, "$1 $2 $3");

  return (
    <AuthWrapper
      title="Enter the code we texted you"
      subtitle={
        <>
          We’ve sent an SMS to
          <span className="font-medium"> {formatMobile(mobile)}</span>
        </>
      }
      footer={
        <Button
          onClick={handleVerifyOtp}
          disabled={otp.length !== 6 || loading}
          className="w-full h-12 bg-brand hover:bg-slate-800 text-white font-semibold rounded-lg"
        >
          {loading ? "Please wait..." : "Verify Code"}
        </Button>
      }
    >
      <FloatingInput
        label="SMS code"
        placeholder="123 456"
        value={otp}
        autoFocus
        maxLength={6}
        onChange={(val) => setOtp(val.replace(/\D/g, ""))}
      />
      {error && (
        <p className="text-xs text-red-500 mt-2 transition-opacity duration-200">
          {error}
        </p>
      )}
      <p className="text-xs text-gray-500 mt-3">
        Your 6-digit code is on its way. This can sometimes take a few moments
        to arrive.
      </p>
      <button
        disabled={loading}
        onClick={handleResendOtp}
        className="text-brand underline text-xs md:text-sm font-medium mt-4"
      >
        Resend code
      </button>
    </AuthWrapper>
  );
}
