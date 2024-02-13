import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './cabeceras/menu/menu.component';
import { FooterComponent } from './cabeceras/footer/footer.component';
import { AntequeraComponent } from './vista/home/antequera.component';
import { ConoceComponent } from './vista/conoce/conoce.component';
import { ConstructoraComponent } from './vista/constructora/constructora.component';
import { ContactoComponent } from './vista/contacto/contacto.component';
import { PrivadaSanAngelComponent } from './vista/privada-san-angel/privada-san-angel.component';
import { TorreDelParqueComponent } from './vista/torre-del-parque/torre-del-parque.component';
import { GalleryDirective } from './vista/home/gallery.directive';
import {SwiperModule} from "swiper/angular";
import {CarouselModule} from "ngx-owl-carousel-o";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GrupoJGComponent} from "./vista/grupo-jg/grupo-jg.component";
import { ConoceJGComponent } from './vista/conoce-jg/conoce-jg.component';
import { Proyecto4Component } from './vista/proyecto4/proyecto4.component';
import { ProyectosComponent } from './vista/proyectos/proyectos.component';
import { ModalComponent } from './vista/modal/modal.component';
import { ModalWComponent } from './vista/home/vista/modal-w/modal-w.component';
import { Modal2Component } from './vista/modal2/modal2.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    AntequeraComponent,
    routingComponents,
    ConoceComponent,
    ConstructoraComponent,
    ContactoComponent,
    PrivadaSanAngelComponent,
    TorreDelParqueComponent,
    GalleryDirective,
    GrupoJGComponent,
    ConoceJGComponent,AntequeraComponent, Proyecto4Component, ProyectosComponent, ModalComponent, ModalWComponent, Modal2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
