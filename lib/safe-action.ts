import { createSafeActionClient } from "next-safe-action";
import { auth } from "@clerk/nextjs/server";

export const actionClient = createSafeActionClient({
  handleServerError(e) {
    if (e instanceof Error) {
      return e.message;
    }
    return "An unexpected error occurred";
  },
});

export const authActionClient = actionClient
  .use(async ({ next }) => {
    const { userId } = await auth();

    if (!userId) {
      throw new Error("Unauthorized: You must be logged in.");
    }

    return next({ ctx: { userId } });
  });
