globalThis.scopeGlobal = 'scopeGlobal';
const scopeModule = 'scopeModule';

function externe() {
  const scopeClosure = 'scopeClosure';
  function interne() {
    const scopeLocal = 'scopeLocal';
    console.log(scopeLocal);
    console.log(scopeClosure);
    console.log(scopeModule);
    console.log(scopeGlobal);
  }
  interne();
}

externe();

// pile d'appels
// ^
// |
// |interne
// |externe
// +---------------------------------> temps
