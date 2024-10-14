import { createReadStream, createWriteStream } from "node:fs";
import { unlink } from "node:fs/promises";
import { pipeline } from "node:stream";
import { promisify } from "node:util";
import { basename, join } from "node:path";

const pipelineAsync = promisify(pipeline);

const moveFile = async (command) => {
  try {
    const commandParams = command.slice(2).trim();
    const [pathToFile, pathToNewDirectory] = commandParams.split(" ");
    const pathToNewFile = join(pathToNewDirectory, basename(pathToFile));

    const readableStream = createReadStream(pathToFile);
    const writableStream = createWriteStream(pathToNewFile);

    await pipelineAsync(readableStream, writableStream);
    await unlink(pathToFile);

    console.log(`File moved from ${pathToFile} to ${pathToNewDirectory}\n`);
  } catch (err) {
    console.log("Operation failed\n");
  }
};

export { moveFile };
