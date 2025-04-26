const reset = "\x1b[0m";

const log = {
  green: (text) => console.log("\x1b[32m" + text + "\n" + reset),
  red: (text) => console.log("\x1b[31m" + text + "\n" + reset),
  blue: (text) => console.log("\x1b[34m" + text + "\n" + reset),
  yellow: (text) => console.log("\x1b[33m" + text + "\n" + reset),
  cyan: (text) => console.log("\x1b[36m" + text + "\n" + reset),
};

const operationFailedErrorLog = () => log.red("Operation failed");
const invalidInputErrorLog = () => log.red("Invalid input!");

export { log, operationFailedErrorLog, invalidInputErrorLog };
