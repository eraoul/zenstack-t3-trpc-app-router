import { crudRouter } from "./routers/crud";
// import { postRouter } from "~/src/server/api/routers/post";
import { createTRPCRouter } from "~/server/api/trpc";
import { greetRouter } from "./routers/greet";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  // post: postRouter,
  greet: greetRouter,
  crud: crudRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
