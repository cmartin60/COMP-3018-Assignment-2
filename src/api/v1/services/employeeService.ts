import { Employee } from "../models/employeeModel";

let employeeData: Employee[] = [];

export const employeeService = {
    createEmployee: async (employee: Employee): Promise<Employee> => {
        const newEmployee = { ...employee, id: (employeeData.length + 1).toString() };
        employeeData.push(newEmployee);
        return newEmployee;
    },
};
