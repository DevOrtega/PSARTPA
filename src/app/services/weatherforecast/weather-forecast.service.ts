import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {
  public data: any;
  constructor() { }

  async getData() {
    return axios.get("https://08da8c356e34.ngrok.io/v2/entities?type=WeatherForecast", {
      headers: {
        "Accept": "application/json"
      },
      withCredentials: false
    })
    .then(response => {

      return JSON.parse(JSON.stringify(response.data));
    })
    .catch(() =>  null)
  }
}
