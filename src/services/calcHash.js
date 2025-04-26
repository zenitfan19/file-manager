import { createReadStream } from "node:fs";
import { promisify } from "node:util";
import { pipeline } from "node:stream";
import { createHash } from "node:crypto";
import { resolve } from "node:path";
import { cwd } from "node:process";
import { operationFailedErrorLog, log } from "../utils/index.js";

const asyncPipeline = promisify(pipeline);

const calculateHash = async (command) => {
  const filePath = command.slice(4).trim();

  try {
    const filePathResolved = resolve(cwd(), filePath);

    const fileStream = createReadStream(filePathResolved);
    const hash = createHash("sha256");

    await asyncPipeline(fileStream, hash);
    const hashDigest = hash.digest("hex");

    log.blue(`SHA256 Hash: ${hashDigest}`);
  } catch {
    operationFailedErrorLog();
  }
};

export { calculateHash };
