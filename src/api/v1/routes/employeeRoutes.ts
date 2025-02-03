import express from "express";
import { createEmployee, getAllEmployees, getEmployeeById, updateEmployee} from "../controllers/employeeController";

const router = express.Router();

router.post("/", createEmployee);
router.get("/:id", getAllEmployees);
router.get("/:id", getEmployeeById);
router.put("/:id", updateEmployee);

export default router;

