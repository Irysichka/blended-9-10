//Логіка сторінки Home
import { findCategories, findProduct } from "./js/products-api";
import { createMarkup} from "./js/render-function";
import { refs } from "./js/refs";
import iziToast from "izitoast";

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
