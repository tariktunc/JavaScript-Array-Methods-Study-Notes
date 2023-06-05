// Dizinin indeexlerini birlestirerek bir dize olusturur.
// Nesne veya bir dizi uzerinde, kullanildiginda o nesne veya dizinin kendi ozelliklerini veya indislerinin bir dizisini donduren bir javasrcipt yontemidir.
// Bu yontem nesne veya dizinin icindeki degerleri degil sadece anahtarlari veya indisleri verir.
// Bu yontemle birlikte Object.Values() veya Object.entries() yontemlerini kullnarak hem anahtarlari hemde degerleri alabilirsiniz.

const obj = {
    name: "John",
    age: 30,
    city: "New York"
}

const keys = Object.keys(obj)  // [ 'name', 'age', 'city' ]
console.log(keys)

const fruits = ["apple", "banana", "cherry"];

const indices = Object.keys(fruits);  // [ 0, 1, 2 ]
console.log(indices)
