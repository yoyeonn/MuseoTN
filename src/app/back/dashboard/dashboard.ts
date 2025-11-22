import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MuseeService } from '../../services/musee.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.html',
})
export class Dashboard implements OnInit {

  totalMusees = 0;
  totalCommentaires = 0;
  avgPrice = 0;

  constructor(private museeService: MuseeService) {}

  ngOnInit(): void {
    this.museeService.getMusees().subscribe(data => {
      this.totalMusees = data.length;

      this.totalCommentaires = data.reduce(
        (sum, m) => sum + m.commentaires.length, 
        0
      );

      if (data.length > 0) {
        this.avgPrice = data.reduce((sum, m) => sum + m.prixEntree, 0) / data.length;
      }
    });
  }
}
