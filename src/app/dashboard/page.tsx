import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, BookOpen, ClipboardCheck, Milestone } from "lucide-react";
import { resources, quizzes } from "@/lib/mock-data";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Welcome back!"
        description="Here's a snapshot of your learning journey today."
      />
      <div className="flex-1 overflow-auto p-4 md:p-6 space-y-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-headline">Learning Progress</CardTitle>
              <CardDescription>
                You've completed 3 out of 5 subjects this week. Keep it up!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ProgressItem subject="Physics" value={80} />
                <ProgressItem subject="Mathematics" value={60} />
                <ProgressItem subject="Chemistry" value={40} />
                <ProgressItem subject="History" value={0} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Recent Quiz Scores</CardTitle>
              <CardDescription>Your latest quiz results.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <QuizScoreItem title="Calculus Challenge" score={85} />
                <QuizScoreItem title="Newtonian Physics" score={92} />
                <QuizScoreItem title="Organic Chemistry" score={75} />
              </div>
              <Link href="/quizzes">
                <Button variant="outline" className="w-full mt-4">
                  View All Quizzes <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2">
                    <Milestone className="text-primary"/>
                    Your Career Roadmap
                </CardTitle>
                <CardDescription>
                  Discover your future path. Get a personalized, AI-generated career
                  roadmap.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-center items-center text-center">
                 <Milestone className="w-16 h-16 text-primary/20 mb-4" />
                <Link href="/career-roadmap">
                  <Button>
                    Generate Your Roadmap
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2">
                    <BookOpen className="text-primary"/>
                    Featured Resources
                </CardTitle>
                 <CardDescription>
                  Handpicked resources to boost your learning.
                </CardDescription>
              </CardHeader>
              <CardContent>
                 <div className="space-y-4">
                    {resources.slice(0, 3).map((resource) => (
                        <Link href="/resources" key={resource.id} className="flex items-center gap-4 p-2 rounded-lg hover:bg-accent/50 transition-colors">
                             <Image src={resource.imageUrl} alt={resource.title} width={60} height={40} className="rounded-md object-cover" data-ai-hint={resource.aiHint} />
                            <div>
                                <p className="font-semibold">{resource.title}</p>
                                <p className="text-sm text-muted-foreground">{resource.category}</p>
                            </div>
                            <ArrowRight className="ml-auto h-5 w-5 text-muted-foreground"/>
                        </Link>
                    ))}
                 </div>
              </CardContent>
            </Card>
        </div>
      </div>
    </>
  );
}

function ProgressItem({ subject, value }: { subject: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{subject}</span>
        <span className="text-sm font-medium text-primary">{value}%</span>
      </div>
      <Progress value={value} />
    </div>
  );
}

function QuizScoreItem({ title, score }: { title: string; score: number }) {
  return (
    <div className="flex items-center justify-between p-2 rounded-md hover:bg-accent/50">
      <div className="flex items-center gap-3">
        <ClipboardCheck className="h-5 w-5 text-primary" />
        <span className="font-medium">{title}</span>
      </div>
      <span className="font-bold text-lg text-primary">{score}</span>
    </div>
  );
}
