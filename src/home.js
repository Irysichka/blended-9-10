//Логіка сторінки Home
import { findCategories, findProduct, findByCategory } from "./js/products-api";
import { createMarkup, createProducts} from "./js/render-function";
import { refs } from "./js/refs";
import iziToast from "izitoast";
import { renderProducts } from "./js/handlers";

findCategories()
    .then(data => {
         refs.categoriesList.innerHTML = createMarkup(data);
    })
    .catch(error => {
        iziToast.error({
        title: 'Error',
      message: 'Не вдалося завантажити категорії товарів!',
      position: 'topRight',
      timeout: 4000,
    })
    })

const currentPage = 1;
findProduct(currentPage)
  .then((arr) => {
    refs.productsList.innerHTML = createProducts(arr)
  })
  .catch((error) => {
    iziToast.error({
      message: 'Помилка завантаження товарів:',
      position: "topRight"
    })
  });



