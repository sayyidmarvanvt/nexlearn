"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import LeftSection from "./leftSection";
import RightSidebar from "./rightSidebar";
import ComprehensionDialog from "./comprehensionDialog";
import SubmitDialog from "./submitDialog";
import { useRouter } from "next/navigation";
import Timer from "./timer";
import { setResult } from "@/store/resultSlice";
import { useApiHandler } from "@/hooks/useApiHandler";

export default function MCQPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // Store answers by question_id (not array index)
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, number>
  >({});
  const [markedForReview, setMarkedForReview] = useState<Set<number>>(
    new Set()
  );
  const [showComprehension, setShowComprehension] = useState(false);
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);
  const [visitedQuestions, setVisitedQuestions] = useState<Set<number>>(
    new Set()
  );

  const exam = useSelector((state: RootState) => state.exam.data);
  const { access_token } = useSelector((state: RootState) => state.auth);

  const router = useRouter();
  const dispatch = useDispatch();

  const { loading, error, sendRequest } = useApiHandler();

  const questions = exam?.questions || [];
  const totalQuestions = exam?.questions_count || 0;

  const handleSubmit = () => setShowSubmitDialog(true);
  const confirmSubmit = () => {
    const answersArray = questions.map((q: any) => ({
      question_id: q.question_id,
      selected_option_id: selectedAnswers[q.question_id] ?? null,
    }));

    const formData = new FormData();
    formData.append("answers", JSON.stringify(answersArray));

    sendRequest({
      url: "/api/answers/submit",
      data: formData,
      headers: { Authorization: `Bearer ${access_token}` },
      onSuccess: (res) => {
        dispatch(setResult(res));
        router.push("/exam/result");
      },
    });
  };

  const markedCount = markedForReview.size;

  if (!exam || questions.length === 0) {
    return <div className="text-center py-10">Loading questions...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row lg:h-[calc(100vh-80px)] overflow-x-hidden overflow-y-auto no-scrollbar">
      <LeftSection
        questions={questions}
        totalQuestions={totalQuestions}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        selectedAnswers={selectedAnswers}
        setSelectedAnswers={setSelectedAnswers}
        markedForReview={markedForReview}
        setMarkedForReview={setMarkedForReview}
        handleSubmit={handleSubmit}
        setShowComprehension={setShowComprehension}
        visitedQuestions={visitedQuestions}
        setVisitedQuestions={setVisitedQuestions}
      />

      <div className="h-[2px] md:w-[2px] bg-[#E9EBEC] md:h-[95%] w-[95%] self-center my-1 md:mx-1"></div>

      <RightSidebar
        questions={questions}
        totalQuestions={totalQuestions}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        selectedAnswers={selectedAnswers}
        markedForReview={markedForReview}
        visitedQuestions={visitedQuestions}
        timer={<Timer />}
      />

      <ComprehensionDialog
        open={showComprehension}
        onClose={() => setShowComprehension(false)}
        comprehension={questions[currentQuestion]?.comprehension}
      />

      <SubmitDialog
        open={showSubmitDialog}
        onClose={() => setShowSubmitDialog(false)}
        onConfirm={confirmSubmit}
        totalQuestions={questions.length}
        answeredCount={Object.keys(selectedAnswers).length}
        remainingTime={<Timer />}
        markedCount={markedCount}
      />
    </div>
  );
}
