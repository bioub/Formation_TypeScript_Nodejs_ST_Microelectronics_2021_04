type primitive = boolean | number | string;

function logPrimitive(value: primitive) {
  console.log(value);
}


logPrimitive(false);
logPrimitive(123);
logPrimitive('ABC');

// logPrimitive({});
