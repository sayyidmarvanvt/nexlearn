"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import DetailsPage from "@/components/auth/detailsPage";

export default function Page() {
  const router = useRouter();
  const { mobile } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!mobile) {
      router.replace("/");
    }
  }, [mobile, router]);

  return <DetailsPage mobile={mobile} />;
}
