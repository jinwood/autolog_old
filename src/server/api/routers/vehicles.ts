import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const vehiclesRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.vehicle.findMany();
  }),
});