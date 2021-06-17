import { Component, OnInit , Input } from '@angular/core';
import {Hotel} from '../../Hotel'
@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent implements OnInit {
@Input() hotels !: Hotel[];
  constructor() { }

  ngOnInit(): void {
  }

}
