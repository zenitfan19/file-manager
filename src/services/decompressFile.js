import { createReadStream, createWriteStream } from "node:fs";
import { promisify } from "node:util";
import { pipeline } from "node:stream";
import { createBrotliDecompress } from "node:zlib";

const asyncPipeline = promisify(pipeline);

const decompressFile = async (command) => {
  const commandParams = command.slice(10).trim();
  const [pathToFile, pathToNewFile] = commandParams.split(" ");

  const readStream = createReadStream(pathToFile);
  const writeStream = createWriteStream(pathToNewFile);

  const brotli = createBrotliDecompress();

  try {
    await asyncPipeline(readStream, brotli, writeStream);

    console.log(`File ${pathToFile} decompressed to ${pathToNewFile}\n`);
  } catch {
    console.log("Operation failed\n");
  }
};

export { decompressFile };
