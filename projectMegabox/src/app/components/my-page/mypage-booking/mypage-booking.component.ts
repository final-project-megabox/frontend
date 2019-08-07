import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Bookinginfo } from '../userinfo';


@Component({
  selector: 'app-mypage-booking',
  templateUrl: './mypage-booking.component.html',
  styleUrls: ['./mypage-booking.component.scss']
})
export class MypageBookingComponent implements OnInit {
  navState = '예매 내역';
  bookingInfos: Bookinginfo[] = [
    {
      id: 0,
      booking_number: 'T90716-008-3566',
      poster_url: 'http://image2.megabox.co.kr/mop/poster/2019/08/2A0450-B477-4367-A065-85236F25C540.small.jpg',
      screen_number: 5,
      title: '(디지털) 토이스토리4',
      theater: '코엑스 컴포트 8관',
      show_date: '2018-05-16 14:55',
      show_time: '2018-05-16 13:40:35',
      booking_date: '2019-07-16 14:55',
      canceled: false
    },
    {
      id: 1,
      booking_number: 'T90716-008-3577',
      poster_url: 'http://image2.megabox.co.kr/mop/poster/2019/08/2A0450-B477-4367-A065-85236F25C540.small.jpg',
      screen_number: 5,
      title: '(디지털) 알라딘',
      theater: '코엑스 컴포트 8관',
      show_date: '2019-07-16 14:55',
      show_time: '2019-07-16 13:40:35',
      booking_date: '2019-07-16 14:55',
      canceled: true
    },
    {
      id: 2,
      booking_number: 'T80716-008-3575',
      poster_url: 'http://image2.megabox.co.kr/mop/poster/2019/08/2A0450-B477-4367-A065-85236F25C540.small.jpg',
      screen_number: 5,
      title: '(디지털) 미드소마',
      theater: '코엑스 컴포트 10관',
      show_date: '2019-07-16 14:55',
      show_time: '2019-07-16 13:40:35',
      booking_date: '2019-07-16 14:55',
      canceled: false
    },
    {
      id: 4,
      booking_number: 'T90716-008-3875',
      poster_url: 'http://image2.megabox.co.kr/mop/poster/2019/08/2A0450-B477-4367-A065-85236F25C540.small.jpg',
      screen_number: 5,
      title: '(디지털) 토이스토리4',
      theater: '코엑스 컴포트 8관',
      show_date: '2020-08-20 14:55',
      show_time: '2020-08-20 13:40:35',
      booking_date: '2020-08-20 14:55',
      canceled: false
    },
  ];

  bookedlists: Bookinginfo[] = [];
  watchedlists: Bookinginfo[] = [];
  canceledlists: Bookinginfo[] = [];

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.watchedList();
    this.movieCanceled();
  }

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


  bookedCanceled(id: number) {
    // this.canceledlists = [...this.bookingInfos.filter(bookingInfo => bookingInfo.id), ...this.canceledlists]
    const bookingInfo = [...this.bookingInfos];

    const listlength = bookingInfo.length;
    for (let i = 0; i < listlength; i++ ) {
      if (bookingInfo[i].id === id) {
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
