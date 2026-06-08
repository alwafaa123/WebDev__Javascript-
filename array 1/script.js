let array_siswa = ["dimas", "budi", "sari", "ani", "joko"];
console.log(array_siswa);

console.log(array_siswa[0]);
console.log(array_siswa[1]);
console.log(array_siswa[2]);
console.log(array_siswa[3]);
console.log(array_siswa[4]);

let panjang_array = array_siswa.length;
console.log(panjang_array);

array_siswa.push("siti");
console.log(`tambahkan asep dibelakang  ---> ${array_siswa}`);

let ambil_siswa = array_siswa.pop();
console.log(`hapus ${ambil_siswa} dibelakang --> ${array_siswa}`);

array_siswa.unshift("siti");
console.log(`tambahkan siti didepan  ---> ${array_siswa}`);

ambil_siswa = array_siswa.shift();
console.log(`hapus ${ambil_siswa} didepan --> ${array_siswa}`);
