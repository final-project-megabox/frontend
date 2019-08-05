import { AuthService } from 'src/app/core/service/auth.service';
import { Bookinginfo } from './../../../userinfo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mypage-booking',
  templateUrl: './mypage-booking.component.html',
  styleUrls: ['./mypage-booking.component.scss']
})
export class MypageBookingComponent implements OnInit {
  TOKEN_NAME = 'token';
  loginState = false;

  navState = '예매 내역';

  bookingInfos: Bookinginfo[] = [
    {
      booking_number: 'T90716-008-3566',
      title: '(디지털) 토이스토리4',
      img_url: 'http://image2.megabox.co.kr/mop/poster/2019/08/2A0450-B477-4367-A065-85236F25C540.small.jpg',
      theater: '코엑스 컴포트 8관',
      screen_number: 5,
      show_date: '2018-05-16 14:55',
      start_time: '2018-05-16 13:40:35',
      booking_date: '2019-07-16 14:55',
      canceled: false
    },
    {
      booking_number: 'T90716-018-3567',
      title: '(디지털) 알라딘',
      img_url: 'http://image2.megabox.co.kr/mop/poster/2019/08/2A0450-B477-4367-A065-85236F25C540.small.jpg',
      theater: '코엑스 컴포트 8관',
      screen_number: 6,
      show_date: '2018-05-16 14:55',
      start_time: '2018-05-16 13:40:35',
      booking_date: '2019-07-16 14:55',
      canceled: false
    },
    {
      booking_number: 'T98756-008-3556',
      title: '(디지털) 라이온킹',
      img_url: 'http://image2.megabox.co.kr/mop/poster/2019/08/2A0450-B477-4367-A065-85236F25C540.small.jpg',
      theater: '코엑스 컴포트 8관',
      screen_number: 5,
      show_date: '2020-06-19 14:55',
      start_time: '2020-07-20 13:40:35',
      booking_date: '2019-07-16 14:55',
      canceled: false
    },
    {
      booking_number: 'T90216-108-3676',
      title: '(디지털) 어쩌고',
      img_url: 'http://image2.megabox.co.kr/mop/poster/2019/08/2A0450-B477-4367-A065-85236F25C540.small.jpg',
      theater: '코엑스 컴포트 8관',
      screen_number: 5,
      show_date: '2018-05-16 14:55',
      start_time: '2018-05-16 13:40:35',
      booking_date: '2019-07-16 14:55',
      canceled: true
    },
  ];

  bookedlists: Bookinginfo[] = [];
  watchedlists: Bookinginfo[] = [];
  canceledlists: Bookinginfo[] = [];

  constructor(private http: HttpClient, private auth: AuthService) { }

  ngOnInit() {
    this.watchedList();
    this.movieCanceled();
  }

  // getConfig() {
  //   const token = localStorage.getItem(this.auth.TOKEN_NAME);
  //   const headers = new HttpHeaders().set('TOKEN', token);

  //   this.http.get<>
  // }

  sortUpperWord() {
    let bookinginfo = [...this.bookingInfos];
    console.log(bookinginfo)
  };

//   var student = [
//     { name : "재석", age : 21},
//     { name : "광희", age : 25},
//     { name : "형돈", age : 13},
//     { name : "명수", age : 44}
// ]

// /* 이름순으로 정렬 */
// student.sort(function(a, b) { // 오름차순
//     return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
//     // 광희, 명수, 재석, 형돈
// });


 // 취소된것
  movieCanceled() {
    this.canceledlists = this.bookingInfos.filter(bookingInfo => bookingInfo.canceled);
    this.watchedlists = this.watchedlists.filter(bookingInfo => !bookingInfo.canceled);
    this.bookedlists = this.bookedlists.filter(bookingInfo => !bookingInfo.canceled);
  }

  //날짜 판별

  watchedList() {
    const today = new Date();
    // tslint:disable-next-line: radix
    // const yy = parseInt((today + '').slice(0, 4), 10);
    const yy = today.getFullYear();
    const mm = today.getMonth() + 1;
    const dd = today.getDate();

    const bookingInfo = [...this.bookingInfos];

    const kk = parseInt(bookingInfo[3].show_date.slice(0, 4), 10);

    const listlength = bookingInfo.length;
    for (let i = 0; i < listlength; i++ ) {
      // tslint:disable-next-line: radix
      let year = parseInt(bookingInfo[i].show_date.slice(0, 4), 10);
      let month = parseInt(bookingInfo[i].show_date.slice(5, 7), 10);
      let day = parseInt(bookingInfo[i].show_date.slice(8, 10), 10);

      if (year < yy) {
        this.watchedlists = [bookingInfo[i],  ...this.watchedlists];
        // tslint:disable-next-line: max-line-length
        }  else if (year === yy && month < mm) {
          this.watchedlists = [bookingInfo[i], ...this.watchedlists];
        // tslint:disable-next-line: max-line-length
        } else if (year === yy && month === mm && day < dd) {
          this.watchedlists = [bookingInfo[i], ...this.watchedlists];
        } else {
          this.bookedlists = [bookingInfo[i], ...this.bookedlists];
        }
      this.movieCanceled();
    }
  }


  bookedCanceled(id: string) {
    // this.canceledlists = [...this.bookingInfos.filter(bookingInfo => bookingInfo.id), ...this.canceledlists]
    const bookingInfo = [...this.bookingInfos];

    const listlength = bookingInfo.length;
    for (let i = 0; i < listlength; i++ ) {
      if (bookingInfo[i].booking_number === id) {
        bookingInfo[i].canceled = true;
      }
    }
    this.movieCanceled();
    console.log('aa')

  }

//   this.todos = this.todos.filter(todo => todo.id !== id);
//   this.countLeft();
// }

  //탭

  tabActive(event) {

    const select = event;

    if (select == this.navState) { return; }

    if (select == '예매 내역') {
      this.navState = '예매 내역';
    }

    if (select == '지난 내역') {
      this.navState = '지난 내역';
    }

    if (select == '취소 내역') {
      this.navState = '취소 내역';
    }

  }



}
