import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream";
import { promisify } from "node:util";
import { basename, resolve } from "node:path";
import { cwd } from "node:process";

const pipelineAsync = promisify(pipeline);

const copyFile = async (command) => {
  try {
    const commandParams = command.slice(2).trim();
    const [pathToFile, pathToNewDirectory] = commandParams.split(" ");
    const pathToFileResolved = resolve(cwd(), pathToFile);
    const pathToNewFileResolved = resolve(cwd(), pathToNewDirectory, basename(pathToFileResolved));

    const readableStream = createReadStream(pathToFileResolved);
    const writableStream = createWriteStream(pathToNewFileResolved);

    await pipelineAsync(readableStream, writableStream);

    console.log(`File copied from ${pathToFileResolved} to ${pathToNewDirectory}\n`);
  } catch {
    console.log("Operation failed\n");
  }
};

export { copyFile };
