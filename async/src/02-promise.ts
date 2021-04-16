import { resolve } from "node:path";

setTimeout(() => {
  console.log('1s');
}, 1000);

function timeout(delay: number) {
  return new Promise<void>(() => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

timeout(1000).then(() => console.log('1s'));

function randomLetter(letter: string) {
  return new Promise<string>(() => {
    setTimeout(() => {
      resolve(letter);
    }, Math.random());
  });
}

// On ne peut pas dire quand les lettre reviennnent :
// randomLetter('A').then((letter) => console.log(letter));
// randomLetter('B').then((letter) => console.log(letter));
// randomLetter('C').then((letter) => console.log(letter));
// randomLetter('D').then((letter) => console.log(letter));

// les promesses sont combinées en une, avec
// les lettres résolues dans l'ordre du tableau
// (et non dans l'ordre du retour)
Promise.all([
  randomLetter('A'),
  randomLetter('B'),
  randomLetter('C'),
  randomLetter('D'),
]).then((letters) => {
  console.log(letters);
});
