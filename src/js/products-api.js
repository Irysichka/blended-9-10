// Функції для роботи з бекендом
import axios from "axios";
import { refs } from "./refs";
import iziToast from "izitoast";



export async function findCategories() {
    const { data } = await axios(`${refs.ALL_CATEGORIES}`);
    const categories = ["All", ...data]
    return categories;
}


export async function findProduct(page = 1) {
    const limit = 12;
    const skip = (page-1)*limit
    const url =  `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    try {
        const { data } = await axios(url)
        return data.products;
    } catch (error) {
        iziToast.error({
        title: 'Error',
      message: 'Не вдалося завантажити товари!',
      position: 'topRight',    
        })
    }
    }

export async function findByCategory(category) {
    const url = `${refs.SEARCH_PRODUCT_ID}/${category}`
    try {
        const { data } = await axios(url);
        return data.products;
    } catch (error) {
        iziToast.error({
           title: 'Error',
      message: `Не вдалося завантажити продукти категорії "${category}"`,
      position: 'topRight', 
        })
        return [];
}
    }