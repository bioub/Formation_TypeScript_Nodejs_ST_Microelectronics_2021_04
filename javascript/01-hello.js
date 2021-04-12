const names = ['Jean', 'Eric', 'Romain'];

/** @param {string} name */
function hello(name) {
  return 'Hello ' + name.toUpperCase();
}

for (const n of names) {
  console.log(hello(n));
}

