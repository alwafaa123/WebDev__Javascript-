// script.js

let angkaA = 10;
let angkaB = 5;
let teksAngka = "10";

console.log("--- Operator Perbandingan ---");
console.log("angkaA == angkaB:", angkaA == angkaB);       // false
console.log("angkaA == teksAngka:", angkaA == teksAngka); // true (karena 10 nilainya sama dengan "10" setelah dikonversi)

console.log("angkaA === teksAngka:", angkaA === teksAngka); // false (karena 10 adalah Number, "10" adalah String) - Ini yang lebih aman!

console.log("angkaA != angkaB:", angkaA != angkaB);       // true
console.log("angkaA !== teksAngka:", angkaA !== teksAngka); // true (karena tipe datanya beda) - Ini yang lebih aman!

console.log("angkaA > angkaB:", angkaA > angkaB);         // true
console.log("angkaA <= angkaB:", angkaA <= angkaB);       // false