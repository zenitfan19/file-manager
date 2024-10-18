import { exit, cwd } from "node:process";
import { printOSInformation } from "../services/os.js";
import { changeDirectory } from "../services/changeDirectory.js";
import { listDirectoryContent } from "../services/listDirectoryContent.js";
import { addFile } from "../services/addFile.js";
import { readFile } from "../services/readFile.js";
import { deleteFile } from "../services/deleteFile.js";
import { renameFile } from "../services/renameFile.js";
import { copyFile } from "../services/copyFile.js";
import { moveFile } from "../services/moveFile.js";
import { calculateHash } from "../services/calcHash.js";
import { compressFile } from "../services/compressFile.js";
import { decompressFile } from "../services/decompressFile.js";

const commandHandler = async (command) => {
  if (command === "up") {
    changeDirectory("..");
    return;
  }

  if (command.startsWith("cd")) {
    const path = command.replace("cd", "").trim();
    changeDirectory(path);
    return;
  }

  if (command === "ls") {
    await listDirectoryContent(cwd());
    return;
  }

  if (command.startsWith("cat")) {
    await readFile(command);
    return;
  }

  if (command.startsWith("add")) {
    await addFile(command);
    return;
  }

  if (command.startsWith("rn")) {
    await renameFile(command);
    return;
  }

  if (command.startsWith("cp")) {
    await copyFile(command);
    return;
  }

  if (command.startsWith("mv")) {
    await moveFile(command);
    return;
  }

  if (command.startsWith("rm")) {
    await deleteFile(command);
    return;
  }

  if (command.startsWith("hash")) {
    await calculateHash(command);
    return;
  }

  if (command.startsWith("compress")) {
    await compressFile(command);
    return;
  }

  if (command.startsWith("decompress")) {
    await decompressFile(command);
    return;
  }

  if (command.startsWith("os")) {
    printOSInformation(command);
    return;
  }

  if (command === ".exit") {
    exit();
  }

  console.log("Invalid input!\n");
};

export { commandHandler };
