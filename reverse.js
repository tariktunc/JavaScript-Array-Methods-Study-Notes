// .reverse() özelliği, bir dizinin veya bir dizge (string)in elemanlarını ters çevirmek için kullanılır. Örneğin, [1, 2, 3] dizisini .reverse() ile [3, 2, 1] olarak ters çevirebilirsin. Veya “merhaba” dizgesini .reverse() ile “abahrem” olarak ters çevirebilirsin.

// Ancak .reverse() özelliği sadece diziler ` [] ` için tanımlıdır, Dizgeler ` " " ` için değil. Bu nedenle, bir dizgeyi ters çevirmek istiyorsan, önce onu bir diziye dönüştürmen, sonra .reverse() uygulaman ve sonra tekrar bir dizgeye dönüştürmen gerekir. Bunu yapmak için aşağıdaki adımları izleyebilirsin:

// Dizeyi mutasyona ugratir.

let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
nums.reverse()
console.log(nums)

// Bir dizgeyi bir diziye dönüştürmek için .split() özelliğini kullanabilirsin. Bu özellik, bir dizgeyi belirli bir ayraç karakterine göre parçalara ayırır ve bu parçaları bir dizi olarak döndürür. Örneğin, “merhaba” dizgesini .split(“”) ile [“m”, “e”, “r”, “h”, “a”, “b”, “a”] dizisine dönüştürebilirsin. Boş bir ayraç karakteri (“”) kullandığımızda, her bir harf ayrı bir eleman olarak alınır.

// Bir diziyi ters çevirmek için .reverse() özelliğini kullanabilirsin. Bu özellik, bir dizinin elemanlarının sırasını tersine çevirir ve aynı diziyi değiştirerek döndürür. Örneğin, [“m”, “e”, “r”, “h”, “a”, “b”, “a”] dizisini .reverse() ile [“a”, “b”, “a”, “h”, “r”, “e”, “m”] dizisine ters çevirebilirsin.

// Bir diziyi bir dizgeye dönüştürmek için .join() özelliğini kullanabilirsin. Bu özellik, bir dizinin elemanlarını belirli bir ayraç karakteri ile birleştirir ve bu birleşik dizgeyi döndürür. Örneğin, [“a”, “b”, “a”, “h”, “r”, “e”, “m”] dizisini .join(“”) ile “abahrem” dizgesine dönüştürebilirsin. Boş bir ayraç karakteri (“”) kullandığımızda, elemanlar arasında boşluk bırakılmaz.


// Bu fonksiyon, verilen bir dizgeyi ters çevirir ve ters çevrilmiş dizgeyi döndürür
function reverseString(str) {
    // Önce verilen dizgeyi boş ayraç karakteri ile parçalara ayırarak bir diziye dönüştür
    var array = str.split("");
    // Sonra bu diziyi .reverse() ile ters çevir
    array.reverse();
    // Son olarak bu ters çevrilmiş diziyi boş ayraç karakteri ile birleştirerek bir dizgeye dönüştür
    var reversedStr = array.join("");
    // Ters çevrilmiş dizgeyi geri döndür
    return reversedStr;
  }
  
  // Örnek kullanım
  var example = reverseString("merhaba"); // example = "abahrem"
  console.log(example); // Konsola abahrem yazdır
  