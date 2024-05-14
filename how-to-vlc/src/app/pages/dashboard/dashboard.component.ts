import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import { GalleryComponent } from '../eventos/componentes/gallery/gallery.component';
import { LocalidadesServicesService } from 'src/app/services/localidades-services.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  isAuthenticated = false;
  nombreUsuario = '';
  localidades: any[] = [];

  constructor(private authService: AuthService, private localidadesService: LocalidadesServicesService) { }

  fotosEventos = new GalleryComponent; //Instancia del componente GalleryComponent para acceder al array de imagenes
  
  ngOnInit(): void {
    this.isAuthenticated = this.authService.isLoggedIn;

    // Verifica si el usuario está autenticado antes de asignar el nombre de usuario
    if (this.isAuthenticated) {
      this.nombreUsuario = this.authService.obtenerNombreUsuario(); // Obtén el nombre de usuario desde AuthService
    }

    // Llama al servicio para obtener las localidades
    this.localidadesService.obtenerLocalidades().subscribe((response: any) => {
      this.localidades = response.data;
    });
  }

}
