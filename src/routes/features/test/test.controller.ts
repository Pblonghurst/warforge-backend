import { type Request, type Response } from "express";
import type { TestRes } from "./test.types.ts";

export async function getTest(req: Request, res: Response<TestRes>) {
  res.status(200).json({
    people: [
      { name: "John", age: 26 },
      { name: "Jim", age: 17 },
      { name: "Jan", age: 23 },
      { name: "Jill", age: 10 },
    ],
  });
}

export async function getOtherTest(req: Request, res: Response<TestRes>) {
  res.status(200).json({
    people: [
      { name: "phil", age: 30 },
      { name: "matt", age: 20 },
      { name: "nick", age: 30 },
      { name: "jeff", age: 40 },
    ],
  });
}
