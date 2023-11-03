// soal tipe b

// 1. Array d digunakan untuk menyimpan  data dalam satu tempat.


// 2.
let x = true
console.log(typeof x)

//3.

const a = 100
const b = 101
const c = 102
const d = "100"

console.log(a === b+1 || c === 101+1)//true karena dua duanya true
console.log(b+1 === d|| c-2 === a+1)//false karena dua dua nya false
console.log(51*2 === c && b+1 === d)//false karena b nya salah walapun 51*2 adalah true
console.log(d === "102" && b+1 === c)//false karena d nya salah walaupun b+1 adalah true
console.log(a === 100 || c-2 === a)//true karena dua duanya true

//4.
const hewan = ["sapi","ayam","bebek"]
const angka = [1,2,3,4]
console.log(hewan)
hewan.push("itik")

const hewannyampur = hewan.concat(angka)
console.log(hewannyampur)


//kegunaan method shift menghapus dari depan

//5
var hari = "senin";


if (hari ==="ahad") {
  console.log("ahad");
  let lauk = 'ayam'
  if (lauk=='ayam'){
    console.log('lauk ayam')
  
  } 
}
if (hari ==="senin") {
  console.log("senin");
  let lauk = 'tempe'
  if (lauk=='tempe'){
    console.log('lauk tempe')
  
  } 
}
if (hari ==="selasa") {
  console.log("selasa");
  let lauk = 'tahu'
  if (lauk=='tahu'){
    console.log('lauk tahu')
  
  } 
}
if (hari ==="rabu") {
  console.log("rabu");
  let lauk = 'telur'
  if (lauk=='telur'){
    console.log('lauk telur')
  
  } 
}
if (hari ==="kamis") {
  console.log("kamis");
  let lauk = 'lele'
  if (lauk=='lele'){
    console.log('lauk lele')
  
  } 
}
if (hari ==="jum at") {
  console.log("jumat");
  let lauk = 'capcay'
  if (lauk=='capcay'){
    console.log('lauk capcay')
  
  } 
}
if (hari ==="sabtu") {
  console.log("sabtu");
  let lauk = 'bihun'
  if (lauk=='bihun'){
    console.log('lauk bihun')
  
  } 
}
else {
    console.log('diluar dari ini tidak ada lauk');
  }
  


//bintang 3*5
var s ="";
for(k = 0; k < 5; k++){
    for(l = 0; l < 3; l++){
        s +="*";
    }
    s +="\n";
}
console.log(s)











