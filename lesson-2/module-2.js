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