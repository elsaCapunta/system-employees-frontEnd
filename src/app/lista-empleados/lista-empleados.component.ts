import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.scss']
})
export class ListaEmpleadosComponent implements OnInit{

  empleados : Empleado[];

  constructor(){}

  ngOnInit(): void {
    this.empleados = [{
      "id": 1,
      "nombre":"elsa",
      "apellido":"capunta",
      "email": "algo@algo.com"
    },
    {
      "id": 2,
      "nombre":"elvis",
      "apellido":"tek",
      "email": "elvis @algo.com"
    }]
  }

}
