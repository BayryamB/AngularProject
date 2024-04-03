export interface User {
  username: string;
  email: string;
  password: string;
  userId?: string;
  watchlist: string[];
  likes: string[];
}
