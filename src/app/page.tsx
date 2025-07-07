import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Quality Resources",
    shortDescription: "Access a vast digital library of eBooks, video lectures, and practice quizzes.",
    fullDescription: "Dive into our extensive digital library, meticulously curated to support the curriculum for grades 1 through 10. Forget the endless search for reliable study material; we provide a vast collection of eBooks, engaging video lectures from expert educators, and interactive practice quizzes to test your knowledge. Whether you need help with complex math problems or want to explore the depths of Indian history, everything you need is organized and available in one place, completely free of charge."
  },
  {
    title: "Career Guidance",
    shortDescription: "Get a personalized AI-generated career roadmap and connect with mentors.",
    fullDescription: "Feeling uncertain about your future career path is normal, but you don't have to figure it out alone. Our innovative platform uses AI-powered tools to analyze your unique strengths, skills, and interests. Based on this, we generate a personalized career roadmap with clear, actionable milestones. Connect with experienced mentors who can provide real-world insights and guidance, helping you build confidence and navigate the journey towards a fulfilling career you're truly passionate about."
  },
  {
    title: "Supportive Community",
    shortDescription: "Join discussion forums and collaborate with a network of peers and mentors.",
    fullDescription: "Education is more powerful when it's a shared experience. Our platform is designed to bridge the digital and community gap for rural students by connecting you with a vibrant network of peers and dedicated mentors. Join discussion forums, participate in group study sessions, ask questions, and share your knowledge. This supportive environment ensures you stay motivated, learn from others, and build lasting connections that will help you succeed both in and out of the classroom."
  }
];


const LandingPageHeader = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-700 bg-zinc-900 text-white">
            <div className="container flex h-16 items-center">
                <div className="mr-auto flex items-center">
                    <Link href="/dashboard" className="flex items-center gap-2 mr-6">
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

        {/* Features Section */}
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
                How We Help You Succeed
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We address the key challenges in rural education with a
                comprehensive platform. Click a card to learn more.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                    <Dialog key={index}>
                        <DialogTrigger asChild>
                            <Card className="flex flex-col text-center p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-xl">
                                <CardHeader>
                                    <CardTitle className="font-headline text-2xl">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground">{feature.shortDescription}</p>
                                </CardContent>
                            </Card>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle className="font-headline text-2xl">{feature.title}</DialogTitle>
                                <DialogDescription className="text-base text-muted-foreground pt-4 text-left">
                                    {feature.fullDescription}
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                ))}
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
