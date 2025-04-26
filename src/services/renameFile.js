import { rename } from "node:fs/promises";
import { dirname, basename, resolve } from "node:path";
import { cwd } from "node:process";
import {
  checkFileAlreadyExists,
  operationFailedErrorLog,
  log,
} from "../utils/index.js";

const renameFile = async (command) => {
  const commandParams = command.slice(2).trim();
  const [pathToFile, newFileName] = commandParams.split(" ");

  try {
    const pathToFileResolved = resolve(cwd(), pathToFile);
    const pathToNewFileResolved = resolve(
      dirname(pathToFileResolved),
      newFileName
    );

    await checkFileAlreadyExists(pathToNewFileResolved);

    await rename(pathToFileResolved, pathToNewFileResolved);

    log.green(
      `File renamed from ${basename(pathToFileResolved)} to ${newFileName}`
    );
  } catch {
    operationFailedErrorLog();
  }
};

export { renameFile };
