import {Command} from 'commander';

const program= new Command();
program
    .option('-p, --port <port>', 'port number', '3000')
    .option('-d, --dev <dev>', 'development mode', false)
    .argument('[string]');


program.parse();

export const options = program.opts();
