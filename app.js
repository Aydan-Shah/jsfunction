/* Funksiya Tanimlama */
// function merhaba() {
//    console.log("Merhaba");
// }
// merhaba(); // Function Call

/* Parametr elave etme */
// function merhaba(name, age) {
//    console.log(`Isim ${name} Yas${age}`);
// }
// merhaba("Aydan", 20); // Function Call

/* Varsayilan deyer verme */
// function merhaba(name, age) {
//    if(typeof name==="undefined") {name = "Bos"};
//    if(typeof age==="undefined") {age = "Bos"};
//    console.log(`Isim ${name} Yas${age}`);
// }
// merhaba(); // Function Call

/* Varsayilan deyer vermenin qisa yolu */
// function merhaba(name="Bos", age="Bos") {
//    // if(typeof name==="undefined") {name = "Bos"};
//    // if(typeof age==="undefined") {age = "Bos"};
//    console.log(`Isim ${name} Yas${age}`);
// }
// merhaba(); // Function Call
// merhaba("Kadir");

/* Funksiya Return - funksiyadan deyer qaytarmaq ucundur
   return - bir funskiyani sonlandiran bir ifadedir.
   return'dan sonra yazilan hecbirshey funksiyada calismaz.
   cunki return funksiyani tamamile sonlandirir.
*/
// function square(x) {
//    return x*x;
//    console.log("jjd"); //Heczaman islemeyecek.
// }

// function cube(x) {
//    return x*x*x;
// }

// // let a = square(12);
// // a = cube(a);

// let a = cube(square(12));
// console.log(a);

/* Function Expression */
// function merhaba() {
//    return "Merhaba";
// }
// console.log(merhaba())
// const merhaba = function(name) {
//    console.log("Merhaba " + name);
// }
// merhaba("Aydan");

/* Immediately Invoked Function Expression (IIFE) - Tanimlandigi yerde calisan funksiyalar */
// (function(name) {
//    console.log("Merhaba " + name );
// })("Aydan");

/*  */
const database = {
   host: "localhost", //property
   add: function() { //method
      console.log("Add");
   },
   get: function() { //method
      console.log("Get");
   },
   update: function(id) { //method
      console.log(`Id: ${id} updated`);
   },
   delete: function(id) { //method
      console.log(`Id: ${id} deleted`);
   }
}
console.log(database.host);
database.add();
database.delete(10);