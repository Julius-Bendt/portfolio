import { execSync } from 'child_process';

export function getFileDates(filepath: string) {
    try {
        // Get creation date (first commit)
        const creationDate = execSync(
            `git log --follow --format=%aI -- "${filepath}" | tail -1`
        ).toString().trim();

        // Get last modified date (latest commit)
        const modifiedDate = execSync(
            `git log -1 --format=%aI -- "${filepath}"`
        ).toString().trim();

        return {
            created: creationDate ? new Date(creationDate) : new Date(),
            modified: modifiedDate && modifiedDate !== creationDate
                ? new Date(modifiedDate)
                : undefined
        };
    } catch (error) {
        // If file isn't in git yet or there's an error, return current date
        return {
            created: new Date(),
            modified: undefined
        };
    }
}