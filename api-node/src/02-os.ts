import os from 'os';

// Utilisation
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.cpus());

// Info de l'OS
console.log(os.platform()); // darwin
console.log(os.uptime()); // 23456
