import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.scss']
})
export class ListaEmpleadosComponent implements OnInit{

  empleados : Empleado[];

  constructor(private empleadoServicio : EmpleadoService, private router:Router){}

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  private obtenerEmpleados(){
    this.empleadoServicio.obtenerListaEmpleado().subscribe(data =>{
      this.empleados = data;
    });
  }

  actualizarEmpleado(id:number){
    this.router.navigate(["actualizar-empleado", id]);
  }

  eliminarEmpleado(id:number){
    this.empleadoServicio.eliminarEmpleado(id).subscribe(dato =>{
      console.log(dato);
      this.obtenerEmpleados();
    })
  }

  verDetalles(id:number){
    this.router.navigate(['empleado-detalles', id]);
  }

}
