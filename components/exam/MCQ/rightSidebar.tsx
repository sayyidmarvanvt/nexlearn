"use client";

interface RightSidebarProps {
  questions: any[];
  totalQuestions: number;
  currentQuestion: number;
  setCurrentQuestion: (index: number) => void;
  selectedAnswers: Record<number, number>;
  markedForReview: Set<number>;
  visitedQuestions: Set<number>;
  timer: React.ReactNode;
}
export default function RightSidebar({
  questions = [],
  totalQuestions,
  currentQuestion,
  setCurrentQuestion,
  selectedAnswers,
  markedForReview,
  visitedQuestions,
  timer,
}: RightSidebarProps) {
  const getStatusColor = (questionId: number, isVisited: boolean) => {
    const hasAnswer = selectedAnswers[questionId] !== undefined;
    const isMarked = markedForReview.has(questionId);

    // Priority order: Answered+Marked > Marked > Answered > Visited > Not Visited
    if (hasAnswer && isMarked) return "bg-purple-700 text-white"; // Answered + Marked
    if (isMarked) return "bg-purple-500 text-white"; // Marked only
    if (hasAnswer) return "bg-green-500 text-white"; // Answered only
    if (isVisited) return "bg-red-500 text-white"; // Visited but unanswered
    return "bg-white border border-gray-300 text-gray-700"; // Not visited
  };

  return (
    <div className="w-full lg:w-[45%] px-4 py-3">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs md:text-sm font-medium text-gray-700 ">
          Question No. Sheet:
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs md:text-sm font-medium text-gray-700">
            Remaining:
          </span>
          <div className="bg-slate-900 text-white text-sm font-medium px-3 py-1 rounded whitespace-nowrap">
            🕐 {timer}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 mb-4">
        {questions.length > 0 ? (
          questions.map((q: any, index: number) => {
            const questionId = q.question_id;
            const isVisited = visitedQuestions.has(questionId);

            return (
              <button
                key={questionId}
                onClick={() => setCurrentQuestion(index)}
                className={`aspect-square text-[10px] font-semibold rounded transition-all ${getStatusColor(
                  questionId,
                  isVisited
                )} ${
                  currentQuestion === index
                    ? "ring-2 ring-offset-2 ring-slate-900"
                    : ""
                } hover:opacity-80`}
                title={`Question ${index + 1}`}
              >
                {index + 1}
              </button>
            );
          })
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            Loading questions...
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 text-xs py-3 whitespace-nowrap">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded" />
          <span>Attend</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded" />
          <span>Unattended</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-purple-500 rounded" />
          <span>Marked for review</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-purple-700 rounded" />
          <span>Answered and marked for review</span>
        </div>
      </div>
    </div>
  );
}
