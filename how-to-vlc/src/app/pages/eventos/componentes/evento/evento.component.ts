import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  @Input() foto!:string;
  @Input() nombre!:string;
  @Input() descripcion!:string;
  constructor(){

  }

  ngOnInit(): void {
    
  }

}
