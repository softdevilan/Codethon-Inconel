import { Component, OnInit, OnDestroy, Renderer2, ElementRef } from '@angular/core';
import { DataService } from './services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'how-to-vlc';
  private intervalId: any;
  users: any[] = [];
  newUser: string = '';

  constructor(
    private renderer: Renderer2,
    private elRef: ElementRef,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    // Inicializa la carga de usuarios
    this.loadUsers();

    // Añadir el degradado al estilo global
    this.intervalId = setInterval(() => {
      const gradientEl = this.elRef.nativeElement;
      const gradient = document.querySelector('#gradient');

      if (!gradient) {
        // Si el elemento #gradient no existe, es posible que aún no se haya cargado el componente de degradado.
        return;
      }

      const computedStyle = window.getComputedStyle(gradient);
      this.renderer.setStyle(
        gradientEl,
        'background',
        computedStyle.background
      );
    }, 10);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  loadUsers(): void {
    this.dataService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  addUser(): void {
    if (this.newUser.trim()) {
      this.dataService.addUser(this.newUser).subscribe(() => {
        this.loadUsers();
        this.newUser = '';
      });
    }
  }
}