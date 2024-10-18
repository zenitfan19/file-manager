import { access } from "node:fs/promises";

class FileExistError extends Error {
  constructor() {
    super("File already exists");
  }
}

const checkFileAlreadyExists = async (path) => {
  try {
    await access(path);

    throw new FileExistError();
  } catch (err) {
    if (err instanceof FileExistError) {
      throw err;
    }
    
    return;
  }
};

export { checkFileAlreadyExists };
