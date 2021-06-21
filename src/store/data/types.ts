import { IItem } from '../../models/post';

export enum IDataActionTypes {
  DATA__SET_ITEMS = '[DATA] SET_ITEMS',
  DATA__SET_ITEM = '[DATA] SET_ITEM',
  FILTER__SET__FILTER = '[FILTER] SET__FILTER',
  FILTER__LIKE__DISLIKE = '[FILTER] FILTER__LIKE__DISLIKE',
}

// Типы ActionCreators
interface SetItemsAction {
  type: IDataActionTypes.DATA__SET_ITEMS;
  payload: Array<IItem> | null;
}
interface SetFilter {
  type: IDataActionTypes.FILTER__SET__FILTER;
  payload: string;
}
interface SetFilterLike {
  type: IDataActionTypes.FILTER__LIKE__DISLIKE;
  payload: string;
}
interface SetItemAction {
  type: IDataActionTypes.DATA__SET_ITEM;
  payload: IItem | null;
}

// Общий тип Action
export type DataAction = SetItemsAction | SetItemAction | SetFilter | SetFilterLike;
