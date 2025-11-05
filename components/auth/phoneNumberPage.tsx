"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import FloatingInput from "../ui/floatingInput";
import AuthWrapper from "../wrapper/authWrapper";
import { useDispatch } from "react-redux";
import { setMobile } from "@/store/authSlice";
import { useApiHandler } from "@/hooks/useApiHandler";

export default function PhoneNumberPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");
  const { loading, error, sendRequest } = useApiHandler();

  const handleSendOtp = async () => {
    if (phone.length !== 10) return;

    const fullPhone = `+91${phone}`;
    const formData = new FormData();
    formData.append("mobile", fullPhone);

    sendRequest({
      url: "/api/auth/send-otp",
      data: formData,
      onSuccess: (data) => {
        dispatch(setMobile(fullPhone));
        router.push("/otp");
      },
    });
  };

  return (
    <AuthWrapper
      title="Enter your phone number"
      subtitle="We use your mobile number to identify your account"
      footer={
        <Button
          onClick={handleSendOtp}
          autoFocus
          disabled={phone.length !== 10 || loading}
          className="w-full h-12 bg-brand hover:bg-slate-800 text-white font-semibold rounded-lg"
        >
          {loading ? "Please wait..." : "Get Started"}
        </Button>
      }
    >
      <FloatingInput
        label="Phone number"
        type="tel"
        placeholder="1234 567891"
        value={phone}
        autoFocus={true}
        onChange={setPhone}
        prefix={
          <>
            🇮🇳 <span className="font-medium">+91</span>
          </>
        }
      />
      {error && (
        <p className="text-xs text-red-500 mt-2 transition-opacity duration-200">
          {error}
        </p>
      )}
      <p className="text-xs text-gray-500 mt-3">
        By tapping Get started, you agree to the{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Terms & Conditions
        </a>
      </p>
    </AuthWrapper>
  );
}
