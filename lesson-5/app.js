//! Модуль 7. Заняття 13. Поширення подій.

//TODO:=========task-01=======Accordion==========
/**
 * Викоритовуй шаблон акордеон меню з файлу[index.html] та напиши наступний функціонал:
 * при кліку на елемент меню, розкривай блок з текстом.При повторному кліку по елементу,
 * розкритий текст приховується.Нажимаючи на інші елементи меню, попередньо відкриті елементи не закриваються.
 */

const listEl = document.querySelector(".js-accordion-list");

function handleBtnClick(event) {
  if (event.target.nodeName !== "BUTTON") return;
  event.target.nextElementSibling.classList.toggle("active");
}

listEl.addEventListener("click", handleBtnClick);

//TODO:=========task-02=======Pagination==========
/**
 * Викоритовуй шаблон пагінації з файлу[index.html] для розробки функціоналу пагінатора.
 * Використовуй поширення подій.Додавай клас`active` на поточну сторінку. Створи допоміжну функцію`updateActivePage`, яка повинна обновляти активний клас.
 * Функція`handleClick`повинна викликатися коли відбувається клік на елементі`pagination`.
 */

const paginationEl = document.querySelector(".js-pagination");

paginationEl.addEventListener("click", handleClick);

function handleClick(event) {
  if (event.target.nodeName !== "LI") return;

  const currentBtn = event.target;
  const activeBtn = paginationEl.querySelector(".active");

  if (currentBtn.classList.contains("active")) return;

  if (currentBtn.dataset.type === "page") {
    currentBtn.classList.add("active");
    activeBtn.classList.remove("active");
    return;
  }

  if (currentBtn.dataset.type === "prev" && activeBtn.dataset.page !== "1") {
    activeBtn.classList.remove("active");
    activeBtn.previousElementSibling.classList.add("active");
  }

  if (currentBtn.dataset.type === "next" && activeBtn.dataset.page !== "5") {
    activeBtn.classList.remove("active");
    activeBtn.nextElementSibling.classList.add("active");
  }
}

//TODO:=========task-03======Modal window===========
/**
  |============================
  | Модальне вікно:
  |  1 - Реалізувати відкриття модального вікна по кліку по кнопці "Відкрити модалку".
  |  2 - Реалізувати закриття модального вікна по кліку на крестик і по "ESC". Не забувай знімати слухача події "keydown" після закриття модального вікна.
  |  Виконуй завдвння послідовно: 
  |  - Спочатку знайди елементи у Дом дереві, з якими тобі потрібно працювати. 
  |  - Створи 3 функції onOpenModalBtnElClick, closeModalWindow, onEscClick. Не забувай робити перевірку на цільовий елемент. 
  |  - Відображення модельного вікна реалізуй заа допомогою бібліотеки basicLightbox і його метода "basicLightbox.create".
  |============================
*/
import { onModalOpenClick } from "./js/helpers/onModalOpenClick.js";

const openModalBtn = document.querySelector(".js-modal-open");
openModalBtn.addEventListener("click", onModalOpenClick);

/**
  |============Розмітка для модального вікна================
  <div class="modal">
  <button type="button" class="close-btn js-modal-close">
    X
  </button>

  <form class="login-form js-modal__form">
    <label>
      Name
      <input type="text" name="name" placeholder="enter your name" />
    </label>
    <label>
      Email
      <input type="email" name="email" placeholder="enter your email" />
    </label>
    <label>
      Password
      <input
        type="password"
        name="password"
        placeholder="enter your password"
      />
    </label>
    <button class="login-btn" type="submit">
      Login
    </button>
  </form>
</div>
  |============================
*/

//! Модуль 8. Заняття 16. Local storage

// - Використовуй html з файлу [index.html]
// - Використовуй local storage для зберігання вибраної теми (dark / light)

const themeSwitcher = document.getElementById("theme-switch");
const bodyEl = document.body;

themeSwitcher.addEventListener("click", onCheckBoxChange);
document.addEventListener("DOMContentLoaded", setThemeOnLoad);

// light theme is default, that's why themeSwitcher is unchecked
// themeSwitcher.checked = false;
const LS_KEY = "swicher";

function onCheckBoxChange() {
  if (themeSwitcher.checked) {
    bodyEl.classList.replace("light", "dark");
    localStorage.setItem(LS_KEY, "dark");
    return;
  }

  bodyEl.classList.replace("dark", "light");
  localStorage.setItem(LS_KEY, "light");

  // if you change theme to dark, add 'dark' class and remove previus, add this change to local storage
  // if you select light theme do the same work but add 'light' class
}

function setThemeOnLoad() {
  const lsData = localStorage.getItem(LS_KEY);
  if (lsData === "dark") {
    bodyEl.classList.replace("light", "dark");
    themeSwitcher.checked = true;
    return;
  }
  bodyEl.classList.replace("dark", "light");

  // this helpful function should call every time when you update page, to check what theme was seted to local storage
  // you should get data from LS and set saved theme to body
  // don't forget about themeSwitcher, if current theme is dark, it should be checked
}

// Напиши функціонал, який дозволить додавати улюблені страви у local storage і стилізувати кнопку задопомгою класу checked для того щоб при оновленні сторінки користувач кожного разу бачив, які страви були його улюбленими.
// В будь який момент страву можна видалити з улюблених, просто натиснувши на сердечко, ця дія має видалити клас checked з блоку сердечка та видалити страву з local storage
// Функція setFavoritesOnLoad має запускатися при вході на сторінку та додавати клас checked всім тим сердечкам, чиї id були у local storage в улюблених

import { products } from "./js/data/products.js";
import { createMarkup } from "./js/helpers/createMarkup.js";

document.addEventListener("DOMContentLoaded", renderMarkup);

function renderMarkup() {
  createMarkup(products);
}

function toggleFavorite(evt) {
  const heart = evt.target;
  const card = heart.closet("card-item");
}

// function setFavoritesOnLoad();
