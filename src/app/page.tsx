import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BookOpen, Lightbulb, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

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

        {/* The Challenge Section */}
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">The Challenge in Rural Education</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Students in rural India face significant hurdles that limit their potential. We are here to address these challenges head-on.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <ChallengeCard
                icon={<BookOpen className="h-8 w-8 text-primary" />}
                title="Limited Access"
                description="Lack of quality educational materials and infrastructure in remote areas."
              />
              <ChallengeCard
                icon={<Lightbulb className="h-8 w-8 text-primary" />}
                title="Lack of Guidance"
                description="Absence of proper career counseling and mentorship to guide students."
              />
              <ChallengeCard
                icon={<Users className="h-8 w-8 text-primary" />}
                title="Digital Divide"
                description="Poor internet connectivity and lack of access to digital learning tools."
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

function ChallengeCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="text-left p-6 bg-card border hover:shadow-lg transition-shadow">
        <CardContent className="flex flex-col items-start gap-4 p-0">
            <div className="bg-primary/10 p-3 rounded-lg">
                {icon}
            </div>
            <h3 className="text-xl font-bold font-headline">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </CardContent>
    </Card>
  );
}
