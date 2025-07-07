"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import type { Quiz } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { CheckCircle, XCircle, Award, RotateCw } from "lucide-react";
import Link from "next/link";

export function QuizInterface({ quiz }: { quiz: Quiz }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    Array(quiz.questions.length).fill(null)
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    if (isSubmitted) return;
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSubmit();
    }
  };
  
  const handleSubmit = () => {
    let currentScore = 0;
    for(let i = 0; i < quiz.questions.length; i++) {
        if(selectedAnswers[i] === quiz.questions[i].correctAnswerIndex) {
            currentScore++;
        }
    }
    setScore(currentScore);
    setIsSubmitted(true);
  }

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers(Array(quiz.questions.length).fill(null));
    setIsSubmitted(false);
    setScore(0);
  }

  if (isSubmitted) {
    const percentage = Math.round((score / quiz.questions.length) * 100);
    return (
        <Card className="w-full max-w-2xl text-center">
            <CardHeader>
                <Award className="mx-auto h-16 w-16 text-accent" />
                <CardTitle className="font-headline text-3xl">Quiz Complete!</CardTitle>
                <CardDescription>You have completed the {quiz.title} quiz.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-lg mb-2">Your Score:</p>
                <p className="text-5xl font-bold text-primary">{score} / {quiz.questions.length}</p>
                <p className="text-2xl font-semibold text-muted-foreground mt-2">({percentage}%)</p>
            </CardContent>
            <CardFooter className="flex-col gap-4">
                <Button onClick={handleRestart}>
                    <RotateCw className="mr-2 h-4 w-4" />
                    Restart Quiz
                </Button>
                <Link href="/quizzes">
                    <Button variant="outline">Back to All Quizzes</Button>
                </Link>
            </CardFooter>
        </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <div className="mb-2">
            <p className="text-sm text-muted-foreground">Question {currentQuestionIndex + 1} of {quiz.questions.length}</p>
            <Progress value={progress} className="mt-1" />
        </div>
        <CardTitle className="font-headline text-2xl">{currentQuestion.questionText}</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedAnswers[currentQuestionIndex]?.toString()}
          onValueChange={(value) => handleAnswerSelect(parseInt(value))}
          className="space-y-3"
        >
          {currentQuestion.options.map((option, index) => (
            <Label
              key={index}
              htmlFor={`option-${index}`}
              className={cn(
                "flex items-center gap-4 rounded-lg border p-4 cursor-pointer transition-colors",
                "hover:bg-accent/50",
                 selectedAnswers[currentQuestionIndex] === index && "border-primary bg-primary/10"
              )}
            >
              <RadioGroupItem value={index.toString()} id={`option-${index}`} />
              {option}
            </Label>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={handleNext} disabled={selectedAnswers[currentQuestionIndex] === null}>
          {currentQuestionIndex < quiz.questions.length - 1 ? "Next" : "Submit"}
        </Button>
      </CardFooter>
    </Card>
  );
}
