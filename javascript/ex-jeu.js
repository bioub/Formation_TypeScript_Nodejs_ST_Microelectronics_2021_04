const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jouer() {
  rl.question('Quel est le nombre ? ', (answer) => {

    jouer();

    // Gagné
    // rl.close(); // désenregister le callback / stopper le programme
  });
}

jouer();

// pile d'appels
// ^
// |
// |                      question        question
// |question              jouer           jouer
// |jouer                 =>              =>
// +--------------------------------------------> temps
// Sortie
