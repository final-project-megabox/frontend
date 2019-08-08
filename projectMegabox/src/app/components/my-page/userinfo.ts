export interface Userinfo {
  email: string;
  name: string;
  birthDate: string;
  phoneNumber: string;
  PreferTheater: string;
  getPreferList: string;
  last_login: string;
  mileage: number;
}



export interface Bookinginfo {
  booking_number: string;
  title: string;
  img_url: string;
  theater: string;
  screen_number: number;
  show_date: string;
  start_time: string;
  booking_date: string;
  canceled: boolean;
}



export interface Watchedmovie {
  img_url: string;
  age: string;
  title: string;
  schedule_date: string;
  theater_headcount: string;
}


export interface Wishmovie {
  movie_id: string;
  img_url: string;
  age: string;
  title: string;
  booking_rate: string;
}
