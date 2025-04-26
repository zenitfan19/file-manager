import { cwd } from "node:process";
import { log } from "./logger.js";

const printCurrentDirectory = () => {
  log.blue(`Current directory: ${cwd()}`);
};

export { printCurrentDirectory };
