import { chdir } from "node:process";

const changeDirectory = (path) => {
  try {
    chdir(path);
  } catch {
    console.log("Operation failed\n");
  }
};

export { changeDirectory };
