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


// 
//TODO:=========task-01=================
// Створити об'єкт, який представляє користувача. У об'єкті повинні бути наступні поля: ім'я, прізвище, вік, email та метод, який виводить повну інформацію про користувача.

// const user ={
//     firstName: "Mark",
//     lastName: "Chornovil",
//     age: 26,

//     info() {
//         console.log(this);
//     }
// }

// console.log(user);
// console.log(user.lastName);
// console.log(user.info());

// const person = Object.create(user)
// person.hobby = "football";
// console.log(person.info());

// const people = Object.create(person);
// console.log(people.info());

//TODO:=========task-04=================
//  Викликати метод user.info() таким чином, щоб він вивів результатом  ({name: 'Bob', lactName: 'Lasso',age: 50, email: 'BodLasso@gmail.com'})

// const obj = {
//     name: 'Bob',
//     lastName: 'Lasso',
//     age: 50,
//   };

// console.log(user.info.call(obj));

//TODO:=========task-05=================
/**
  |============Person================
  | Cтворіть клас `Person`, який містить наступні властивості:
  |  - `name` - ім'я людини;
  |  - `age`- вік людини;
  |  - `gender` - стать людини;
  |  - `email`- електронна пошта людини.
  |
  | ##### Крім того, клас `Person` має мати метод `getDetails()`, який повертає об'єкт з ім'ям, віком, статтю та електронною поштою людини.
  |============================
*/

/**
  |=============Employee===============
  |Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  |  - salary - зарплата співробітника;
  |  - department - відділ, в якому працює співробітник.
  |  ##### Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з ідентифікатором співробітника, зарплатою та відділом, в якому працює співробітник.
  |============================
*/

class Person {

    #hobby = "football"

    constructor(name, age, gender, email) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email = email;
    }

    getDetails() {
        return {
            name: this.name,
            age: this.age,
            gender: this.gender,
            email: this.email,
        };
    }

    get hobby() {
        return this.#hobby
    }
}

const person = new Person("Mark", 26, "male", "mark@gmail.com");


console.log(person.getDetails());


class Employee extends Person {

    static Priority() {
        return {
            HIGHT: "hight",
            LOW: "low"
        }
    }

    constructor(name, age, gender, email, salary, department) {


        super(name, age, gender, email);
        this.salary = salary;
        this.department = department;
    }

    getEmployeeDetails() {
      return {
        ...this.getDetails(),
        salary: this.salary,
        department: this.department
    
      }

    }
    
}

const employee = new Employee("Ira", 30, "female", "ira@gmail.com", 3000, "accountant" )
console.log(employee.getEmployeeDetails());
console.log(Employee.Priority().HIGHT);