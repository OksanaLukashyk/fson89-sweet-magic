export function createMarkup(products) {
  const markup = products
    .map(({ id, title, description, url }) => {
      return `
          <li class="card-item" id="${id}">
             <div class="card__image">
                <img src="${url}" alt="${title}" />
             </div>
             <div class="card__info">
                <div class="car__info--title">
                   <h3>${title}</h3>
                   <p>${description}</p>
                </div>
                <div class="card__info--button">
                  <div data-heart>&#x2764;</div>
                </div>
             </div>
          </li>
    `;
    })
    .join("");

  document.querySelector(".products-list").innerHTML = markup;
}
