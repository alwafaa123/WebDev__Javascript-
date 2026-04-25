// operasi string
let dataString = "ABCDEFG";
let dataChar = dataString.charAt(0);
console.log(`dataChar pada index 0 = ${dataChar}`);
dataChar = dataString.charAt(1);
console.log(`dataChar pada index 1 = ${dataChar}`);
dataChar = dataString.charAt(2);
console.log(`dataChar pada index 2 = ${dataChar}`);
dataChar = dataString.charAt(3);
console.log(`dataChar pada index 3 = ${dataChar}`);
dataChar = dataString.charAt(4);
console.log(`dataChar pada index 4 = ${dataChar}`);
dataChar = dataString.charAt(5);
console.log(`dataChar pada index 5 = ${dataChar}`);
dataChar = dataString.charAt(11);
console.log(`dataChar pada index 11 = ${dataChar}`); // jiaka tidak ada kaarakter maka tidak ada hasil

// 2. menyambung string
let namaDepan = "iqbal";
let namaBelakang = "ramadhon";

let namaLengkap = namaDepan.concat(" ", namaBelakang, " ", "panglima perang");
console.log(namaLengkap);

// 3. mengambil index
console.log(namaLengkap.indexOf("a")); // mencari index pertama dari karakter a
console.log(namaLengkap.indexOf("a", 5)); // mencari index pertama dari karakter a setelah index 5
console.log(namaLengkap.indexOf("a", 10));
console.log(namaLengkap.indexOf("l"));

// 5.mengambil subkarakter atau string
console.log(namaLengkap.substring(5, 11)); // mengambil karakter dari index 5 sampai 11
console.log(namaLengkap.substring(0, 5)); // mengambil karakter dari index 0 sampai 5
console.log(namaLengkap.substring(5, 0)); // mengambil karakter dari index 5 sampai 0

// 6.slice
console.log(namaLengkap.slice(5, 11)); // mengambil karakter dari index 5 sampai 11
console.log(namaLengkap.slice(0, 5)); // mengambil karakter dari index 0 sampai 5
console.log(namaLengkap.slice(5, 0)); // mengambil karakter dari index 5 sampai 0

// 7.replace
namaLengkap = namaLengkap.replace("iqbal ramadhon", "daffa syafiq");
console.log(namaLengkap);

// 8.tolower
console.log(namaLengkap.toLowerCase());

// 9.uppercase
console.log(namaLengkap.toUpperCase());

// 10.extrak data number
let dataString2 = "10";
console.log(typeof dataString2);
let datainteger = parseInt(dataString2);
console.log(datainteger);
console.log(typeof datainteger);

// 11. ekstrak data float
dataString2 = "12,5";
console.log(typeof dataString2);
let dataFloat = parseFloat(dataString2);
console.log(dataFloat);
console.log(typeof dataFloat);
