// Dizinin degerini yerel dil bolge ayarlarina uygun bir sekilde birlestirerek bir dize olusturur.

// Bu fonksiyon, verilen bir sayıyı verilen bir seçenek nesnesine göre biçimlendirir


// Bir sayı tanımla
const number = 123456.789;
function localTime(num, option) {
    // Number.prototype.toLocaleString() ile biçimlendir ve geri döndür
    return num.toLocaleString(undefined, option);
  }
  
  let option = {
    style: "currency",
    currency: "USD",
  };
  
  let format = localTime(number, option);
  
  console.log(format); // "$987,654,321.00" yazdırır
  


// Sayının farklı stillerde biçimlendirilmiş hallerini yazdır
console.log(number.toLocaleString("en-US", {style: "decimal"})); // "123,456.789" yazdırır (ondalık stil)
console.log(number.toLocaleString("en-US", {style: "percent"})); // "12,345,678.9%" yazdırır (yüzde stil)
console.log(number.toLocaleString("en-US", {style: "currency", currency: "USD"})); // "$123,456.79" yazdırır (para birimi stil ve ABD doları)
console.log(number.toLocaleString("en-US", {style: "currency", currency: "EUR"})); // "€123,456.79" yazdırır (para birimi stil ve Euro)

// Bir tarih tanımla
const date = new Date(Date.UTC(2021, 11, 24, 3, 0, 0));
// Tarihin farklı stillerde biçimlendirilmiş hallerini yazdır
console.log(date.toLocaleString("en-US", {dateStyle: "full"})); // "Friday, December 24, 2021" yazdırır (tam tarih stil)
console.log(date.toLocaleString("en-US", {dateStyle: "short"})); // "12/24/21" yazdırır (kısa tarih stil)
console.log(date.toLocaleString("en-US", {timeStyle: "full"})); // "6:00:00 AM Pacific Standard Time" yazdırır (tam saat stil)
console.log(date.toLocaleString("en-US", {timeStyle: "short"})); // "6:00 AM" yazdırır (kısa saat stil)
console.log(date.toLocaleString("en-US", {timeZone: "UTC"})); // "12/24/2021, 3:00:00 AM" yazdırır (UTC saat dilimi)

