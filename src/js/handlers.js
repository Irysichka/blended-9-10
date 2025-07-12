// Функції, які передаються колбеками в addEventListners

import { findByCategory, findProduct } from "./products-api";
import { refs } from "./refs";
import { createProducts } from "./render-function";

refs.categoriesList.addEventListener("click", onCategoryClick)

export function onCategoryClick(e) {
    if (!e.target.classList.contains("categories__btn")) return;

    const selectedCategory = e.target.textContent.trim();

    refs.btnCategory.forEach(btn => btn.classList.remove("categories__btn--active"));
     e.target.classList.add("categories__btn--active");
    
    
    if (selectedCategory === "All") {
        findProduct(1)
            .then(products => renderProducts(products));
        return
    }

    findByCategory(selectedCategory)
        .then(products => {
            renderProducts(products);
    })
}
const PRODUCTS_PER_PAGE = 12;

export function renderProducts(products) {
  if (!products.length) {
    refs.productsList.innerHTML = "";
    refs.notFound.classList.add("not-found--visible");
    return;
  }

  refs.notFound.classList.remove("not-found--visible");

  const pageProducts = products.slice(0, PRODUCTS_PER_PAGE); // Перші 12
  refs.productsList.innerHTML = createProducts(pageProducts);
}