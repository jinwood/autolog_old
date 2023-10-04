import { createTRPCRouter } from "~/server/api/trpc";
import { vehiclesRouter } from "./routers/vehicles";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  vehicles: vehiclesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
