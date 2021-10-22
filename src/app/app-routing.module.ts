import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { CentroamericaComponent } from "./componentes/centroamerica/centroamerica.component";

const routes:Routes=[
    {
    path: 'componentes/centroamerica/:variable',
    component:CentroamericaComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
