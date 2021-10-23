import { Component, OnInit, ViewChild } from '@angular/core';
import { Covid19Service } from './services/covid19.service';
import { Chart } from 'chart.js';
import { __values } from 'tslib';
import { NgbModal }from '@ng-bootstrap/ng-bootstrap';
import { CentroamericaComponent } from './componentes/centroamerica/centroamerica.component';
import { RouterModule } from '@angular/router';
import { FormsuscripcionComponent } from './componentes/formsuscripcion/formsuscripcion.component';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PruebaIs4tech';

  public covid:Array<any>=[]
  confirmados:number=0
  fallecidos:number=0
  recuperados:number=0
  

  constructor(private covid19Service:Covid19Service, private modalService:NgbModal  
    ){
      this.covid19Service.getCovid19().subscribe((resp:any)=>{
        
        this.covid=resp  //asigna a la variable covid de tipo array los datos obtenidos de la API con la variable resp.
        
      })
      
    
  }
  Formulario(){
    const modal=this.modalService.open(FormsuscripcionComponent);   
  }



  public mostrarCentroamerica(){
    $('.centroA').slideToggle(); //ocultar y mostrar las graficas de los paises de centro america
  }

  ngOnInit(){
    
  }

  //codigo para la grafica
canvas: any;
ctx: any;
@ViewChild('mychart') mychart:any;

ngAfterViewInit() {
  this.covid19Service.getCovid19().subscribe((resp:any)=>{  
    this.confirmados=resp.confirmed
    this.fallecidos=resp.deaths
    this.recuperados=resp.recovered
 
  
  this.canvas = this.mychart.nativeElement; 
  this.ctx = this.canvas.getContext('2d');

  new Chart(this.ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Datos a nivel mundial',
            data: [this.confirmados, this.fallecidos, this.recuperados],
            backgroundColor: "rgb(115 185 243 / 65%)",
            borderColor: "#007ee7",
            fill: true,
        }],
        labels: ['Confirmados', 'Fallecidos', 'Recuperados']
    },
});
})
}

}


