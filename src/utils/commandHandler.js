import { exit, cwd } from "node:process";
import {
  addFile,
  readFile,
  deleteFile,
  renameFile,
  copyFile,
  moveFile,
  calculateHash,
  compressFile,
  decompressFile,
  printOSInformation,
  changeDirectory,
  listDirectoryContent,
} from "../services/index.js";
import { invalidInputErrorLog } from "./logger.js";

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

  invalidInputErrorLog();
};

export { commandHandler };
