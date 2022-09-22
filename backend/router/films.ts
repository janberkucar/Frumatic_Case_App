import * as trpc from "@trpc/server";
import { prisma } from "../../db/client";
import superjson from "superjson";

export const filmsRouter = trpc
  .router()
  .transformer(superjson)
  .query("getAll", {
    async resolve() {
      return {
        films: await prisma.film.findMany(),
      };
    },
  });

// export type definition of API
export type FilmRouter = typeof filmsRouter;
