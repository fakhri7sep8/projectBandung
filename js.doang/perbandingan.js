const b = 101;
const c = 102;
const d = "100";

console.log(a == 100); //true // karena nilai a dengan 100 sama
console.log(a == "100"); //true // karena nilai a dengan 100 sama
console.log(a === "100"); //false // karena berbeda tipe data walau isinya sama

console.log(b != 101); //false // karena nilai b dengan 101 sama
console.log(b !== 101); //false // karena nilai b dengan 101 sama dan 

console.log(c < 100); //false // karena nilai c lebih besar dibanding 100
console.log(c >= 102); //true // karena nilai c dengan 102 sama
console.log(d >= 102);  //false // karena nilai d lebih kecil dan tidak sama dengan 102

console.log(a === 100 || b === 103); //true // karena  a adalah true
console.log(a === 101 || b === 101); //true // karena  b adalah true
console.log(a === 100 && b === 101); //true // karena a & b sama sama true

console.log( b === 101 && c === 101+1) // true // karena b & c sama sama true
console.log( c === 100 || b === 101) // true   // karena b adalah true
console.log( d === "100" && b+1 === c) //true  //  karena d adalah true
console.log( d === 100 || c-2 === a) // true   // karena c adalah true
console.log( d === 100 || c-2 === a) // true   // karena c adalah true
console.log( d+2 === c || b-1 === 101) // false  // karena d & b sama sama salah
console.log( a+2 === c || d === 100) // true     // karena a adalah true
console.log( a+2 === c && b-1 === "100") //false  //karena b bukan true 
