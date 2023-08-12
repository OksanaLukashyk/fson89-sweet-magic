// Модуль 6. Заняття 12. DOM i events

//TODO:=========task-01=================
/**
 * Вам надано кілька масивів з різними фруктами (назва у масиві вказує на те, куди потрібно помістити елементи відносно ul).
 * `Створи` html - елемент списку і `додай` його у розмітку.Попрактикуйся з методами`append`, `prepend`, `after`, `before`
 * заповнивши ними список елементами з масивів.Для зручності створи допоміжну функцію`elementsOfIngridients`,
 * яка повертатиме масив елементів(масив з лішками).
 */

const appendFruitList = ["apple🍎", "banana🍌"];
const prependFruitList = ["grapes🍇", "orange🍊"];
const beforeFruitList = ["strawberry🍓", "cherry🍒"];
const afterFruitList = ["peach🍑", "kiwi🥝"];

const ulElement = document.createElement("ul");
title.after(ulElement);

function elementsOfIngridients(array) {
  return array.map((el) => {
    const liEl = document.createElement("li");
    liEl.textContent = el;
    return liEl;
  });
}

ulElement.append(...elementsOfIngridients(appendFruitList));
ulElement.prepend(...elementsOfIngridients(prependFruitList));
ulElement.before(...elementsOfIngridients(beforeFruitList));
// ulElement.after(...elementsOfIngridients(afterFruitList));

//TODO:=========task-02=================
// 3. Вставте даний текст в html документ, а потім виділіть усі слова, які мають більше 8 символів у тексті абзацу (наприклад, жовтим фоном).

const text = `Об'єктна модель документа (Document Object Model) - незалежний від мови інтерфейс для роботи з HTML-документом. Містить набір властивостей і методів, що дозволяють шукати, створювати і видаляти елементи, реагувати на дії користувача і багато іншого. Тобто з'єднує сторінку з мовою програмування.`;

const pElem = document.createElement("p");
// pElem.textContent = text;
ulElement.after(pElem);

function textChek() {
  const world = text.split(/\s+/);
  world.forEach((el) => {
    if (el.length > 8) {
      const spanEl = document.createElement("span");
      spanEl.style.backgroundColor = "yellow";
      spanEl.textContent = el + " ";
      pElem.appendChild(spanEl);
    } else {
      pElem.innerHTML += el + " ";
    }
  });
}
textChek();

//TODO:=========task-03=================
// Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).

const divContainer = document.createElement("div");
divContainer.classList.add("number-container");
const randomNumber = () => Math.floor(Math.random() * 100) + 1;
let divArr = [];

for (let index = 0; index < 100; index += 1) {
  const divEl = document.createElement("div");
  divEl.classList.add("number");
  divEl.textContent = randomNumber();
  divEl.textContent % 2 === 0
    ? divEl.classList.add("even")
    : divEl.classList.add("odd");

  // if (divEl.textContent % 2 === 0) {
  //   divEl.classList.add("even");
  // } else {
  //   divEl.classList.add("odd");
  // }
  // divContainer.appendChild(divEl);
  divArr.push(divEl);
}

divContainer.append(...divArr);

pElem.after(divContainer);

// //TODO:=========task-04=================
// Створи HTML список фільмів на основі масиву під назвою films. Користувач обожнює дивитися кіно, дивиться його часто, тому при вході на сторінку він хоче бачити, які фільми вже були переглянуті, а до яких він ще не добрався. Вперу чергу зарендери фільми на сторінку, використовуй допоміжну функцію createMarkup(), яка буде повертати розмітку. Додай розмітку на сторінку задопомогою insertAdjacentHTML() і тільки після цього зроби елементи фільмів (li), які вже були переглянуті напівпрозорими (opacity: 0.5). Для цього використовуй масив унікальних id фільмів, знайди на сторінці елементи у яких id дорівнює тому id фільма, який користувач вже перелянув аби саме їх зробити напівпрозорими.

const films = [
  {
    title: "Tetris",
    imgUrl: "https://static.hdrezka.ac/i/2023/3/20/f509264b419fdmu53x38j.jpg",
    id: "film_1",
  },
  {
    title: "Avatar: The Way of Water",
    imgUrl: "https://static.hdrezka.ac/i/2022/12/22/tc5e6b8212683gn66r84s.jpg",
    id: "film_2",
  },
  {
    title: "Operation Fortune: Ruse de guerre",
    imgUrl: "https://static.hdrezka.ac/i/2022/2/11/s0d53f6cf0ae0tq29m85l.jpg",
    id: "film_3",
  },
  {
    title: "Babylon",
    imgUrl: "https://static.hdrezka.ac/i/2022/12/25/z330b47a82209ww99w55a.jpg",
    id: "film_4",
  },
  {
    title: "The Whale",
    imgUrl: "https://static.hdrezka.ac/i/2023/2/24/h23d8c65d734akd89q94c.jpg",
    id: "film_5",
  },
];

// Приклад елементу списку
{
  /* <li id="${id}">
     <img src="${imgUrl}" alt="${title}" />
     <p>${title}</p>
</li> */
}

// const watchedFilms = ['film_2', 'film_4', 'film_5'];

const watchedFilms = ["film_1", "film_3", "film_5"];

document.addEventListener("DOMContentLoaded", renderFilms);

function createMarkup({ title, imgUrl, id }) {
  const isWatched = watchedFilms.includes(id);
  return `
    <li id="${id}">
      <img src="${imgUrl}" alt="${title}" class="${
    isWatched ? "watched" : ""
  }"/>
      <p>${title}</p>
    </li>
  `;
}
function renderFilms() {
  const markup = films.map((film) => createMarkup(film)).join("");
  document.querySelector(".film-list").insertAdjacentHTML("beforeend", markup);
}

//TODO:=========task-05=================
/**
 *!  Form Events, Input, Focus, Blur and Submit.

*? Викоритовуй шаблон форми з файлу html.

** 1 - При події `input`, якщо користувач ввів в поле більше 6 символів то додати клас `success`. Якщо ж символів менше аніж 6, то клас `error`

** 2 - При події `focus` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

** 3 - При події `blur` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

** 4 - При події `submit`. Відміни поведінку браузера по змовчуванню. Дістань данні з інпуту і чек боксу, зроби перевірку, що інпут не порожній, також, що нажатий чек бокс у положення true, якщо користувач все виконав вірно, збери данні (userName) у обьект і виведи у консоль. У разі, якщо користувач не виконав одну із умов, виведи повідомлення. Також реалізуй додавання ім`я користувача у span, замість слова "Anonymous". Якщо користувач ввів ім`я, а потім видали, зроби так, щоб на місце повернулось дефолтне знаяення "Anonymous". При відправці форми, очисти інпут, верни чек бокс у положення false, верни дефолтне значення "Anonymous" у span.
 */

// find refs

const inputEl = document.querySelector(".js-username-input");
const form = document.querySelector(".js-contact-form");
const spanEl = document.querySelector(".js-username-output");
//TODO:===========1===============
inputEl.addEventListener("input", () => {
  if (inputEl.value.length > 6) {
    inputEl.classList.add("success");
    inputEl.classList.remove("error");
  } else {
    inputEl.classList.remove("success");
    inputEl.classList.add("error");
  }
});
//TODO:===========2===============
inputEl.addEventListener("focus", () => {
  inputEl.value.trim() === "" ?     inputEl.style.outline = "3px solid red" :     inputEl.style.outline = "3px solid green";

  // if (inputEl.value.trim() === "") {
  //   inputEl.style.outline = "3px solid red";
  // } else {
  //   inputEl.style.outline = "3px solid green";
  // }
});
//TODO:===========3===============
inputEl.addEventListener("blur", () => {
  inputEl.value.trim() === "" ?     inputEl.style.outline = "3px solid red" :     inputEl.style.outline = "3px solid lime";

})
//TODO:===========4===============
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { userName, accept } = event.target.elements;

  if (userName.value && accept.checked ) {
    const userData = { userName: userName.value}

    console.log(userData);

    userName.value = '';
    accept.checked = false
    spanEl.textContent = "Anonymous"
  } else {
    alert("Please enter form correctly");
  }
})

inputEl.addEventListener("input", ()=>{
  spanEl.textContent = inputEl.value || "Anonymous";
})

//TODO:=========task-06=================
// Кнопка "Приховати" ховає текст і замінює назву кнопки на "Розкрити", у разі повторного натискання текст знову стає доступним і кнопка набуває початкового вигляду.
const inputPasword = document.querySelector('.js-password-input');
const btnEl = document.querySelector('.js-password-button');
btnEl.addEventListener('click',(evt)=>{
  
  if(inputPasword.type === 'text') {
    inputPasword.type = 'password';
    btnEl.textContent = "Розкрити";
  } else {
    inputPasword.type = 'text';
    btnEl.textContent = "Приховати";
  }
})
//TODO:=========task-07=================
// Написати функцію, яка буде створювати список подій клавіатури event.key та event.code
// Додати класи на список eventList, на елементи eventCode та eventKey
const eventThumb = document.querySelector('.eventThumb');
document.addEventListener('keydown',({code, key})=> {
  const markup = `
  <ul class="eventList">
      <li class="eventKey"><b>Key</b>:${key} </li>
      <li class="eventCode"><b>Code</b>:${code} </li>
    </ul>`
    eventThumb.insertAdjacentHTML('afterbegin', markup)
})
//TODO:=========task-08=================
// Кнопка "Зменшити" робить квадрат меншим на 20 пікселів, кнопка "Збільшити" - робить більшим на 10 пікселів.
const decreaseBtn = document.querySelector('.js-decrease');
const increaseBtn = document.querySelector('.js-increase');
const boxEl = document.querySelector('.box');

decreaseBtn.addEventListener('click', onBtnClick)
increaseBtn.addEventListener('click', onBtnClick)

function onBtnClick(evt) {
  const{offsetWidth}=boxEl
  const id = evt.target.id
  if(id === 'decrease'){
    boxEl.style.width = `${offsetWidth-20}px`
    boxEl.style.height = `${offsetWidth-20}px`
  } else {
    boxEl.style.width = `${offsetWidth+20}px`
    boxEl.style.height = `${offsetWidth+20}px`
  }
  
}
//TODO:=========task-08=================
// При кліку на коло воно має слідувати за курсором. При повторному кліку воно стає в початкове положення.
const circleEl = document.querySelector('.outer-circle')
circleEl.addEventListener('click',(evt)=>{
  const target = evt.currentTarget
  if(target.style.position==='absolute'){
    target.style.position = 'static'
    document.removeEventListener('mousemove',onMouseMove)
  } else {
    target.style.position = 'absolute'
    document.addEventListener('mousemove',onMouseMove)
  }
  
})

function onMouseMove(evt) {
  // console.log(evt.pageX);
  let left = evt.pageX
  let top = evt.pageY
  circleEl.style.top = `${top-15}px`
  circleEl.style.left = `${left-15}px`
}