// Dizinin basindaki ogeyi kaldirir ve kaldirilan ogeyi dondurur.

let fruits = ['apple', 'banana', 'orange'];

console.log(fruits.shift()) // apple // ogeyi dondurur.

console.log(fruits) // ['banana', 'orange']

// Elemen sayisi 0 ise undefined doner pop() ile benzerdir, ancak dizideki bas ogeyi kaldirir.

// shift() mutasyon yontemidir.
// ilk ogeyi kaldirmak ve dondurmek istiyorsaniz bunun yerine .slice() kullanabilirsiniz.

let nums = [1, 2, 3, 4, 5];

console.log(nums.slice(1)) // [2, 3, 4, 5] // dize olarak doner.