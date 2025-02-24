import { Employee } from "../interfaces/employeeModel";
import { getAllEmployees } from "./employeeService"; // Reusing existing employee data

/**
 * @description Get all employees for a specific branch.
 * @param {number} branchId - The branch ID.
 * @returns {Promise<Employee[]>}
 */
export const getEmployeesByBranch = async (branchId: number): Promise<Employee[]> => {
    const employees = await getAllEmployees();
    return employees.filter(employee => employee.branchId === branchId);
};

/**
 * @description Get all employees in a specific department.
 * @param {string} department - The department name.
 * @returns {Promise<Employee[]>}
 */
export const getEmployeesByDepartment = async (department: string): Promise<Employee[]> => {
    const employees = await getAllEmployees();
    return employees.filter(employee => employee.department.toLowerCase() === department.toLowerCase());
};
