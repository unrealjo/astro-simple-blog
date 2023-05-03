import { z, defineCollection } from 'astro:content';
const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});
export const collections = {
  'posts': postsCollection,
};