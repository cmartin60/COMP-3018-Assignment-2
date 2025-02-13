import { Branch } from "../interfaces/Branch";

const branches: Branch[] = [];

/**
 * @description Create a new branch.
 * @param {Object} branch - The branch data.
 * @returns {Promise<Branch>}
 */
export const createBranch = async ({name, address, phone}: Omit<Branch, "id">): Promise<Branch> => {
    const newBranch: Branch = {id: Date.now().toString(), name, address, phone};

    branches.push(newBranch);
    return newBranch;
};

/**
 * @description Get all branches.
 * @returns {Promise<Branch[]>}
 */
export const getAllBranches = async (): Promise<Branch[]> => {
    return branches;
};

/**
 * @description Get a branch by ID.
 * @param {string} id - Branch ID.
 * @returns {Promise<Branch>}
 */
export const getBranchById = async (id: string): Promise<Branch> => {
    const branch = branches.find((b) => b.id === id);
    if (!branch) {
        throw new Error(`Branch with ID ${id} not found`); // Ensure this error is handled
    }
    return branch;
};

/**
 * @description Update an existing branch.
 * @param {string} id - The ID of the branch to update.
 * @param {Partial<Branch>} branch - The updated branch data.
 * @returns {Promise<Branch>}
 */
export const updateBranch = async (
    id: string,
    branch: Partial<Omit<Branch, "id">>
): Promise<Branch> => {
    const index = branches.findIndex((b) => b.id === id);
    if (index === -1) {
        throw new Error(`Branch with ID ${id} not found`);
    }

    branches[index] = { ...branches[index], ...branch };
    return branches[index];
};

/**
 * @description Delete a branch.
 * @param {string} id - The ID of the branch to delete.
 * @returns {Promise<void>}
 */
export const deleteBranch = async (id: string): Promise<void> => {
    const index = branches.findIndex((b) => b.id === id);
    if (index === -1) {
        throw new Error(`Branch with ID ${id} not found`);
    }
    
    branches.splice(index, 1);
};
