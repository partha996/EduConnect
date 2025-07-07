'use server';

/**
 * @fileOverview Generates a personalized career roadmap based on user interests and skills.
 *
 * - generateCareerRoadmap - A function that generates the career roadmap.
 * - CareerRoadmapInput - The input type for the generateCareerRoadmap function.
 * - CareerRoadmapOutput - The return type for the generateCareerRoadmap function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CareerRoadmapInputSchema = z.object({
  interests: z
    .string()
    .describe('A comma-separated list of the student\'s interests.'),
  skills: z.string().describe('A comma-separated list of the student\'s skills.'),
});
export type CareerRoadmapInput = z.infer<typeof CareerRoadmapInputSchema>;

const CareerRoadmapOutputSchema = z.object({
  roadmap: z
    .string()
    .describe(
      'A personalized career roadmap with visual milestone cards, formatted as markdown.'
    ),
});
export type CareerRoadmapOutput = z.infer<typeof CareerRoadmapOutputSchema>;

export async function generateCareerRoadmap(input: CareerRoadmapInput): Promise<CareerRoadmapOutput> {
  return generateCareerRoadmapFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCareerRoadmapPrompt',
  input: {schema: CareerRoadmapInputSchema},
  output: {schema: CareerRoadmapOutputSchema},
  prompt: `You are a career counselor who specializes in creating personalized career roadmaps for students.

  Based on the student's interests and skills, you will suggest a career roadmap with visual milestone cards.
  Format the roadmap as markdown.  Each milestone card should include a title, a brief description, and an estimated timeline.

  Interests: {{{interests}}}
  Skills: {{{skills}}}

  Career Roadmap:
`,
});

const generateCareerRoadmapFlow = ai.defineFlow(
  {
    name: 'generateCareerRoadmapFlow',
    inputSchema: CareerRoadmapInputSchema,
    outputSchema: CareerRoadmapOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
