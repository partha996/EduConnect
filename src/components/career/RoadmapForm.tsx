"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import type { FormValues } from "@/app/career-roadmap/page";
import { Lightbulb, Loader2 } from "lucide-react";

const formSchema = z.object({
  interests: z.string().min(10, "Please describe your interests in a bit more detail."),
  skills: z.string().min(10, "Please describe your skills in a bit more detail."),
});

type RoadmapFormProps = {
  onSubmit: (data: FormValues) => void;
  isLoading: boolean;
};

export function RoadmapForm({ onSubmit, isLoading }: RoadmapFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: "",
      skills: "",
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Tell Us About Yourself</CardTitle>
        <CardDescription>
          The more we know, the better we can tailor your career path.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="interests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Interests</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Solving math puzzles, learning about space, building things, farming, helping my community..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="skills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Skills</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Good at physics, quick learner, good with my hands, can speak multiple languages..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading} className="ml-auto">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Lightbulb className="mr-2 h-4 w-4" />
                  Generate Roadmap
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
