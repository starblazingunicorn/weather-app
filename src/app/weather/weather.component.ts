import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  city: string = 'Stockholm';
  countryCode: string = 'se';
  units: string = 'metric'
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeather();
  }
  getWeather(){
    this.weatherService.getWeatherData(this.city, this.countryCode,this.units)
    .subscribe(data => {
      this.weatherData = data;
    });
  }
}
