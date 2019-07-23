import { Component, OnInit } from '@angular/core';

import { Theater, Customer } from './models/theater.type';
import { TheaterNotice, CardList } from './models/theaterNotice-interface';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {
  
  Theaters: Theater[] = ['전체 공지', '영화관 공지'];
  theaterState = '전체 공지';
  TheaterNotices: TheaterNotice[];
  BranchNotices: TheaterNotice[];

  CardLists: CardList[];
  Customers: Customer[] = ['1:1문의', '단체관람/대관문의', '자주묻는질문', '분실물 문의/접수'];

  constructor() { }

  ngOnInit() {

    this.TheaterNotices = [
      { category: '전체', date: '2019.07.23', title: '<나랏말싸미> VIP 대상 3천원 할인쿠폰 증정 이벤트' },
      { category: '전체', date: '2019.07.22', title: '[무대인사] <봉오동 전투> 1주차 (8/2~8/3)' },
      { category: '전체', date: '2019.07.19', title: '[공지] 시스템 점검 안내' },
      { category: '전체', date: '2019.07.19', title: '[당첨안내]<토이스토리4 개봉 기념 선물> 문자 이벤트 당첨 안내' },
      { category: '전체', date: '2019.07.19', title: '[무대인사] <사자> 2주차 (8/10~8/11)' },
    ]
    
    this.BranchNotices = [
      { category: '이수', date: '2019.07.22', title: '[이수] 관람 요금 기준 변경안내' },
      { category: '동대문', date: '2019.07.18', title: '[동대문] 무비올나잇패키지 재 오픈 안내' },
      { category: '강남대로(씨티)', date: '2019.07.17', title: '[강남대로(씨티)] 관람요금 조정 안내' },
      { category: '상봉', date: '2019.07.16', title: '[상봉] 기계식 주차 타워 점검 안내' },
    ]

    this.CardLists = [
      { title: 'T멤버십 일반', detail: '영화 2,000원 할인', constraint: '(1일 5매)', url: 'http://image2.megabox.co.kr/mop/home/temp/img_main_01.png' },
      { title: 'LG U+', detail: '영화 1,000원 현장 할인', constraint: '(1일 1회/ 월 4회)', url: 'http://image2.megabox.co.kr/mop/home/temp/lg_uplus.png' },
      { title: '중앙멤버십', detail: '현장할인, 인터넷할인', constraint: '(연 24회)', url: 'http://image2.megabox.co.kr/mop/home/temp/membershipcard.png' }
    ]
  }

}
