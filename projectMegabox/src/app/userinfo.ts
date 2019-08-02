export interface Userinfo {
  email: string;
  name: string;
  phone_number: string;
  birth_date: string;
}


export interface Bookinginfo {
  id: number,
  booking_number: string,
  poster_url: string,
  screen_number: number,
  title: string,
  theater: string,
  show_date: string,
  show_time: string,
  booking_date: string,
  canceled: boolean,
}
