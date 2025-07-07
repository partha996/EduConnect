import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, BookOpen, Users, Milestone } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 md:p-8">
      <header className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary mb-2">
          PathshalaConnect
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Empowering rural students with curated resources, personalized career guidance, and a supportive community to unlock their full potential.
        </p>
      </header>

      <main className="w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <FeatureCard
            icon={<BookOpen className="h-8 w-8 text-primary" />}
            title="Resource Library"
            description="Access a vast library of eBooks, videos, and notes tailored to your curriculum."
          />
          <FeatureCard
            icon={<Milestone className="h-8 w-8 text-primary" />}
            title="Career Roadmaps"
            description="Get personalized, AI-powered career guidance based on your unique skills and interests."
          />
          <FeatureCard
            icon={<Rocket className="h-8 w-8 text-primary" />}
            title="Interactive Quizzes"
            description="Test your knowledge with fun, gamified quizzes and track your learning progress."
          />
          <FeatureCard
            icon={<Users className="h-8 w-8 text-primary" />}
            title="Community & Mentors"
            description="Connect with peers, mentors, and teachers in a supportive learning environment."
          />
        </div>

        <div className="text-center">
          <Link href="/dashboard" passHref>
            <Button size="lg" className="font-bold text-lg px-10 py-6">
              Enter the Dashboard
              <Rocket className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            or <Link href="/login" className="underline hover:text-primary">Login</Link> to your account.
          </p>
        </div>
      </main>

      <footer className="mt-12 text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} PathshalaConnect. All rights reserved.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="text-center bg-card/80 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
      <CardHeader>
        <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-2">
          {icon}
        </div>
        <CardTitle className="font-headline text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
