import { Router } from "express";
import * as testController from "./test.controller.ts";

const router = Router();

router.get("/", testController.getTest);
router.get("/other", testController.getOtherTest);

export default router;