// fill 3 parametre alir value degeri zorunlu girilmesi gereken parametredir. start ve end parametreleri istege baglidir.

// Value: Diziyi dolduracak deger dizideki tum degerler buna donusur, Dizideki her yuva o nesneye basvurur.

// start : baslangic degeri
// end: bitis degeri ancak dahil degildir.
// .fill() mutasyon yontemidir uzunluk degismez ama icerik degisir.

const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const newNum = num.fill(0,3,5) // [1, 2, 3, 0, 0, 6, 7, 8, 9, 10]

const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const newWeek = week.fill('',0,5) // [ '', '', '', '', '', 'Friday', 'Saturday' ]
const lastWeek = week.fill('')  // ['', '', '', '', '', '', '']


const array = [1, 2, 3, 4, 5];
console.log("Önceki dizi:", array); // [ 1, 2, 3, 4, 5 ]

// Tüm elemanları 0 ile doldur
array.fill(0);
console.log("Sonraki dizi:", array); // [ 0, 0, 0, 0, 0 ]

// Bu örnekte, .fill() yöntemini kullanarak array dizisindeki tüm elemanları 0 ile dolduruyoruz.

// Konsolda adım adım çalıştırırken aşağıdaki gibi göreceksiniz:

    // 1-) İlk satırda, "Önceki dizi:" ifadesiyle birlikte array dizisini konsola yazdırıyoruz. Örnek olarak, [1, 2, 3, 4, 5] çıktısı alacağız.

    // 2-)  .fill(0) yöntemini kullanarak array dizisindeki tüm elemanları 0 ile dolduruyoruz.

    // 3-)  İkinci satırda, "Sonraki dizi:" ifadesiyle birlikte güncellenen array dizisini konsola yazdırıyoruz. Örnek olarak, [0, 0, 0, 0, 0] çıktısı alacağız.

// Böylece, .fill() yöntemini kullanarak bir diziyi istenen değerlerle doldurmuş oluyoruz. Debugger üzerinde bu örneği adım adım çalıştırabilir ve her adımda dizinin nasıl değiştiğini gözlemleyebilirsiniz.