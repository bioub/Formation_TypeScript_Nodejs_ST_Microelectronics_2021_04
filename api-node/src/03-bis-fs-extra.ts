import fs from 'fs-extra';
import path from 'path';

const prettierRcPath = path.resolve(__dirname, '..', '.prettierrc');

// avec fs-extra .promises est optionnel
fs.promises.readFile(prettierRcPath, { encoding: 'utf-8' })
  .then((str) => {
    console.log(str);
  })
  .catch((err) => {})

// fs-extra = fs + des méthodes plus haut niveau
// copy
// emptyDir
// ensureFile
// ensureDir
// ensureLink
// ensureSymlink
// mkdirp
// mkdirs
// move
// outputFile
// outputJson
// pathExists
// readJson
// remove
// writeJson
