function createFunction(msg) {
  // msg (closure)
  return function() {
    console.log(msg);
  };
}

const hello = createFunction('Hello');
hello();

const bonjour = createFunction('Bonjour');
bonjour();
hello();
bonjour();

// pile d'appels
// ^
// |
// |
// |createFunction - hello
// +---------------------------------> temps

function createIncrement(step = 1) {
  let count = 0;
  return function() {
    count += step;
    console.log(count);
  }
}

const increment = createIncrement();
increment(); // 1
increment(); // 2
increment(); // 3

const incrementTwice = createIncrement(2);
incrementTwice(); // 2
incrementTwice(); // 4
incrementTwice(); // 6
