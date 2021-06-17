import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Hotel} from '../Hotel'
@Injectable({
  providedIn: 'root'
})
export class HotelsService {

private apiUrl = 'https://api.npoint.io/d8c6ab8ac5307d469528'

  constructor(private http:HttpClient) { }

  getHotels():Observable<Hotel[]>{
    return this.http.get<Hotel[]>(this.apiUrl);
  }
}
