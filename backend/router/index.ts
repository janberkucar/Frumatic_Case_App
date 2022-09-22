import * as trpc from "@trpc/server";
import superjson from "superjson";
import { accountsRouter } from "./accounts";
import { filmsRouter } from "./films";
import { genresRouter } from "./genres";
import { languagesRouter } from "./languages";
import { createRouter } from "./context";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("accounts.", accountsRouter)
  .merge("films.", filmsRouter)
  .merge("genres.", genresRouter)
  .merge("languages.", languagesRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
