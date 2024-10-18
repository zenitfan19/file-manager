import { createReadStream } from "node:fs";
import { promisify } from "node:util";
import { pipeline } from "node:stream";
import { createHash } from "node:crypto";
import { resolve } from "node:path";
import { cwd } from "node:process";

const asyncPipeline = promisify(pipeline);

const calculateHash = async (command) => {
  const filePath = command.slice(4).trim();

  try {
    const filePathResolved = resolve(cwd(), filePath);

    const fileStream = createReadStream(filePathResolved);
    const hash = createHash("sha256");

    await asyncPipeline(fileStream, hash);
    const hashDigest = hash.digest("hex");

    console.log(`SHA256 Hash: ${hashDigest}\n`);
  } catch {
    console.log("Operation failed\n");
  }
};

export { calculateHash };
