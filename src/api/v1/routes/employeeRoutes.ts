import express from "express";
import { createEmployee, getAllEmployees, getEmployeeById} from "../controllers/employeeController";

const router = express.Router();

router.post("/", createEmployee);
router.get("/:id", getAllEmployees);
router.get("/:id", getEmployeeById);

export default router;

