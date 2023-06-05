// Belirli bir diziyi baska bir konumla veya dizinin kendisiyle kopyalar ve degistirir.
// .copyWithin() Turkce olarak dusunurseniz icinde kopyalamak anlamina gelmektedir.

//Hedef = target => Kopyalanacak ogenin kacinci index den sonra gelecegini belirler. 
//Baslangic = start => Baslangic index sayisini ifade eder.
//Bitis = end => Bitis index sayisini ifade eder. Kendi index numarasi dahil degildir.

// Bu ornekte dize icerisine ozellikle number degerler ile belirtmek istedim. Buradaki amacim index numaralarini daha rahat takip edebilmenizi saglamak.

const array1 = ['0', '1', '2', '3', '4','5','6','7','8','9']
const array2 = ['0', '1', '2', '3', '4','5','6','7','8','9']

console.log(array1.copyWithin(0, 6, 8));  // > Array ["6", "7", "2", "3", "4", "5", "6", "7", "8", "9"]
console.log(array2.copyWithin(2, 6, 8));  // > Array ["0", "1", "6", "7", "4", "5", "6", "7", "8", "9"]


// Target > 2 dedik buda 2 indexin konumundan itibaren baslayacagimiz anlamina gelmektedir.
// Start  > 6 index de alarak kopyalamaya basladik.
// End    > 8 index dahil olmayacak sekilde kopyalamayi sonlandirdik.

// Ornektede  '6','7' `yi kopyaladik. Ardindan bunlari target kisminda belirledigimiz index sayisi uzerinden kopyalama islemi yaptik. Kopyalama islemi sirasinda indexlerin kopyalanacagi yerdeki ifadeler kaldirilir, kopyalanan ogeler onlarin yerini alir.
