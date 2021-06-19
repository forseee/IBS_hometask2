import { GetState } from '../index';
import { app__filterProductsByName, data__setCartOfProduct, data__setProducts } from './actions';
import { API } from '../../API';

/**
 * Получили все посты
 */
export const data__getProducts = () => async (dispatch: any, getState: GetState) => {
  try {
    const items = await API.items.getAll();
    dispatch(data__setProducts(items));
  } catch (e) {
    console.error('Ошибка при запросе...', e);
  }
};

/**
 * Получили все пост по его ID
 */
export const data__getProductById = (id: number) => async (dispatch: any, getState: GetState) => {
  dispatch(data__setCartOfProduct(null));
  try {
    const item = await API.items.getById(id);
    dispatch(data__setCartOfProduct(!!item ? item : null));
  } catch (e) {
    console.error('Ошибка при запросе...', e);
  }
};
