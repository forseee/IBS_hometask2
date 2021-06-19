export interface IItem {
  id: string;
  name: string;
  description: string;
  info?: string;
  details?: string;
  like: boolean;
  picture: Ipicture;
  price: Iprice;
}
interface Iprice {
  value: number;
  currency: string;
}
interface Ipicture {
  path: string;
  alt: string;
}
