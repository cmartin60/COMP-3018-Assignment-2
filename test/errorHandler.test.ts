import request from "supertest";
import app from "../src/app";

describe("Global Error Handling Middleware", () => {
    it("should return a validation error for missing required fields", async () => {
        const res = await request(app).post("/api/v1/employees").send({});
        expect(res.status).toBe(400);
        expect(res.body.status).toBe("error");
        expect(res.body.code).toBe("VALIDATION_ERROR");
    });

    it("should return a 404 error for a non-existent employee", async () => {
        const res = await request(app).get("/api/v1/employees/9999");
        expect(res.status).toBe(404);
        expect(res.body.status).toBe("error");
        expect(res.body.code).toBe("EMPLOYEE_NOT_FOUND");
    });

    it("should return a 500 error for an internal server error", async () => {
        const res = await request(app).get("/api/v1/non-existent-route");
        expect(res.status).toBe(500);
        expect(res.body.status).toBe("error");
        expect(res.body.code).toBe("UNKNOWN_ERROR");
    });
});
