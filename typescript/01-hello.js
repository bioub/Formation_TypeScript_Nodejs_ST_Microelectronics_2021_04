'use strict';
var names = ['Jean', 'Eric', 'Romain', 12];
function hello(name) {
    return 'Hello ' + name.toUpperCase();
}
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var n = names_1[_i];
    console.log(hello(n));
}
