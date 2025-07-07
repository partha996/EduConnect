import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const LandingPageHeader = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-700 bg-zinc-900 text-white">
            <div className="container flex h-16 items-center">
                <div className="mr-auto flex items-center">
                    <Link href="/" className="flex items-center gap-2 mr-6">
                        <GraduationCap className="h-6 w-6 text-primary" />
                        <span className="font-bold text-lg">EduConnect India</span>
                    </Link>
                    <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
                        <Link href="/resources" className="transition-colors text-zinc-300 hover:text-white">Resources</Link>
                        <Link href="/career-roadmap" className="transition-colors text-zinc-300 hover:text-white">Career Roadmap</Link>
                        <Link href="/community" className="transition-colors text-zinc-300 hover:text-white">Community</Link>
                    </nav>
                </div>
                <div className="flex items-center justify-end space-x-2">
                    <Button variant="ghost" className="text-zinc-300 hover:bg-zinc-800 hover:text-white" asChild>
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild>
                      <Link href="/signup">Register</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
};

const FeatureSection = ({
  title,
  description,
  imageUrl,
  imageHint,
  reverse = false,
}: {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  reverse?: boolean;
}) => (
  <div
    className={cn(
      "flex flex-col items-center gap-8 md:gap-16 lg:gap-24",
      reverse ? "md:flex-row-reverse" : "md:flex-row"
    )}
  >
    <div className="md:w-1/2">
      <Image
        src={imageUrl}
        alt={title}
        width={800}
        height={600}
        className="rounded-lg shadow-xl object-cover aspect-[4/3] transition-transform duration-500 ease-in-out hover:scale-105"
        data-ai-hint={imageHint}
      />
    </div>
    <div className="md:w-1/2 text-center md:text-left">
      <h3 className="font-headline text-3xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground text-lg leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <LandingPageHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <h1 className="font-headline text-5xl md:text-6xl font-bold text-foreground mb-4">
                EduConnect India
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Empowering rural students for a brighter future. We provide free educational resources, career guidance, and a supportive community to bridge the gap in rural education.
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/signup">
                    Join Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-card" asChild>
                  <Link href="/resources">
                    Explore Resources
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
                How We Help You Succeed
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We address the key challenges in rural education with a
                comprehensive platform designed to empower students.
              </p>
            </div>
            <div className="space-y-20">
              <FeatureSection
                title="Unlimited Access to Quality Resources"
                description="Forget searching for reliable study material. We provide a vast, curated library of eBooks, video lectures, and practice quizzes for grades 1-10, all completely free. Everything you need is in one place."
                imageUrl="https://placehold.co/800x600"
                imageHint="library books"
              />
              <FeatureSection
                title="Clear Guidance for Your Future"
                description="Don't know what career to pursue? Our AI-powered tools and dedicated mentors help you understand your strengths and interests, guiding you towards a fulfilling career path you're passionate about."
                imageUrl="https://placehold.co/800x600"
                imageHint="compass direction"
                reverse={true}
              />
              <FeatureSection
                title="Bridging the Digital & Community Gap"
                description="Learn and grow with others. Our platform connects you with fellow students and experienced mentors, creating a supportive community where you can ask questions, share knowledge, and stay motivated."
                imageUrl="https://placehold.co/800x600"
                imageHint="students collaborating"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t">
        <div className="container mx-auto py-6 px-4 md:px-6 text-center text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} EduConnect India. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
