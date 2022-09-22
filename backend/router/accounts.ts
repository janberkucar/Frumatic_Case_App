import * as trpc from "@trpc/server";
import { prisma } from "../../db/client";
import superjson from "superjson";

export const accountsRouter = trpc
  .router()
  .transformer(superjson)
  .query("getAll", {
    async resolve() {
      return {
        accounts: await prisma.account.findMany(),
      };
    },
  });

// export type definition of API
export type AccountsRouter = typeof accountsRouter;
