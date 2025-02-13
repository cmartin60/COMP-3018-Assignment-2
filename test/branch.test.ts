import request from "supertest";
import app from "../src/app";

describe("Branch API", () => {
    let branchId: string;

    const newBranch = {
        name: "Main Branch",
        address: "123 Main St",
        phone: "123-456-7890",
    };

    it("should create a new branch", async () => {
        const res = await request(app).post("/api/v1/branches").send(newBranch);

        expect(res.status).toBe(201);
        expect(res.body.data).toHaveProperty("id");
        expect(res.body.data.name).toBe(newBranch.name);
        expect(res.body.data.address).toBe(newBranch.address);
        expect(res.body.data.phone).toBe(newBranch.phone);

        branchId = res.body.data.id; // Store the ID for later tests
    });

    it("should return all branches", async () => {
        const res = await request(app).get("/api/v1/branches");

        expect(res.status).toBe(200);
        expect(Array.isArray(res.body.data)).toBe(true);
    });

    it("should return a branch by ID", async () => {
        const res = await request(app).get(`/api/v1/branches/${branchId}`);

        expect(res.status).toBe(200);
        expect(res.body.data.id).toBe(branchId);
        expect(res.body.data.name).toBe(newBranch.name);
    });

    it("should update a branch", async () => {
        const updatedData = { phone: "987-654-3210" };
        const res = await request(app).put(`/api/v1/branches/${branchId}`).send(updatedData);

        expect(res.status).toBe(200);
        expect(res.body.data.phone).toBe(updatedData.phone);
    });

    it("should delete a branch", async () => {
        const res = await request(app).delete(`/api/v1/branches/${branchId}`);
        expect(res.status).toBe(200);
        expect(res.body.message).toBe("Branch Deleted");
    
        const getRes = await request(app).get(`/api/v1/branches/${branchId}`);
        
        if (getRes.status !== 404) {
            console.error("Unexpected response after deletion:", getRes.body);
        }
    
        expect(getRes.status).toBe(404);
    });
});
