import { cwd } from "node:process";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";
import {
  checkFileAlreadyExists,
  operationFailedErrorLog,
  log,
} from "../utils/index.js";

const addFolder = async (command) => {
  const folderName = command.slice(5).trim();

  try {
    const folderPath = join(cwd(), folderName);
    await checkFileAlreadyExists(folderPath);

    await mkdir(folderPath);

    log.green(`Folder created at ${folderPath}`);
  } catch {
    operationFailedErrorLog();
  }
};

export { addFolder };
