import {Component, OnInit, ViewEncapsulation} from '@angular/core';
//@ts-ignore
import AOS from 'aos';
import SwiperCore, {FreeMode, Navigation, Thumbs} from "swiper";
import {OwlOptions} from "ngx-owl-carousel-o";

SwiperCore.use([FreeMode,Navigation,Thumbs]);
@Component({
  selector: 'app-torre-del-parque',
  templateUrl: './torre-del-parque.component.html',
  styleUrls: ['./torre-del-parque.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TorreDelParqueComponent implements OnInit {
thumbsSwiper:any;
  constructor() { }

  ngOnInit(): void {
  AOS.init();
  }

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
        items: 1,
        dots: false,
        autoplay:true
      },
      400:{
        items: 1,
        dots: false,
        autoplay:true
      },
      740:{
        items:1.2
      },
    },
    nav: true
  }
}
