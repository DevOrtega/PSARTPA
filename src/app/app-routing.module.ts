import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import { WeatherObservedComponent } from './components/weather-observed-component/weather-observed.component';

const routes: Routes = [
  { path:'', component: WeatherForecastComponent },
  /* { path:'weather-observed', component: WeatherObservedComponent }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
