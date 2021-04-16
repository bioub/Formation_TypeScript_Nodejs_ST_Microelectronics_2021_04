import { exec } from 'child_process';

exec('ls . | grep json', (err, stdout, stdin) => {
  console.log(stdout);
});


// voir aussi la lib : Execa
