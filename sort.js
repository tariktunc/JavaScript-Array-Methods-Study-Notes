// Diziyi alfabetik olarak yada UTF-16 kod birimine gore siralar.

// Ornek 'Muz' 9 , 'Kiraz' 80 
// Alfabeye gore K harfi once gelir ancak burada 9 kucuk oldugu icin once alinir.


const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); // ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1); // [1, 100000, 21, 30, 4]

