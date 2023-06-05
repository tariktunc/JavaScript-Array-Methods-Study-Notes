// (Array) veya benzer bir nesne uzerinde calisan bir metodun adidir. Bu metod bir dizi veya iterable (yenilenebilir) nesne uzerinde donerek yenib ir dizi olusrmaniza olanak saglar from() metodu diziye benzer nesneleri gercek bri diziye donusturmek icin kullanilir.

// iki farkli kullanim sekli vardir.

// 1-) .from() metodu iterable nesne ve bir opsiyonel olarak donusum fonksiyonu (map function) alir. mBu fonksiyon her bir oge uzerinde cagirilir, dizinin elemanlarini belirlemek icin kullanilir.

const iterable = 'hello' 
const newArray = Array.from(iterable, (char) =>{
    return char.toUpperCase()
})

console.log(newArray) // [ 'H', 'E', 'L', 'L', 'O' ]

// 2-) Dizinin kopyasini olusturmak icin kullanilabilir. Bu duruimda .from() diziyi tek bir arguman olarak kabul eder ve ayni ogelerden olusan yeni bir dizi dondurur.

const arr =  ['a', 'b', 'c'] // [ 1, 2, 3, 4, 5 ]
const newArr = Array.from(arr)

console.log(newArr) // ['a', 'b', 'c'] &&  [ 1, 2, 3, 4, 5 ]


// .from() metodu, özellikle diziye benzer nesneleri gerçek bir diziye dönüştürmek veya iterable nesneler üzerinde dönerek yeni bir dizi oluşturmak için kullanışlıdır2. Diziye benzer nesneleri gerçek bir diziye dönüştürmek, dizilerin sahip olduğu metodlardan yararlanmak için faydalı olabilir. Örneğin, bir NodeList nesnesi üzerinde map veya filter gibi metodları kullanamayız. Ama .from() metodu ile bu nesneyi bir diziye çevirirsek, bu metodları kullanabiliriz. Iterable nesneler üzerinde dönerek yeni bir dizi oluşturmak ise, nesnelerin elemanlarını değiştirerek veya filtreleyerek yeni bir koleksiyon elde etmek için faydalı olabilir. Örneğin, bir Set nesnesinin elemanlarını ikiye katlayarak veya sadece çift olanları alarak yeni bir dizi oluşturabiliriz.