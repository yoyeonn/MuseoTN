import { Component, OnInit } from '@angular/core';
import { Musee } from '../../models/musee';
import { ActivatedRoute } from '@angular/router';
import { MuseeService } from '../../services/musee.service';
import { CommonModule, DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PricePipe } from '../../pipes/price-pipe';

@Component({
  selector: 'app-musee-detail',
  imports: [DatePipe, CommonModule, ReactiveFormsModule, PricePipe],
  templateUrl: './musee-detail.html',
  styleUrl: './musee-detail.css',
})
export class MuseeDetail implements OnInit {

  musee!: Musee;
  commentForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private museeService: MuseeService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")!;
    this.museeService.getMusees().subscribe(list => {
      this.musee = list.find(m => m.id === id)!;
    });

    this.commentForm = this.fb.group({
      nom: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  addComment() {
    if (this.commentForm.invalid) return;

    const newComment = {
      nom: this.commentForm.value.nom,
      message: this.commentForm.value.message,
      date: new Date().toISOString()
    };

    this.musee.commentaires.push(newComment);

    this.museeService.updateMusees(this.musee).subscribe(() => {
      this.commentForm.reset();
    });
  }
}