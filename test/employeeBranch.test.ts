import request from "supertest";
import app from "../src/app";
import { Employee } from "../src/api/v1/interfaces/employeeModel";

describe("Employee-Branch API", () => {
    let branchId = 1;
    let department = "IT";
    let testEmployeeId: string;

    beforeAll(async () => {
        const res = await request(app).post("/api/v1/employees").send({
            name: "John Doe",
            position: "Software Engineer",
            department: department,
            email: "john.doe@example.com",
            phone: "123-456-7890",
            branchId: branchId,
        });

        testEmployeeId = res.body.data.id;
    });

    it("should retrieve all employees for a specific branch", async () => {
        const res = await request(app).get(`/api/v1/employees/branch/${branchId}`);

        expect(res.status).toBe(200);
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(res.body.data.some((emp: Employee) => emp.branchId === branchId)).toBe(true);
    });

    it("should retrieve all employees in a specific department", async () => {
        const res = await request(app).get(`/api/v1/employees/department/${department}`);

        expect(res.status).toBe(200);
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(res.body.data.some((emp: Employee) => emp.department === department)).toBe(true);
    });

    afterAll(async () => {
        await request(app).delete(`/api/v1/employees/${testEmployeeId}`);
    });
});
