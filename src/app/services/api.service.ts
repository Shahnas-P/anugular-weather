import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CurrentWeatherComponent } from '../current-weather/current-weather.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient ) { }

  getDetails(data:any){
    console.log('hi');
    console.log(data);
    
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+data+'&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric')
   }
  
}
