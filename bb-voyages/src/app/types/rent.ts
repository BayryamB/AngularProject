import { location } from './location';
import { options } from './options';
export interface Rent {
  location: location;
  options: options;
  _id: string;
  userId: string;
  date: string;
  photos: string[];
  cover: string;
  description: string;
  highlights: string[];
  price: number;
  __v: number;
}
