import { Component, OnInit } from '@angular/core';
import {HotelsService} from '../../services/hotels.service'
import {SortService} from '../../services/sort.service'
import {Hotel} from '../../Hotel'
import * as moment from 'moment';

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
public dates!: any  ;
public totalNights!:number;

  constructor(private hotelsService : HotelsService ,private sortingService : SortService) { }

  ngOnInit(): void {
    this.hotelsService.getHotels().subscribe((response)=> {
      this.hotels = response.map((item)=> {item.calculatedPrice = item.price; return item});
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
      this.filteredHotels = this.hotels.filter((hotel)=>{
        return checkedValues.includes(hotel.city)
      })             
      if(checkedValues.length === 0){
        this.filteredHotels = this.hotels
      }
     }

     onHotelNameFilter(checkedValues:any) { 
      this.filteredHotels = this.hotels.filter((hotel)=>{
        return checkedValues.includes(hotel.name)
      })    
      if(checkedValues.length === 0){
        this.filteredHotels = this.hotels
      }     
     }

     searchHotels(dates:any){
       this.dates = dates
       let datein = moment(this.dates['checkIn'], 'YYYY-MM-DD').toDate();

       this.filteredHotels = this.hotels.filter((hotel) =>{
        let hotelAvailableDate = moment(hotel.available_on, 'YYYY-MM-DD').toDate()
         return datein >= hotelAvailableDate
       })
     this.totalNights= this.getNightsNumber();
     }


     getNightsNumber(){
      let datein = moment(this.dates['checkIn'], 'YYYY-MM-DD').toDate();
      let dateout = moment(this.dates['checkOut'], 'YYYY-MM-DD').toDate();


    
      let Difference_In_Time = dateout.getTime() - datein.getTime();
      let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
       return Difference_In_Days
     }



  

     
   
   

  

  }
