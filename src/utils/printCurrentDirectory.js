import { cwd } from "node:process";

const printCurrentDirectory = () => {
  console.log(`Current directory: ${cwd()}\n`);
};

export { printCurrentDirectory };
