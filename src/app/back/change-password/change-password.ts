import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './change-password.html',
})
export class ChangePassword {

  form: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = this.fb.group({
      old: ['', Validators.required],
      new1: ['', Validators.required],
      new2: ['', Validators.required],
    });
  }

  submit() {
    if (this.form.value.new1 !== this.form.value.new2) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    if (!this.auth.changePassword(this.form.value.old, this.form.value.new1)) {
      alert("Ancien mot de passe incorrect.");
      return;
    }

    alert("Mot de passe changé !");

     this.router.navigate(['/admin']);
  }
}
