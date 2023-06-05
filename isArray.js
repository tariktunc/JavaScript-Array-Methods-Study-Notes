// Bir nesnenin array(dizi) olup olmadigini kontrol eder. =?> true = false doner.


// Array.isArray(), javascript nesesinin statik bir ozelligidir.
// Bunu yanlizca Array.isArray() olarak kullanabilirsiniz. x.isArray() kullanilarak burada x bir dizidir, tanimsiz dondurur.

// Array.isArray(obj)

let fruits = ["apple", "banana", "orange"];

Array.isArray(fruits); // true

let text =  "hello";

Array.isArray(text); // false
