import { EOL, cpus, homedir, userInfo, arch } from "node:os";
import { invalidInputErrorLog, log } from "../utils/index.js";

const printOSInformation = (command) => {
  const osCommandIndex = command.indexOf("--");
  const osCommand = command.substring(osCommandIndex + 2, command.length);
  switch (osCommand) {
    case "EOL":
      log.cyan(`Default system End-Of-Line: ${JSON.stringify(EOL)}`);
      break;
    case "cpus":
      log.cyan(`Total ${cpus().length} CPUs`);
      console.table(
        cpus().map(({ model, speed }) => ({
          model,
          speed: `${speed / 1000}GHz`,
        }))
      );
      console.log("\n");
      break;
    case "homedir":
      log.cyan(`Home directory: ${homedir()}`);
      break;
    case "username":
      log.cyan(`Current system username: ${userInfo().username}`);
      break;
    case "architecture":
      log.cyan(`CPU architecture: ${arch()}`);
      break;
    default:
      invalidInputErrorLog();
  }
};

export { printOSInformation };
