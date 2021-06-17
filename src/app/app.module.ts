import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PriceFilterComponent } from './components/price-filter/price-filter.component';
import { CheckBoxFilterComponent } from './components/check-box-filter/check-box-filter.component';
import { HotelsListComponent } from './components/hotels-list/hotels-list.component';
import { HotelItemComponent } from './components/hotels-list/hotel-item/hotel-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{HttpClientModule} from '@angular/common/http';
import { SortBarComponent } from './components/hotels-list/sort-bar/sort-bar.component'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchBarComponent,
    PriceFilterComponent,
    CheckBoxFilterComponent,
    HotelsListComponent,
    HotelItemComponent,
    SortBarComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
