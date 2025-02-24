import express from "express";
import { createBranch, getAllBranches, getBranchById, updateBranch, deleteBranch } from "../controllers/branchController";

import { branchSchema } from "../validation/branchValidation";
import { validateRequest } from "../middleware/validate";

const router = express.Router();

/**
 * @openapi
 * /api/v1/branches:
 *   post:
 *     summary: Create a new branch
 *     tags: [Branches]
 *     responses:
 *       201:
 *         description: Branch created successfully
 */
router.post("/", validateRequest(branchSchema), createBranch);

/**
 * @openapi
 * /api/v1/branches:
 *   get:
 *     summary: Retrieve all branches
 *     tags: [Branches]
 *     responses:
 *       200:
 *         description: List of branches
 */
router.get("/", getAllBranches);

/**
 * @openapi
 * /api/v1/branches/{id}:
 *   get:
 *     summary: Get a branch by ID
 *     tags: [Branches]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Branch ID
 *     responses:
 *       200:
 *         description: Branch details retrieved
 *       404:
 *         description: Branch not found
 */
router.get("/:id", getBranchById);

/**
 * @openapi
 * /api/v1/branches/{id}:
 *   put:
 *     summary: Update a branch
 *     tags: [Branches]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Branch ID
 *     responses:
 *       200:
 *         description: Branch updated successfully
 *       404:
 *         description: Branch not found
 */
router.put("/:id", validateRequest(branchSchema), updateBranch);

/**
 * @openapi
 * /api/v1/branches/{id}:
 *   delete:
 *     summary: Delete a branch
 *     tags: [Branches]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Branch ID
 *     responses:
 *       200:
 *         description: Branch deleted successfully
 *       404:
 *         description: Branch not found
 */
router.delete("/:id", deleteBranch);
export default router;
