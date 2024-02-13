import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGallery]'
})
export class GalleryDirective {

  constructor(private el: ElementRef) { }
  @HostListener('click')
  imageChange(){
    var src:any = this.el.nativeElement.src;
    var  preview:any = document.getElementById('preview');
    var text: any = document.getElementById('text');
    preview.src = src;
    var imageSlide = document.getElementsByClassName('img-slide');
    for(let i=0; i<imageSlide.length; i++){
     imageSlide[i].classList.remove('active');
    }
   this.el.nativeElement.parentElement.classList.add('active');
  }
}
