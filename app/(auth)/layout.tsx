"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4 relative "
      style={{
        backgroundImage: "url('/bg-login.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full bg-[#00000099]" />

      <Card className="relative z-10 w-full max-w-3xl overflow-hidden shadow-2xl border-none lg:bg-brand p-2 sm:w-1/2 lg:w-4/6">
        <div className="flex flex-col lg:flex-row">
          {/* Left side */}
          <div className="hidden lg:flex lg:w-1/2 flex-col items-center justify-center text-white p-4">
            <div className="flex flex-col items-center justify-center gap-16">
              <Image
                src="/logo.png"
                alt="NexLearn Logo"
                width={220}
                height={80}
                className="object-contain "
              />
              <Image
                src="/group-hero.png"
                alt="Learning illustration"
                width={280}
                height={100}
                className="object-contain"
              />
            </div>
          </div>

          {/* Right side - dynamic content */}
          <div className="w-full lg:w-1/2 bg-white rounded-md flex items-center flex-col  justify-center">
            {children}
          </div>
        </div>
      </Card>
    </div>
  );
}
