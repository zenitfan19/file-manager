import { createReadStream } from "node:fs";
import { promisify } from "node:util";
import { pipeline } from "node:stream";
import { createHash } from "node:crypto";

const asyncPipeline = promisify(pipeline);

const calculateHash = async (command) => {
  const filePath = command.slice(4).trim();

  const fileStream = createReadStream(filePath);
  const hash = createHash("sha256");

  try {
    await asyncPipeline(fileStream, hash);
    const hashDigest = hash.digest("hex");

    console.log(`SHA256 Hash: ${hashDigest}\n`);
  } catch {
    console.log("Operation failed\n");
  }
};

export { calculateHash };
