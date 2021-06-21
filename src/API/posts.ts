import { AxiosInstance } from 'axios';
import { IItem } from '../models/post';

type IItemsResponse = {
  content: Array<IItem>;
};
type IItemContent = {
  content: IItem;
};

export class ApiItems {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }
  getAll = () =>
    this.axios.get<IItemsResponse>(`/item`).then((d) => {
      return d.data.content;
    });
  getById = (id: number) => this.axios.get<IItemContent>(`/item/${id}`).then((d) => d.data.content);
}
