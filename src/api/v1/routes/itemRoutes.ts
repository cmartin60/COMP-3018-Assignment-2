import { Router } from "express";

const router = Router();

/**
 * @openapi
 * /tasks:
 *   get:
 *     summary: Retrieve a list of tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: A list of tasks
 */
router.get("/", (req, res) => {
	res.send("Retrieve tasks");
});

export default router;
