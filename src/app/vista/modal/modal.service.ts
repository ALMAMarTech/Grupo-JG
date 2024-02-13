import {EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
public modal = false;
public modal2 = false;
  constructor() { }

  private _abrirModal = new EventEmitter<any>();
  get abrirModalEvent():EventEmitter<any>{
  return  this._abrirModal;
  }
set abrirModalEvent(value:EventEmitter<any>){
    this._abrirModal = value;
}
  abrirModal(){
 this.modal = true;
this.abrirModalEvent.emit(true);
  }
  cerrarModal(){
    this.modal = false;
  }
  /*segundo modal*/
  private _abrirModal2 = new EventEmitter<any>();
  get abrirModalEvent2():EventEmitter<any>{
    return  this._abrirModal2;
  }
  set abrirModalEvent2(value:EventEmitter<any>){
    this._abrirModal2 = value;
  }
  abrirModal2(){
    this.modal2 = true;
    this.abrirModalEvent.emit(true);
  }
  cerrarModal2(){
    this.modal2 = false;
  }

}
