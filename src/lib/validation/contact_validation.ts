import { z } from "zod";

export const contact_schema = z.object({
  name: z.string().min(2, { message: "name must be at least 2 characters" }),
  email: z.string().email({ message: "Please provide a valid email address" }),
  subject: z.string().min(10, {
    message: "The subject must be at least 10 characters",
  }),
  message: z.string().min(20, {
    message: "The message must be at least 20 characters long",
  }),
});

export type Contact = z.infer<typeof contact_schema>;
