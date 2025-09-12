'use server';

/**
 * @fileOverview A dummy AI tool for generating project tags and summaries.
 *
 * - generateProjectTagsAndSummaries - A function that generates static suggestions for project tags and summaries.
 * - GenerateProjectTagsAndSummariesInput - The input type for the generateProjectTagsAndSummaries function.
 * - GenerateProjectTagsAndSummariesOutput - The return type for the generateProjectTagsAndSummaries function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectTagsAndSummariesInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('A description of the project for which to generate tags and summaries.'),
});

export type GenerateProjectTagsAndSummariesInput = z.infer<
  typeof GenerateProjectTagsAndSummariesInputSchema
>;

const GenerateProjectTagsAndSummariesOutputSchema = z.object({
  tags: z
    .array(z.string())
    .describe('Suggested tags for the project, such as technologies used or project categories.'),
  summary: z.string().describe('A short summary of the project.'),
});

export type GenerateProjectTagsAndSummariesOutput = z.infer<
  typeof GenerateProjectTagsAndSummariesOutputSchema
>;

export async function generateProjectTagsAndSummaries(
  input: GenerateProjectTagsAndSummariesInput
): Promise<GenerateProjectTagsAndSummariesOutput> {
  return generateProjectTagsAndSummariesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectTagsAndSummariesPrompt',
  input: {schema: GenerateProjectTagsAndSummariesInputSchema},
  output: {schema: GenerateProjectTagsAndSummariesOutputSchema},
  prompt: `You are a project management assistant. Given a project description, suggest relevant tags and a short summary.

Description: {{{projectDescription}}}

Tags: ExampleTag1, ExampleTag2
Summary: This is a short summary of the project.

Tags:
Summary:`, // Intentionally left static for the dummy implementation
});

const generateProjectTagsAndSummariesFlow = ai.defineFlow(
  {
    name: 'generateProjectTagsAndSummariesFlow',
    inputSchema: GenerateProjectTagsAndSummariesInputSchema,
    outputSchema: GenerateProjectTagsAndSummariesOutputSchema,
  },
  async input => {
    // Directly return static suggestions without calling the model for the dummy implementation
    return {
      tags: ['Node.js', 'PostgreSQL', 'REST API', 'Docker', 'UX/UI Design'],
      summary: 'A dummy project summary generated for demonstration purposes.',
    };
  }
);
