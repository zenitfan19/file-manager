import { EOL, cpus, homedir, userInfo, arch } from 'node:os';

const printOSInformation = (command) => {
    const osCommandIndex = command.indexOf('--');
    const osCommand = command.substring(osCommandIndex + 2, command.length);
    switch(osCommand) {
        case 'EOL': console.log(`Default system End-Of-Line: ${JSON.stringify(EOL)}\n`); break;
        case 'cpus': console.log(`Total ${cpus().length} CPUs\n`); console.table(cpus().map(({model, speed }) => ({ model, speed: `${speed/1000}GHz` }))); console.log('\n'); break;
        case 'homedir': console.log(`Home directory: ${homedir()}\n`); break;
        case 'username': console.log(`Current system username: ${userInfo().username}\n`); break;
        case 'architecture': console.log(`CPU architecture: ${arch()}\n`); break;
        default: console.log('Invalid input!\n');
    }
};

export { printOSInformation };