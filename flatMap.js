//Bir dizinin her bir elemanini bir geri cagirma fonksiyonu uygulayarak ve ardindan sonucu bir seviye duzlestirerek yeni bir dizi donduren bir javascript dizisi yontemidir. Bir dizinin elemanlarini basak bir fonksiyonla degistirmenizi ve sonucu tek bir dizi olarak almanizi saglar.

// map() flat() yontemlerinin birlesimi gibidir.



 // Bir isimler dizisi tanımlayalım
const names = ["ali", "ayşe", "mehmet"];

// Her ismin ilk harfini büyük yapan bir fonksiyon tanımlayalım
function capitalize(name) {
  return name[0].toUpperCase() + name.slice(1);
}

// flatMap yöntemi ile diziyi değiştirelim
const capitalized = names.flatMap((name) => capitalize(name));

// Değiştirilmiş diziyi yazdıralım
console.log(capitalized); // ["Ali", "Ayşe", "Mehmet"]
