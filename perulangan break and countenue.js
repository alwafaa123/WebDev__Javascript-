console.log("\n--- Contoh 'break' ---");
for (let j = 0; j < 10; j++) {
    if (j === 5) {
        console.log("Angka 5 ditemukan, menghentikan perulangan.");
        break; // Perulangan akan berhenti di sini
    }
    console.log("Angka saat ini: " + j);
}
// Output akan sampai "Angka 5 ditemukan, menghentikan perulangan." dan berhenti