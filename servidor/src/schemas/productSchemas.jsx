import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(1).max(100),
  height: z.number().min(0).max(9999),
  width: z.number().min(0).max(9999),
  depth: z.number().min(0).max(9999),
  price: z.number().min(0.01),
  description: z.string().min(1),
  categoryId: z.number().int().positive(),
  image: z.any(), 
});