import { execSync } from "child_process";

interface GitDates {
  created: Date;
  modified?: Date;
  error?: string;
}

export function getFileDates(filepath: string): GitDates {
  try {
    if (!filepath) {
      throw new Error("No filepath provided");
    }

    // Check if file is tracked
    try {
      execSync(`git ls-files --error-unmatch "${filepath}"`, { stdio: "pipe" });
    } catch {
      throw new Error("File not tracked in git");
    }

    const creationDate = execSync(
      `git log --follow --format=%aI -- "${filepath}" | tail -1`
    )
      .toString()
      .trim();

    const modifiedDate = execSync(`git log -1 --format=%aI -- "${filepath}"`)
      .toString()
      .trim();

    return {
      created: new Date(creationDate || Date.now()),
      modified:
        modifiedDate && modifiedDate !== creationDate
          ? new Date(modifiedDate)
          : undefined,
    };
  } catch (error) {
    console.error(`Git date error for ${filepath}:`, error);
    return {
      created: new Date(),
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
