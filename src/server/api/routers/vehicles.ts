import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export type Vehicle = {
  id: string;
  createdAt: Date;
  manufacturer: string;
  model: string;
  year: number;
  engineSize: number;
  registration: string;
  colour: string;
  fuelType: string;
  bodyType: string;
  ownerId: string;
};

export const vehiclesRouter = createTRPCRouter({
  getVehiclesByUser: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const vehicles = await ctx.db.vehicle.findMany({
        where: {
          ownerId: input,
        },
      });

      return vehicles;
    }),

  addVehicle: publicProcedure
    .input(
      z.object({
        manufacturer: z.string(),
        model: z.string(),
        year: z.number(),
        engineSize: z.number(),
        registration: z.string(),
        colour: z.string(),
        fuelType: z.string(),
        bodyType: z.string(),
        ownerId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      if (input === null) return;
      const vehicle = await ctx.db.vehicle.create({
        data: { ...input },
      });

      return vehicle;
    }),
});
