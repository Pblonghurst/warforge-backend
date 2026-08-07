import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db, schema } from "../../db/index.ts";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    // Passing the schema barrel lets the adapter resolve the user/session/
    // account/verification tables by name instead of guessing.
    schema,
  }),

  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL ?? "http://localhost:5000",

  // Origins allowed to receive redirects and send credentialed requests.
  // Keep this in sync with the CORS origin in app.ts.
  trustedOrigins: [process.env.CORS_ORIGIN ?? "http://localhost:3000"],

  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    // Flip to true once you have an email sender wired up.
    requireEmailVerification: false,
  },

  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // extend at most once a day
    cookieCache: {
      // Avoids a DB read on every request; the cookie is re-validated after 5m.
      enabled: true,
      maxAge: 5 * 60,
    },
  },
});

export type Session = typeof auth.$Infer.Session;