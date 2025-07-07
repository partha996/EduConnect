import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock } from "lucide-react";
import type { CareerRoadmapOutput } from "@/ai/flows/generate-career-roadmap";

type RoadmapDisplayProps = {
  roadmapData: CareerRoadmapOutput;
};

type Milestone = {
  title: string;
  description: string;
  timeline: string;
};

// Simple markdown parser for the expected format
function parseRoadmap(markdown: string): Milestone[] {
  const milestones: Milestone[] = [];
  const milestoneRegex = /##\s*(.*?)\n\s*Description:\s*(.*?)\n\s*Timeline:\s*(.*?)(?=\n##|$)/gs;
  
  let match;
  while ((match = milestoneRegex.exec(markdown)) !== null) {
    milestones.push({
      title: match[1].trim(),
      description: match[2].trim(),
      timeline: match[3].trim(),
    });
  }

  // Fallback for slightly different formats
  if (milestones.length === 0) {
      const genericBlocks = markdown.split('## ').slice(1);
      genericBlocks.forEach(block => {
          const lines = block.split('\n').filter(line => line.trim() !== '');
          if(lines.length > 1) {
              const title = lines[0].trim();
              let description = '';
              let timeline = 'N/A';

              lines.slice(1).forEach(line => {
                  if(line.toLowerCase().includes('description:')) {
                      description = line.replace(/description:/i, '').trim();
                  } else if (line.toLowerCase().includes('timeline:')) {
                      timeline = line.replace(/timeline:/i, '').trim();
                  } else {
                      description += (description ? ' ' : '') + line.trim();
                  }
              });
              
              milestones.push({title, description, timeline});
          }
      })
  }
  
  return milestones;
}

export function RoadmapDisplay({ roadmapData }: RoadmapDisplayProps) {
  const milestones = parseRoadmap(roadmapData.roadmap);

  if (milestones.length === 0) {
    // Fallback to display raw markdown if parsing fails
    return (
        <Card className="mt-8">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Your Personalized Roadmap</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
                <pre className="whitespace-pre-wrap font-body text-sm">{roadmapData.roadmap}</pre>
            </CardContent>
        </Card>
    )
  }

  return (
    <div className="mt-8">
        <h2 className="font-headline text-3xl text-center mb-6">Your Personalized Roadmap</h2>
        <div className="relative space-y-8 pl-8">
            {/* Vertical line */}
            <div className="absolute left-12 top-2 bottom-2 w-0.5 bg-primary/20" />

            {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start">
                    <div className="absolute left-12 top-5 -translate-x-1/2 z-10 bg-background p-1 rounded-full">
                        <div className="h-4 w-4 bg-primary rounded-full" />
                    </div>
                    <Card className="w-full ml-8">
                        <CardHeader>
                            <CardTitle className="font-headline">{milestone.title}</CardTitle>
                            <CardDescription className="flex items-center gap-2 pt-1 text-sm">
                                <Clock className="h-4 w-4" />
                                {milestone.timeline}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{milestone.description}</p>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
    </div>
  );
}
