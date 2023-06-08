import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
   private apiKey = environment.ApiKey;
   private apiUrl = environment.apiUrl;
 
 
  constructor(private http: HttpClient) { }

  getWeatherData(city: string, countryCode: string,units:string) {
  
    const url = `${this.apiUrl}?q=${city},${countryCode}&APPID=${this.apiKey}&units=${units}`;

    return this.http.get(url);
  }
}
