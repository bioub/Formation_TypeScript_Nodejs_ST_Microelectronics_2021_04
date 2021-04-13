// Math.sum(1, 2);
console.log('Math.sum', Math.sum); // undefined

// MAUVAISE PRATIQUE : étendre des objets qu'on a pas déclaré :
// ex: Math, process, console, Array, String

// [[1], [2]].flat(); // [1, 2]

// les objets sont extensibles
// ajouter des clés/valeurs
Math.sum = (a, b) => a + b;
console.log('Math.sum(1, 2)', Math.sum(1, 2)); // 3

// modifier des clés/valeurs
Math.sum = (a, b) => Number(a) + Number(b);
console.log('Math.sum(1, "2")', Math.sum(1, "2")); // 3

// supprimer des clés/valeurs
delete Math.sum;
console.log('Math.sum', Math.sum); // undefined


function pileOuFace() {
  return Math.random() >= 0.5 ? 'pile' : 'face';
}

// faux tests unitaire avec remplacement de random
const backupRandom = Math.random;
Math.random = () => 0.75;
console.log(pileOuFace()); // pile
console.log(pileOuFace()); // pile
console.log(pileOuFace()); // pile
console.log(pileOuFace()); // pile
Math.random = backupRandom;


// Créer un objet, 2 syntaxes :
// - object literal
//    - l'objet est unique (une seule instance)
//    - l'objet est très simple à créer (de préférence sans méthode)
// - constructor function

// object literal
const coords1 = {
  x: 1,
  y: 2,
  // subXY: function() {
  //   return this.x - this.y;
  // }
};

const coords2 = {
  x: 3,
  y: 4,
  // subXY: function() {
  //   return this.x - this.y;
  // }
};

globalThis.MyMath = {
  sum: (a, b) => a + b,
  sub: (a, b) => a - b,
};

console.log(coords1.x); // 1
console.log(MyMath.sum(1, 2)); // 3

// l'opérateur [] pour accéder aux clés
console.log(coords1['x']); // 1
console.log(MyMath['sum'](1, 2)); // 3

// à réserver à des cas dynamiques
const key = 'x';
console.log(coords1[key]); // 1

// ou plus des clés qui seraient invalides
coords2['x-y'] = coords2.x - coords2.y;

for (const k in coords1) {
  const value = coords1[k];
  console.log(k, value);
}

const copyCoords1 = {};
for (const k in coords1) {
  copyCoords1[k] = coords1[k];
}

console.log('copyCoords1.x', copyCoords1.x); // 1

// la boucle for in fonctionne sur des clés énumerables
// (les clés de Math ne le sont pas)
for (const k in Math) {
  console.log(k);
}

// (ne fonctionne que sur clés énumérables)
const jsonStr = JSON.stringify(coords1);
console.log(jsonStr); // {"x":1,"y":2}

const objFromJson = JSON.parse(jsonStr);
console.log('objFromJson.x', objFromJson.x);

// factory
function coordsFactory(x, y, z = 0) {
  return {
    x: x,
    y: y,
    z: z,
  }
}

const coordsA = coordsFactory(1, 2);
const coordsB = coordsFactory(3, 4);

function Contact(name) {
  // if (name && name.length > 4) {
  this.name = name;
  // }
  // this.hello = function() {
  //   return 'Hello my name is ' + this.name;
  // };
}

Contact.getClass = function() {
  return 'Contact';
};

Contact.prototype.hello = function() {
  return 'Hello my name is ' + this.name;
};

const romain = new Contact('Romain');
const eric = new Contact('Eric');
const jean = new Contact('Jean');

console.log('typeof Contact', typeof Contact); // function
console.log('typeof romain', typeof romain); // object
console.log('romain.name', romain.name); // Romain
delete romain.name;
console.log('romain.name', romain.name); // undefined

console.log('eric.hello()', eric.hello()); // Hello my name is Eric
console.log('jean.hello()', jean.hello()); // Hello my name is Jean

console.log('eric.hello === jean.hello', eric.hello === jean.hello); // true

console.log('Contact.getClass()', Contact.getClass()); // Contact

console.log('romain instanceof Contact', romain instanceof Contact); // true
console.log('romain instanceof Object', romain instanceof Object); // true
console.log('coords1 instanceof Object', coords1 instanceof Object); // true
console.log('["abc"] instanceof Array', ['abc'] instanceof Array); // true
console.log('["abc"] instanceof Object', ['abc'] instanceof Object); // true

console.log('coordsFactory instanceof Function', coordsFactory instanceof Function); // true
console.log('coordsFactory instanceof Object', coordsFactory instanceof Object); // true
console.log('Contact instanceof Function', Contact instanceof Function); // true
console.log('Contact instanceof Object', Contact instanceof Object); // true


console.log(eric.name !== undefined); // true
console.log(eric.hello !== undefined); // true
console.log('name' in eric); // true
console.log('hello' in eric); // true
// la clé vient-elle de l'objet ou du prototype ?
console.log(eric.hasOwnProperty('name')); // true
console.log(eric.hasOwnProperty('hello')); // false

console.log(eric.name); // la clé est dans l'objet
console.log(eric.hello); // la clé est dans le prototype de la fonction constructeur Contact
console.log(eric.hasOwnProperty); // la clé est dans le prototype de la fonction constructeur Object
console.log(eric.dfjgndjkf); // undefined

console.log(eric.propertyIsEnumerable('name')); // true
console.log(Math.propertyIsEnumerable('PI')); // false

// old school
for (const k in eric) {
  if (eric.hasOwnProperty(k)) {
    console.log(k); // name
  }
}

// new school
for (const k of Object.keys(eric)) {
  console.log(k); // name
}


