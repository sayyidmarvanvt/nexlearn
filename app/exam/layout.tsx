"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { fetchExamData } from "@/store/examSlice";
import { logout } from "@/store/authSlice";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();
  const router = useRouter();

  const { isAuthenticated, access_token } = useSelector(
    (state: RootState) => state.auth
  );
  const { data: examData } = useSelector((state: RootState) => state.exam);

  useEffect(() => {
    if (!isAuthenticated || !access_token) return;
    if (examData) return;

    dispatch(fetchExamData() as any);
  }, [isAuthenticated, access_token, examData, dispatch]);

  useEffect(() => {
    if (!isAuthenticated || !access_token) {
      router.replace("/");
    }
  }, [isAuthenticated, access_token, router]);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-blue-50">
      <header className="relative bg-white border-b border-gray-200 p-2 flex items-center md:justify-center">
        <Image
          src="/main-logo.png"
          alt="NexLearn Logo"
          width={180}
          height={80}
          className="object-contain"
        />

        <Button
          onClick={handleLogout}
          className="absolute p-5 right-4 md:right-6 bottom-3 text-white border-none bg-[#177A9C] hover:bg-[#13667F]"
        >
          Logout
        </Button>
      </header>

      {children}
    </div>
  );
}
