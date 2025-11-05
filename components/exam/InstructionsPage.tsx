"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RootState } from "@/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import InstructionsSkeleton from "./InstructionsSkeleton";

export default function InstructionsPage() {
  const router = useRouter();
  const exam = useSelector((state: RootState) => state.exam.data);

  if (!exam)
    return <InstructionsSkeleton/>

  // ✅ Convert instruction HTML string into <li> text items
  const parseInstructions = (html: string) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return Array.from(tempDiv.querySelectorAll("li")).map(
      (li) => li.textContent?.trim() || ""
    );
  };

  const instructions = exam.instruction
    ? parseInstructions(exam.instruction)
    : [];

  return (
    <main className="px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-4 ">
      <div className="max-w-xl mx-auto ">
        {/* ✅ Exam Title */}
        <h2 className="text-xl sm:text-2xl md:text-[1.9rem] font-bold text-gray-900 mb-4 text-center leading-tight">
          {exam?.title || "Exam"}
        </h2>

        {/* ✅ Exam Stats */}
        <Card className="bg-brand rounded-sm text-white p-5 sm:p-6 md:p-6 mb-4 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            <div className="text-center">
              <p className="text-gray-300 text-sm mb-1">Total MCQs:</p>
              <p className="text-2xl sm:text-3xl font-bold">
                {exam.questions_count}
              </p>
            </div>
            <div className="text-center sm:border-x border-gray-600">
              <p className="text-gray-300 text-sm mb-1">Total Marks:</p>
              <p className="text-2xl sm:text-3xl font-bold">
                {exam.total_marks}
              </p>
            </div>
            <div className="text-center">
              <p className="text-gray-300 text-sm mb-1">Total Time:</p>
              <p className="text-2xl sm:text-3xl font-bold">
                {exam.total_time}:00
              </p>
            </div>
          </div>
        </Card>

        {/* ✅ Dynamic Instructions */}
        <div>
          <h3 className="text-xs sm:text-sm font-bold text-[#5C5C5C] mb-2">
            Instructions:
          </h3>

          <ol className="space-y-1 sm:space-y-1.5 mb-5">
            {instructions.length > 0 ? (
              instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-2 sm:gap-3 text-xs sm:text-sm leading-relaxed"
                >
                  <span className="font-semibold text-[#5C5C5C] flex-shrink-0">
                    {index + 1}.
                  </span>
                  <span className="text-[#5C5C5C] text-xs sm:text-sm">
                    {instruction}
                  </span>
                </li>
              ))
            ) : (
              <p className="text-gray-500 text-xs">No instructions found.</p>
            )}
          </ol>
        </div>

        {/* ✅ Start Button */}
        <div className="flex justify-center">
          <Button
            onClick={() => router.push("/exam/MCQ")}
            className="bg-brand hover:bg-brand/80 text-white font-semibold px-8 py-2 rounded-lg h-11 w-full sm:w-auto sm:min-w-[200px] text-sm sm:text-base"
          >
            Start Test
          </Button>
        </div>
      </div>
    </main>
  );
}
