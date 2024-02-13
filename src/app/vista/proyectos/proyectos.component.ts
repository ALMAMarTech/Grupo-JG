import {Component, OnInit, ViewEncapsulation} from '@angular/core';
// @ts-ignore
import AOS from 'aos';
import SwiperCore, {FreeMode, Navigation, Thumbs} from "swiper";

SwiperCore.use([FreeMode,Navigation,Thumbs]);

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  encapsulation:ViewEncapsulation.None,
})
export class ProyectosComponent implements OnInit {
  thumbsSwiper:any;
  constructor() { }

  ngOnInit(): void {
  AOS.init();
  }

}
