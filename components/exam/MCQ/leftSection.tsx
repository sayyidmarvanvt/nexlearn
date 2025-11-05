"use client";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function LeftSection({
  questions,
  totalQuestions,
  currentQuestion,
  setCurrentQuestion,
  selectedAnswers,
  setSelectedAnswers,
  markedForReview,
  setMarkedForReview,
  handleSubmit,
  setShowComprehension,
  visitedQuestions,
  setVisitedQuestions,
}: any) {
  const questionId = questions[currentQuestion]?.question_id;

  // Mark question as visited when it's displayed
  useEffect(() => {
    if (questionId && !visitedQuestions.has(questionId)) {
      const newVisited = new Set(visitedQuestions);
      newVisited.add(questionId);
      setVisitedQuestions(newVisited);
    }
  }, [questionId, visitedQuestions, setVisitedQuestions]);

  // Handle option selection - store option.id (not array index)
  const handleSelectAnswer = (optionId: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionId, // Store the actual option.id
    });
  };

  // Clear selected answer for current question
  const handleClearResponse = () => {
    const newAnswers = { ...selectedAnswers };
    delete newAnswers[questionId];
    setSelectedAnswers(newAnswers);
  };

  // Toggle mark for review using question_id (not array index)
  const toggleMarkForReview = () => {
    const updated = new Set(markedForReview);
    if (updated.has(questionId)) {
      updated.delete(questionId);
    } else {
      updated.add(questionId);
    }
    setMarkedForReview(updated);
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1)
      setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const isMarked = markedForReview.has(questionId);
  const selectedOptionId = selectedAnswers[questionId];

  return (
    <div className="w-full lg:w-[55%] flex flex-col overflow-y-auto no-scrollbar px-4 py-3">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-base sm:text-lg font-semibold text-brand">
          Ancient Indian History MCQ
        </h1>
        <span className="text-xs sm:text-sm font-medium text-gray-600 border bg-white px-2 py-1 rounded">
          {currentQuestion + 1}/{totalQuestions}
        </span>
      </div>

      {/* Question Box */}
      <div className="bg-white border border-gray-300 rounded-lg p-4 mb-4">
        {questions[currentQuestion]?.comprehension && (
          <Button
            className="bg-[#177A9C] hover:bg-[#145f7a] text-white px-3 py-2 mb-3 text-xs md:text-sm"
            onClick={() => setShowComprehension(true)}
          >
            📄 Read Comprehensive Paragraph ▶
          </Button>
        )}
        <p className="text-sm md:text-base font-medium text-gray-900 mb-3">
          {currentQuestion + 1}. {questions[currentQuestion]?.question}
        </p>

        {questions[currentQuestion]?.image && (
          <img
            src={questions[currentQuestion].image}
            alt="Question"
            className="mt-3 max-w-full h-auto rounded"
          />
        )}
      </div>

      {/* Options */}
      <div className="mb-6 space-y-2">
        {questions[currentQuestion]?.options?.map((option: any) => {
          const isSelected = selectedOptionId === option.id;

          return (
            <label
              key={option.id}
              className={`flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer transition ${
                isSelected
                  ? "bg-blue-50 border-blue-500 border-2"
                  : "bg-white border-gray-300 hover:bg-gray-50"
              }`}
            >
              <input
                type="radio"
                name={`question-${questionId}`}
                checked={isSelected}
                onChange={() => handleSelectAnswer(option.id)}
                className="w-5 h-5 accent-blue-600"
              />
              <span className={isSelected ? "font-medium" : ""}>
                {option.option}
              </span>

              {option.image && (
                <img
                  src={option.image}
                  alt="Option"
                  className="ml-auto max-w-xs h-auto rounded"
                />
              )}
            </label>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pb-3">
        <Button
          onClick={toggleMarkForReview}
          className={`py-5 text-xs md:text-base ${
            isMarked
              ? "bg-purple-700 hover:bg-purple-800"
              : "bg-purple-600 hover:bg-purple-700"
          } text-white`}
        >
          Mark for review
        </Button>

        <Button
          variant="outline"
          disabled={currentQuestion === 0}
          onClick={handlePrev}
          className="border-2 border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-700 py-5 text-xs md:text-base disabled:opacity-50"
        >
          Previous
        </Button>

        <Button
          onClick={handleNext}
          disabled={currentQuestion === totalQuestions - 1}
          className="w-full bg-[#177A9C] hover:bg-[#136b8a] text-white text-base py-5 rounded-md border-2 border-gray-300 disabled:opacity-50"
        >
          Next
        </Button>

        <Button
          onClick={handleSubmit}
          className="w-full bg-green-600 hover:bg-green-700 text-white text-base py-5 rounded-md border-2 border-gray-300"
        >
          Submit
        </Button>
      </div>

      {/* Clear Response Button (Optional - uncomment if needed) */}
      {/* <Button
        onClick={handleClearResponse}
        disabled={selectedOptionId === undefined}
        variant="outline"
        className="w-full mt-2 border-red-300 text-red-600 hover:bg-red-50 disabled:opacity-50"
      >
        Clear Response
      </Button> */}
    </div>
  );
}
