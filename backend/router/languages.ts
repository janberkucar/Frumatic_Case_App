import * as trpc from "@trpc/server";
import { z } from "zod";
import { prisma } from "../../db/client";
import superjson from "superjson";

export const languagesRouter = trpc
  .router()
  .transformer(superjson)
  .query("getAll", {
    async resolve() {
      return {
        languages: await prisma.language.findMany(),
      };
    },
  })
  .mutation("create", {
    input: z.object({
      language: z.string().min(2).max(2),
    }),
    async resolve({ input }) {
      return await prisma.language.create({
        data: {
          language: input.language,
        },
      });
    },
  });

// export type definition of API
export type languagesRouter = typeof languagesRouter;
