import { Injectable } from '@angular/core';
import {Hotel } from '../Hotel'
@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }

  sortPriceAscending(filteredHotels:Hotel []){
    return filteredHotels.sort((item1,item2)=>item1.price > item2.price ? 1 :-1)
  }
  sortPriceDscending(filteredHotels:Hotel []){
    return filteredHotels.sort((item1,item2)=>item1.price < item2.price ? 1 :-1)
  }

  sortAZnames(filteredHotels:Hotel []){
    return filteredHotels.sort((item1,item2)=>item1.name > item2.name ? 1 :-1)
  }

  sortZAnames(filteredHotels:Hotel []){
    return filteredHotels.sort((item1,item2)=>item1.name < item2.name ? 1 :-1)
  }
}
