import { Component, OnInit, ViewChild } from '@angular/core';
import { Covid19caService } from '../../services/covid19ca.service';
import { Chart } from 'chart.js';
import { __values } from 'tslib';
declare var jQuery:any;
declare var $:any;
import { NgbModal }from '@ng-bootstrap/ng-bootstrap';
import { GuatemalaComponent } from '../guatemala/guatemala.component';
import { BeliceComponent } from '../belice/belice.component';
import { CostaricaComponent } from '../costarica/costarica.component';
import { ElsalvadorComponent } from '../elsalvador/elsalvador.component';
import { HondurasComponent } from '../honduras/honduras.component';
import { NicaraguaComponent } from '../nicaragua/nicaragua.component';
import { PanamaComponent } from '../panama/panama.component';

@Component({
  selector: 'app-centroamerica',
  templateUrl: './centroamerica.component.html',
  styleUrls: ['./centroamerica.component.css']
})
export class CentroamericaComponent implements OnInit {
  public covid:Array<any>=[]
  confirmados:number=0
  fallecidos:number=0
  recuperados:number=0
  
  constructor(private covid19caService:Covid19caService, private modalService:NgbModal
    ){
      this.covid19caService.getCovid19().subscribe((resp:any)=>{
        
        this.covid=resp  //asigna a la variable covid de tipo array los datos obtenidos de la API con la variable resp.
        console.log(resp)
    })
      
    
  }

  public mostrarBelice(){
    //$('#belice').slideToggle();
    const modal=this.modalService.open(BeliceComponent);
  }

  public mostrarCostarica(){
    //$('#belice').slideToggle();
    const modal=this.modalService.open(CostaricaComponent);
  }

  public mostrarElsalvador(){
    //$('#belice').slideToggle();
    const modal=this.modalService.open(ElsalvadorComponent);
  }

  public mostrarGuatemala(){
    //$('#belice').slideToggle();
    const modal=this.modalService.open(GuatemalaComponent);
  }

  public mostrarHonduras(){
    //$('#belice').slideToggle();
    const modal=this.modalService.open(HondurasComponent);
  }

  public mostrarNicaragua(){
    //$('#belice').slideToggle();
    const modal=this.modalService.open(NicaraguaComponent);
  }

  public mostrarPanama(){
    //$('#belice').slideToggle();
    const modal=this.modalService.open(PanamaComponent);
  }

  ngOnInit(){

  }

    //codigo para la grafica
canvas: any;
ctx: any;
@ViewChild('mychart') mychart:any;

canvas1: any;
ctx1: any;
@ViewChild('mychart1') mychart1:any;

canvas2: any;
ctx2: any;
@ViewChild('mychart2') mychart2:any;

canvas3: any;
ctx3: any;
@ViewChild('mychart3') mychart3:any;

canvas4: any;
ctx4: any;
@ViewChild('mychart4') mychart4:any;

canvas5: any;
ctx5: any;
@ViewChild('mychart5') mychart5:any;

canvas6: any;
ctx6: any;
@ViewChild('mychart6') mychart6:any;
ngAfterViewInit() {
  this.covid19caService.getCovid19().subscribe((resp:any)=>{  
    this.confirmados=resp.confirmed
    this.fallecidos=resp.deaths
    this.recuperados=resp.recovered
 
  
  this.canvas = this.mychart.nativeElement; 
  this.ctx = this.canvas.getContext('2d');
  
  new Chart(this.ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Belice',
            data: [resp[24].confirmed, resp[24].deaths, resp[24].recovered],
            backgroundColor: "#050BC1",
            borderColor: "#007ee7",
            fill: true,
        
        }],
        labels: ['Confirmados', 'Fallecidos', 'Recuperados']
    },
      options: {
        onClick(){
          //alert('Datos: Belice\n'+'Confirmados: '+resp[24].confirmed +'\nFallecidos: '+resp[24].deaths+'\nRecuperados: '+resp[24].recovered+'\nFecha: '+resp[24].lastupdate);
        }
      }  
});


//segundo grafico
this.canvas1 = this.mychart1.nativeElement; 
this.ctx1 = this.canvas1.getContext('2d');

new Chart(this.ctx1, {
  type: 'line',
  data: {
      datasets: [{
          label: 'Costa Rica',
          data: [resp[96].confirmed, resp[96].deaths, resp[96].recovered],
          backgroundColor: "#EA0C08",
          borderColor: "#007ee7",
          fill: true,
      
      }],
      labels: ['Confirmados', 'Fallecidos', 'Recuperados']
  },
    options: {
      onClick(){
        
      }
    }  
});

//tercer grafico

this.canvas2 = this.mychart2.nativeElement; 
this.ctx2 = this.canvas2.getContext('2d');

new Chart(this.ctx2, {
  type: 'pie',
  data: {
      datasets: [{
          label: 'El Salvador',
          data: [resp[110].confirmed, resp[110].deaths, resp[110].recovered],
          backgroundColor: "#E7F606",
          borderColor: "#007ee7",
          fill: true,
      
      }],
      labels: ['Confirmados', 'Fallecidos', 'Recuperados']
  },
    options: {
      onClick(){
        
      }
    }  
});

//cuarto grafico

this.canvas3 = this.mychart3.nativeElement; 
this.ctx3 = this.canvas3.getContext('2d');

new Chart(this.ctx3, {
  type: 'line',
  data: {
      datasets: [{
          label: 'Guatemala',
          data: [resp[137].confirmed, resp[137].deaths, resp[137].recovered],
          backgroundColor: "#F6067A",
          borderColor: "#007ee7",
          fill: true,
      
      }],
      labels: ['Confirmados', 'Fallecidos', 'Recuperados']
  },
    options: {
      onClick(){
        
      }
    }  
});

//quinto grafico

this.canvas4 = this.mychart4.nativeElement; 
this.ctx4 = this.canvas4.getContext('2d');

new Chart(this.ctx4, {
  type: 'pie',
  data: {
      datasets: [{
          label: 'Honduras',
          data: [resp[143].confirmed, resp[143].deaths, resp[143].recovered],
          backgroundColor: "#4CF00F",
          borderColor: "#007ee7",
          fill: true,
      
      }],
      labels: ['Confirmados', 'Fallecidos', 'Recuperados']
  },
    options: {
      onClick(){
        
      }
    }  
});

// sexto grafico

this.canvas5 = this.mychart5.nativeElement; 
this.ctx5 = this.canvas5.getContext('2d');

new Chart(this.ctx5, {
  type: 'bar',
  data: {
      datasets: [{
          label: 'Nicaragua',
          data: [resp[199].confirmed, resp[199].deaths, resp[199].recovered],
          backgroundColor: "#08F6EB",
          borderColor: "#007ee7",
          fill: true,
      
      }],
      labels: ['Confirmados', 'Fallecidos', 'Recuperados']
  },
    options: {
      onClick(){
        
      }
    }  
});

//septimo grafico

this.canvas6 = this.mychart6.nativeElement; 
this.ctx6 = this.canvas6.getContext('2d');

new Chart(this.ctx6, {
  type: 'pie',
  data: {
      datasets: [{
          label: 'Panama',
          data: [resp[207].confirmed, resp[207].deaths, resp[207].recovered],
          backgroundColor: "#F87F07",
          borderColor: "#007ee7",
          fill: true,
      
      }],
      labels: ['Confirmados', 'Fallecidos', 'Recuperados']
  },
    options: {
      onClick(){
        
      }
    }  
});

})
}


}
