import { Component, OnInit } from '@angular/core';
import { PreferTheatersService } from '../services/prefer-theaters.service';

@Component({
  selector: 'delete-prefer',
  templateUrl: './delete-prefer.component.html',
  styleUrls: ['./delete-prefer.component.scss']
})
export class DeletePreferComponent implements OnInit {

  constructor(public preferTheaterService: PreferTheatersService) { }

  ngOnInit() {
  }

}
