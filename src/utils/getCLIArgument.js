import { argv } from "node:process";

const parseArguments = () => {
  const prefix = "--";
  const cliArguments = argv.slice(2).map((argument) => {
    const [key, value] = argument.replace(prefix, "").split("=");
    return { [key]: value };
  });

  return cliArguments;
};

const getCLIArgument = (key) =>
  parseArguments().find((argument) => argument[key])?.[key];

export { getCLIArgument };
