'use strict';

setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout((lettre) => console.log(lettre), 500, 'D');

console.log('E');

// 1 - ..500ms.. A B ..1s.. C ..500ms.. D E
// 2 - E B ..500ms A D ...500ms.. C
// 3 - B E ..500ms A D ...500ms.. C


// pile d'appels
// ^
// |
// |                              lg        lg    lg          lg
// |st - st - st - st - lg ..⟳.. cbB ..⟳.. cbA - cbD ..⟳..  cbC
// +------------------------------7ms-------500ms-------------100ms--> temps
// Sortie               E         B         A     D           C

// Enregistré 4 callback
// File d'attente de timer (0ms): cbB
// File d'attente de timer (7ms):
// File d'attente de timer (8ms):
// File d'attente de timer (499ms): cbA - cbD
// File d'attente de timer (500ms): cbD
// File d'attente de timer (501ms):
// File d'attente de timer (999ms): cbC
// File d'attente de timer (1000ms): cbC

// Jake Archibald: In the loop JSConf Asia 2018 (Youtube)
