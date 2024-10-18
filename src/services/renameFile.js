import { rename } from "node:fs/promises";
import { dirname, basename, resolve } from "node:path";
import { cwd } from "node:process";
import { checkFileAlreadyExists } from "../utils/checkFileAlreadyExists.js";

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

    console.log(
      `File renamed from ${basename(pathToFileResolved)} to ${newFileName}\n`
    );
  } catch {
    console.log("Operation failed\n");
  }
};

export { renameFile };
