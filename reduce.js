// Bir dizeyi tek bir degere indirgemek icin kulllanilir.

// 2 parametre alir.

    // 1  indirgeme fonksiyonu =?> 4 parametre alir 
                                                // =?> onceki deger
                                                // =?> sonraki deger
                                                // =?> dizinin index`i 
                                                // =?> dizinin kendisi
    // 2 baslangic degeri.

// Indirgeme fonksiyonu her dizinin elemani icin cagirilir ve sonucu bir onceki degere atar. baslangic degeri ise indirgemenin ilk degeridir.

let nums = [1, 2, 3, 4, 5];

function sum(prev, next){
    return prev + next;
}

let total = nums.reduce(sum,0)

console.log(total) // 15


// Bir dizi oluşturalım
var sayilar = [10, 20, 30, 40];

// .reduce() fonksiyonu ile dizinin elemanlarının toplamını bulalım
// İlk parametre olarak bir fonksiyon veriyoruz
// İkinci parametre olarak başlangıç değeri olarak 0 veriyoruz
var toplam = sayilar.reduce(function(accumulator, currentValue, index, array) {
  // Fonksiyonun döndüreceği değer accumulator parametresine atanacak
  // Her eleman için accumulator'a mevcut değeri ekliyoruz
  return accumulator + currentValue;
}, 0);

// Toplam değerini dizinin eleman sayısına bölerek ortalamayı bulalım
var ortalama = toplam / sayilar.length;

// Ortalama değerini yazdıralım
console.log(ortalama); // 25
