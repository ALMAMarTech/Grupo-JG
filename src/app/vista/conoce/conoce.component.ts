import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
// @ts-ignore
import AOS from 'aos';
import SwiperCore,{FreeMode,Navigation,Thumbs} from "swiper";
SwiperCore.use([FreeMode,Navigation,Thumbs]);
import {SwiperComponent} from "swiper/angular";
import {OwlOptions} from "ngx-owl-carousel-o";
@Component({
  selector: 'app-conoce',
  templateUrl: './conoce.component.html',
  styleUrls: ['./conoce.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ConoceComponent implements OnInit {
  thumbsSwiper:any;
  constructor() { }
 customOption: OwlOptions={
    loop: true,
   mouseDrag: true,
   touchDrag: true,
   pullDrag: true,
   dots: true,
   dotsEach: true,
   navSpeed: 700,
   navText: ['<i class="fas fa-arrow-left mx-4 mt-3"></i>','<i class="fas fa-arrow-right mt-3"></i>'],
   responsive:{
      0:{
        items: 1
      },
     400:{
        items: 1.2
     },
     740:{
        items:1.2
     },
   },
   nav: true
 }
  ngOnInit(): void {
    AOS.init();
  }

}
