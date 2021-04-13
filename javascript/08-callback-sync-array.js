'use strict';

// ES5 (2009)
const names = ['Jean', 'Eric', 'Romain'];

// paradigme fonctionnel
names
  .filter((n) => n.length === 4)
  .map((n) => n.toUpperCase())
  .forEach((n) => console.log('Hello ' + n));

console.log(names); // [ 'Jean', 'Eric', 'Romain' ]

console.log(
  'total chars',
  names.reduce((acc, n) => acc + n.length, 0),
);

console.log('FIN');

// pile d'appels
// ^
// |               up   up   lg   lg
// |=> - => - =>   => - =>   => - =>   => - => - =>
// |filter       - map     - forEach - reduce       - lg
// +----------------------------------------------------> temps
// Sortie                    JEAN ERIC                FIN
