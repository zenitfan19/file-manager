import { log } from "../utils/index.js";

const exitProcess = (userName) => {
  log.yellow(`\nThank you for using File Manager, ${userName}, goodbye!`);
};

export { exitProcess };
