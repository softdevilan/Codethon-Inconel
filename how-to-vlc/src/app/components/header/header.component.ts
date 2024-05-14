import { LoginComponent } from './../../pages/login/login.component';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headerVisible: boolean = true;
  
  constructor(private authService: AuthService) { }

  get isAuthenticated(): boolean {
    return this.authService.isLoggedIn; // Obtén el estado de autenticación actualizado del servicio AuthService
  }
  logout(): void {
    this.authService.logout(); // Cierra la sesión llamando al método logout() del servicio AuthService
    window.location.reload(); // Recarga la página actual para reflejar los cambios en la autenticación
  }

  toggleHeaderVisibility(): void {
    this.headerVisible = !this.headerVisible;
  }
}
