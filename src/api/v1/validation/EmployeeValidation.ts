import Joi, { ObjectSchema } from "joi";

export const employeeSchema: ObjectSchema = Joi.object({
    id: Joi.string()
        .optional()
        .messages({"string.empty": "Employee ID cannot be empty"}),
    name: Joi.string().required().messages({
        "any.required": "Name is required",
        "string.empty": "Name cannot be empty",
    }),
    position: Joi.string()
            .optional()
            .messages({
        "any.required": "Position is required",
        "string.empty": "Position cannot be empty",
    }),
    department: Joi.string()
                .optional()
                .messages({
        "any.required": "Department is required",
        "string.empty": "Department cannot be empty",
    }),
    email: Joi.string().email().required().messages({
        "any.required": "Email is required",
        "string.empty": "Email cannot be empty",
    }),
    phone: Joi.string()
        .pattern(/^[0-9]+$/)
        .required()
        .messages({
            "any.required": "Phone number is required",
            "string.pattern": "Phone must contain only numbers",
        }),
    branchId: Joi.number()
            .integer()
            .required()
            .messages({
        "any.required": "Branch ID is required",
        "number.base": "Branch ID must be a number",
    }),
});
