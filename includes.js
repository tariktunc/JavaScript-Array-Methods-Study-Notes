// Bir dizi veya dizge (String) gibi bir degerin icinde belirli bir degerin olup olmadigini sorgulama yontemidir.
//* Cikti olarak TRUE veya FALSE dondurur.
//! Bu yontem buyuk ve kucuk harfe duyarlidir.

let text = 'hello word'
let result = text.includes('word') // true

let num = [1,2,3,4,5]
let numResult = num.includes(1,3) // false

console.log(numResult)

// includes(searchValue, start)

// searchValue aranacak deger zorunludur.
// start aramaya baslanacak konum varsayilan konum 0`dir. Istege baglidir.