// Bir dizi veya dizi benzeri bir nesnenin her bir ogesi icin belirli bir kosulun dogru olup olmadigini kontrol etmek icin kullanilan bir dizi yontemidir.
// Dizi elemanlarinin hepsinin belirtilen kosulu saglamasi durumunda " true " degerini dondurur. Aksi halde " False " degerini dondurur.

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const allPositive = numbers1.every(function(number) {
    return number > 0; // true
});

const ages = [20, 25, 22, 19];
const allAdults = ages.every((age) => age >= 18); // true

const numbers2 = [3, 6, 9, 12, 15];
const allDivisibleByThree = numbers2.every((number) => number % 3 === 0); // false




// Bir dizideki her öğe için sağlanan işlevi, yanlış bir değer döndürene kadar bir kez çağırır

const array1 = [2, 4, 6];
const isEven = array1.every((element, index, array) => {
//   console.log("Element:", element); // Element: 2
//   console.log("Index:", index); // Index: 0
//   console.log("Array:", array); // Array: [2, 4, 6]
  return element % 2 === 0;
});

console.log(isEven) // true

const array2 = ["apple", "banana", "cherry"];
const hasFiveLetters = array2.every((element, index, array) => {
//   console.log("Element:", element); // Element: "apple"
//   console.log("Index:", index); // Index: 0
//   console.log("Array:", array); // Array: ["apple", "banana", "cherry"]
  return element.length === 5;
});

console.log(hasFiveLetters) // false


const array3 = [{ id: 1, name: "John" }, { id: 2, name: "Jane" }, { id: 3, name: "Doe" }];
const hasIdProperty = array3.every((element, index, array) => {
//   console.log("Element:", element); // Element: { id: 1, name: "John" }
//   console.log("Index:", index); // Index: 0
//   console.log("Array:", array); // Array: [{ id: 1, name: "John" }, { id: 2, name: "Jane" }, { id: 3, name: "Doe" }]
  return "id" in element;
});

console.log(hasIdProperty) // true


//Calisma mantigini biraz daha derinlemesine incelemek gerekirse ;

const numbers3 = [6, 8, 10, 12, 4];

const result1 = numbers3.every((num) => {
  console.log(`Koşul kontrol ediliyor: ${num} > 5`);
  return num > 5;
});

// İlk adımda, num değeri 6'dır. Koşul kontrol ediliyor: 6 > 5
// İkinci adımda, num değeri 8'dir. Koşul kontrol ediliyor: 8 > 5
// Üçüncü adımda, num değeri 10'dur. Koşul kontrol ediliyor: 10 > 5
// Dördüncü adımda, num değeri 12'dir. Koşul kontrol ediliyor: 12 > 5
// Beşinci adımda, num değeri 4'tür. Koşul kontrol ediliyor: 4 > 5
// num değeri 4 olduğu için koşul false döndürür.
// every() yöntemi false değerini aldığı için döngüyü durdurur ve result değeri false olarak atanır.
// console.log(result) ifadesi, false değerini konsola yazdırır.

// Yukarıdaki çıktıya göre, every() yöntemi, dizi içindeki elemanları sırayla kontrol eder. İşlevin her adımında koşulun değeri yazdırılır. Dördüncü adımda, yani num değeri 4 olduğunda, koşul false döndürür. Bu noktada every() yöntemi, false değeri aldığı için döngüyü durdurur ve sonucu false olarak döndürür.

const numbers4 = [6, 8, 10, 2, 12, 40];

const result2 = numbers4.every((num) => {
  console.log(`Koşul kontrol ediliyor: ${num} > 5`);
  return num > 5;
});


// İlk adımda, num değeri 6'dır. Koşul kontrol ediliyor: 6 > 5
// İkinci adımda, num değeri 8'dir. Koşul kontrol ediliyor: 8 > 5
// Üçüncü adımda, num değeri 10'dur. Koşul kontrol ediliyor: 10 > 5
// Dördüncü adımda, num değeri 2'dir. Koşul kontrol ediliyor: 2 > 5
// num değeri 2 olduğu için koşul false döndürür.
// every() yöntemi false değerini aldığı için döngüyü durdurur ve result değeri false olarak atanır.
// console.log(result) ifadesi, false değerini konsola yazdırır.

// Yukarıdaki çıktıya göre, every() yöntemi, dizideki elemanları sırayla kontrol eder. İşlevin her adımında koşulun değeri yazdırılır. Dördüncü adımda, yani num değeri 2 olduğunda, koşul false döndürür. Bu noktada every() yöntemi, false değeri aldığı için döngüyü durdurur ve sonucu false olarak döndürür.