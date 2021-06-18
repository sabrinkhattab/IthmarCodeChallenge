import { Component, OnInit  ,EventEmitter, Output} from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  
faSearch = faSearch;
public checkIn!:Date ;
public checkOut!:Date ;

  constructor() { }

  ngOnInit(): void {
  }

  selectTime(event: any){
    event.target.name === 'check-in' ? 
    this.checkIn = event.target.value :
    this.checkOut = event.target.value



  }

}
