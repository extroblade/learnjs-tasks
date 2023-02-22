let arr = []; // obj = {}

function A() { return arr; }
function B() { return arr; }

console.log( new A() == new B() )