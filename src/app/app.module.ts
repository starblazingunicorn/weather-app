import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherService } from './weather.service';
import { WeatherComponent } from './weather/weather.component';
import { LocalForecastComponent } from './local-forecast/local-forecast.component';
 

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    LocalForecastComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
 
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
