// Module IIFE
// Immediately Invoked Function Expression
(function () {
  'use strict';

  const divEl = document.querySelector('.clock');

  const clock = new Clock(divEl);
  clock.start();
}());
