import { execFile } from 'child_process';
import { resolve } from 'path';

const scriptPath = resolve(__dirname, 'script.sh');

execFile(scriptPath, (error, stdout, stderr) => {
  console.log(stdout);
});
