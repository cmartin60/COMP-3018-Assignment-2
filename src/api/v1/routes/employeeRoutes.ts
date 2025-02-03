import express from "express";
import { createEmployee, getAllEmployees} from "../controllers/employeeController";

const router = express.Router();

router.post("/", createEmployee);
router.get("/:id", getAllEmployees);

export default router;
