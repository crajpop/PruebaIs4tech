import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CentroamericaComponent } from './componentes/centroamerica/centroamerica.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { GuatemalaComponent } from './componentes/guatemala/guatemala.component';
import { BeliceComponent } from './componentes/belice/belice.component';
import { CostaricaComponent } from './componentes/costarica/costarica.component';
import { ElsalvadorComponent } from './componentes/elsalvador/elsalvador.component';
import { HondurasComponent } from './componentes/honduras/honduras.component';
import { NicaraguaComponent } from './componentes/nicaragua/nicaragua.component';
import { PanamaComponent } from './componentes/panama/panama.component';
import { FormsuscripcionComponent } from './componentes/formsuscripcion/formsuscripcion.component';


@NgModule({
  
  declarations: [
    AppComponent,
    CentroamericaComponent,
    GuatemalaComponent,
    BeliceComponent,
    CostaricaComponent,
    ElsalvadorComponent,
    HondurasComponent,
    NicaraguaComponent,
    PanamaComponent,
    FormsuscripcionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, FormsModule, NgbModule, ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[CentroamericaComponent]
})
export class AppModule { }
