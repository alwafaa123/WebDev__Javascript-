// script.js

// Objek kosong
let objekKosong = {};

// Objek dengan properti
let siswa = {
    nama: "Andi Pratama",
    umur: 16,
    kelas: "10B",
    isLakiLaki: true,
    nilai: [90, 85, 92] // Nilai properti bisa berupa array
};

let buku = {
    judul: "Filosofi Teras",
    penulis: "Henry Manampiring",
    tahunTerbit: 2018,
    sedangDibaca: true
};
///////////////////
// script.js

console.log("\n--- Mengakses Properti Object ---");
console.log("Nama siswa:", siswa.nama); // Output: Andi Pratama (Dot Notation)
console.log("Umur buku:", buku.tahunTerbit); // Output: 2018 (Dot Notation)

console.log("Kelas siswa:", siswa["kelas"]); // Output: 10B (Bracket Notation)

let propertiYangDicari = "penulis";
console.log("Penulis buku:", buku[propertiYangDicari]); // Output: Henry Manampiring
// Tidak bisa pakai dot notation di sini: buku.propertiYangDicari akan mencari properti bernama "propertiYangDicari"
// modifikasi///
// script.js

siswa.alamat = "Jl. Sudirman No. 5"; // Menambah properti 'alamat'
console.log("Siswa dengan alamat baru:", siswa);

buku.jumlahHalaman = 300; // Menambah properti 'jumlahHalaman'
console.log("Buku dengan jumlah halaman:", buku);
//menghapus properti ///
// script.js

console.log("Siswa sebelum dihapus properti:", siswa);
delete siswa.isLakiLaki; // Menghapus properti 'isLakiLaki'
console.log("Siswa setelah dihapus properti:", siswa);