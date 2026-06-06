let nilai = 80;
console.log(`nilai: ${nilai}`);
let hasil;

if (nilai >= 75) {
  hasil = "Lulus";
} else {
  hasil = "perbaiki lagi nilai kamu";
}
console.log(`hasil: ${hasil}`);

//ternary operator
//variable hasil = (kondisi) ? trure : false

let hasil_ternary = nilai >= 75 ? "Lulus" : "perbaiki lagi nilai kamu";
console.log(`hasil_ternary: ${hasil_ternary}`);
