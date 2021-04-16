// setInterval(() => {
//   console.log('1s');
// }, 1000);

function interval(delay: number) {
  return new Promise<void>((resolve) => {
    setInterval(() => {
      // appel le callback du .then
      resolve();
    }, delay);
  });
}

interval(1000).then(() => console.log('1s'));


// Les promesses fonctionne pour des API
// avec un seul retour
// - readFile pas createReadStream
// - setTimeout pas setInterval
// - requete http pas requete net

// Pour ces cas :
// - event emitter
// - stream dans certains sceniari
// - async iteration (ES2018)
// - rxjs (Observable ~ promesses qui se répètent)
