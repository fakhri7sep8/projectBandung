// //bintang 3*5
//  var s ="";
//  for(k = 0; k < 5; k++){
//      for(l = 0; l < 3; l++){
//          s +="*";
//      }
//      s +="\n";
//  }
//  console.log(s)

//  var z ="";
//  for(b = 0; b<5; b++){
//      for(c = 0; c <=b; c++){
//      z +="*";
//      }
//      z +="\n";
//  }
//  console.log(a)

// segitiga sama kaki kebalik
// var a ="";
// for(b = 0; b<7; b++){
//     for(c = 7; c >b; c--){
//         a +="*";
//        }
//        a +="\n";
// }
// console.log(a)

// Contoh membuat pola berlian dengan nested loop
var tinggiDiamond = 5; // Ganti tinggi berlian sesuai kebutuhan
var pola = '';

// Bagian atas berlian (segitiga terbalik)
for ( i = 1; i <= tinggiDiamond; i++) {
  for ( j = 1; j <= tinggiDiamond - i; j++) {
    pola += ' ';
  }
  for ( k = 1; k <= 2 * i - 1; k++) {
    pola += '*';
  }
  pola += '\n';
}

// Bagian bawah berlian (segitiga terbalik)
for ( i = tinggiDiamond - 1; i >= 1; i--) {
  for ( j = 1; j <= tinggiDiamond - i; j++) {
    pola += ' ';
  }
  for ( k = 1; k <= 2 * i - 1; k++) {
    pola += '*';
  }
  pola += '\n';
}

console.log(pola);



//segitiga sama kaki!
 var s = "";
var baris = 7
 for (P = 1;P <= baris ; P++){
    for (L = baris-1 ;L >= P; L--){
        s += " ";
   }
   for(let k=1;k <= P; k++ ){
         s +="*"
     }
    for(let m = 1;m <= P-1; m++){
         s +="#"
    }
     s += "\n";
 }
 console.log(s)

 