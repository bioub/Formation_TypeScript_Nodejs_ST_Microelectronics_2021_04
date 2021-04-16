import { Jeu } from './jeu';

const game = new Jeu();
game.jouer();


/*
Transformer les fichiers index, jeu et random en TypeScript

Installer :
Pour Node 14 : npm i @types/node -D
Pour Node 12 : npm i @types/node@12 -D

Dans index.ts, importer la classe Jeu avec le mot clé import et retirer le mode strict
(avec import on est déjà en mode strict)

Dans jeu.ts, importer et retirer le 'use strict', puis :
- définir les propriétés rl, entierAlea et essais
    - typer rl en important la classe Interface de readline (rl doit être private)
    - typer entierAlea en nombre
    - typer essais en tableau de nombres
- créer une interface JeuOptions avec 2 propriétés optionnelles min et max
- typer le paramètre answer du callback de question
- exporter Jeu avec export default (si importé sans accolades)

Dans random.ts :
- supprimer le "use strict"
- typer les paramètres min max
- exporter les fonction avec le mot clé export

Pour importer './random' on pourra
- utiliser les accolades : import { getInt } from './random'
- tout importer dans Random : import * as Random from './random'

Builder le code et executer avec Node la version dans dist
*/
