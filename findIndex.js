const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = array.findIndex(x => x % 2 === 0);

console.log(result) // 1


// Saglanan test islevinin karsilayan bir dizideki ilk ogenin dizinini dondurur. Test islevini karsilayan hicbir oge yoksa -1 dondurur

let result2 = array.findIndex(x => x % 2 !== 0);

console.log(result2) // 0


const isLargeNumber = (element) => element > 5;
const isBigLargeNumber = (element) => element > 11;
let result3 = array.findIndex(isBigLargeNumber)
console.log(array.findIndex(isLargeNumber)) // 5
console.log(result3) // -1


// Dogru bir deger dondurene kadar bir dizideki her oge icin artan dizin duzeninde saglanan bir islevi bir kez cagirir.

// Bunlarada bakabilirsiniz =?> .findLast() / .findLastIndex()

const arrayLike = {
    length: 3,
    0: 5,
    1: 30.3,
    2: 20,
  };
  console.log(
    Array.prototype.findIndex.call(arrayLike, (x) => !Number.isInteger(x)),
  ); // 1
