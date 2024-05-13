import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private usuarios = [
    { username: 'admin', password: 'admin', nombre: 'Admin' },
    { username: 'angel', password: 'angel', nombre: 'Ángel' },
    { username: 'hugo', password: 'hugo', nombre: 'Hugo' }
  ];

  login(username: string, password: string) {
    const usuario = this.usuarios.find(user => user.username === username && user.password === password);
    return usuario ? usuario.nombre : null;
  }
}
