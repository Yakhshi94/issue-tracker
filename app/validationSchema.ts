import { z } from "zod";

export const createIssueSchema = z.object({
    title: z.string().min(1, 'Field can not be empty').max(255),
    description: z.string().min(1, "Required ...")
});