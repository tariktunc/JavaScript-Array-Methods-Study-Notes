// Filter yontemi belirli bir dizinin sığ kopyasinin olusturur. Yanlizca verilen diziden saglanan islev tarafindan uygulanan testi gecen ogelere kadar filitrelenir.

const words = ['apple', 'banana', 'orange', 'strawberry', 'kiwi'];
const result = words.filter(word => word.length > 5); // [ 'banana', 'orange', 'strawberry' ]

// Burada yaptigimiz islem her bir elemani word olarak sirayla isleme almak ve bu islemde kosulun kontrolunu saglamak karakter sayisi 5 den buyukse bunu yeni dizine ekler.
// Ana dizini (words) mutasyona ugratmaz.

const users = [
    {
        name: 'Ali',
        surname: 'Kocer'
    },
    {
        name: 'Asli',
        surname: 'Soyar'
    },
    {
        name: 'Murat',
        surname: 'Tan'
    },
    {
        name: 'Meliha',
        surname: 'Karabag'
    }

]

const result2 = users.filter(register => register.name.length > 5);
// console.log(result2); // [ { name: 'Meliha', surname: 'Karabag' } ]

const result3 = users.filter(user => user.name.includes('at')); // name de 'at' karakteri icerip icermedigini sorguluyoruz. //* [ { name: 'Murat', surname: 'Tan' } ]
const result4 = users.filter(user => user.surname.includes('bag')); // name de 'bag' karakteri icerip icermedigini sorguluyoruz. //* [ { name: 'Meliha', surname: 'Karabag' } ]


const numbers = [1, 2, 3, 4, 5, 6];

console.log("Önceki dizi:", numbers);
// 3'ten büyük olan elemanları filtrele
const filteredArray = numbers.filter((num) => num > 3);
console.log("Filtrelenmiş dizi:", filteredArray);


// Bu örnekte, .filter() yöntemini kullanarak numbers dizisindeki elemanları filtreliyoruz. Sadece 3'ten büyük olan elemanları yeni bir dizi olarak alıyoruz.

// Konsolda adım adım çalıştırırken aşağıdaki gibi göreceksiniz:

    // 1-) İlk satırda, "Önceki dizi:" ifadesiyle birlikte numbers dizisini konsola yazdırıyoruz. Örnek olarak, [1, 2, 3, 4, 5, 6] çıktısı alacağız.

    // 2-) .filter() yöntemini kullanarak numbers dizisini filtreliyoruz. Bu işlev, her bir eleman için num > 3 koşulunu kontrol eder ve sadece bu koşulu sağlayan elemanları yeni bir dizi olarak döndürür.

    // 3-)İkinci satırda, "Filtrelenmiş dizi:" ifadesiyle birlikte filteredArray dizisini konsola yazdırıyoruz. Örnek olarak, [4, 5, 6] çıktısı alacağız.

// Böylece, .filter() yöntemini kullanarak bir diziyi belirli bir koşula göre filtrelemiş oluyoruz. Debugger üzerinde bu örneği adım adım çalıştırabilir ve her adımda dizinin nasıl değiştiğini gözlemleyebilirsiniz.

