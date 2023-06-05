// Dizinin belirlki bir bolumunu degistirir  veya kaldirir ve degistirilen ogeleri dondurur.

// Orjinal diziyi degistirmeden yapmak icin to .splice()


const arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr.splice(2))  // [3,4,5,6,7,8,9,10] kaldirilan dizi elemanlari.
console.log(arr) // [1,2] // dizinin en son hali.

// JavaScript’te .splice() ile .slice() arasındaki fark şudur:

// .splice() yöntemi orijinal diziyi değiştirirken, .slice() yöntemi orijinal diziyi değiştirmez12.
// .splice() yöntemi diziden eklenen ve/veya silinen öğeleri bir dizi olarak döndürürken, .slice() yöntemi diziden seçilen öğeleri bir dizi olarak döndürür13.
// .splice() yöntemi başlangıç indeksi, silinecek öğe sayısı ve eklenecek öğeleri (varsa) parametre olarak alırken, .slice() yöntemi başlangıç ve bitiş indekslerini parametre olarak alır13.

// Örnekler için aşağıdaki kod bloklarına bakabilirsiniz:

// .splice() örneği
var arr1 = [1, 2, 3, 4, 5];
console.log(arr1.splice(2)); // [3, 4, 5] döndürür
console.log(arr1); // [1, 2] olur

var arr2 = [1, 2, 3, 4, 5];
console.log(arr2.splice(2, 1)); // [3] döndürür
console.log(arr2); // [1, 2, 4, 5] olur

var arr3 = [1, 2, 3, 4, 5];
console.log(arr3.splice(2, 1, "a", "b")); // [3] döndürür
console.log(arr3); // [1, 2, "a", "b", 4, 5] olur


// .slice() örneği
var arr4 = [1, 2, 3, 4, 5];
console.log(arr4.slice(2)); // [3, 4, 5] döndürür
console.log(arr4); // [1, 2, 3, 4, 5] değişmez

var arr5 = [1, 2, 3, 4, 5];
console.log(arr5.slice(2, 4)); // [3, 4] döndürür
console.log(arr5); // [1, 2, 3, 4 ,5] değişmez


var arr6 = [1, 2, 3, 4, 5];
console.log(arr6.splice(2, 1, "a", "b")); // [3] döndürür
console.log(arr6); // [1, 2, "a", "b", 4, 5] olur

// Bu kodda, .splice(2, 1, “a”, “b”) ifadesi şunu yapar:

// Dizinin 2. indeksinden başlayarak 1 öğe siler. Bu durumda silinen öğe 3’tür ve bir dizi olarak döndürülür.
// Dizinin 2. indeksine “a” ve “b” öğelerini ekler. Bu durumda dizinin yeni hali [1, 2, “a”, “b”, 4, 5] olur.