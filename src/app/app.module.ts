import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { NgwWowModule } from "ngx-wow";
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HeaderComponent } from "./inc/header/header.component";
import { FooterComponent } from "./inc/footer/footer.component";
import { AnimalComponent } from "./food-types/animal/animal.component";
import { VegeterianComponent } from "./food-types/vegeterian/vegeterian.component";
import { FoodComponent } from "./food-types/food/food.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    AnimalComponent,
    VegeterianComponent,
    FoodComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgwWowModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
