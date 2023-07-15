//TODO:=========task-1=================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3, true];

// function findSmallerNumber(array) {
//   if (!Array.isArray(array)) {
//     return "Це не масив!";
//   }

//   let minNum = array[0];
//   for (const number of array) {
//     if (minNum > number) {
//       if (typeof number === "number") {
//         minNum = number;
//       }
//     }
//   }
//   return minNum;
// }

// console.log(findSmallerNumber(numbers));

//TODO:=========task-2=================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function caclculateAverage(...args) {
//   //   const args = arguments;
//   let total = 0;
//   let quantity = 0;
//   for (const arg of args) {
//     if (typeof arg === "number") {
//       total += arg;
//       quantity += 1;
//     }
//   }
//   return total / quantity;
// }

// console.log(caclculateAverage(10, 10, 20, 200, true, "num"));

//TODO:=========task-3=================
// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа

// function min(a, b){
// 	if(typeof a !== 'number'|| typeof b !=='number'){
// 	return `One of args is not a number`
// 	}
// 	return a<b ? a :b;

// }
// console.log(min(5, 3));

//TODO:=========task-4=================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sumArr (arr){
// 	const newArr=[];

// for (let index = 0; index < arr.length-1; index+=1) {
// 	newArr.push(arr[index]+arr[index+1])

// }
// return newArr;
// }
// console.log(sumArr(someArr));

//TODO:============task-5==============
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']

// const musicGenres = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп'];

// function logItems(array) {
//     for (let index = 0; index < array.length; index+=1) {

//         console.log(`${index + 1} - ${array[index]}`);

//     }

// }

// logItems(musicGenres);

//TODO:=============task-6=================
// Функція formatMessage(message, maxLength)
// приймає рядок (параметр message) і форматує його,
// якщо довжина перевищує значення параметрі maxLength.

// function formatMessage(message, maxLength) {
// if (message.length > maxLength) {
//     return message.slice(0, maxLength) + "...";
// }
// return message;

//     return message.length > maxLength ? message.slice(0, maxLength) + "..." : message;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); //Повертає 'Curabitur ligula...'.
// console.log(formatMessage("Curabitur ligula sapien", 23)); //Повертає 'Curabitur ligula sapien'.
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); //Повертає 'Nunc sed turpis...'.
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); //Повертає 'Nunc sed turpis a felis in nunc fringilla'

//TODO:==========Task-7=============
// Напиши скрипт, який для об'єкта user,
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'
// 3 замінити значення premium на false
// 4 виводити вміст об'єкта user у форматі
// ключ:значення використовуючи Object.keys() і for...of

// const user = {
//   name: "John",
//   age: 30,
//   hobby: "reading",
//   premium: true,
//   greet() {
//     console.log(`Hello ${this.name}`);
//   },
// };
// // user.mood = "happy";
// user.hobby = "skydiving";
// user["premium"] = false;
//console.log(Object.entries(user));
// for (const key of Object.keys(user)) {
//   console.log(`${key}: ${user[key]}`);
// }
//user.greet();

//TODO:=========task-8=================
//Потрібно написати функцію, яка приймає 2 параметри obj і key, яка буде перебирати об'єкт.
//Якщо об'єкт має такий ключ - поверне true
//Є 2 варіанти рішення, спочатку напишемо функцію, потім вирішимо простим способом
// const obj = {
//   name: "Igor",
//   car: "Mercedes",
//   carColor: "black",
// };
// function getBool(obj, key) {
//   //return Object.keys(obj).includes(key);
//   //return key in obj;
// }
// console.log(getBool(obj, "car"));

//TODO:==========task-9=============
// Напишіть функцію updateObject, яка приймає об'єкт та повертає
// новий об'єкт без зазначених параметрів
// Очікуваний результат ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}

// function updateObject(obj, ...removeKeys) {
//     let newObj = { ...obj }
//     for (const key of removeKeys) {
//         delete newObj[key]
//     }
//     return newObj;
// }

// console.log(updateObject({ a: 1, b: 2, c: 3 }, "b", "a"));

//TODO:============task-10================
// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2.

// до виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };

// function multiplyNumeric(obj) {
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             if (typeof obj[key] === "number") {
//                 obj[key] *= 2; 
//             }               
//         }
//     }
//     return obj;
// }

// console.log(multiplyNumeric(menu))

// після виклику функції
// menu = {
// width: 400,
// height: 600,
// title: "My menu"
// };

//TODO:=================task-11=============================
// Напиши функцію яка приймає масив чисел і повертає новий масив, унікальних чисел, які не повторюються.
const numbers = [1, 1, 1, 2, 3, 4, 7, 7, 6, 6, 5, 4, 23, 22, 22, 111, 1, 5];

function uniqArray(arr) {
    const uniq = {}
    for (const number of arr) {
        uniq[number]=number;
    }
    return Object.values(uniq)
}
console.log(uniqArray(numbers));