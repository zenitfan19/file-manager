import { unlink } from "node:fs/promises";

const deleteFile = async (command) => {
  const filePath = command.slice(3).trim();

  try {
    await unlink(filePath);

    console.log(`File deleted at ${filePath}\n`);
  } catch {
    console.log("Operation failed\n");
  }
};

export { deleteFile };
