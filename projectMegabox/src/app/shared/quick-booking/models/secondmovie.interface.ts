export interface SecondMovie {
  img_url: string;
  booking_number: string;
  phoneNumber:string;
  schedule_id: number;
  theater: string;
  screen: number;
  age: string;
  running_time: number;
  price: {
    favor: number,
    normal: number,
    youth: number
  };
  date: string;
  start_time: string;
  movie: string;
  types: [];
  st_count: number;
  total_seat: number;
  seat_number: [];
}