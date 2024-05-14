import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  evento1={
    foto:'https://grupomemorable.com/wp-content/uploads/2023/06/JV_SOFOCCO_10JULIO.jpg',
    nombre:'Pirulo',
    descripcion:'Evento ubicado en benicalap en el cual se va a festejar el aniversario de melendi'
  }
}
