import type { Session } from "./auth.ts";

declare global {
  namespace Express {
    interface Request {
      session?: Session["session"];
      user?: Session["user"];
    }
  }
}

export {};
