import { execSync } from 'child_process';

const buffer = execSync('ls . | grep json');
console.log(buffer.toString('utf-8'));

const str = execSync('ls . | grep json', { encoding: 'utf-8' });
console.log(str);
