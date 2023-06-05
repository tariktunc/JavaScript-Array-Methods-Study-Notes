/*
  Bu JavaScript örneğinde map() fonksiyonunu nasıl oluşturacağımızı gösteriyoruz.
  map() fonksiyonu, bir dizi üzerinde döngü yaparak her bir elemana belirli bir işlem uygulayan ve işlenmiş verilerden yeni bir dizi döndüren bir yüksek seviye işlevdir.
*/

// Kendi map() fonksiyonumuzu oluşturuyoruz.
function map(array, callback) {
    const mappedArray = []; // Yeni dizi için boş bir dizi oluşturuyoruz.
  
    for (let i = 0; i < array.length; i++) {
      // Dizinin her elemanı için callback fonksiyonunu çağırıyoruz ve işlenmiş değeri mappedArray'e ekliyoruz.
      mappedArray.push(callback(array[i], i, array));
    }
  
    return mappedArray; // İşlenmiş verilerden oluşan yeni diziyi döndürüyoruz.
  }
  
  // map() fonksiyonunu kullanarak bir dizi üzerinde işlem yapma örneği
  
  // İşlem yapılacak dizi
  const numbers = [1, 2, 3, 4, 5];
  
  // Her bir elemanın karesini alan bir callback fonksiyonu
  function square(number) {
    return number * number;
  }
  
  // map() fonksiyonunu kullanarak dizi üzerinde işlem yapma
  const squaredNumbers = map(numbers, square);
  
  console.log(squaredNumbers);
  // Çıktı: [1, 4, 9, 16, 25]
  


  