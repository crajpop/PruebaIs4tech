import { Component, OnInit } from '@angular/core';
import { Covid19caService } from '../../services/covid19ca.service';

@Component({
  selector: 'app-nicaragua',
  templateUrl: './nicaragua.component.html',
  styleUrls: ['./nicaragua.component.css']
})
export class NicaraguaComponent implements OnInit {

  public covid:Array<any>=[]
  confirmados:number=0
  fallecidos:number=0
  recuperados:number=0
  fecha:number=0
  
  constructor(private covid19caService:Covid19caService,
    ){
      this.covid19caService.getCovid19().subscribe((resp:any)=>{
        this.confirmados=resp[24].confirmed
        this.fallecidos=resp[24].deaths
        this.recuperados=resp[24].recovered
        this.fecha=resp[24].lastupdate
        this.covid=resp  //asigna a la variable covid de tipo array los datos obtenidos de la API con la variable resp.
        
    })
      
    
  }

  ngOnInit(): void {
  }

}
