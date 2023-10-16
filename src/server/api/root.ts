import { createTRPCRouter } from "~/server/api/trpc";
import { vehiclesRouter } from "./routers/vehicles";
import { mediaRouter } from "./routers/media";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  vehicles: vehiclesRouter,
  mediaItems: mediaRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
