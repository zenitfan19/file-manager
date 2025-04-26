import { stdin, stdout } from "node:process";
import { homedir } from "node:os";
import { createInterface } from "node:readline/promises";
import {
  getCLIArgument,
  commandHandler,
  printCurrentDirectory,
} from "./utils/index.js";
import { exitProcess, changeDirectory } from "./services/index.js";
import { log } from "./utils/index.js";

const userName = getCLIArgument("username");

const readLine = createInterface({
  input: stdin,
  output: stdout,
  terminal: true,
  // prompt: 'Enter a command: ',
});

changeDirectory(homedir());

readLine.on("line", async (line) => {
  await commandHandler(line);
  printCurrentDirectory();
  readLine.prompt();
});
process.on("exit", () => exitProcess(userName));

log.yellow(`Welcome to the File Manager, ${userName ?? "Anonymous"}!`);
printCurrentDirectory();

readLine.prompt();
