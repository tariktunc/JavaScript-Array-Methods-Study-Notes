// Belirli bir bolumu yeni bir dizi olarak dondurur.

// .slice(1 , 2) 

// start ve end 

// start =?> cikartmanin baslatilacagi elaman
// end   =?> cikartmanin sonlandirilacagi 0 tabanli dizin, Kendisi dahil degildir.

let fruits = ["apple", "banana", "orange", "grape", "strawberry"];

let slicedFruits = fruits.slice(1, 3);

console.log(slicedFruits); // [ 'banana', 'orange' ]

// slice(0, -2) => [ 'banana', 'orange', 'grape' ]

// - deger sagdan sola dogru siralamasini yapar.