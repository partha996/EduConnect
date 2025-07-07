import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Puzzle } from "lucide-react";
import type { Quiz } from "@/lib/mock-data";

export function QuizCard({ quiz }: { quiz: Quiz }) {
  return (
    <Link href={`/quizzes/${quiz.id}`} className="block">
      <Card className="flex flex-col overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 shadow-md hover:shadow-xl h-full">
        <CardHeader className="p-0">
          <Image
            src={quiz.imageUrl}
            alt={quiz.title}
            width={600}
            height={400}
            className="object-cover w-full h-40"
            data-ai-hint={quiz.aiHint}
          />
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <Badge variant="outline" className="mb-2">{quiz.subject}</Badge>
          <CardTitle className="font-headline text-lg mb-1">{quiz.title}</CardTitle>
          <CardDescription className="text-sm flex items-center gap-4">
            <span>{quiz.questionCount} Questions</span>
            <span className="flex items-center gap-1">
                <Puzzle className="h-4 w-4" /> {quiz.level}
            </span>
          </CardDescription>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button className="w-full" asChild>
            <span>
              Start Quiz <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
