import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit {

  marcaPadre: string = 'Tesla';
  otraMarcaPadre: string;

  constructor() { }

  ngOnInit(): void {
  }

  onCambioMarca(marcaNueva){
    this.otraMarcaPadre = marcaNueva;
  }

}
