"use client";

import { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { RoadmapForm } from "@/components/career/RoadmapForm";
import { RoadmapDisplay } from "@/components/career/RoadmapDisplay";
import { generateCareerRoadmap } from "@/ai/flows/generate-career-roadmap";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import type { CareerRoadmapOutput } from "@/ai/flows/generate-career-roadmap";

export type FormValues = {
  interests: string;
  skills: string;
};

export default function CareerRoadmapPage() {
  const [roadmap, setRoadmap] = useState<CareerRoadmapOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFormSubmit = async (data: FormValues) => {
    setIsLoading(true);
    setRoadmap(null);
    try {
      const result = await generateCareerRoadmap(data);
      setRoadmap(result);
    } catch (error) {
      console.error("Failed to generate career roadmap:", error);
      toast({
        title: "Error",
        description: "Could not generate your career roadmap. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <PageHeader
        title="Personalized Career Roadmap"
        description="Let our AI guide you towards a fulfilling career based on your passions."
      />
      <div className="flex-1 overflow-auto p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          <RoadmapForm onSubmit={handleFormSubmit} isLoading={isLoading} />
          
          {isLoading && (
            <div className="flex flex-col items-center justify-center text-center mt-12">
              <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
              <p className="font-headline text-xl text-primary">Crafting Your Future...</p>
              <p className="text-muted-foreground">This may take a moment. Great things are coming!</p>
            </div>
          )}

          {roadmap && <RoadmapDisplay roadmapData={roadmap} />}
        </div>
      </div>
    </>
  );
}
