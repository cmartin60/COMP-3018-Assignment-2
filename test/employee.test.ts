import request from "supertest";
import app from "../src/app"; // Adjust the path based on where your app is located

describe("POST /api/v1/employees", () => {
    it("should create a new employee and return the employee data", async () => {
        const newEmployee = {
            name: "John Doe",
            position: "Software Engineer",
            department: "Engineering",
            email: "john.doe@company.com",
            phone: "123-456-7890",
            branchId: 1
        };

        const response = await request(app).post("/api/v1/employees").send(newEmployee);

        expect(response.status).toBe(201);
        expect(response.body.message).toBe("Employee Created");
        expect(response.body.data).toHaveProperty("id"); // Ensure the employee has an id
        expect(response.body.data.name).toBe(newEmployee.name);
        expect(response.body.data.position).toBe(newEmployee.position);
    });
});
