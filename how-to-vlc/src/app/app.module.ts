import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecursosComponent } from './pages/recursos/recursos.component';
import { RecursoComponent } from './pages/recursos/componentes/recurso/recurso.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GalleryComponent } from './pages/eventos/componentes/gallery/gallery.component';
import { LocalidadesServicesService } from './services/localidades-services.service';
import { RegisterComponent } from './pages/register/register.component';
import { GradientComponent } from './components/gradient/gradient.component';
import { EventoComponent } from './pages/eventos/componentes/evento/evento.component';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';

const dbConfig: DBConfig = {
  name: 'MyDb',
  version: 1,
  objectStoresMeta: [
    {
      store: 'usuarios',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'nombre_usuario', keypath: 'nombre_usuario', options: { unique: true } },
        { name: 'nombre', keypath: 'nombre', options: { unique: false } },
        { name: 'apellido', keypath: 'apellido', options: { unique: false } },
        { name: 'email', keypath: 'email', options: { unique: false } },
        { name: 'contrasena', keypath: 'contrasena', options: { unique: false } },
        { name: 'fecha_nacimiento', keypath: 'fecha_nacimiento', options: { unique: false } }
      ]
    },
    {
      store: 'eventos_proximos',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'nombre_evento', keypath: 'nombre_evento', options: { unique: true } },
        { name: 'fecha_evento', keypath: 'fecha_evento', options: { unique: false } },
        { name: 'hora_evento', keypath: 'hora_evento', options: { unique: false } },
        { name: 'localizacion_evento', keypath: 'localizacion_evento', options: { unique: false } },
        { name: 'comentarios', keypath: 'comentarios', options: { unique: false } },
        { name: 'organizador', keypath: 'organizador', options: { unique: false } }
      ]
    },
    {
      store: 'imagenes',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'nombre', keypath: 'nombre', options: { unique: true } },
        { name: 'datosImg', keypath: 'datosImg', options: { unique: false } },
      ]
    }
  ]
};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecursosComponent,
    RecursoComponent,
    LoginComponent,
    FooterComponent,
    DashboardComponent,
    EventosComponent,
    PerfilComponent,
    GalleryComponent,
    RegisterComponent,
    GradientComponent,
    EventoComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [LocalidadesServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
