import { spawnSync } from 'child_process';

// const {
//   output: [, buffer],
// } = spawnSync('ls', ['.']);
// console.log(buffer.toString('utf-8'));

const {
  output: [, str],
} = spawnSync('ls', ['.'], { encoding: 'utf-8' });
console.log(str);
