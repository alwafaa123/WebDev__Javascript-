let dataString = "semua ada masanya";
console.log(dataString);

// 1. escaping string =  ( \'\" \\ \n \t \b \f  )
let data1 = 'bara ingin mencari "sesuatu yang sangat hebat"';
console.log(data1);
let data2 = 'asa Berkata: "ilmu itu ada panduannya"';
console.log(data2);
let data3 = "alya sedang belajar dengan, \n serius";
console.log(data3);
let data4 = "saya sedang belajar \t javascript";
console.log(data4);

// 2. literal string ( template literal string )
let namaDepan = "nimas";
let namaBelakang = "sari";
let umur = 20;
let namaLengkap = umur + " " + namaDepan + " " + namaBelakang; // jadi masalaj ketika ada pemogram yang console.error;
console.log(namaLengkap);

// maka ad cara yang lebih elegan biar gak error.
let biodata = `${namaDepan} ${namaBelakang} ${umur}`;
console.log(biodata);
