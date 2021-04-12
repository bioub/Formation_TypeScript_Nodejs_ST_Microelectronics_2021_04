for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

console.log(i); // 3
// A (code synchrone): ..1s.. 0 ..1s.. 1 ..1s.. 2
// B (portée de bloc au niveau du for): ..1s.. 0 1 2
// C (pas de portée): ..1s.. 3 3 3

function createFunction(msg) {
  // msg (closure)
  return function() {
    console.log(msg);
  };
}

for (var i = 0; i < 3; i++) {
  setTimeout(createFunction(i), 1000);
}

for (let i = 0; i < 3; i++) {
  // portée de closure/bloc
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
