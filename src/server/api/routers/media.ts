import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export type MediaItem = {
  id: string;
  url: string;
};

export const mediaRouter = createTRPCRouter({
  getMediaByVehicle: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const mediaItems = await ctx.db.mediaItem.findMany({
        where: {
          vehicleId: input,
        },
      });

      return mediaItems;
    }),

  saveMedia: publicProcedure
    .input(
      z.object({
        url: z.string(),
        vehicleId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const media = await ctx.db.mediaItem.create({
        data: { ...input },
      });

      return media;
    }),
});
