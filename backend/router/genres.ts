import * as trpc from "@trpc/server";
import { prisma } from "../../db/client";
import superjson from "superjson";

export const genresRouter = trpc
  .router()
  .transformer(superjson)
  .query("getAll", {
    async resolve() {
      return {
        genres: await prisma.genre.findMany(),
      };
    },
  });

// export type definition of API
export type GenresRouter = typeof genresRouter;
