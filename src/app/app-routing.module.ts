import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AntequeraComponent} from "./vista/home/antequera.component";
import {ConoceComponent} from "./vista/conoce/conoce.component";
import {ConstructoraComponent} from "./vista/constructora/constructora.component";
import {ContactoComponent} from "./vista/contacto/contacto.component";
import {PrivadaSanAngelComponent} from "./vista/privada-san-angel/privada-san-angel.component";
import {TorreDelParqueComponent} from "./vista/torre-del-parque/torre-del-parque.component";
import {GrupoJGComponent} from "./vista/grupo-jg/grupo-jg.component";
import {ConoceJGComponent} from "./vista/conoce-jg/conoce-jg.component";
import {Proyecto4Component} from "./vista/proyecto4/proyecto4.component";
import {ProyectosComponent} from "./vista/proyectos/proyectos.component";

const routes: Routes = [
  {path: '', redirectTo: 'grupo-jg', pathMatch: 'full'},
  {path: 'antequera', component: AntequeraComponent, data:{title: 'Antequera'}},
  {path: 'conoce', component: ConoceComponent, data:{title: 'Conoce Antequera'}},
  {path: 'constructora', component: ConstructoraComponent, data:{title: 'Constructora'}},
  {path: 'proyectos', component: ProyectosComponent, data: {title: 'Proyectos'}},
  {path: 'contacto', component: ContactoComponent, data:{title: 'Contactanos'}},
  {path: 'privada-san-angel', component: PrivadaSanAngelComponent, data:{title: 'Privada San Angel'}},
  {path: 'torre-del-parque', component: TorreDelParqueComponent, data:{title: 'Torre del parque'}},
  {path: 'grupo-jg', component: GrupoJGComponent, data:{title: 'Grupo JG'}},
  {path: 'conoce-jg', component: ConoceJGComponent, data:{title: 'Conoce JG'}},
  {path: 'carranco-vertical', component: Proyecto4Component, data:{title: 'Carranco Vertical'}},
  {path: '**', redirectTo: 'grupo-jg', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const  routingComponents =[AntequeraComponent,Proyecto4Component,ProyectosComponent,ConoceJGComponent, ConoceComponent, ConstructoraComponent, ContactoComponent, PrivadaSanAngelComponent, TorreDelParqueComponent, GrupoJGComponent];
