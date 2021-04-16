import { execFileSync } from 'child_process';
import { resolve } from 'path';

const scriptPath = resolve(__dirname, 'script.sh');

const buffer = execFileSync(scriptPath);
console.log(buffer.toString('utf-8'));

const str = execFileSync(scriptPath, { encoding: 'utf-8' });
console.log(str);
