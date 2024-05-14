import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  isAuthenticated = false;
  nombreUsuario = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const nombre = this.authService.login(this.username, this.password);
    if (nombre) {
      // Actualiza el estado de autenticación y redirige al usuario al dashboard
      this.authService.isLoggedIn = true;
      this.router.navigate(['/dashboard']); // Redirige al dashboard
    } else {
      console.log('Usuario o contraseña incorrectos.');
    }
  }

}

