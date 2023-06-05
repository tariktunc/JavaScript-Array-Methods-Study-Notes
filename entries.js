// Bir dizinin her bir dizin elamani icin anahtar ve deger ciftlerini iceren yeni bir dize elde etmek icin kullanilir.
let arr = ['a','b','c','d','e','f','g'];
let arrEntries = arr.entries();

for(let entry of arrEntries){
    console.log(entry)
}

// [ 0, 'a' ]
// [ 1, 'b' ]
// [ 2, 'c' ]
// [ 3, 'd' ]
// [ 4, 'e' ]
// [ 5, 'f' ]
// [ 6, 'g' ]

// Ustteki ornek ile alttaki ornek arasindaki fark ustteki ornekte dikkat ettiyseniz arrEntries tanimlandiktan sonra ogeleri her biri icin dizi olusturuyoruz. Altta ise bunu diziyi for dongusu icerisinde degerleri kontrol ettiererek olusturuyoruz.

let number = [-2,5,8,-1,0,3]
let positiveNum = []

for(let [index,value] of number.entries()){
    // Burada bir dize olusturuyoruz ve bu dize elemanlarina index ve value objectlerini atiyoruz. number.entries() den donusleri iceriye aktariyoruz.
    // value degeri 0 dan buyuk ise true sonucu dondurecek ve alt satirinda yazan.
    if(value > 0){
        positiveNum.push(value)
        // positiveNum degerine verdigimiz push metoduyla icerisine kaydedecegiz.
        // Parantez icerisine yazilan value degeri her bir elemanini ayri ayri sorgu yaptirdigimiz icin
        // icerisindeki elemanlari tek tek kontrol ederek uygun olanlari icerisine push eder.
    }
}
console.log(positiveNum) // [5, 8, 3]

// Cikti sonucu olarak da bize positiveNum degerine bakarsak 5,8,3 degerlerini goruruz.



