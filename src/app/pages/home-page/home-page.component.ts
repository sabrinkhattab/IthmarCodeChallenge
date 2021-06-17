import { Component, OnInit } from '@angular/core';
import {HotelsService} from '../../services/hotels.service'
import {Hotel} from '../../Hotel'
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
public hotels : Hotel[] = []

  constructor(private hotelsService : HotelsService) { }

  ngOnInit(): void {
    this.hotelsService.getHotels().subscribe((response)=> (this.hotels = response))
  }

}
