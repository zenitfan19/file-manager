import { unlink } from "node:fs/promises";
import { resolve } from "node:path";
import { cwd } from "node:process";

const deleteFile = async (command) => {
  const filePath = command.slice(3).trim();
  const filePathResolved = resolve(cwd(), filePath);

  try {
    await unlink(filePathResolved);

    console.log(`File deleted at ${filePathResolved}\n`);
  } catch {
    console.log("Operation failed\n");
  }
};

export { deleteFile };
