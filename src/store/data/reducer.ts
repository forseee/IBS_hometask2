import { IItem } from '../../models/post';
import { DataAction, IDataActionTypes } from './types';

const initialState = {
  items: [] as Array<IItem>,
  item: null as IItem | null,
  filter: '' as string,
};
type IDataState = typeof initialState;

export const dataReducer = (state = initialState, action: DataAction): IDataState => {
  switch (action.type) {
    case IDataActionTypes.DATA__SET_ITEMS:
      return { ...state, items: [...action.payload!] };
    case IDataActionTypes.DATA__SET_ITEM:
      return { ...state, item: action.payload };
    case IDataActionTypes.FILTER__SET__FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case IDataActionTypes.FILTER__LIKE__DISLIKE:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) {
            return { ...item, like: !item.like };
          } else return item;
        }),
      };
    default:
      return state;
  }
};
