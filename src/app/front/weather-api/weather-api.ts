import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Weather } from '../../models/weather';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-weather-api',
  imports: [DatePipe],
  templateUrl: './weather-api.html',
  styleUrl: './weather-api.css',
})
export class WeatherApi implements OnInit {
  weather!: Weather;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=36.8&longitude=10.18&current_weather=true";
    this.http.get<Weather>(url).subscribe((data) => {
      this.weather = data;
  });
}
}