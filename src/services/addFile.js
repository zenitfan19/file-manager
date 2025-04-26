import { cwd } from "node:process";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import {
  checkFileAlreadyExists,
  operationFailedErrorLog,
  log,
} from "../utils/index.js";

const addFile = async (command) => {
  const fileName = command.slice(3).trim();
  try {
    const filePath = join(cwd(), fileName);
    await checkFileAlreadyExists(filePath);

    await writeFile(filePath, "");

    log.green(`File created at ${filePath}`);
  } catch {
    operationFailedErrorLog();
  }
};

export { addFile };
