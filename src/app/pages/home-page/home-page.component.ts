import { Component, OnInit } from '@angular/core';
import {HotelsService} from '../../services/hotels.service'
import {SortService} from '../../services/sort.service'
import {Hotel} from '../../Hotel'
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
public hotels : Hotel[] = []
public filteredHotels!: Hotel[] ;
public citiesOptions:any  ;
public hotelsOptions:any ;
private sorteringClick!: boolean;


  constructor(private hotelsService : HotelsService ,private sortingService : SortService) { }

  ngOnInit(): void {
    this.hotelsService.getHotels().subscribe((response)=> {
      this.hotels = response
      this.filteredHotels= this.hotels
      this.citiesOptions = this.generateCityOptions(this.hotels)
      this.hotelsOptions = this.generateHotelNamesOptions(this.hotels)
    })
  }

  generateCityOptions(hotels :Hotel []) : any{
 return  hotels.map(hotel => ({name : hotel.city , value : hotel.city , checked : false})).reduce((unique:any, o: { name: any; value: any; }) => {
  if(!unique.some((obj: { name: any; value: any; }) => obj.name === o.name && obj.value === o.value)) {
    unique.push(o);
  }
  return unique;
},[])
  }

  generateHotelNamesOptions(hotels :Hotel []) : any{
    return  hotels.map(hotel => ({name : hotel.name , value : hotel.name , checked : false})).reduce((unique:any, o: { name: any; value: any; }) => {
     if(!unique.some((obj: { name: any; value: any; }) => obj.name === o.name && obj.value === o.value)) {
       unique.push(o);
     }
     return unique;
   },[])
     }

     onCityFilter(checkedValues:any) { 
      console.log(checkedValues)
      this.filteredHotels = this.hotels.filter((hotel)=>{
        return checkedValues.includes(hotel.city)
      })             
      if(checkedValues.length === 0){
        this.filteredHotels = this.hotels
      }
     }

     onHotelNameFilter(checkedValues:any) { 
      console.log(checkedValues)
      this.filteredHotels = this.hotels.filter((hotel)=>{
        return checkedValues.includes(hotel.name)
      })    
      if(checkedValues.length === 0){
        this.filteredHotels = this.hotels
      }     
     }

  

     
   
   

  

  }
