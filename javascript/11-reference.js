'use strict';

const coords1 = {
  x: 1,
  y: 2,
  subCoords: {

  }
};

const coords2 = coords1; // passage par référence
coords2.z = 3;

console.log(coords1.z); // 3

console.log(coords1 === coords2); // true

const MyMath = Math;
console.log(MyMath.PI); // 3.14


// shallow clone (clone en surface)
const cloneCoords = Object.assign({}, coords1);

// shallow clone (ES2018)
const cloneCoords2018 = {...coords1};

const nbs = [1, 2, 3];

// shallow clone array
const cloneNbs = nbs.slice();

// shallow clone array (ES2015)
const cloneNbs2015 = [...nbs];

// string (objet immuable: une fois créé, ne peut plus être modifié)
let name1 = "Romain";
console.log(name1[0]); // R
// name1[0] = 'P'; // impossible car immuable

const name2 = 'P' + name1.slice(1);

console.log(name1); // Romain
console.log(name2); // Pomain

name1 = name1 + name1;

const prenom1 = "Romain";
let prenom2 = prenom1; // passage par référence
const prenom3 = 'Maurice';
prenom2 = prenom3;
prenom2[0] = 'P'; // impossible


// const (référence qui est constante)
const obj = {
  name: 'Romain',
};

// Object.freeze (objet qui est constant)
Object.freeze(obj);

obj.age = 35; // mode strict => erreur

