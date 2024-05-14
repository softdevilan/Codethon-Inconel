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
    FormsModule
  ],
  providers: [LocalidadesServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
