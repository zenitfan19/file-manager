import { createReadStream } from "node:fs";
import { resolve } from "node:path";
import { cwd } from "node:process";

const readFile = async (command) => {
  const filePath = command.slice(3).trim();

  try {
    const filePathResolved = resolve(cwd(), filePath);

    const readableStream = createReadStream(filePathResolved, {
      encoding: "utf8",
    });

    await new Promise((resolve, reject) => {
      readableStream.on("data", (chunk) => {
        console.log(chunk);
      });

      readableStream.on("end", () => {
        console.log("\n");
        resolve();
      });
      readableStream.on("error", (err) => reject(err));
    });
  } catch (err) {
    console.log(`Operation failed ${err}\n`);
  }
};

export { readFile };
