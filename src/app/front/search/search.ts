import { Component } from '@angular/core';
import { Musee } from '../../models/musee';
import { MuseeService } from '../../services/musee.service';
import { FormsModule } from '@angular/forms';
import { MuseeEnfant } from "../musee-enfant/musee-enfant";

@Component({
  selector: 'app-search',
  imports: [FormsModule, MuseeEnfant],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  nom = "";
  maxPrix!: number;
  results: Musee[] = [];

  constructor(private museeService: MuseeService) {}

  search() {
   this.museeService.getMusees().subscribe(list => {
  this.results = list.filter(m => {

    let matchNom = true;
    if (this.nom) {
      matchNom = m.nom.toLowerCase().includes(this.nom.toLowerCase());
    }

    let matchPrix = true;
    if (this.maxPrix) {
      matchPrix = m.prixEntree <= this.maxPrix;
    }

    return matchNom && matchPrix;
  });
});

  }
}
