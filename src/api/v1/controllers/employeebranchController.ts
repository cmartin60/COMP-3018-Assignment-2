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
            return next(new Error("Invalid branch ID format"));
        }

        const employees: Employee[] = await employeeBranchService.getEmployeesByBranch(branchId);
        if (employees.length === 0) {
            return next(new Error("No employees found for this branch"));
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
            return next(new Error("No employees found for this department"));
        }

        res.status(200).json({ message: "Employees Retrieved", data: employees });
    } catch (error) {
        next(error);
    }
};
