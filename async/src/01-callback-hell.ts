import fs from 'fs';
import path from 'path';

const prettierRcPath = path.resolve(__dirname, '..', '.prettierrc');
const prettierRcCopyPath = path.resolve(__dirname, '..', '.prettierrc.copy');

// synchrone (bloque le thread)
try {
  const buffer = fs.readFileSync(prettierRcPath);
  fs.writeFileSync(prettierRcCopyPath, buffer);
  console.log('COPY DONE');
} catch (err) {
  console.log(err);
}

// asynchrone (basée sur des callbacks)
// callback hell / pyramid of doom
fs.readFile(prettierRcPath, (err, buffer) => {
  if (err) {
    console.log(err)
  } else {
    fs.writeFile(prettierRcCopyPath, buffer, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('COPY DONE');
      }
    });
  }
});

// asynchrone (basée sur des promesses)
fs.promises.readFile(prettierRcPath)
  .then((buffer) => fs.promises.writeFile(prettierRcCopyPath, buffer))
  .then(() => console.log('COPY DONE'))
  .catch((err) => console.log(err));

(async () => {
  try {
    const buffer = await fs.promises.readFile(prettierRcPath);
    await fs.promises.writeFile(prettierRcCopyPath, buffer);
    console.log('COPY DONE');
  } catch (err) {
    console.log(err);
  }
})();
