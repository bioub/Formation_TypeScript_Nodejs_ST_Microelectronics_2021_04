// let et const = portée de bloc

let monPrenom = 'Romain'; // 1 objet
monPrenom = monPrenom.toUpperCase(); // (1 nouvel objet) pas de nouvelle affectation avec const

// function hello(name) {
//   return 'Hello ' + name.toUpperCase() + '!';
// }

function hello(name) {
  return `Hello ${name.toUpperCase()} !`;
}

const url = 'https://www.google.fr/';
const title = 'Google';
// const lien = '<a href="' + url + '">' + title + '</a>';
const lien = `<a href="${url}">${title}</a>`;

// function coordsFactory(x, y, z = 0) {
//   return {
//     x: x,
//     y: y,
//     z: z,
//   }
// }

// const coordsFactory = (x, y, z = 0) => {
//   return {
//     x: x,
//     y: y,
//     z: z,
//   };
// };

const coordsFactory = (x, y, z = 0) => ({x, y, z});

const names = ['Jean', 'Eric', 'Romain'];

// paradigme fonctionnel
names
  // .filter(function (n) {
  //   return n.length === 4;
  // })
  .filter((n) => n.length === 4)
  .map((n) => n.toUpperCase())
  .forEach((n) => console.log('Hello ' + n));


// function sum(a, b) {
//   let result = a + b;

//   for (let i = 2; i < arguments.length; i++) {
//     result += arguments[i];
//   }

//   return result;
// }

// REST Params (ES2015)
// Conversion syntaxique :
// liste de valeur (3, 4, 5) -> tableau ([3, 4, 5])
function sum(a, b, ...nbs) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }

  return result;
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// SPREAD Operator (ES2015)
// Conversion syntaxique :
// tableau ([3, 4, 5]) -> liste de valeur (3, 4, 5)
function add(a, b, c) {
  return a + b + c;
}

const nbs = [3, 4, 5];
console.log(add(...nbs)); // 12

const copy = [1, 2, ...nbs]; // [1, 2, 3, 4, 5]

// Destructurer un tableau (ES2015)
// const parts = 'Romain Bohdanowicz'.split(' ');
// const prenom = parts[0];
// const nom = parts[1];

//    ['Romain', 'Bohdanowicz']
const [prenom  , nom          ] = 'Romain Bohdanowicz'.split(' ');
console.log(prenom, nom);

// Combiné avec default param
const [firstName, lastName = 'Doe'] = 'John'.split(' ');
console.log(firstName, lastName);

// Combiné avec REST Param
//    [1, 2   , 3, 4, 5        ]
const [ , deux,  , ...othersNbs] = nbs;
console.log(deux, othersNbs); // 2 [4, 5]

// SPREAD Object (ES2018)
// objet ({x: 1, y: 2}) -> liste de clé/valeur
const coords = {x: 1, y: 2};
const copyObj = {...coords, x: 3, z: 4};

// Destructurer un objet (ES2015)
//    {x: 1   , y: 2   }
const {x: valX, y: valY} = coords;
console.log(valX, valY);

const x = 1;
const y = 2;

// Shorthand property (ES2015)
// const newCoords = { x: x, y: y };
const newCoords = { x, y };

// const { z  } = copyObj; // { z: z }
// console.log(z);


// REST Object (ES2018)
// liste de clé/valeur (x: 1, y: 2) -> objet ({x: 1, y: 2})
const { z = 0, ...coords2d } = copyObj; // { z: z }
console.log(z);
console.log(coords2d); // {x: 3, y: 2}

// Method properties
const coords2 = {
  x: 3,
  y: 4,
  subXY() { // au lieu de subXY: function() {
    return this.x - this.y;
  }
};


// function Contact(name) {
//   this.name = name;
// }

// Contact.getClass = function() {
//   return 'Contact';
// };

// Contact.prototype.hello = function() {
//   return 'Hello my name is ' + this.name;
// };

// class (ES2015)
class Contact {
  constructor(name) {
    this.name = name;
  }
  hello() {
    return 'Hello my name is ' + this.name;
  }
  static getClass() {
    return 'Contact';
  }
}

console.log(typeof Contact); // function
console.log(typeof Contact.prototype.hello); // function

