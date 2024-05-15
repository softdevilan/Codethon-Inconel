import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import { GalleryComponent } from '../eventos/componentes/gallery/gallery.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent {
  fotosEventos = new GalleryComponent;

  isAuthenticated = false;
  username = '';
  nombreUsuario = '';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isLoggedIn;

    // Verifica si el usuario está autenticado antes de asignar el nombre de usuario
    if (this.isAuthenticated) {
      this.username = this.authService.getUsername();
      this.nombreUsuario = this.authService.obtenerNombreUsuario();
    }
    
  };
}


