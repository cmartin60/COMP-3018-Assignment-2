import request from "supertest";
import app from "../src/app";

describe("Employee API", () => {
    it("should create a new employee and return employee data", async () => {
        const newEmployee = {
            name: "Alice Johnson",
            position: "Branch Manager",
            department: "Management",
            email: "alice.johnson@pixell-river.com",
            phone: "604-555-0148",
            branchId: 1,
        };

        const response = await request(app)
            .post("/api/v1/employees")
            .send(newEmployee);

        expect(response.status).toBe(201);
        expect(response.body.message).toBe('Employee Created');
        expect(response.body.data).toHaveProperty('id');
        expect(response.body.data.name).toBe(newEmployee.name);
        expect(response.body.data.position).toBe(newEmployee.position);
        expect(response.body.data.department).toBe(newEmployee.department);
        expect(response.body.data.email).toBe(newEmployee.email);
        expect(response.body.data.phone).toBe(newEmployee.phone);
        expect(response.body.data.branchId).toBe(newEmployee.branchId);
    });

    it("should return an array of employees", async () => {
        const response = await request(app).get("/api/v1/employees");

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body.data)).toBe(true);

        if (Array.isArray(response.body.data)) {
            expect(response.body.data.length).toBeGreaterThanOrEqual(0);
            response.body.data.forEach((employee: any) => {
                expect(employee).toHaveProperty("id");
                expect(employee).toHaveProperty("name");
                expect(employee).toHaveProperty("position");
                expect(employee).toHaveProperty("department");
                expect(employee).toHaveProperty("email");
                expect(employee).toHaveProperty("phone");
                expect(employee).toHaveProperty("branchId");
            });
        }
    });

    it("should return the correct employee for a specific ID", async () => {
        const newEmployee = {
            name: "Alice Johnson",
            position: "Branch Manager",
            department: "Management",
            email: "alice.johnson@pixell-river.com",
            phone: "604-555-0148",
            branchId: 1,
        };

        const createResponse = await request(app).post("/api/v1/employees").send(newEmployee);
        const employeeId = createResponse.body.data.id;
        const getResponse = await request(app).get(`/api/v1/employees/${employeeId}`);

        expect(getResponse.status).toBe(200);
        expect(getResponse.body.data).toHaveProperty("id", employeeId);
        expect(getResponse.body.data.name).toBe(newEmployee.name);
        expect(getResponse.body.data.position).toBe(newEmployee.position);
        expect(getResponse.body.data.department).toBe(newEmployee.department);
        expect(getResponse.body.data.email).toBe(newEmployee.email);
        expect(getResponse.body.data.phone).toBe(newEmployee.phone);
        expect(getResponse.body.data.branchId).toBe(newEmployee.branchId);
    });

    it("should update the employee's data correctly", async () => {
        const newEmployee = {
            name: "Alice Johnson",
            position: "Branch Manager",
            department: "Management",
            email: "alice.johnson@pixell-river.com",
            phone: "604-555-0148",
            branchId: 1,
        };

        const createResponse = await request(app).post("/api/v1/employees").send(newEmployee);

        const employeeId = createResponse.body.data.id;

        const updatedEmployeeData = {
            position: "Senior Manager",
            phone: "111-222-3333",
        };

        const updateResponse = await request(app)
            .put(`/api/v1/employees/${employeeId}`)
            .send(updatedEmployeeData);

        expect(updateResponse.status).toBe(200);

        expect(updateResponse.body.message).toBe("Employee Updated");
        expect(updateResponse.body.data).toHaveProperty("id", employeeId);
        expect(updateResponse.body.data.position).toBe(updatedEmployeeData.position);
        expect(updateResponse.body.data.phone).toBe(updatedEmployeeData.phone);
        expect(updateResponse.body.data.name).toBe(newEmployee.name);
        expect(updateResponse.body.data.department).toBe(newEmployee.department);
        expect(updateResponse.body.data.email).toBe(newEmployee.email);
        expect(updateResponse.body.data.branchId).toBe(newEmployee.branchId);
    });

    it("should delete an employee successfully", async () => {
        const newEmployee = {
            name: "John Smith",
            position: "Developer",
            department: "Engineering",
            email: "john.smith@example.com",
            phone: "123-456-7890",
            branchId: 1,
        };

        const createResponse = await request(app).post("/api/v1/employees").send(newEmployee);
        const employeeId = createResponse.body.data.id;
        const deleteResponse = await request(app).delete(`/api/v1/employees/${employeeId}`);

        expect(deleteResponse.status).toBe(200);
        expect(deleteResponse.body.message).toBe("Employee Deleted");
    });
});
