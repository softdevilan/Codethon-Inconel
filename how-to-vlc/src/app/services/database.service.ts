import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private dbService: NgxIndexedDBService) {}

  addUser(name: string): Observable<number> {
    return from(this.dbService.add('users', { name })).pipe(
      map((data: { id: number }) => data.id)
    );
  }

  getUsers(): Observable<any[]> {
    return from(this.dbService.getAll('users'));
  }
}