import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { QuizInterface } from "@/components/quizzes/QuizInterface";
import { findQuizById } from "@/lib/mock-data";

export default function TakeQuizPage({ params }: { params: { id: string } }) {
  const quiz = findQuizById(params.id);

  if (!quiz) {
    notFound();
  }

  return (
    <div className="flex flex-col h-full">
      <PageHeader
        title={quiz.title}
        description={`A ${quiz.level} quiz on ${quiz.subject}.`}
      />
      <div className="flex-1 flex items-center justify-center p-4 md:p-6">
        <QuizInterface quiz={quiz} />
      </div>
    </div>
  );
}
