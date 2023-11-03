//function biasa

// function namaSaya (){
//     return "rizki yahahaha"
// }
// console.log(namaSaya());

//function expresion
// var func =function () {
//     alert("santaibee")
// }
// func()

////$$$$$/////
// function persegiPanjang(p,l) {
//     return p*l ;
// }
// alert(persegiPanjang(2,5))
// alert(persegiPanjang(2,10))

// var p = parseInt(prompt("masukan nilai p :"))
// var l = parseInt(prompt("masukan nilai l :"))
// var hasil =persegiPanjang(p,l)
// console.log(hasil);

// function luasSegitiga(a,t) {
//    return a*t;
// }

// var a = parseInt(prompt("masukan nilai a :"))
// var t = parseInt(prompt("masukan nilai t :"))
// var hasil = luasSegitiga(a,t)
// console.log(hasil);

// //local scope
// const masukRumah =function (){
//     let manusia ={
//         nama:"oke",
//         umur:61
//     }
//   console.log(`hai ${manusia.nama},apakah umurmu ${manusia.umur}`);
// }
// masukRumah()

//rumus luas segitiga
var pilihan = parseInt(prompt(`Pilih rumus matematika:\n 1.persegi panjang \n 2.luas segitiga \n 3.luas persegi \n 4.luas lingkaran`));
//rumus persegi panjang
function persegiPanjang(panjang,lebar){
    return panjang*lebar
}
if(pilihan=="1"){
    var panjang = parseInt(prompt("masukan panjang: "))
    var lebar = parseInt(prompt('masukan lebar: '))
    var hasil = persegiPanjang(panjang,lebar)
    console.log(hasil)
}
persegiPanjang()

//rumus segitiga
function luasSegitiga(alas,tinggi){
    return alas*tinggi/2
    }
if(pilihan=="2"){
   var alas = parseInt(prompt('masukan alas = '))
   var tinggi = parseInt(prompt('masukan tinggi = '))
   var hasil = luasSegitiga(alas,tinggi/2)
   console.log(hasil)
}
luasSegitiga()

//rumus persegi
function luasPersegi(sisi,sisi){
return sisi*sisi
}
if(pilihan=="3"){
    var sisi = parseInt(prompt("masukan sisi pertama: "))
    var sisi = parseInt(prompt("masukan sisi kedua: "))
    var hasil = luasPersegi(sisi,sisi)
    console.log(hasil)
}
luasPersegi()
//rumus lingkaran
function luasLingkaran(p,r){
    return p*r*r;
}
if(pilihan=="4"){
    var p = parseInt(prompt("masukan nilai p pertama: "))
    var r = parseInt(prompt("masukan nilai r pertama: "))
    var r = parseInt(prompt("masukan nilai r kedua: "))
    var hasil = luasLingkaran(p,r)
    console.log(hasil)
}
luasLingkaran()