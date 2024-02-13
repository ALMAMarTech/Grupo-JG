import {Component, OnInit, ViewEncapsulation} from '@angular/core';
//@ts-ignore
import AOS from 'aos';
import SwiperCore, {FreeMode, Navigation, Thumbs} from "swiper";
import {OwlOptions} from "ngx-owl-carousel-o";
SwiperCore.use([FreeMode,Navigation,Thumbs]);
@Component({
  selector: 'app-privada-san-angel',
  templateUrl: './privada-san-angel.component.html',
  styleUrls: ['./privada-san-angel.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PrivadaSanAngelComponent implements OnInit {
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

}
