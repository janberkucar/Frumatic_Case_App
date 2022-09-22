import * as trpc from "@trpc/server";
import { prisma } from "../../db/client";
import superjson from "superjson";
import { z } from "zod";

export const genresRouter = trpc
  .router()
  .transformer(superjson)
  .query("getAll", {
    async resolve() {
      return {
        genres: await prisma.genre.findMany(),
      };
    },
  })
  .query("getById", {
    input: z.object({ id: z.string() }),
    async resolve({ input }) {
      return await prisma.genre.findFirst({
        where: {
          genre_id: input.id,
        },
      });
    },
  });

// export type definition of API
export type GenresRouter = typeof genresRouter;
