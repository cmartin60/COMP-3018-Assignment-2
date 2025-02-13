import { Request, Response, NextFunction } from "express";
import * as employeeBranchService from "../services/employeeBranchService";
import { Employee } from "../interfaces/employeeModel";

/**
 * @description Get all employees for a specific branch.
 * @route GET /api/v1/employees/branch/:branchId
 */
export const getEmployeesByBranch = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const branchId = parseInt(req.params.branchId);
        if (isNaN(branchId)) {
            res.status(400).json({ message: "Invalid branch ID format" });
            return;
        }

        const employees: Employee[] = await employeeBranchService.getEmployeesByBranch(branchId);
        if (employees.length === 0) {
            res.status(404).json({ message: "No employees found for this branch" });
            return;
        }

        res.status(200).json({ message: "Employees Retrieved", data: employees });
    } catch (error) {
        next(error);
    }
};

/**
 * @description Get all employees in a specific department.
 * @route GET /api/v1/employees/department/:department
 */
export const getEmployeesByDepartment = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const department = req.params.department;
        const employees: Employee[] = await employeeBranchService.getEmployeesByDepartment(department);

        if (employees.length === 0) {
            res.status(404).json({ message: "No employees found for this department" });
            return;
        }

        res.status(200).json({ message: "Employees Retrieved", data: employees });
    } catch (error) {
        next(error);
    }
};
