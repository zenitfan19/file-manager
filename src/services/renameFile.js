import { rename } from "node:fs/promises";
import { dirname, basename, join } from "node:path";

const renameFile = async (command) => {
  const commandParams = command.slice(2).trim();
  const [pathToFile, newFileName] = commandParams.split(" ");
  const pathToNewFile = join(dirname(pathToFile), newFileName);

  try {
    await rename(pathToFile, pathToNewFile);

    console.log(
      `File renamed from ${basename(pathToFile)} to ${newFileName}\n`
    );
  } catch {
    console.log("Operation failed\n");
  }
};

export { renameFile };
