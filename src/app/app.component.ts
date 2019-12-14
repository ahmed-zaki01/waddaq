import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from "jquery";
import * as R from "../assets/script/rainyday.min.js";
import { HeaderComponent } from './inc/header/header.component.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'waddaq-app';
  
  ngOnInit() {
 /*    let imgContainer = $('#img-container');
    new R({
      image: imgContainer
    }) */
  }
}
