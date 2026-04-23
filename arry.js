// script.js

let warna = ["Merah", "Hijau", "Biru"];

console.log(warna[0]); // Output: Merah (item pertama)
console.log(warna[1]); // Output: Hijau (item kedua)
console.log(warna[2]); // Output: Biru (item ketiga)
console.log(warna[3]); // Output: undefined (indeks 3 tidak ada)

// Mengetahui panjang (jumlah item) array
console.log("Jumlah warna:", warna.length); // Output: 3
// Mengakses item terakhir:
console.log("Warna terakhir:", warna[warna.length - 1]); // Output: Biru
//////////////////////////////////////////////////////// script.js

let namaHewan = ["Kucing", "Anjing", "Burung"];
console.log("Sebelum diubah:", namaHewan); // Output: ["Kucing", "Anjing", "Burung"]

namaHewan[1] = "Gajah"; // Mengubah item di indeks 1
console.log("Setelah diubah:", namaHewan); // Output: ["Kucing", "Gajah", "Burung"]
/////////////////menambah dan menghapus iteam///////////////
// script.js


let tugas = ["Belajar JS", "Olahraga"];
console.log("Tugas awal:", tugas); // ["Belajar JS", "Olahraga"]

tugas.push("Belanja"); // Menambah ke akhir
console.log("Setelah push:", tugas); // ["Belajar JS", "Olahraga", "Belanja"]

let tugasSelesai = tugas.pop(); // Menghapus dari akhir
console.log("Setelah pop:", tugas); // ["Belajar JS", "Olahraga"]
console.log("Tugas yang selesai:", tugasSelesai); // Belanja

tugas.unshift("Bangun Pagi"); // Menambah ke awal
console.log("Setelah unshift:", tugas); // ["Bangun Pagi", "Belajar JS", "Olahraga"]

let tugasAwal = tugas.shift(); // Menghapus dari awal
console.log("Setelah shift:", tugas); // ["Belajar JS", "Olahraga"]
console.log("Tugas yang paling awal:", tugasAwal); // Bangun Pagi