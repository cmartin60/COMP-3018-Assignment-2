import { HTTP_STATUS } from "src/constants/httpConstants";

/**
 * Class representing a validation error.
 * Used when incoming request data does not meet the expected format.
 */
export class ValidationError extends Error {
    public statusCode: number;
    public errors: string[];

    /**
     * Creates a new ValidationError instance.
     * @param {string} message - The validation error message.
     * @param {string[]} errors - List of validation errors.
     */
    constructor(message: string, errors: string[]) {
        super(message);
        this.name = "ValidationError";
        this.statusCode = HTTP_STATUS.BAD_REQUEST;
        this.errors = errors;
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}

/**
 * Class representing a repository error.
 * Used for errors that occur at the data persistence layer.
 */
export class RepositoryError extends Error {
    public statusCode: number;
    public code: string;

    constructor(message: string, code: string, statusCode: number = HTTP_STATUS.INTERNAL_SERVER_ERROR) {
        super(message);
        this.name = "RepositoryError";
        this.code = code;
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, RepositoryError.prototype);
    }
}

/**
 * Class representing a service error.
 * Used for errors that occur in the business logic layer.
 */
export class ServiceError extends Error {
    public statusCode: number;
    public code: string;

    constructor(message: string, code: string, statusCode: number = HTTP_STATUS.INTERNAL_SERVER_ERROR) {
        super(message);
        this.name = "ServiceError";
        this.code = code;
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, ServiceError.prototype);
    }
}
