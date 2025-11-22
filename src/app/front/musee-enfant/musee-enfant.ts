import { Component, Input } from '@angular/core';
import { Musee } from '../../models/musee';
import { SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-musee-enfant',
  imports: [SlicePipe, RouterLink],
  templateUrl: './musee-enfant.html',
  styleUrl: './musee-enfant.css',
})
export class MuseeEnfant {
@Input() musee!: Musee
}
