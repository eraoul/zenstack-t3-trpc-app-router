import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const greetRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(async ({ input, ctx }) => {
      return {
        greeting: `Hello ${input.text}, there are in total ${await ctx.rawPrisma.post.count()} posts`,
      };
    }),
});
