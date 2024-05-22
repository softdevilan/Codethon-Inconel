import { Component, OnInit } from '@angular/core';
import { LocalidadesServicesService } from 'src/app/services/localidades-services.service';
import { AuthService } from '../../services/auth.service';
import { GalleryComponent } from '../eventos/componentes/gallery/gallery.component';

interface Evento {
  nombreEvento: string;
  fechaHora: string;
  ubicacion: string;
  comentarios: string;
  photo: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isAuthenticated = false;
  nombreUsuario = '';
  localidades: any[] = [];
  fotosEventos = new GalleryComponent; //Instancia del componente GalleryComponent para acceder al array de imagenes

  eventos: Evento[] = [];

  newEvento: Evento = {
    nombreEvento: '',
    fechaHora: '',
    ubicacion: '',
    comentarios: '',
    photo: ''
  };

  constructor(private authService: AuthService, private localidadesService: LocalidadesServicesService) { }

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

  onSubmit() {
    // Guardar el evento en el array
    this.eventos.push({ ...this.newEvento });

    // Limpiar el formulario
    this.newEvento = {
      nombreEvento: '',
      fechaHora: '',
      ubicacion: '',
      comentarios: '',
      photo: ''
    };

    console.log(this.eventos);
  }

  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.newEvento.photo = reader.result as string;
      };
    }
  }
}
