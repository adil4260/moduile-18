let a = 7;
let b = 5;
console.log(a, b);  //7 5

// a = b;
// b = a;
// console.log(a, b);  //5 5

const store = a;
a = b;
b = store;
console.log(a, b)


//-----------
let x = 5;
let y = 8;

console.log(x, y);

[x, y] = [y, x];
console.log(x, y);
