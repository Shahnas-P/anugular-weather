import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { weather } from 'src/MODALS/weather';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent  implements OnInit{
data:string=''
weatherDetails:any={}

  constructor( private api:ApiService ){

  }
ngOnInit(): void {
  this.submit()
  }
submit(){

 
  
this.api.getDetails(this.data).subscribe((result:any)=>{


this.weatherDetails=result
console.log(this.weatherDetails);
})
 }
}

 


