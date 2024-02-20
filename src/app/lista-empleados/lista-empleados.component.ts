import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import Swal  from 'sweetalert2';

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

  eliminarEmpleado(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Confirma si deseas eliminar al empleado',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimínalo',
      cancelButtonText: 'No, cancelar',
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: true
    }).then((result) => {
      if (result.value) {
        this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
          console.log(dato);
          this.obtenerEmpleados();
          Swal.fire(
            'Empleado eliminado',
            'El empleado ha sido eliminado con éxito',
            'success'
          );
        });
      }
    });
  }

  verDetalles(id:number){
    this.router.navigate(['empleado-detalles', id]);
  }

}
