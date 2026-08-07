import type { NextFunction, Request, Response } from "express";
import { fromNodeHeaders } from "better-auth/node";
import { auth } from "../lib/auth/auth.ts";

/**
 * Attaches the session to the request when one exists, but never blocks.
 * Use on routes that behave differently for signed-in users.
 */
export async function withSession(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  try {
    const result = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    });

    if (result) {
      req.session = result.session;
      req.user = result.user;
    }

    next();
  } catch (error) {
    next(error);
  }
}

/**
 * Rejects the request with 401 unless there is a valid session.
 */
export async function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const result = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    });

    if (!result) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    req.session = result.session;
    req.user = result.user;
    next();
  } catch (error) {
    next(error);
  }
}