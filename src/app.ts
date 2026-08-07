import express, { type Express, type Request, type Response } from "express";
import cors from "cors";
import routes from "./routes/index.ts";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth/auth.ts";
// import { requireAuth } from "./middleware/auth.ts";

const app: Express = express();

const corsOrigin = process.env.CORS_ORIGIN ?? "http://localhost:3000";

// CORS middleware
app.use(
  cors({
    origin: corsOrigin,
    credentials: true,
  })
);

// Better Auth mounts every /api/auth/* route (sign-in, sign-up, get-session…).
app.all("/api/auth/*splat", toNodeHandler(auth));

// Parse JSON request bodies
app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api", routes);

export default app;