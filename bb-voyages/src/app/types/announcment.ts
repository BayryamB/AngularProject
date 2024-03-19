export interface Announcement {
  location: location;
  options: options;
  _id: string;
  userId: string;
  date: string;
  photos: string[];
  description: string;
  highlights: string[];
  price: number;
  __v: number;
}

interface location {
  country: string;
  city: string;
}

interface options {
  wifi: boolean;
  parking: boolean;
  breakfast: boolean;
  pets: boolean;
  smoking: boolean;
}
