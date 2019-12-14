import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { NgwWowService } from "ngx-wow";
import { Location } from "@angular/common";
import { Router, NavigationEnd } from "@angular/router";
import * as $ from "jquery";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @ViewChild("home", { static: true }) home: ElementRef;
  @ViewChild("veg", { static: true }) vegetarian: ElementRef;
  @ViewChild("ani", { static: true }) animal: ElementRef;
  activatedRoute: any;

  constructor(
    private wowService: NgwWowService,
    private router: Router,
    private location: Location
  ) {
    this.router.events.subscribe(val => {
      // see also
      //console.log(val);
      if (this.location.path() == "/home") {
        $(this.home.nativeElement)
          .addClass("active")
          .siblings()
          .removeClass("active");
      } else if (this.location.path() == "/vegetarian") {
        $(this.vegetarian.nativeElement)
          .addClass("active")
          .siblings()
          .removeClass("active");
      } else if (this.location.path() == "/animal") {
        $(this.animal.nativeElement)
          .addClass("active")
          .siblings()
          .removeClass("active");
      } else {
        $(this.animal.nativeElement)
          .siblings()
          .removeClass("active");
      }
    });
  }

  ngOnInit() {
    this.wowService.init();
  }
}
