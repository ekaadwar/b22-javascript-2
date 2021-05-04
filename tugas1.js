// method bawaan javascript

// 1. String length
// Method yang digunakan untuk mengembalikan nilai berupa karakter string
const car = "Pagani Huayra";
console.log(car.length);

// 2. String indexOf()
// Method yang digunakan untuk mengembalikan nilai berupa index dimana teks yang dicari muncul
let text = "The Pagani Huayra is a sports car produced by Italian sports car manufacturer Pagani";
console.log(text.indexOf("produced"));

// 3. String replace()
// Method yang digunakan untuk mengganti kata dalam sebuat string
let str = "produced by Italian";
console.log(str.replace("Italian", "Indonesia"));

// 4. String toUpperCase()
// Method yang digunakan untuk mengganti tulisan string menjadi kapital
let company = "Telkomsel";
console.log(company.toUpperCase());

// 5. Number toString()
// Method number yang digunakan untuk menkonversi typr data number menjadi type data string
console.log((12 + 3).toString() + 15);

// 6. Number toFixed()
// method number digunakan untuk membulatkan bilangan desimal
const pi = 3.14159265358979323846;
console.log(pi.toFixed(2));

// 7. Number Number()
// Method number yang digunakan untuk mengkonversi tipe variabel javascript menjadi number
console.log(Number(true));
console.log(Number("   10   "));

// 8. Array pop()
// method array yang digunakan untuk menghapus element array yang terakhir
let fruit = ["Manggoe", "Orange", "Durian", "Kiwi"];
fruit.pop();
console.log(fruit);

// 9. Array push()
// method array yang digunakan untuk menambah elemen array
let localFruit = ["Salak", "Durian", "Macang"];
localFruit.push("Kapundung");
console.log(localFruit);

// 10. Array unshift()
// method array yang digunakan untuk menambah elemen array di awal elemen
let fish = ["Hiu", "Teri", "Lele", "Paus"];
fish.unshift("Tongkol");
console.log(fish);
