// Dizideki en az bir ogenin saglanan islev tarafindan uygulanan testi gecip gecmedigini test eder. Dizide saglanan islevin kendisi icin dondurdugu bir oge bulursa true degilse false return eder.

// Diziyi dondurmez.

// Dogru bir deger donene kadar dizideki her og eicin saglanan bir islevi bir kez cvagirir boyle bir oge bulunursa hemen geri doner ve yinelemeyi durdurur aksi halde tum ogeler icin yanlis bir deger dondururse false doner.

// Bu fonksiyon, verilen bir sayının 2'den büyük olup olmadığını kontrol eder
function isGreaterThanTwo(num) {
    // Eğer sayı 2'den büyükse true döndür
    if (num > 2) {
      return true;
    }
    // Eğer sayı 2'den küçük veya eşitse false döndür
    else {
      return false;
    }
  }
  
  // Bir dizi tanımla
  var array = [1, 2, 3];
  
  // Dizinin üzerinde .some() çağır ve test fonksiyonunu parametre olarak ver
  var result = array.some(isGreaterThanTwo);
  
  // Sonucu konsola yazdır
  console.log(result); // true yazdırır