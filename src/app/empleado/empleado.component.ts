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
  empresa = "";
  cuadroHabilitado=false;
  

  constructor() { }

  ngOnInit(): void {
  }

  mostrarEmpresa(empresa: any, event: Event) {
    if ((<HTMLInputElement>event.target).value == "habilitado") {
      this.empresa = empresa
      alert(this.empresa)
    }

  }

  
}
