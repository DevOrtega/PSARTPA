import { Component, OnInit } from '@angular/core';
import { WeatherForecastService } from 'src/app/services/weatherforecast/weather-forecast.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {
  public predictions: any;
  constructor(private dataService: WeatherForecastService) { }

  async ngOnInit(): Promise<void> {
    this.predictions= await this.dataService.getData();
  }

}
