// script.js

// Fungsi tanpa parameter
function sapaSelamatDatang() {
    console.log("Selamat datang di JavaScript!");
}

// Fungsi dengan parameter
// Parameter adalah 'wadah' sementara untuk nilai yang akan diberikan saat fungsi dipanggil.
// Nama parameter harus satu kata (tanpa spasi) dan unik dalam kurung fungsi.
function sapaNama(namaLengkapPengguna) { // Nama parameter diubah menjadi 'namaLengkapPengguna' (contoh camelCase)
    // Di sini kita menggunakan 'namaLengkapPengguna' karena itu adalah parameter yang kita definisikan.
    console.log("Halo, " + namaLengkapPengguna + "!");
}

// Fungsi yang mengembalikan nilai
// Sama seperti di atas, kita gunakan nama parameter (misal: 'bilangan1', 'bilangan2'),
// BUKAN langsung angka atau nilai.
function tambah(bilangan1, bilangan2) {
    let hasil = bilangan1 + bilangan2; // Kita gunakan parameter yang sudah didefinisikan
    return hasil; // Mengembalikan hasil penjumlahan
}

// --- Cara Memanggil (Menggunakan) Fungsi-Fungsi Ini ---

console.log("\n--- Memanggil Fungsi ---");

// Memanggil fungsi tanpa parameter
sapaSelamatDatang(); // Ini akan mencetak "Selamat datang di JavaScript!"

// Memanggil fungsi sapaNama dengan memberikan nilai (argumen) ke parameternya
// "Fattahul Halim" adalah argumen yang akan masuk ke parameter 'namaLengkapPengguna'
sapaNama("Fattahul Halim"); // Ini akan mencetak "Halo, Fattahul Halim!"
sapaNama("Rizky Pratama");  // Bisa dipanggil lagi dengan nama lain

// Memanggil fungsi tambah dan menyimpan hasilnya
let totalPertama = tambah(5, 5); // 5 akan masuk ke 'bilangan1', 5 yang kedua ke 'bilangan2'
console.log("Hasil 5 + 5 adalah:", totalPertama); // Output: Hasil 5 + 5 adalah: 10

let totalKedua = tambah(10, 25);
console.log("Hasil 10 + 25 adalah:", totalKedua); // Output: Hasil 10 + 25 adalah: 35

// Kamu juga bisa langsung mencetak hasil dari fungsi yang mengembalikan nilai
console.log("Hasil 7 + 3 adalah:", tambah(7, 3)); // Output: Hasil 7 + 3 adalah: 10