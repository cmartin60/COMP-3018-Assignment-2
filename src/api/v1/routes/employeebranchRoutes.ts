import express from "express";
import { getEmployeesByBranch, getEmployeesByDepartment } from "../controllers/employeeBranchController";

const router = express.Router();

/**
 * @openapi
 * /api/v1/employees/branch/{branchId}:
 *   get:
 *     summary: Get all employees for a specific branch
 *     tags: [Employees]
 *     parameters:
 *       - name: branchId
 *         in: path
 *         required: true
 *         description: The ID of the branch
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: A list of employees in the specified branch
 *       404:
 *         description: No employees found for this branch
 */
router.get("/branch/:branchId", getEmployeesByBranch);

/**
 * @openapi
 * /api/v1/employees/department/{department}:
 *   get:
 *     summary: Get all employees in a specific department
 *     tags: [Employees]
 *     parameters:
 *       - name: department
 *         in: path
 *         required: true
 *         description: The department name
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of employees in the specified department
 *       404:
 *         description: No employees found for this department
 */
router.get("/department/:department", getEmployeesByDepartment);

export default router;
