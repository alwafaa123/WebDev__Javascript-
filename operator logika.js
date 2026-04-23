// script.js

let isDewasa = true;
let memilikiKTP = true;
let punyaSIM = false;

console.log("--- Operator Logika ---");
// isDewasa DAN memilikiKTP
console.log("Boleh voting:", isDewasa && memilikiKTP); // true

// isDewasa ATAU punyaSIM
console.log("Boleh masuk bar:", isDewasa || punyaSIM); // true

// BUKAN isDewasa
console.log("Belum dewasa:", !isDewasa); // false