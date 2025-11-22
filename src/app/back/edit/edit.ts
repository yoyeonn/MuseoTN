import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MuseeService } from '../../services/musee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Musee } from '../../models/musee';

@Component({
  selector: 'app-edit',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class Edit {
museeForm!: FormGroup;
  museeId!: string;

  constructor(
    private fb: FormBuilder,
    private museeService: MuseeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.museeId = this.route.snapshot.paramMap.get('id')!;
    this.buildForm();
    this.loadMusee();
  }

  buildForm() {
    this.museeForm = this.fb.group({
      nom: ['', Validators.required],
      localisation: ['', Validators.required],
      photo: ['', Validators.required],
      dateOuverture: ['', Validators.required],
      ouvert: [true],
      prixEntree: [0, Validators.required],
      description: ['', Validators.required],
      commentaires: this.fb.array([])
    });
  }

  get commentaires() {
    return this.museeForm.get('commentaires') as FormArray;
  }

  loadMusee() {
    this.museeService.getMusees().subscribe(list => {
      const musee = list.find(m => m.id === this.museeId);
      if (!musee) return;

      this.museeForm.patchValue(musee);

      musee.commentaires.forEach(c => {
        this.commentaires.push(
          this.fb.group({
            nom: [c.nom, Validators.required],
            message: [c.message, Validators.required],
            date: [c.date]
          })
        );
      });
    });
  }

  addCommentaire() {
    this.commentaires.push(
      this.fb.group({
        nom: ['', Validators.required],
        message: ['', Validators.required],
        date: [new Date().toISOString()],
      })
    );
  }

  removeCommentaire(i: number) {
    this.commentaires.removeAt(i);
  }

  submit() {
    if (this.museeForm.invalid) {
      alert("Formulaire incomplet.");
      return;
    }

    const updatedMusee: Musee = this.museeForm.value;
  updatedMusee.id = this.museeId;

    this.museeService.updateMusees(updatedMusee).subscribe(() => {
      alert("Musée modifié avec succès !");
      this.router.navigate(['/admin/list']);
    });
  }
}
