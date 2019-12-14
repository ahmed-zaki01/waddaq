import { Component, OnInit } from "@angular/core";
import { NgwWowService } from "ngx-wow";

import { HeaderComponent } from '../inc/header/header.component';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

  //@ViewChild(HeaderComponent, { read: ElementRef }) private headerElementRef: ElementRef;

  constructor(private wowService: NgwWowService) {}

  ngOnInit() {
    this.wowService.init();
  }


  isClicked(el: HTMLElement) {
    $(el)
      .addClass("active")
      .siblings()
      .removeClass("active");
  }
}
