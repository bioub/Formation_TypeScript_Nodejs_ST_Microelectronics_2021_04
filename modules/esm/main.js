import { Clock } from './clock.js';

document.addEventListener('click', () => {
  const divEl = document.querySelector('.clock');

  const clock = new Clock(divEl);
  clock.start();

});
