// // How to write variables in CamelCase

let fullName: string = "Dua Majeed";
let favouriteFruit: string = "strawberry";
let cityOfLiving: string = "Karachi";
console.log(
  `My full name is${fullName} ,my favourite fruit is${favouriteFruit} and i dwell in the "City Of Lights"${cityOfLiving}`
);

// // What is Boolean
let fullNames: string = "Dua Majeed";
console.log(fullNames === "Noor Majeed");

// // ARITHMATIC OPERATORS
console.log("+", "-", "*", "/"); // these are called arithmatic operators
// and they work as same as mathematical rules
// but there is one different rule for "+" sign

let num1 = "1";
let num2 = "3";
console.log(num1 + num2);

// UNARY OPERATORS
let num: number = 6;
++num;
++num;
console.log(num);

let num1: number = 7;
--num1;
--num1;
console.log(num1);

// // ASSIGNMENT OPERATORS
let a = 3;
console.log(a);

let b = 4;
b += 5;
console.log(b);

// COMPARISON OPERATORS
let a = 4;
let b = 6;
let c = 7;
console.log(a == b, b == c);
let d = 65;
let e = 50;
console.log(d > e);
let f = 6;
let g = 8;
console.log(f != g);
let h = 100;
let i = 90;
console.log(h < i);

// // LOGICAL OPERATORS
let weekDays: number = 7;
let oneDay = 48;
console.log(weekDays == 7 && oneDay == 24);

let oneMonth = 30;
let oneHour = 60;
console.log(oneMonth != 30 || oneHour == 60);
