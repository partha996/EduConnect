import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { MentorCard } from "@/components/community/MentorCard";
import { mentors } from "@/lib/mock-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>Discord</title>
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4464.8257-.618 1.2529a17.2963 17.2963 0 00-5.4884 0 17.5755 17.5755 0 00-.618-1.2529.0741.0741 0 00-.0785-.0371A19.7364 19.7364 0 003.6796 4.3698a.0741.0741 0 00-.0371.0785C3.7255 6.9482 3.342 10.7334 3.655 13.6558a.0741.0741 0 00.0617.0741c2.11.3753 4.2201.6722 6.2527.7478a.0741.0741 0 00.0617-.0371c.1472-.211.2944-.422.4416-.6331a.0741.0741 0 00-.0296-.0929 10.9579 10.9579 0 01-1.8588-.8257.0741.0741 0 01-.0074-.1113c.0222-.0222.0444-.0444.0592-.0666a.0741.0741 0 01.0741-.0148c.6436.2944 1.2946.5414 1.9604.7404a.0741.0741 0 00.0863-.0444c.0592-.1113.1184-.2226.1702-.3339a.0741.0741 0 00-.0148-.0863c-.4735-.2226-.9544-.467-1.428-.7329a.0741.0741 0 01-.0222-.1039c.0148-.0222.0296-.0371.0444-.0592a.0741.0741 0 01.0863-.0074c2.8388 1.1837 5.6191 1.5936 8.1819.534a.0741.0741 0 00.0617-.0666c.313-2.9224-.0704-6.7076.0148-9.5886a.0741.0741 0 00-.0371-.0785zM12.0001 15.6531c-1.1837 0-2.1573-1.0136-2.1573-2.26s.9736-2.26 2.1573-2.26c1.1837 0 2.1573 1.0136 2.1573 2.26s-.9736 2.26-2.1573 2.26zm4.6853 0c-1.1837 0-2.1573-1.0136-2.1573-2.26s.9736-2.26 2.1573-2.26c1.1837 0 2.1573 1.0136 2.1573 2.26s-.9662 2.26-2.1573 2.26z" fill="currentColor"/>
    </svg>
);

const RedditIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>Reddit</title>
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.832 13.123c-.15.143-.347.216-.546.216-.184 0-.374-.063-.523-.193l-1.92-1.603c-.304-.254-.759-.228-1.03.06-.02.022-.04.044-.058.067a4.91 4.91 0 0 1-2.57 1.133l.533 1.832.006.022.01.034.015.05.016.05.013.04.004.013.003.01.002.003c.068.22.25.396.476.473.22.073.46.04.655-.09l4.088-2.26c.27-.148.428-.43.428-.73s-.16-.583-.43-.73zm-6.26-3.832c.305-.252.758-.228 1.03.06.02.022.04.043.058.066l1.92 1.603c.3.252.759.228 1.03-.06s.28-.714-.02-1.004l-1.92-1.603a1.23 1.23 0 0 0-1.03-.06c-.02.022-.04.044-.058.067-.3.29-.28.715.02 1.004zM12 2.5c.348 0 .68.016 1.002.046a.54.54 0 0 1 .454.583c-.02.167-.02.336-.02.504 0 .807.054 1.597.16 2.37.106.774.267 1.52.48 2.22.455 1.485.2 2.813-1.003 3.6-1.12.727-2.733.56-3.664-.474-.863-.954-1.1-2.25-.644-3.645.215-.65.48-1.3.692-1.95.14-.43.235-.86.284-1.284.05-.425.074-.85.074-1.272s-.014-.263-.03-.393a.54.54 0 0 1 .453-.583A9.873 9.873 0 0 1 12 2.5zm-3.344 7.643c.123.418.3.818.52 1.2.22.382.477.744.767 1.08.435.503.95.842 1.573.842s1.138-.34 1.573-.842c.29-.336.547-.698.767-1.08.22-.382-.397-.782-.52-1.2.146-.497.234-1.02.234-1.573s-.088-1.076-.234-1.573c-.123-.418-.3-.818-.52-1.2-.22-.382-.477-.744-.767-1.08C13.138 4.215 12.623 3.876 12 3.876s-1.138.34-1.573.842c-.29.336-.547.698-.767 1.08-.22.382-.397.782-.52 1.2-.146.497-.234 1.02-.234 1.573s.088 1.076.234 1.573z" fill="currentColor"/>
    </svg>
);

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        title="Community & Mentors"
        description="Connect with experienced mentors and a community of learners."
      />
      <div className="flex-1 overflow-auto p-4 md:p-6">
        <div className="mb-12">
          <h2 className="font-headline text-3xl mb-6 text-center md:text-left">Meet Your Mentors</h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mentors.map((mentor) => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-headline text-3xl mb-6 text-center">Join the Conversation</h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <Card className="h-full hover:border-primary/50 hover:bg-accent/20 transition-all transform hover:-translate-y-1">
                <CardHeader className="flex-row items-start gap-4">
                  <DiscordIcon className="h-10 w-10 text-[#5865F2]" />
                  <div>
                    <CardTitle className="font-headline text-xl">Discord Community</CardTitle>
                    <CardDescription>Chat in real-time with peers and mentors.</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Join Discord Server <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <Card className="h-full hover:border-primary/50 hover:bg-accent/20 transition-all transform hover:-translate-y-1">
                <CardHeader className="flex-row items-start gap-4">
                    <RedditIcon className="h-10 w-10 text-[#FF4500]" />
                    <div>
                        <CardTitle className="font-headline text-xl">Reddit Forum</CardTitle>
                        <CardDescription>Discuss topics and share resources.</CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Visit our Subreddit <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
