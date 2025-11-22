import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MuseeService } from '../../services/musee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add.html',
  styleUrl: './add.css',
})
export class Add {
  museeForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private museeService: MuseeService,
    private router: Router
  ) {
    this.buildForm();
  }

  buildForm() {
    this.museeForm = this.fb.group({
      nom: ['', Validators.required],
      localisation: ['', Validators.required],
      photo: ['', Validators.required],
      dateOuverture: ['', Validators.required],
      ouvert: [true],
      prixEntree: [0, [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],

      commentaires: this.fb.array([])
    });
  }

  get commentaires() {
    return this.museeForm.get('commentaires') as FormArray;
  }

  addCommentaire() {
    this.commentaires.push(
      this.fb.group({
        nom: ['', Validators.required],
        message: ['', Validators.required],
        date: [new Date().toISOString()]
      })
    );
  }

  removeCommentaire(i: number) {
    this.commentaires.removeAt(i);
  }

  submit() {
    if (this.museeForm.invalid) {
      alert("Veuillez remplir correctement le formulaire.");
      return;
    }

    this.museeService.addMusees(this.museeForm.value).subscribe(() => {
      alert("Musée ajouté avec succès !");
      this.router.navigate(['/admin/list']);
    });
  }
}
