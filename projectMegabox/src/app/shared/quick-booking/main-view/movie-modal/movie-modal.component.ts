import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.scss']
})
export class MovieModalComponent implements OnInit {
  movies = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
  ]
  constructor() { }

  ngOnInit() {
  }

}
