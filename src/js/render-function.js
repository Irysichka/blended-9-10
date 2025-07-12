//Функцію для створення, рендеру або видалення розмітки
import { refs } from "./refs";
import { findCategories } from "./products-api";

// export function renderProducts(products) {
//     const markup = products.map(product => `<li class="products__item"><img src="${product.thumbnail}" alt="${product.title}" class="products__image" /><h3 class="products__title">${product.title}</h3><p class="products__brand">${product.price}</p></li>`).join("");
    
//     refs.productsList.innerHTML = markup;
// }


export function createMarkup(arr) {
    return arr.map((item) => `<li class="categories__item"><button class="categories__btn" type="button">${item}</button></li>`).join("")
}

