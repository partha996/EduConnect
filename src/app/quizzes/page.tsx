import { PageHeader } from "@/components/layout/PageHeader";
import { QuizCard } from "@/components/quizzes/QuizCard";
import { quizzes } from "@/lib/mock-data";

export default function QuizzesPage() {
  return (
    <>
      <PageHeader
        title="Interactive Quizzes"
        description="Test your knowledge and track your progress with our gamified quizzes."
      />
      <div className="flex-1 overflow-auto p-4 md:p-6">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {quizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
      </div>
    </>
  );
}
