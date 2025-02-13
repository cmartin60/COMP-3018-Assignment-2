import { Request, Response, NextFunction } from "express";
import * as branchService from "../services/branchService";
import { Branch } from "../interfaces/Branch";

/**
 * @description Create a new branch.
 * @route POST /branches
 */
export const createBranch = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newBranch: Branch = await branchService.createBranch(req.body);
        res.status(201).json({ message: "Branch Created", data: newBranch });
    } catch (error) {
        next(error);
    }
};

/**
 * @description Get all branches.
 * @route GET /branches
 */
export const getAllBranches = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const branches: Branch[] = await branchService.getAllBranches();
        res.status(200).json({ message: "Branches Retrieved", data: branches });
    } catch (error) {
        next(error);
    }
};

/**
 * @description Get a branch by ID.
 * @route GET /branches/:id
 */
export const getBranchById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const branchId = req.params.id;
        const branch: Branch = await branchService.getBranchById(branchId);
        res.status(200).json({ message: "Branch Retrieved", data: branch });
    } catch (error) {
        next(error);
    }
};

/**
 * @description Update an existing branch.
 * @route PUT /branches/:id
 */
export const updateBranch = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updatedBranch: Branch = await branchService.updateBranch(req.params.id, req.body);
        res.status(200).json({ message: "Branch Updated", data: updatedBranch });
    } catch (error) {
        next(error);
    }
};

/**
 * @description Delete a branch.
 * @route DELETE /branches/:id
 */
export const deleteBranch = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await branchService.deleteBranch(req.params.id);
        res.status(200).json({ message: "Branch Deleted" });
    } catch (error) {
        next(error);
    }
};
