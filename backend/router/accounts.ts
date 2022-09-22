import * as trpc from "@trpc/server";
import { prisma } from "../../db/client";
import superjson from "superjson";
import { z } from "zod";
import { createRouter } from "./context";
import { Avatar, Gravatar, Name } from "@prisma/client";

export const accountsRouter = createRouter()
  .transformer(superjson)
  .query("getAll", {
    async resolve() {
      return {
        accounts: await prisma.account.findMany(),
      };
    },
  })
  .query("getById", {
    input: z.object({ id: z.string() }),
    async resolve({ input, ctx }) {
      console.log("ctxx", ctx);
      const account = await prisma.account.findFirst({
        where: {
          id: input.id,
        },
      });
      return { account, isOwner: account?.ownerToken === ctx.token };
    },
  });

// export type definition of API
export type AccountsRouter = typeof accountsRouter;
