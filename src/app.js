import { stdin, stdout } from "node:process";
import { homedir } from "node:os";
import { createInterface } from "node:readline/promises";
import { getCLIArgument } from "./utils/getCLIArgument.js";
import { commandHandler } from "./utils/commandHadler.js";
import { exitProcess } from "./services/exitProcess.js";
import { printCurrentDirectory } from "./utils/printCurrentDirectory.js";
import { changeDirectory } from "./services/changeDirectory.js";

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

console.log(`Welcome to the File Manager, ${userName ?? "Anonymous"}!\n`);
printCurrentDirectory();

readLine.prompt();
