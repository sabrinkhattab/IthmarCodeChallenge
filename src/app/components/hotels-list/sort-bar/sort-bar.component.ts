import { Component, OnInit ,EventEmitter , Output } from '@angular/core';

@Component({
  selector: 'app-sort-bar',
  templateUrl: './sort-bar.component.html',
  styleUrls: ['./sort-bar.component.scss']
})
export class SortBarComponent implements OnInit {
 @Output() sortPriceAscending = new EventEmitter();
 @Output() sortPriceDescending = new EventEmitter();
 @Output() sortAZNames = new EventEmitter();
 @Output() sortZANames = new EventEmitter();
  sortingPriceLow = false;
  sortingPriceHigh = false;
  sortingAZnames = false;
  sortingZAnames = false;

  constructor() { }

  ngOnInit(): void {
  }

 

  onSortPriceAscending() {
    this.sortingPriceLow = !this.sortingPriceLow
    if(this.sortingPriceLow){
      this.sortPriceAscending.emit();
    }
  }

  onSortPriceDescending() {
    this.sortingPriceHigh = !this.sortingPriceHigh
    if(this.sortingPriceHigh){
      this.sortPriceDescending.emit();
    }
  }

  onSortAZnames() {
    this.sortingAZnames = !this.sortingAZnames
    if(this.sortingAZnames){
      this.sortAZNames.emit();
    }
  }

  onSortZAnames() {
    this.sortingZAnames = !this.sortingZAnames
    if(this.sortingZAnames){
      this.sortZANames.emit();
    }
  }

}
