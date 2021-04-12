function externe() {
  console.log('externe');
  function interne() {
    console.log('interne');
  }
  interne();
}

externe();
console.log('typeof interne', typeof interne); // undefined
