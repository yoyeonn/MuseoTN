import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Musee } from '../models/musee';

@Injectable({
  providedIn: 'root',
})
export class MuseeService {
  private http = inject(HttpClient);
  private base = "http://localhost:3000/musees";
  listMusees(): Observable<Musee[]> {
    return this.http.get<Musee[]>(this.base);
  }
  getMusees() {
    return this.http.get<Musee[]>(this.base);
  }
  addMusees(musee: Musee) {
    return this.http.post<Musee>(this.base, musee);
  }
  updateMusees(musee: Musee) {
    return this.http.put<Musee>(`${this.base}/${musee.id}`, musee);
  }
  deleteMusees(id: string) {
    return this.http.delete<Musee>(`${this.base}/${id}`);
  }
  searchMusees(nom: string) {
    return this.http.get<Musee[]>(`${this.base}?nom=${nom}`);
  }
}

