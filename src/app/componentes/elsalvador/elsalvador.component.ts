import { Component, OnInit } from '@angular/core';
import { Covid19caService } from '../../services/covid19ca.service';

@Component({
  selector: 'app-elsalvador',
  templateUrl: './elsalvador.component.html',
  styleUrls: ['./elsalvador.component.css']
})
export class ElsalvadorComponent implements OnInit {

  public covid:Array<any>=[]
  confirmados:number=0
  fallecidos:number=0
  recuperados:number=0
  fecha:number=0
  
  constructor(private covid19caService:Covid19caService,
    ){
      this.covid19caService.getCovid19().subscribe((resp:any)=>{
        this.confirmados=resp[110].confirmed
        this.fallecidos=resp[110].deaths
        this.recuperados=resp[110].recovered
        this.fecha=resp[110].lastupdate
        this.covid=resp  //asigna a la variable covid de tipo array los datos obtenidos de la API con la variable resp.
        
    })
      
    
  }

  ngOnInit(): void {
  }

}
