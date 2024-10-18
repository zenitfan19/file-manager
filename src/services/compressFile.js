import { createReadStream, createWriteStream } from "node:fs";
import { promisify } from "node:util";
import { pipeline } from "node:stream";
import { createBrotliCompress } from "node:zlib";
import { resolve } from "node:path";
import { cwd } from "node:process";
import { checkFileAlreadyExists } from "../utils/checkFileAlreadyExists.js";

const asyncPipeline = promisify(pipeline);

const compressFile = async (command) => {
  const commandParams = command.slice(8).trim();
  const [pathToFile, pathToNewFile] = commandParams.split(" ");

  try {
    const pathToFileResolved = resolve(cwd(), pathToFile);
    const pathToNewFileResolved = resolve(cwd(), pathToNewFile);

    await checkFileAlreadyExists(pathToNewFileResolved);

    const readStream = createReadStream(pathToFileResolved);
    const writeStream = createWriteStream(pathToNewFileResolved);

    const brotli = createBrotliCompress();

    await asyncPipeline(readStream, brotli, writeStream);

    console.log(
      `File ${pathToFileResolved} compressed to ${pathToNewFileResolved}\n`
    );
  } catch {
    console.log("Operation failed\n");
  }
};

export { compressFile };
