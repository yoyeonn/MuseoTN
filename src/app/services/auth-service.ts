import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'yUImboDOP9qSOmKewotKgxm6SF0pKcEwlFCe2RfVtcWUSrOQvqi7vDgbClpRmsyX';
  private readonly ADMIN_EMAIL = 'admin@admin.com';
  private readonly ADMIN_PASSWORD = 'admin';

  constructor() {
    if (!localStorage.getItem('admin_password')) {
      localStorage.setItem('admin_password', this.ADMIN_PASSWORD);
    }
  }

  login(email: string, password: string): boolean {
    if (email === this.ADMIN_EMAIL && password === localStorage.getItem('admin_password')) {
      localStorage.setItem('TOKEN', this.TOKEN_KEY);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('TOKEN');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('TOKEN') != null;
  }

  changePassword(oldPass: string, newPass: string): boolean {
    const current = localStorage.getItem('admin_password');

    if (oldPass !== current) return false;

    localStorage.setItem('admin_password', newPass);
    return true;
  }
}
