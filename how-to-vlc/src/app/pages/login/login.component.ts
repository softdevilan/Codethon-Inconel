import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

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

  constructor(private authService: AuthService) {}

  login() {
    const nombre = this.authService.login(this.username, this.password);
    if (nombre) {
      
      this.isAuthenticated = true;
      this.nombreUsuario = nombre;
      
    } else {

      console.log('Usuario o contraseña incorrectos.');

    }
  }

}

