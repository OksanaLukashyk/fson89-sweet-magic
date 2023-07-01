// if...else
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

// const a = 10;

// if (a===10) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }

// У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).

// const min = 60;

// if (min >= 0 && min <= 15) {
//     console.log('Перша чверть');
// } else if (min > 15 && min <= 30) {
//     console.log('Друга чверть');
// } else if (min > 30 && min <= 45) {
//     console.log('Третя чверть');
//     } else if (min > 45 && min <=59) {
//     console.log('Четверта чверть');
// } else {
//     console.log('Такої чверті не існує');
//  }

// ternary

// console.log(a === 10 ? 'Вірно' : 'Невірно');

// for, while

// switch

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = 6;
// let result = "";

// switch (num) {
//   case 1:
//     result = "зима";
//     break;

//   case 2:
//     result = "весна";
//     break;

//   case 3:
//     result = "літо";
//     break;

//   case 4:
//     result = "осінь";
//     break;

//   default:
//     result = "Такої пори року не існує";
//     break;
// }

// console.log(result);

// Напишіть if..else, що відповідає наступному switch:

const browser = 'Opera';

// switch (browser) {
//   case 'Edge':
//     alert("You've got the Edge!");
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert('Okay we support these browsers too');
//     break;

//   default:
//     alert('We hope that this page looks ok!');
// }

if (browser==='Edge') {
    alert("You've got the Edge!");
} else if (browser==='Chrome'||browser==='Firefox'||browser==='Safari'||browser==='Opera') {
    alert('Okay we support these browsers too');
}
else {
    alert('We hope that this page looks ok!');
}