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
