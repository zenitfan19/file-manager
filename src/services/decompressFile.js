import { createReadStream, createWriteStream } from "node:fs";
import { promisify } from "node:util";
import { pipeline } from "node:stream";
import { createBrotliDecompress } from "node:zlib";
import { resolve } from "node:path";
import { cwd } from "node:process";

const asyncPipeline = promisify(pipeline);

const decompressFile = async (command) => {
  const commandParams = command.slice(10).trim();
  const [pathToFile, pathToNewFile] = commandParams.split(" ");
  const pathToFileResolved = resolve(cwd(), pathToFile);
  const pathToNewFileResolved = resolve(cwd(), pathToNewFile);

  const readStream = createReadStream(pathToFileResolved);
  const writeStream = createWriteStream(pathToNewFileResolved);

  const brotli = createBrotliDecompress();

  try {
    await asyncPipeline(readStream, brotli, writeStream);

    console.log(`File ${pathToFileResolved} decompressed to ${pathToNewFileResolved}\n`);
  } catch {
    console.log("Operation failed\n");
  }
};

export { decompressFile };
