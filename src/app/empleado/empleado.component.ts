import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']

})
export class EmpleadoComponent implements OnInit {

  nombre = "Juan";
  apellido = "Perez";
  edad = 18;
  // empresa = "Cuos";
  cuadroHabilitado=false;
  

  constructor() { }

  ngOnInit(): void {
  }

}
