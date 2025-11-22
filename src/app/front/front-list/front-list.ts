import { Component, inject, OnInit } from '@angular/core';
import { Musee } from '../../models/musee';
import { MuseeEnfant } from "../musee-enfant/musee-enfant";
import { MuseeService } from '../../services/musee.service';
@Component({
  selector: 'app-front-list',
  imports: [MuseeEnfant],
  templateUrl: './front-list.html',
  styleUrl: './front-list.css',
})
export class FrontList implements OnInit {
musees: Musee[] = [];

  constructor(private museeService: MuseeService) {}

  ngOnInit(): void {
    this.museeService.getMusees().subscribe(data => {
      this.musees = data;
    });
  }
}
