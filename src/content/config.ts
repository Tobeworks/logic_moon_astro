import { defineCollection, z } from 'astro:content';

const cover_art = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        alt: z.string(),
        description: z.string().optional(),
        tags: z.array(z.string()).optional(),
        date: z.date().optional(),
    })
});

export const collections = {
    cover_art,
};