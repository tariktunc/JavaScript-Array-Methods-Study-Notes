// Bir dizi icinde bir degerin ilk goruldugu konumu donduren bir yontemdir. Bu yontem oiran degeri bulursa (0` dan baslayan bir sayi ) bulmazsa -1 dondurur.


//* str.indexOf(searchElement, startIndex)

// searchElement =?> Aranacak deger. Zorunludur.
// startIndex =?> Aranmaya baslanacak konum. Istege Bagli


var str1 = "Merhaba"; // Bir dize değişkeni tanımlıyoruz
var index1 = str1.indexOf("z"); // .indexOf() fonksiyonunu kullanarak "z" harfinin dizideki konumunu buluyoruz
console.log(index1); // Bulduğumuz konumu konsola yazdırıyoruz



var str2 = "Merhaba"; // Bir dize değişkeni tanımlıyoruz
var index2 = str2.indexOf("a", 5); // .indexOf() fonksiyonunu kullanarak 5. karakterden itibaren "a" harfinin dizideki konumunu buluyoruz
console.log(index2); // Bulduğumuz konumu konsola yazdırıyoruz
