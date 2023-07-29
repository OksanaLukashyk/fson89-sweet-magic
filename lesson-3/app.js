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
