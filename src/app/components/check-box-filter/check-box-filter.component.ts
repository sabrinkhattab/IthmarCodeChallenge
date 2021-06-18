import { Component, OnInit , Input ,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-check-box-filter',
  templateUrl: './check-box-filter.component.html',
  styleUrls: ['./check-box-filter.component.scss']
})
export class CheckBoxFilterComponent implements OnInit {
  @Input() cities !: any;
  @Input() hotelsNames !: any;
  @Output() cityFilter = new EventEmitter();
  @Output() hotelNameFilter = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }

   onCityFilter() {
    this.cityFilter.emit(
      this.cities
        .filter((city:any) => city.checked)
        .map((city:any) => city.name));
  }

   onHotelNameFilter() {
    this.hotelNameFilter.emit(
      this.hotelsNames
        .filter((hotel:any) => hotel.checked)
        .map((hotel:any) => hotel.name));
  }

}
