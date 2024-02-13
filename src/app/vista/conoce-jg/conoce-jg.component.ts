import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
// @ts-ignore
import AOS from 'aos';
import SwiperCore,{FreeMode,Navigation,Thumbs} from "swiper";
SwiperCore.use([FreeMode,Navigation,Thumbs]);
import {SwiperComponent} from "swiper/angular";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-conoce-jg',
  templateUrl: './conoce-jg.component.html',
  styleUrls: ['./conoce-jg.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ConoceJGComponent implements OnInit {
  thumbsSwiper:any;
  customOptions: OwlOptions={
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
  customOption: OwlOptions={
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fas fa-arrow-left mx-4 mt-3"></i>','<i class="fas fa-arrow-right mt-3"></i>'],
    responsive:{
      0:{
        items:1
      },
      400:{
        items:1
      },
      740:{
        items:1
      }
    },
    nav:true
  }
  constructor() { }

  ngOnInit(): void {
  AOS.init();
  }

}
