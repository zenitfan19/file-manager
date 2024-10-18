import { cwd } from "node:process";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import { checkFileAlreadyExists } from '../utils/checkFileAlreadyExists.js';

const addFile = async (command) => {
  const fileName = command.slice(3).trim();
  try {
    const filePath = join(cwd(), fileName);
    await checkFileAlreadyExists(filePath);

    await writeFile(filePath, "");

    console.log(`File created at ${filePath}\n`);
  } catch {
    console.log("Operation failed\n");
  }
};

export { addFile };
