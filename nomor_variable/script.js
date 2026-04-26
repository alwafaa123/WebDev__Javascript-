// number 64-bit
let nilai_int = 10; // bilangan bualat integer
let nilai_float = 20.5; // float bilangan desimal
let nilai_big_int = 9007199254740991n; // big int
console.log(typeof nilai_int);
console.log(nilai_float);
console.log(nilai_big_int);

//  menggunakan data ini gimana ya?
let angka = 5.9876;

let angka_int = parseInt(angka);
console.log(angka_int);

let angka_2 = 10;
let angka_2_float = parseFloat(angka_2);
console.log(angka_2_float);

// ini akan berguna ketika kita merubah string
let data = "12,67" + 10;
console.log(data);
console.log(parseInt(data) + 10);
console.log(parseFloat(data) + 2);

// contoh
let pembelian = "100.50";
let pajak = 50.5;
let bayar = parseFloat(pembelian) + pajak;
console.log("Total bayar: " + bayar);
