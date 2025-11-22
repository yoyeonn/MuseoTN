import { Component } from '@angular/core';
import { WeatherApi } from "../weather-api/weather-api";
import { Musee } from '../../models/musee';
import { MuseeService } from '../../services/musee.service';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [WeatherApi, RouterLink, SlicePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
musees: Musee[] = [];

constructor(private museeService: MuseeService) {}

ngOnInit() {
  this.museeService.getMusees().subscribe(data => {
    this.musees = data;
  });
}

}
