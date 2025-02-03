/**
 * @interface Employee
 * @description Represents an employee object.
 */
export type Employee = {
    id: string;
    name: string;
    position: string;
    department: string;
    email: string;
    phone: string;
    branchId: number;
};

const employees: Employee[] = [];

/**
 * @description Create a new employee.
 * @param {Object} employee - The employee data.
 * @param {string} employee.name - The employee's name.
 * @param {string} employee.position - The employee's position.
 * @param {string} employee.department - The employee's department.
 * @param {string} employee.email - The employee's email.
 * @param {string} employee.phone - The employee's phone number.
 * @param {string} employee.branchId - The branch ID where the employee is assigned.
 * @returns {Promise<Employee>}
 */
export const createEmployee = async ({
    name,
    position,
    department,
    email,
    phone,
    branchId,
}: {
    name: string;
    position: string;
    department: string;
    email: string;
    phone: string;
    branchId: number;
}): Promise<Employee> => {
    const newEmployee: Employee = {
        id: Date.now().toString(), // Generate a unique ID based on the timestamp
        name,
        position,
        department,
        email,
        phone,
        branchId,
    };

    // Add the new employee to the in-memory employee array
    employees.push(newEmployee);

    return newEmployee;
};

/**
 * @description Get all employees.
 * @returns {Promise<Employee[]>}
 */
export const getAllEmployees = async (): Promise<Employee[]> => {
    return employees;
};