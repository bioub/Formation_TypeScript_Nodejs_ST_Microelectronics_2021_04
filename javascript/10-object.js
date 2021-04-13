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
};

const coords2 = {
  x: 3,
  y: 4,
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
