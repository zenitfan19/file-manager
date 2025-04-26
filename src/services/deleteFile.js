import { unlink } from "node:fs/promises";
import { resolve } from "node:path";
import { cwd } from "node:process";
import { operationFailedErrorLog, log } from "../utils/index.js";

const deleteFile = async (command) => {
  const filePath = command.slice(3).trim();

  try {
    const filePathResolved = resolve(cwd(), filePath);

    await unlink(filePathResolved);

    log.green(`File deleted at ${filePathResolved}`);
  } catch {
    operationFailedErrorLog();
  }
};

export { deleteFile };
