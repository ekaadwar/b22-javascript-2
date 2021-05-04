// Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang menerapkan  callback function dengan data sebagai berikut:

let nama = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];

// var ages = [32, 33, 16, 40];

// function checkAdult(age) {
//   return age >= 18;
// }

// console.log(ages.filter(checkAdult));

// console.log(name.filter("an"));

let fruits = ["apple", "banana", "grapes", "mango", "orange"];

// /**
//  * Filter array items based on search criteria (query)
//  */
// function filterItems(arr, query) {
//   return arr.filter(function (el) {
//     return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
//   });
// }

// console.log(filterItems(nama, "an")); // ['apple', 'grapes']
// // console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']

function sayHello(name, callback) {
  let greeting = `Hello ${name}`;
  callback(greeting);
}
function showGreeting(quote) {
  console.log(quote);
}

// sayHello("Eka", showGreeting);
console.log(showGreeting("hello"));
