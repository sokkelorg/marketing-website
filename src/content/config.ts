import { defineCollection, z } from 'astro:content';

const jobPostings = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    datePosted: z.date(),
    validThrough: z.date().or(z.string()),
    jobImmediateStart: z.boolean().optional(),
    incentiveCompensation: z.string().optional(),
    employmentType: z.string(),
    location: z.object({
      name: z.string(),
      address: z.object({
        addressLocality: z.string(),
        addressCountry: z.string(),
      }),
    }),
  }),
});

export const collections = {
  'job-postings': jobPostings,
};
