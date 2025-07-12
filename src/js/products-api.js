// Функції для роботи з бекендом
import axios from "axios";
import { refs } from "./refs";
import { createMarkup } from "./render-function";


export async function findCategories() {
    const { data } = await axios(`${refs.ALL_CATEGORIES}`)
    return data;
}

findCategories()
    .then(data => {
         refs.categoriesList.innerHTML = createMarkup(data);
    })
    .catch(error => {
    console.error(error, 'error')
    })


export async function findProduct(){
    
}
