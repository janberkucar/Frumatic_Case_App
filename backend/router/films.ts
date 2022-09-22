import * as trpc from "@trpc/server";
import { prisma } from "../../db/client";
import superjson from "superjson";
import { z } from "zod";

export const filmsRouter = trpc
  .router()
  .transformer(superjson)
  .query("getAll", {
    async resolve() {
      return {
        films: await prisma.film.findMany(),
      };
    },
  })
  .query("getById", {
    input: z.object({ id: z.string() }),
    async resolve({ input }) {
      return await prisma.film.findFirst({
        where: {
          id: input.id,
        },
      });
    },
  });

// export type definition of API
export type FilmRouter = typeof filmsRouter;
