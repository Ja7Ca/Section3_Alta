let a = 5;
let b = "Kampus Merdeka";
const nama = "Budi";
let terdaftar = false;
let lengkapArr = [a, b, nama, terdaftar];

function perkenalan(){
    let asal = "indonesia";
    return console.log(
        "perkenalkan nama saya "+
        nama +
        " nomor urut " +
        a +
        " sekarang sedang mengikuti " +
        b +
        " berasal dari " +
        asal
    );
}
//1.b mengubah operator dibawah dari === menjadi !==
if (terdaftar !== true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
// Comment syntax yang mengahsilkan error
// nama = b;

// 1.a index ke-2 baris ke 5
console.log(`array = ${lengkapArr[2]}`)

// Comment syntax yang mengahsilkan error
// console.log("asal diakses = " + asal);
console.log("a adalah = " + a);
console.log("b adalah = " + b);
//1.c pemanggilan function perkenalan
perkenalan()