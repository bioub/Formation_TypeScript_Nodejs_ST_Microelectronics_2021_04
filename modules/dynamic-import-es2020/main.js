document.addEventListener('click', () => {
  const divEl = document.querySelector('.clock');

  // import à l'appel de la fonction import
  import('./clock.js').then(({ Clock }) => {
    const clock = new Clock(divEl);
    clock.start();
  });

});
