import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Musee } from '../../models/musee';
import { MuseeService } from '../../services/musee.service';
import { PricePipe } from '../../pipes/price-pipe';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, PricePipe],
  templateUrl: './list.html',
  styleUrls: ['./list.css'],
})
export class List implements OnInit {

  musees: Musee[] = [];
  allMusees: Musee[] = [];
  searchTerm = '';
  sortOption = 'none';

  constructor(private museeService: MuseeService) {}

  ngOnInit(): void {
    this.museeService.getMusees().subscribe(data => {
      this.musees = data;
      this.allMusees = data;
    });
  }

  filterMusees() {
    const t = this.searchTerm.toLowerCase();
    this.musees = this.allMusees.filter(m =>
      m.nom.toLowerCase().includes(t) ||
      m.localisation.toLowerCase().includes(t)
    );

    this.sortMusees(); 
  }

  sortMusees() {
    if (this.sortOption === 'nameAsc') {
      this.musees.sort((a, b) => a.nom.localeCompare(b.nom));
    }
    else if (this.sortOption === 'nameDesc') {
      this.musees.sort((a, b) => b.nom.localeCompare(a.nom));
    }
    else if (this.sortOption === 'priceAsc') {
      this.musees.sort((a, b) => a.prixEntree - b.prixEntree);
    }
    else if (this.sortOption === 'priceDesc') {
      this.musees.sort((a, b) => b.prixEntree - a.prixEntree);
    }
  }

  delete(id: string) {
    if (!confirm("Voulez-vous vraiment supprimer ce musée ?")) return;

    this.museeService.deleteMusees(id).subscribe(() => {
      this.museeService.getMusees().subscribe(data => {
        this.musees = data;
        this.allMusees = data;
        this.filterMusees(); 
      });
    });
  }
}
