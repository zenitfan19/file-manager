import { chdir } from "node:process";
import { operationFailedErrorLog } from "../utils/index.js";

const changeDirectory = (path) => {
  try {
    chdir(path);
  } catch {
    operationFailedErrorLog();
  }
};

export { changeDirectory };
