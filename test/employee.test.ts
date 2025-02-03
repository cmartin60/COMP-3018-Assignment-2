import request from 'supertest';
import app from '../src/app';

describe('POST /api/v1/employees', () => {
    it('should create a new employee and return the employee data', async () => {
        const newEmployee = {
            name: 'John Doe',
            position: 'Software Engineer',
            department: 'Engineering',
            email: 'john.doe@company.com',
            phone: '123-456-7890',
            branchId: '1'
        };

        // Make a POST request to create the employee
        const response = await request(app)
            .post('/api/v1/employees')
            .send(newEmployee)
            .set('Accept', 'application/json');

        // Assert the response status is 201 (Created)
        expect(response.status).toBe(201);

        // Assert the response body contains the employee data
        expect(response.body.message).toBe('Employee Created');
        expect(response.body.data).toHaveProperty('id'); // Ensure an ID is returned
        expect(response.body.data.name).toBe(newEmployee.name);
        expect(response.body.data.position).toBe(newEmployee.position);
        expect(response.body.data.department).toBe(newEmployee.department);
        expect(response.body.data.email).toBe(newEmployee.email);
        expect(response.body.data.phone).toBe(newEmployee.phone);
        expect(response.body.data.branchId).toBe(newEmployee.branchId);
    });
});
