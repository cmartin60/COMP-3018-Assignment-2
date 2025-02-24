import { Request, Response, NextFunction } from "express";
import { ValidationError, RepositoryError, ServiceError } from "../errors/errors";
import { HTTP_STATUS } from "src/constants/httpConstants";
import { errorResponse } from "../interfaces/responseModel";

/**
 * Global error handling middleware for Express.
 * Ensures errors are caught and formatted into a structured response.
 */
const errorHandler = (
    err: Error | null,
    req: Request,
    res: Response,
    _next: NextFunction
): void => {
    if (!err) {
        console.error("Error: null or undefined error received");
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(
            errorResponse("An unexpected error occurred", "UNKNOWN_ERROR")
        );
        return;
    }

    // Log error details for debugging
    console.error(`Error: ${err.message}`);

    if (err instanceof ValidationError) {
        res.status(err.statusCode).json({
            status: "error",
            message: err.message,
            errors: err.errors,
            code: "VALIDATION_ERROR",
        });
    } else if (err instanceof RepositoryError || err instanceof ServiceError) {
        res.status(err.statusCode).json(errorResponse(err.message, err.code));
    } else {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(
            errorResponse("An unexpected error occurred", "UNKNOWN_ERROR")
        );
    }
};

export default errorHandler;