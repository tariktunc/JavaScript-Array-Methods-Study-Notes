// Find bir yontemdir, dogru bir deger dondurene kadar, dizide her oge icin artan diuzin uzerinde saglanan bir islevi cagirir sonra o ogeyi dondurur ve yenilemeyi durdurur.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const found = arr.find((item) => item % 2 === 0);
console.log(found); // 2
const found2 = arr.find((item) => item > 6);
console.log(found2); // 7

// Islemde item degeri her elemani dolastiktan sonra false ile doner ancak 6 geldikten sonra 7 geldiginde bu islem true olur ve 7 dondurur ve islem sona erer diger elemanlarin sorgusunu bu sekilde yapmaz bunun icin dongu yada functionkullanmak gerekiyor

// find() dizide saglanan test islevini dondurur yoksa undefind dondurur
// Dizide bulunan dizine ihtiyaciniz varsa indexOf() , findIndex() ile benzerdir ancak bir test islevi kullanmak yerine her ogeyi esitlik acisindan kontorl eder.
// includes() Bir dizide degerin olup olmadigni bulmaniz gerekiyorsa includes() test islevini kullanmak yerine ger ogeyi degerle esitlik acisindan kontorl eder.
// some() Herhangi bir ogenin saglanan test islevi karsilayip karsilamadigini bulmanizi saglar.

const inventory  = [
    {
        name: "laptop", price: 1000
    },
    {
        name: "mouse", price: 50
    },
    {
        name: "keyboard", price: 100
    },
    {
        name: "monitor", price: 200
    }
]

function isSetup(query){
    return query.name === "monitor";
}

const result = inventory.find(isSetup);
console.log(result); // { name: 'monitor', price: 200 }

const resultPrice = inventory.find(isSetup).price;
console.log(resultPrice); // 200




