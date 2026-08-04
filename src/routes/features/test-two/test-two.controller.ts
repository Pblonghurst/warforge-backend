import { type Request, type Response } from "express";
import type { Person } from "./test-two.types.ts";

export async function getTest(req: Request, res: Response<Person[]>) {
  res.status(200).json([
    { name: "John", age: 26 },
    { name: "Jim", age: 17 },
    { name: "Jan", age: 23 },
    { name: "Jill", age: 10 },
  ]);
}

export async function getOtherTest(req: Request, res: Response<Person[]>) {
  res.status(200).json([
    { name: "phil", age: 30 },
    { name: "matt", age: 20 },
    { name: "nick", age: 30 },
    { name: "jeff", age: 40 },
  ]);
}
