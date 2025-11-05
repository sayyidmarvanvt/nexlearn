"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import OtpPage from "@/components/auth/otpPage";

export default function Page() {
  const router = useRouter();
  const { mobile } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!mobile) {
      router.replace("/"); 
    }
  }, [mobile, router]);

  
  if (!mobile) return null;

  return <OtpPage mobile={mobile} />;
}
