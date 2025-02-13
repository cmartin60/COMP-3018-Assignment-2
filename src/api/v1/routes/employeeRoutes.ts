import express from "express";
import { createEmployee, getAllEmployees, getEmployeeById, updateEmployee, deleteEmployee} from "../controllers/employeeController";

const router = express.Router();

/**
 * @openapi
 * /api/v1/employees:
 *   post:
 *     summary: Create a new employee
 *     tags: [Employees]
 *     responses:
 *       201:
 *         description: Employee created successfully
 */
router.post("/", createEmployee);

/**
 * @openapi
 * /api/v1/employees:
 *   get:
 *     summary: Retrieve all employees
 *     tags: [Employees]
 *     responses:
 *       200:
 *         description: List of employees
 */
router.get("/", getAllEmployees);

/**
 * @openapi
 * /api/v1/employees/{id}:
 *   get:
 *     summary: Get an employee by ID
 *     tags: [Employees]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Employee ID
 *     responses:
 *       200:
 *         description: Employee details retrieved
 *       404:
 *         description: Employee not found
 */
router.get("/:id", getEmployeeById);

/**
 * @openapi
 * /api/v1/employees/{id}:
 *   put:
 *     summary: Update an employee
 *     tags: [Employees]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Employee ID
 *     responses:
 *       200:
 *         description: Employee updated successfully
 *       404:
 *         description: Employee not found
 */
router.put("/:id", updateEmployee);

/**
 * @openapi
 * /api/v1/employees/{id}:
 *   delete:
 *     summary: Delete an employee
 *     tags: [Employees]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Employee ID
 *     responses:
 *       200:
 *         description: Employee deleted successfully
 *       404:
 *         description: Employee not found
 */
router.delete("/:id", deleteEmployee);

export default router;