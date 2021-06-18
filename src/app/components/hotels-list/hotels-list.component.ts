import { Component, OnInit , Input } from '@angular/core';
import {Hotel} from '../../Hotel'
import { SortService } from 'src/app/services/sort.service';
@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent implements OnInit {
@Input() hotels !: Hotel[];
@Input() totalNights!:number;

  constructor( private sortService : SortService) { }

  ngOnInit(): void {
  }
  ngOnChanges()	{
    if(this.totalNights){
      this.hotels = this.hotels.map((item)=>{
        item.calculatedPrice = item.price * this.totalNights;
        return item;
      })
    }
    console.log("ngOnChanges")

  }
  


  sortPriceAscending(){
   this.hotels = this.sortService.sortPriceAscending(this.hotels)

  }

  sortPriceDscending(){
   this.hotels = this.sortService.sortPriceDscending(this.hotels)

  }
  sortAZnames(){
    this.hotels = this.sortService.sortAZnames(this.hotels)
 
   }

   sortZAnames(){
    this.hotels = this.sortService.sortZAnames(this.hotels)
 
   }



}

