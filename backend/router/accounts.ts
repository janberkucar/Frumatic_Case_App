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
  })
  .mutation("create", {
    input: z.object({
      username: z.string().min(5).max(20),
    }),
    async resolve({ input, ctx }) {
      if (!ctx.token) return { error: "Unauthorized" };
      return await prisma.account.create({
        data: {
          username: input.username,
          name: {} as Name,
          avatar: {} as Avatar,
          ownerToken: ctx.token,
        },
      });
    },
  });

// export type definition of API
export type AccountsRouter = typeof accountsRouter;
