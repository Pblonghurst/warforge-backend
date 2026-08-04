import express, { type Express, type Request, type Response } from "express";
import cors from "cors";
import routes from "./routes/index.ts";

const app: Express = express();

const corsOrigin = process.env.CORS_ORIGIN ?? "http://localhost:3000";

// CORS middleware
app.use(
  cors({
    origin: corsOrigin,
  })
);

// Parse JSON request bodies
app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api", routes);

export default app;