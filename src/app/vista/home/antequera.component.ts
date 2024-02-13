import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Title} from "@angular/platform-browser";
//@ts-ignore
import AOS from 'aos';
import SwiperCore, {FreeMode, Navigation, Thumbs} from "swiper";
import {OwlOptions} from "ngx-owl-carousel-o";
import {ModalService} from "../modal/modal.service";

SwiperCore.use([FreeMode,Navigation,Thumbs]);

@Component({
  selector: 'app-home',
  templateUrl: './antequera.component.html',
  styleUrls: ['./antequera.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class AntequeraComponent implements OnInit {
  thumbsSwiper:any;
  constructor( private  title: Title, private modalService:ModalService) { }
  ngOnInit(): void {
    this.title.setTitle('Antequera');
    AOS.init();
  }
  abrirModal(){
    this.modalService.abrirModal();
  }
  abrirModal2(){
    this.modalService.abrirModal2();
  }

  custom: OwlOptions={
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
        autoplay: true
      },
      740:{
        items:1
      },
    },
    nav: true
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
        autoplay: true
      },
      740:{
        items:1.2
      },
    },
    nav: true
  }
}
