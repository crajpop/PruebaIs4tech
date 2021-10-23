import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'; 

@Component({
  selector: 'app-formsuscripcion',
  templateUrl: './formsuscripcion.component.html',
  styleUrls: ['./formsuscripcion.component.css']
})
export class FormsuscripcionComponent implements OnInit {

  profileForm = new FormGroup({
    Nombre: new FormControl(''),
    FechaNac: new FormControl(''),
    Correo: new FormControl(''),
  });
  
  constructor() {
    
   }

  ngOnInit(): void {
  }
  //metodo que envia los valores ingresados en el formulario
  onSubmit() {

    console.warn(this.profileForm.controls['Nombre'].value);
      
    alert('Muchas gracias '+ this.profileForm.controls['Nombre'].value+', por suscribirte a nuestro servicio. Recibirás información al correo '+this.profileForm.controls['Correo'].value);
    //alert('Muchas gracias nombre ingresado' + Nombre);
  }

}
