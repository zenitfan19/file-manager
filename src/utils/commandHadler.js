import { exit } from 'node:process';
import { printOSInformation } from '../services/os.js';
import { changeDirectory } from '../services/changeDirectory.js';
import { listDirectoryContent } from '../services/listDirectoryContent.js';

const commandHandler = async (command) => {
    if (command === 'up') {
        changeDirectory('..');
        return;
    }

    if (command.startsWith('cd')) {
        const path = command.replace('cd', '').trim();
        changeDirectory(path);
        return;
    }

    if (command === 'ls') {
        await listDirectoryContent(process.cwd());
        return;
    }

    if (command.startsWith('os')) {
        printOSInformation(command);
        return;
    }

    if (command === '.exit') {
        exit();
    }

    console.log('Invalid input!\n');
};

export { commandHandler };