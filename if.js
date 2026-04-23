// script.js

let nilai = 85;

if (nilai >= 90) {
    console.log("Nilai A");
} else if (nilai >= 80) { // Ini hanya akan dicek jika nilai < 90
    console.log("Nilai B");
} else if (nilai >= 70) { // Ini hanya akan dicek jika nilai < 80
    console.log("Nilai C");
} else { // Ini akan dijalankan jika semua kondisi di atas false
    console.log("Nilai D");
}