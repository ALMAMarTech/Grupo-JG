import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }
  public title: String ="";
  ngOnInit(): void {
  }
  //@ts-ignore
  change(){
    if(this.router.url.includes('antequera')){
      this.title = "Antequera";
      return true;
    }
    if(this.router.url.includes('privada-san-angel')){
      this.title = "Privada San Angel";
      return true;
    }
    if(this.router.url.includes('torre-del-parque')){
      this.title = "Torre del parque";
      return true;
    }
    if(this.router.url.includes('carranco-vertical')){
      this.title = "Carranco vertical";
      return true;
    }
  }
}
