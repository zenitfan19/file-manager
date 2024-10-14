const parseArguments = () => {
  const prefix = "--";
  const cliArguments = process.argv
    .slice(2)
    .map((argument) => {
      const [key, value] = argument.replace(prefix, '').split('=');
      return { [key]: value };
    });

  return cliArguments;
};

const getCLIArgument = (key) => parseArguments().find((argument) => argument[key])?.[key];

export { getCLIArgument };
