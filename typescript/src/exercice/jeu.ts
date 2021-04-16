import { getRandomInt } from 'mdn-random';
import { createInterface } from 'readline';

interface JeuOptions {
  min?: number;
  max?: number;
}

export class Jeu {
  private rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  entierAlea: number;
  essais: number[] = [];

  constructor(options: JeuOptions = {}) {
    const { min = 0, max = 100 } = options;

    this.entierAlea = getRandomInt(min, max);
  }
  jouer() {
    if (this.essais.length) {
      console.log(`Vous avez déjà joué : ${this.essais.join(' - ')} !!!`);
    }

    this.rl.question('Quel est le nombre ? ', (answer) => {
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
        this.rl.close();
      }
    });
  }
}

// export { Jeu };
