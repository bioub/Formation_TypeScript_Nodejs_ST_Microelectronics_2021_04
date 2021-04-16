import { spawn } from 'child_process';

const ls = spawn('ls', ['.']);
ls.stdout.pipe(process.stdout);
