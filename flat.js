//* Belirtilen derinlige kadar yenilemeli olarak birlestirilmis tum alt dizi ogeleriyle yeni bir dizi olusturur.
//* Kopyalama yontemidir 
//* Bir dizinin icindeki baska dizileri tek bir dizi haline getirmeye yarar. Boylece ic ice gecmis dizelerle ugrasmak zorunda kalmazsin. Bu yontem dizinin kendisini degistirmez sadece yenib ir dizi dondurur. Ayrica , dizide bos yerler varsa bunlari da atar.
//* İç içe geçmiş bir dizi yapısının ne kadar derine düzleştirilmesi gerektiğini belirten derinlik düzeyi. Varsayılanlar 1'dir.


const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.flat(2));
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(2)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Bu dizide 3 seviye iç içe geçmiş dizi var
const dizi5 = [1, 2, [3, 4, [5, 6, [7, 8]]]];

// depth 1 olduğunda sadece ilk seviye düzleştirilir
dizi5.flat(1); // [1, 2, 3, 4, [5, 6, [7, 8]]] döndürür

// depth 2 olduğunda ilk iki seviye düzleştirilir
dizi5.flat(2); // [1, 2, 3, 4, 5, 6, [7, 8]] döndürür

// depth Infinity olduğunda tüm seviyeler düzleştirilir
dizi5.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7, 8] döndürür

//* Parametre olarak Infinity dışında farklı bir parametre özellikleri yok. Sadece pozitif tam sayı veya Infinity kullanabilirsin. Eğer negatif veya ondalıklı bir sayı kullanırsan, 0 olarak kabul edilir. Eğer NaN veya undefined kullanırsan, 1 olarak kabul edilir.

// Negatif sayı 0 olarak kabul edilir
const dizi6 = [1, 2, [3, 4]];
dizi6.flat(-1); // [1, 2, [3, 4]] döndürür

// Ondalıklı sayı 0 olarak kabul edilir
const dizi7 = [1, 2, [3, 4]];
dizi7.flat(0.5); // [1, 2, [3, 4]] döndürür

// NaN 1 olarak kabul edilir
const dizi8 = [1, 2, [3, 4]];
dizi8.flat(NaN); // [1, 2, 3, 4] döndürür

// undefined 1 olarak kabul edilir
const dizi9 = [1, 2, [3, 4]];
dizi9.flat(undefined); // [1, 2, 3, 4] döndürür
