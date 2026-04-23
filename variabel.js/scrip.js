console.log("dimana bumi dipijak saya pasti akan menang didalamnya");
// 1. tentang penggunaan let
let nama = "Dimas";
let umur = 20;
let hobi = "membaca";

// tampilan data
console.log("Nama saya adalah " + nama);
console.log("Umur saya adalah " + umur);
console.log("Hobi saya adalah " + hobi);

// untuk mengubah data
nama = "fattahul halim";
umur = 19;
hobi = "bermain game";

// menampilkan ganti data sebelumnya
console.log("Nama saya adalah " + nama);
console.log("Umur saya adalah " + umur);
console.log("Hobi saya adalah " + hobi);

// kelakuan dari let
let namaBelakang = "hasan";
{
  let namaBelakang = "hasanudin";
  console.log(namaBelakang);
}
console.log(namaBelakang);

// 2. tentang penggunaan const ada global dan lokal
var namaDepan = "herman";
console.log(namaDepan);
namaDepan = "budi";
console.log(namaDepan);

//KELAKUAN DARI verticalAlign:
var namaTengah = "keren";
{
  var namaTengah = "ganteng banget";
  console.log(namaTengah);
}
console.log(namaTengah);

// kasus
naspom = "gorengan pincuk";
{
  naspom = "mie ayam cakar";
}
console.log(naspom);


// 3. const
const bilangan prima = 2;
console.log(bilangan prima);
// bilangan prima = "menjadi 7" ini gak boleh karena sudah janji bahwa ini const.