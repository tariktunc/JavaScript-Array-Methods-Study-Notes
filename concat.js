// Mevcut bir diziyi baska bir dizi veya degerler birlestirir. Yeni bir dizi olusturur.
// Iki ve ya daha fazla diziyi birlestirmek icin kullanilir.
// Birleştirmek için dizi sınırı yoktur ancak en az 1 dizi diğer bir dizi ile birleştirilebilir.

const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const newNums = nums1.concat(nums2); // [ 1, 2, 3, 4, 5, 6 ]
const newNums2 = nums1.concat(nums2, 'good'); // [ 1, 2, 3, 4, 5, 6, 'good' ]

const array1 = [[1,2],[3,4]];
const array2 = [[5,6],[7,8]];
const newArray = array1.concat(array2,[9,10]); // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], 9, 10 ]
// array1 ve array2 icerisinde 2 farkli dize olsaydi ve 3. bir dize yerlestirmek istiyor olsaydik assagida islemi yapardik.
const newArray2 = array1.concat(array2,[[9,10]]);  // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ] ]
// Bu sekilde olusturmak icin yukaridaki belirtilen gibi yapmak gerekir. [[iki dize olarak olusturmak gerekir.]]


const cars = ['🚗', '🚙'];
const trucks = ['🚚', '🚛'];
const combined = cars.concat(trucks); // [ '🚗', '🚙', '🚚', '🚛' ]


// Bir function uzerinde bunu anlatalim.
function combineArray(array1, array2) {
    // arr1 ve arr2 parametrelerini alan combineArray function olusturuyoruz.
    return [].concat(array1, array2);
    // Bos bir dizinin icerisine iki diziyi tek bir dizi olarak ekliyoruz.
}  

const isArray = [1,2,3];
const notArray = 'random';
// burada array1 ve array2 parametrelerine dizilerimizi ekliyoruz, 
combineArray(isArray, notArray) //[ 1, 2, 3, 'random' ]