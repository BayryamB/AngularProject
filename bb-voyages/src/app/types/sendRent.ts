import { location } from './location';
import { options } from './options';

export interface sendRent {
  userId: string;
  date: string;
  location: location;
  photos: string[];
  cover: string;
  description: string;
  highlights: string[];
  price: number;
  options: options;
}
