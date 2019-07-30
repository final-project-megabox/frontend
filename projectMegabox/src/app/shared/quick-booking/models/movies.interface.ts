export interface Movies {
  selected: boolean;
  movie_id: number;
  date: string;
  img_url: string;
  release_date: string;
  booking_rate: number;
  title: string;
  age: string;
  type: string[];
  show_time?: string;
  running_time?: number;
}
