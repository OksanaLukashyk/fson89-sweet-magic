//TODO:============task-01=========================
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній
// function letMeSeeYourName(callback) {
//   const name = prompt("Введите свое имя");
//   if (name.trim() === "") {
//     alert("Вы не ввели имя");
//     return;
//   }
//   callback(name);
// }
// function greet(name) {
//   console.log(`Привіт ${name}`);
// }
// letMeSeeYourName(greet);

// TODO:============task-02=========================
// Напишіть функцію, яка приймає два числа і колбек-функцію. Функція повинна помножити числа між собою та передати результат дії до колбек-функції. Колбек-функція повинна, у разі, якщо, це число є парним - помножити це число на себе, якщо ні - взяти квадратний корінь з цього числа, та вивести результат у консоль лог

// function first(a, b, callback) {
//   let c = a * b;
//   return callback(c);
// }

// const first = (a, b, callback) => callback(a * b);

// const callback = (num) => (num % 2 === 0 ? Math.pow(num, 2) : Math.sqrt(num));

// // function callback(num) {
// //     if (num % 2 === 0) {
// //       return Math.pow(num, 2);
// //     } else {
// //       return Math.sqrt(num);
// //     }
// //   };

// console.log(first(3, 3, callback));

// //TODO:=========task-01=================
// // Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].

// const getNewArray = (array, pow) =>
//   array.map((number) => Math.pow(number, pow));
//TODO:=========task-02=================
// Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].
// const data = [
// 	{ id: 1, values: [1, 2, 3] },
// 	{ id: 2, values: [4, 5, 6] },
// 	{ id: 3, values: [7, 8, 9] },
//   ];
//   const newArr = (array)=>array.flatMap(el => el.values)
//   console.log(newArr(data));

//TODO:=========task-03=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.
// const people = [
// 	{ name: 'John', age: 27 },
// 	{ name: 'Jane', age: 31 },
// 	{ name: 'Bob', age: 19 },
//   ];
//   const chackAge = people.some(el => el.age<20)
//   console.log(chackAge);

//TODO:=========task-04=================
//  Дано масив чисел [2, 4, 6, 8, 10]. Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];
// const isOddArray = numbers.every(el => el%2===0);
// console.log(isOddArray);
//TODO:=========task-05=================
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];
// const evenNumber = numbers.find(el => el%2!==0);
// console.log(evenNumber);
//TODO:=========task-07=================
// Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].
// const numbers = [4, 2, 5, 1, 3];
// const words =["a", "s" , "m", "o"];
// const sortedNumbers =[...numbers].sort((a, b) => a-b);
// console.log(sortedNumbers);
// console.log(numbers);
// const sortedWords =[...words].sort((a, b) => b.localeCompare(a))
// console.log(sortedWords);

//TODO:=========task-10=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Створіть новий масив, що містить тільки об'єкти, в яких вік більше 20 років. Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]
// const user = [
// 	{ name: 'John', age: 27 },
// 	{ name: 'Ane', age: 31 },
// 	{ name: 'Bob', age: 19 },
//   ];

//   const newUsers = user.filter (el => el.age>20 ).map(el => el.name).sort((a, b) => a.localeCompare(b))
//   console.log(newUsers);
//   console.log(user);

//TODO:=========task-11=================
// Дано масив чисел [1, 2, 3, 4, 5]. Застосуйте метод reduce для обчислення суми елементів масиву

// const numbers =[1, 2, 3, 4, 5];
// const totalArray = numbers.reduce((acc, el)=> acc+el, 0);
// const newArray= numbers.reduce((acc, el)=> {
// 		 acc.push(el*2);
// 		 return acc; 
// 	},[]);
// console.log(totalArray);
// console.log(newArray);


