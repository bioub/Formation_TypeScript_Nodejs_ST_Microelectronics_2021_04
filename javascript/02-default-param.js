// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum(1, 2)); // NaN

// function sum(a, b, c) {
//   if (c === undefined) {
//     c = 0;
//   }

//   return a + b + c;
// }

// console.log(sum(1, 2)); // 3


// function sum(a, b, c) {
//   // si c est falsy, on affecte 0
//   // falsy : false, undefined, null, '', 0
//   // à utiliser si la valeur par défaut est false
//   c = c || 0;

//   return a + b + c;
// }

// console.log(sum(1, 2)); // 3

// function sum(a, b, c) {
//   // ES2020 : Nullish Coalescing Operator
//   // si c est nullish, on affecte 10
//   // nullish : null, undefined
//   c = c ?? 0;

//   return a + b + c;
// }

// console.log(sum(1, 2)); // 3

function sum(a, b, c = 0) {
  return a + b + c;
}

console.log(sum(1, 2)); // 3
