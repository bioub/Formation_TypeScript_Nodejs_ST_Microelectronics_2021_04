'use strict';

const names = ['Jean', 'Eric', 'Romain'];

function hello(name: string) {
  return 'Hello ' + name.toUpperCase();
}

for (const n of names) {
  console.log(hello(n));
}

