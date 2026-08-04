import { Router } from "express";
import * as testTwoController from "./test-two.controller.ts";

const router = Router();

router.get("/", testTwoController.getTest);
router.get("/other", testTwoController.getOtherTest);

export default router;