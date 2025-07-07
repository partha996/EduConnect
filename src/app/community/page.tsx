import { PageHeader } from "@/components/layout/PageHeader";
import { MentorCard } from "@/components/community/MentorCard";
import { mentors } from "@/lib/mock-data";

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        title="Community & Mentors"
        description="Connect with experienced mentors and a community of learners."
      />
      <div className="flex-1 overflow-auto p-4 md:p-6">
        <div className="mb-8">
          <h2 className="font-headline text-2xl mb-4">Meet Your Mentors</h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mentors.map((mentor) => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-headline text-2xl mb-4">Community Forums</h2>
          <div className="text-center p-8 border-2 border-dashed rounded-lg">
            <p className="text-muted-foreground">Community forums are coming soon!</p>
            <p className="text-sm text-muted-foreground">A place to discuss topics, ask questions, and collaborate.</p>
          </div>
        </div>
      </div>
    </>
  );
}
