/**
 * Represents the result of an operation that can either succeed or fail.
 *
 * @template T - The type of the value in case of a successful result.
 * @typedef {Object} Result
 * @property {true} ok - Indicates a successful result.
 * @property {T} value - The value of the successful result.
 * @property {false} ok - Indicates a failed result.
 * @property {string} error - The error message in case of a failed result.
 */
export type Result<T> = { ok: true; value: T } | { ok: false; error: string };

/**
 * Represents a project with various properties.
 *
 * @interface Project
 * @property {string} name - The name of the project.
 * @property {string} github - The GitHub URL of the project.
 * @property {string | null} description - The description of the project, or null if not available.
 * @property {string | null | undefined} homepage - The homepage URL of the project, or null/undefined if not available.
 * @property {string[] | undefined} topics - The topics associated with the project, or undefined if not available.
 */
export interface Project {
    name: string;
    github: string;
    description: string | null;
    homepage: string | null | undefined;
    topics: string[] | undefined;
}