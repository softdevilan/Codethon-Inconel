import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  nombreUsuario: string = ''; // Inicializa nombreUsuario como una cadena vacía
  username: string = '';

  private usuarios = [
    { username: 'admin', password: 'admin', nombre: 'Admin' },
    { username: 'angel', password: 'angel', nombre: 'Ángel' },
    { username: 'tristan12', password: 'PlatanoManzana2024.', nombre: 'Tristán'},
    { username: 'hugo', password: 'hugo', nombre: 'Hugo' }
  ];

  login(username: string, password: string) {
    const usuario = this.usuarios.find(user => user.username === username && user.password === password);

    if (usuario) {
      this.isLoggedIn = true; // Actualiza el estado de autenticación a true si las credenciales son correctas
      this.nombreUsuario = usuario.nombre; 
      this.username = usuario.username; // Actualiza el nombre del usuario autenticado
      return usuario.nombre;
      return usuario?.username; // Devuelve el nombre del usuario autenticado
    } else {
      return null;
    }

  }

  logout() {
    this.isLoggedIn = false; // Establece el estado de autenticación a falso al cerrar la sesión
  }

  obtenerNombreUsuario(): string {
    return this.nombreUsuario;
  }

  getUsername(): string {
    return this.username;
  }
}

