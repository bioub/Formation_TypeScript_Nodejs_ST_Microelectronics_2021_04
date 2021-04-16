import { fork } from 'child_process';
import { resolve } from 'path';

const subProcessPath = resolve(__dirname, 'subProcess.js');

const child = fork(subProcessPath, { stdio: 'pipe' });
child.stdout.pipe(process.stdout);
