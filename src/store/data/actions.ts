import { IItem } from '../../models/post';
import { DataAction, IDataActionTypes } from './types';

export const data__setProducts = (items: Array<IItem> | null): DataAction => ({
  type: IDataActionTypes.DATA__SET_ITEMS,
  payload: items,
});

export const app__filterProductsByName = (filterName: string): DataAction => ({
  type: IDataActionTypes.FILTER__SET__FILTER,
  payload: filterName,
});
export const app__LikeDisLike = (id: string): DataAction => ({
  type: IDataActionTypes.FILTER__LIKE__DISLIKE,
  payload: id,
});

export const data__setCartOfProduct = (item: IItem | null): DataAction => ({
  type: IDataActionTypes.DATA__SET_ITEM,
  payload: item,
});
