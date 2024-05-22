import { Component } from '@angular/core';
 
interface Usuario {
  nombre: string;
  apellido: string;
  email: string;
  nombre_usuario: string;
  contrasena: string;
  fecha_nacimiento: string;
}
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  usuario: Usuario = {
    nombre: '',
    apellido: '',
    email: '',
    nombre_usuario: '',
    contrasena: '',
    fecha_nacimiento: ''
  };
 
  usuarios: Usuario[] = []; // Array para almacenar los usuarios registrados
 
  onSubmit() {
    // Aquí puedes realizar cualquier lógica de envío o manejo de datos que necesites
    console.log('Usuario:', this.usuario);
 
    // Agregar el usuario actual al array de usuarios
    this.usuarios.push(this.usuario);
 
    // Limpia los campos después del envío
    this.usuario = {
      nombre: '',
      apellido: '',
      email: '',
      nombre_usuario: '',
      contrasena: '',
      fecha_nacimiento: ''
    };
  }
}