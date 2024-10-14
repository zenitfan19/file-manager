import { createReadStream } from "node:fs";

const readFile = (command) => {
  const filePath = command.slice(3).trim();

  try {
    const readableStream = createReadStream(filePath, { encoding: "utf8" });
    readableStream.on("error", () => console.log(`Operation failed ${err}\n`));
    readableStream.on("data", (chunk) => console.log(chunk));
    readableStream.on("end", () => console.log("\n"));
  } catch (err) {
    console.log(`Operation failed ${err}\n`);
  }
};

export { readFile };
