'use strict';

// 1 - Method properties
const Random = {
  get() {
    return Math.random();
  },
  getArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  },
  getIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  },
};

// import de l'API readline de Node.js
const readline = require('readline');

// 2 - Class
class Jeu {
  /**
   * @param {object} options
   * @param {number} options.min
   * @param {number} options.max
   */
  constructor(options = {}) {
    // 3 - Object Destructuring + Default Param
    const { min = 0, max = 100 } = options;
    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.entierAlea = Random.getInt(min, max);
    this.essais = [];
  }
  jouer() {
    if (this.essais.length) {
      // 4 - Template literal
      console.log(`Vous avez déjà joué : ${this.essais.join(' - ')} !!!`);
    }

    this._rl.question('Quel est le nombre ? ', (answer) => {

      const entierSaisi = Number.parseInt(answer, 10);

      if (Number.isNaN(entierSaisi)) {
        console.log('Il faut saisir un nombre');
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        this.jouer();
      } else if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        this.jouer();
      } else {
        console.log('Gagné');
        this._rl.close();
      }
    });
  }
}


const game = new Jeu({
  min: 50,
  max: 60,
});
game.jouer();


