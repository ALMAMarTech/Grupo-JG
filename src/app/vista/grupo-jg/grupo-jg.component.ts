import { Component, OnInit } from '@angular/core';
//@ts-ignore
import AOS from 'aos';
import {ModalService} from "../modal/modal.service";
@Component({
  selector: 'app-grupo-jg',
  templateUrl: './grupo-jg.component.html',
  styleUrls: ['./grupo-jg.component.css']
})
export class GrupoJGComponent implements OnInit {

  constructor(private modalService:ModalService) { }

  ngOnInit(): void {
    AOS.init();
  }
 abrirModal2(){
    this.modalService.abrirModal2();
 }
}
