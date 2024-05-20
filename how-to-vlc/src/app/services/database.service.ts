import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private dbService: NgxIndexedDBService) {}

  addUser(usuario: any): Observable<number> {
    return from(this.dbService.add('usuarios', usuario)).pipe(
      map((id: number) => id)
    );
  }

  getUsers(): Observable<any[]> {
    return from(this.dbService.getAll('usuarios'));
  }

  addEvento(evento: any): Observable<number> {
    return from(this.dbService.add('eventos_proximos', evento)).pipe(
      map((id: number) => id)
    );
  }

  getEventos(): Observable<any[]> {
    return from(this.dbService.getAll('eventos_proximos'));
  }

  addImagen(imagen: any): Observable<number> {
    return from(this.dbService.add('imagenes', imagen)).pipe(
      map((id: number) => id)
    );
  }

  getImagenes(): Observable<any[]> {
    return from(this.dbService.getAll('imagenes'));
  }
}