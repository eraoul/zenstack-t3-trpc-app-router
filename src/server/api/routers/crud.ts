// import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { createRouter } from "./generated/routers";

export const crudRouter = createRouter(createTRPCRouter, publicProcedure);
