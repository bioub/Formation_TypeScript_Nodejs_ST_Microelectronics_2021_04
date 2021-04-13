'use strict';

// for (var i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000);
// }


function pause(delay) {
  // pause delay ms
  const debut = Date.now();
  while (debut + delay > Date.now()) {} // bloqué thread (MAUVAISE PRATIQUE)
}

for (var i = 0; i < 3; i++) {
  pause(1000);
  console.log(i);
}
