//Функцію для створення, рендеру або видалення розмітки
import { refs } from "./refs";
import { findCategories } from "./products-api";

export function createMarkup(arr) {
    return arr.map((item) => `<li class="categories__item"><button class="categories__btn" type="button">${item}</button></li>`).join("")
}


export function createProducts(arr) {
    return arr.map( item => `<li class="products__item" data-id="${item.id}">
    <img class="products__image" src="${item.thumbnail}" alt=""/>
    <p class="products__title">${item.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:</span>${item.brand}</p>
    <p class="products__category">Category:${item.category} </p>
    <p class="products__price">Price:${item.price} $</p>
 </li>` ).join("")
}

