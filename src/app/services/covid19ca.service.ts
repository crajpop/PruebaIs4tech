import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class Covid19caService {
  url='https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest'

  constructor(
    private http:HttpClient
  ) { 
    console.log('Servicio covid centroamerica')
  }
  getCovid19(){
    let header =new HttpHeaders()
    .set('Type-content','aplication/json')

    return this.http.get(this.url,{headers:header});


  }  //trae el listado de datos de la API
}
