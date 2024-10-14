import { createReadStream } from "node:fs";

const readFile = async (command) => {
  const filePath = command.slice(3).trim();

  try {
    const readableStream = createReadStream(filePath, { encoding: "utf8" });

    await new Promise((resolve, reject) => {
      readableStream.on('data', (chunk) => {
          console.log(chunk);
      });

      readableStream.on('end', () => {
          console.log('\n');
          resolve();
      });
      readableStream.on('error', (err) => reject(err));
  });
  } catch (err) {
    console.log(`Operation failed ${err}\n`);
  }
};

export { readFile };
