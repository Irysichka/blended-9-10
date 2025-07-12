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
    const skip = (page - 1) * limit;
    try {
        const { data } = await axios(`${refs.ALL_PRODUCTS}?limit=${limit}&skip=${skip}}`)
        return data.products;
    } catch (error) {
        iziToast.error({
        title: 'Error',
      message: 'Не вдалося завантажити товари!',
      position: 'topRight',    
        })
    }
    
    
    }
