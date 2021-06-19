import { AxiosInstance } from 'axios';
import { IItem } from '../models/post';

type IItemsResponse = Array<IItem>;

export class ApiItems {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }
  getAll = () =>
    this.axios.get(`/item`).then((d) => {
      return d.data.content;
    });
  getById = (id: number) => this.axios.get(`/item/${id}`).then((d) => d.data.content);
}
