import * as trpc from "@trpc/server";
import superjson from "superjson";
import { accountsRouter } from "./accounts";
import { filmsRouter } from "./films";
import { genresRouter } from "./genres";
import { languagesRouter } from "./languages";

export const appRouter = trpc
  .router()
  .transformer(superjson)
  .merge("accounts.", accountsRouter)
  .merge("films.", filmsRouter)
  .merge("genres.", genresRouter)
  .merge("languages.", languagesRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
