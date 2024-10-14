import { createReadStream, createWriteStream } from "node:fs";
import { promisify } from "node:util";
import { pipeline } from "node:stream";
import { createBrotliCompress } from "node:zlib";

const asyncPipeline = promisify(pipeline);

const compressFile = async (command) => {
  const commandParams = command.slice(8).trim();
  const [pathToFile, pathToNewFile] = commandParams.split(" ");

  try {
    const readStream = createReadStream(pathToFile);
    const writeStream = createWriteStream(pathToNewFile);

    const brotli = createBrotliCompress();

    await asyncPipeline(readStream, brotli, writeStream);

    console.log(`File ${pathToFile} compressed to ${pathToNewFile}\n`);
  } catch {
    console.log("Operation failed\n");
  }
};

export { compressFile };
