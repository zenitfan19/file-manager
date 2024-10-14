import { readdir } from "node:fs/promises";

const listDirectoryContent = async (path) => {
  try {
    const filesAndFolders = await readdir(path, { withFileTypes: true });
    filesAndFolders.sort((left, right) => {
        if (left.isDirectory() && !right.isDirectory()) {
            return -1;
        }

        if (!left.isDirectory() && right.isDirectory()) {
            return 1;
        }

        return left.name.localeCompare(right.name);
    });

    const filesAndFoldersMapped = filesAndFolders.map((fileOrFolder) => ({ name: fileOrFolder.name, type: fileOrFolder.isDirectory() ? 'directory' : 'file' }));
    console.table(filesAndFoldersMapped);
    console.log('\n');
  } catch {
    console.log('Operation failed\n');
  }
};

export { listDirectoryContent };
