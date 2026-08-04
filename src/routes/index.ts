import { Router } from "express";
import test from "./features/test/test.routes.ts";
import testTwo from "./features/test-two/test-two.routes.ts";

const router = Router();

router.use('/test', test);
router.use('/testTwo', testTwo);

export default router;