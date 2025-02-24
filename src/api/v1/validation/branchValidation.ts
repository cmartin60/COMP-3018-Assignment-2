import Joi, { ObjectSchema } from "joi";

export const branchSchema: ObjectSchema = Joi.object({
    id: Joi.string()
        .optional()
        .messages({
        "string.empty": "Branch ID cannot be empty"}),
    name: Joi.string().required().messages({
        "any.required": "Branch name is required",
        "string.empty": "Branch name cannot be empty",
    }),
    address: Joi.string()
            .required()
            .messages({
        "any.required": "Branch address is required",
        "string.empty": "Branch address cannot be empty",
    }),
    phone: Joi.string()
        .pattern(/^[0-9]+$/)
        .required()
        .messages({
            "any.required": "Phone number is required",
            "string.pattern": "Phone must contain only numbers",
        }),
});
