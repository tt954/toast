import { defineCollection, z } from "astro:content";

import { file, glob } from "astro/loaders";

const post = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/posts" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
  }),
});

const project = defineCollection({
  loader: file("./src/data/projects.json"),
  schema: z.object({
    name: z.string(),
    src: z.string(),
    description: z.string(),
  }),
});

export const collections = { post, project };
