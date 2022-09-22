import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";

import { prisma } from "../../../db/client";
import superjson from "superjson";

export const appRouter = trpc
  .router()
  .transformer(superjson)
  .query("hi", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `hello ${input?.text ?? "world"}`,
      };
    },
  })
  .query("getAllFilms", {
    async resolve() {
      return {
        films: await prisma.film.findMany(),
      };
    },
  })
  .query("getAllAccounts", {
    async resolve() {
      return {
        accounts: await prisma.account.findMany(),
      };
    },
  })
  .query("getAllGenres", {
    async resolve() {
      return {
        genres: await prisma.genre.findMany(),
      };
    },
  });
// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});
