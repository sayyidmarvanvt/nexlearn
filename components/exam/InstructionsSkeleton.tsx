export default function InstructionsSkeleton() {
  return (
    <main className="px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-4 animate-pulse">
      <div className="max-w-xl mx-auto">
        {/* Exam title skeleton */}
        <div className="h-7 sm:h-8 w-2/3 mx-auto bg-gray-200 rounded mb-6" />

        {/* Exam stats card skeleton */}
        <div className="bg-white rounded-sm shadow-md border border-gray-200 p-5 sm:p-6 mb-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            <div className="flex flex-col items-center space-y-2">
              <div className="h-3 w-16 bg-gray-200 rounded" />
              <div className="h-6 w-10 bg-gray-200 rounded" />
            </div>
            <div className="flex flex-col items-center space-y-2 sm:border-x border-gray-200">
              <div className="h-3 w-16 bg-gray-200 rounded" />
              <div className="h-6 w-10 bg-gray-200 rounded" />
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="h-3 w-16 bg-gray-200 rounded" />
              <div className="h-6 w-10 bg-gray-200 rounded" />
            </div>
          </div>
        </div>

        {/* Instructions section title */}
        <div className="h-4 w-24 bg-gray-200 rounded mb-3" />

        {/* List of instructions skeleton */}
        <ol className="space-y-3 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i} className="flex gap-2 sm:gap-3 items-start">
              <div className="h-3 w-3 bg-gray-300 rounded-full mt-1" />
              <div className="flex-1 space-y-2">
                <div className="h-3 w-full bg-gray-200 rounded" />
                <div className="h-3 w-5/6 bg-gray-200 rounded" />
              </div>
            </li>
          ))}
        </ol>

        {/* Start button skeleton */}
        <div className="flex justify-center">
          <div className="h-11 w-full sm:w-52 bg-gray-200 rounded-lg" />
        </div>
      </div>
    </main>
  );
}
