import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Rocket, BookOpen, Users, Milestone, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              Unlock Your Potential with EduConnect
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              Empowering rural students with curated resources, personalized career guidance, and a supportive community.
            </p>
            <div className="flex justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
              <Link href="/signup" passHref>
                <Button size="lg" className="font-bold text-lg px-8 py-6">
                  Get Started for Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/dashboard" passHref>
                <Button size="lg" variant="outline" className="font-bold text-lg px-8 py-6">
                  Explore Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 space-y-16">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <Feature
              icon={<BookOpen className="h-10 w-10 text-primary" />}
              title="Vast Resource Library"
              description="Dive into a comprehensive collection of eBooks, video tutorials, and study notes tailored to your curriculum. Everything you need to excel, all in one place."
              imageUrl="https://placehold.co/600x400"
              aiHint="library books"
            />
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <Feature
              icon={<Milestone className="h-10 w-10 text-primary" />}
              title="AI-Powered Career Roadmaps"
              description="Feeling lost about your future? Our intelligent AI analyzes your interests and skills to generate a personalized career roadmap, guiding you step-by-step towards your dream job."
              imageUrl="https://placehold.co/600x400"
              aiHint="path future"
              reverse
            />
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
            <Feature
              icon={<Users className="h-10 w-10 text-primary" />}
              title="Thriving Community & Mentorship"
              description="You're not alone! Connect with a vibrant community of fellow learners, experienced mentors, and supportive teachers. Share knowledge, ask questions, and grow together."
              imageUrl="https://placehold.co/600x400"
              aiHint="community collaboration"
            />
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="w-full py-16 md:py-24 bg-secondary/50">
         <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12 animate-in fade-in duration-700">
                <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Your Journey to Success</h2>
                <p className="text-lg text-muted-foreground">Three simple steps to start your learning adventure with EduConnect.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                  <HowItWorksStep number="01" title="Create Your Account" description="Sign up in minutes and tell us about your learning goals." />
                </div>
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                  <HowItWorksStep number="02" title="Explore & Learn" description="Access unlimited resources, take quizzes, and track your progress." />
                </div>
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
                  <HowItWorksStep number="03" title="Get Guided" description="Generate your career roadmap and connect with mentors for guidance." />
                </div>
            </div>
         </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 animate-in fade-in duration-700">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Loved by Students Like You</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <TestimonialCard
                quote="EduConnect completely changed how I study. The resources are top-notch, and the career roadmap gave me a clear direction for my future."
                name="Riya Sharma"
                role="Class 12 Student"
                avatarUrl="https://placehold.co/100x100"
                aiHint="student portrait"
              />
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              <TestimonialCard
                quote="As someone from a small village, I never thought I'd have access to such high-quality mentorship. It's been a game-changer."
                name="Amit Kumar"
                role="Engineering Aspirant"
                avatarUrl="https://placehold.co/100x100"
                aiHint="student smiling"
              />
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
              <TestimonialCard
                quote="The community is so supportive! Whenever I'm stuck on a problem, there's always someone to help me out on the forum."
                name="Sunita Devi"
                role="Medical Aspirant"
                avatarUrl="https://placehold.co/100x100"
                aiHint="happy student"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA Section */}
      <section className="w-full py-20 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-2xl mx-auto animate-in fade-in duration-700">
                <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Ready to Start Learning?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                    Join thousands of students and take the next step in your educational journey.
                </p>
                <Link href="/signup" passHref>
                <Button size="lg" className="font-bold text-lg px-10 py-6">
                    Sign Up Now <Rocket className="ml-2 h-5 w-5" />
                </Button>
                </Link>
            </div>
        </div>
      </section>

      <footer className="w-full border-t">
        <div className="container mx-auto py-6 px-4 md:px-6 text-center text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} EduConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function Feature({ icon, title, description, imageUrl, aiHint, reverse = false }: { icon: React.ReactNode; title: string; description: string, imageUrl: string, aiHint: string, reverse?: boolean }) {
  return (
    <div className={cn(`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:grid-flow-col-dense' : ''}`)}>
      <div className={cn(`space-y-4 text-center`, reverse ? 'md:col-start-2' : '')}>
        <div className="inline-block bg-primary/10 rounded-lg p-3">
          {icon}
        </div>
        <h3 className="font-headline text-3xl font-bold">{title}</h3>
        <p className="text-muted-foreground text-lg">{description}</p>
        <Button variant="link" className="p-0 h-auto text-lg">Learn More <ArrowRight className="ml-2 h-5 w-5"/></Button>
      </div>
      <div className={cn(reverse ? 'md:col-start-1' : '')}>
          <Image
            src={imageUrl}
            alt={title}
            width={600}
            height={400}
            className="rounded-lg shadow-xl object-cover mx-auto"
            data-ai-hint={aiHint}
          />
      </div>
    </div>
  );
}

function HowItWorksStep({ number, title, description }: { number: string, title: string, description: string }) {
    return (
        <div className="space-y-4">
            <div className="text-5xl font-bold font-headline text-primary/30">{number}</div>
            <h3 className="text-2xl font-bold font-headline">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </div>
    )
}

function TestimonialCard({ quote, name, role, avatarUrl, aiHint }: { quote: string; name: string; role: string, avatarUrl: string, aiHint: string }) {
  return (
    <Card className="bg-card/80 backdrop-blur-sm border-2 border-primary/10 p-6 h-full flex flex-col">
      <CardContent className="p-0 flex-grow">
        <div className="flex mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
        </div>
        <p className="text-muted-foreground italic">&ldquo;{quote}&rdquo;</p>
      </CardContent>
      <CardFooter className="p-0 mt-6">
        <div className="flex items-center gap-4">
          <Image src={avatarUrl} alt={name} width={40} height={40} className="rounded-full" data-ai-hint={aiHint} />
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
