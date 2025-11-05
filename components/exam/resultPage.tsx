"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useRouter } from "next/navigation";

export default function ResultPage() {
  const router = useRouter();
  const result = useSelector((state: RootState) => state.result);
console.log(result);

  const stats = [
    {
      src: "/question.svg",
      color: "#DDA428",
      label: "Total Questions:",
      value: result.details.length.toString().padStart(3, "0"),
    },
    {
      src: "/correct.svg",
      color: "#4CAF50",
      label: "Correct Answers:",
      value: result.correct.toString().padStart(3, "0"),
    },
    {
      src: "/wrong.svg",
      color: "#EE3535",
      label: "Incorrect Answers:",
      value: result.wrong.toString().padStart(3, "0"),
    },
    {
      src: "/question.svg",
      color: "#5C5C5C",
      label: "Not Attended Questions:",
      value: result.not_attended.toString().padStart(3, "0"),
    },
  ];

  const handleDone = () => {
    // Navigate to home or dashboard
    router.push("/");
  };

  // Show loading if no data yet
  if (!result.success) {
    return (
      <main className="px-4 sm:px-6 py-10 min-h-full flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Loading results...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="px-4 sm:px-6 py-10 min-h-full">
      <div className="w-full max-w-md mx-auto text-center">
        {/* Score Display */}
        <Card
          className="text-white p-6 sm:p-8 mb-6 rounded-2xl border-none shadow-lg"
          style={{
            background:
              "linear-gradient(307.95deg, #1C3141 2.54%, #177A9C 79.7%)",
          }}
        >
          <p className="text-base sm:text-lg">Marks Obtained:</p>
          <p className="text-4xl sm:text-6xl font-bold mt-1">
            {result.score * 10} / {result.details.length * 10}
          </p>
        </Card>

        {/* Statistics */}
        <div className="space-y-3 mb-8 text-brand">
          {stats.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between px-2 sm:px-4 py-2 sm:py-3 bg-white rounded-lg shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md"
                  style={{ backgroundColor: item.color }}
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                </span>
                <span className="font-medium text-sm sm:text-lg">
                  {item.label}
                </span>
              </div>
              <span className="font-bold text-sm sm:text-lg">{item.value}</span>
            </div>
          ))}
        </div>

      

        {/* Action Button */}
        <Button
          onClick={handleDone}
          className="w-full bg-brand hover:bg-slate-800 text-white text-base sm:text-lg h-12 sm:h-14 font-semibold rounded-lg transition"
        >
          Done
        </Button>
      </div>
    </main>
  );
}
