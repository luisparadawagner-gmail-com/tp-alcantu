import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Auto } from '../clases/Auto';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {
  @Input() marcaHijo: string;
  @Output() marcaHijoEvento = new EventEmitter<string>();

  marca: string = 'Fiat';
  verAutos: boolean = true;
  modeloAuto: string;

  auto: Auto = {
    marca: 'Volkswagen',
    modelo: 'Gol',
    version: 2001
  };

  auto1: Auto[] = [
    {
      marca: 'Mercedes Benz',
      modelo: 'Clase C C200 Kompressor'
    },
    {
      marca: 'Ford',
      modelo: 'Ka'
    },
    {
      marca: 'Volkswagen',
      modelo: 'Up!'
    }
  ];

  autos: any[] = ['Mercedes Benz', 'Ford', 'Volkswagen'];

  constructor() { 
    this.modeloAuto = 'Seat';
  }

  ngOnInit(): void {
    this.auto.modelo = 'Seat';

		this.getAutos();
  }

  cambioMarca(){
    this.marcaHijoEvento.emit('Renault');
  }

  verAuto(auto: any){
    alert('Auto: ' + auto);
  }

  getAutos(){

  }


}
