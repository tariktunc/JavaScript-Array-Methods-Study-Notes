// Dizi  uzerinde dongu yapmayi saglayan bir dizi yontemidir. Bu yontem her bir dizi ogesi icin belirtilen bir islevi calistirir.
// Islev her bir dizi ogesi icin cagirilacak ve her bir ogeyi islemek icin kullanilacak uc parametre alir.

// Element => Dizi deki her bir oge
// Index =>  Dizi deeki her bir ogenin index`i
// Dizi  =>  forEach yonteminin cagirildigi dizi

// .forEach() özelliği sadece diziler üzerinde çalışır. Bir düğüm listesi veya başka bir nesne üzerinde çalışmaz2.
// .forEach() özelliği döngüden çıkmak veya yinelemeyi atlamak için break veya continue komutlarını desteklemez2.
// .forEach() özelliği dizinin orijinal boyutunu korur. Diziyi değiştirmek istiyorsanız, splice veya slice gibi başka bir yöntem kullanmalısınız1.

// Bir dizi tanımla
let numbers = [1, 2, 3, 4, 5];

// Toplamı saklamak için bir değişken tanımla
let sum = 0;

// Dizideki her sayı için toplama ekle
numbers.forEach(function(number) {
  sum += number;
});

// Toplamı yazdır
console.log(sum); // 15


// Bir dizi tanımla
let names = ["ali", "ayşe", "mehmet", "fatma"];

// Büyük harfe çevrilen isimleri saklamak için yeni bir dizi tanımla
let upperNames = [];

// Dizideki her isim için büyük harfe çevir ve yeni diziye ekle
names.forEach(function(name) {
  upperNames.push(name.toUpperCase()); // push metodu ile yeni bir diziye ekle
});

// Yeni diziyi yazdır
console.log(upperNames); // ["ALI", "AYŞE", "MEHMET", "FATMA"]
