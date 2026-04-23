// script.js

let isLogin = true;
let isAdmin = false;
let saldo = 100000;

if (isLogin && saldo > 50000) {
    console.log("Pengguna sudah login dan punya saldo cukup.");
}

if (isLogin || isAdmin) {
    console.log("Pengguna bisa mengakses beberapa fitur.");
}

if (isLogin && !isAdmin) { // !isAdmin berarti "bukan admin"
    console.log("Pengguna login sebagai user biasa.");
}