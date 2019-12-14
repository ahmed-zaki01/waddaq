import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { VegeterianComponent } from "./food-types/vegeterian/vegeterian.component";
import { AnimalComponent } from "./food-types/animal/animal.component";
import { FoodComponent } from "./food-types/food/food.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "vegetarian", component: VegeterianComponent },
  { path: "animal", component: AnimalComponent },
  { path: "vegetarian/:id", component: FoodComponent },
  { path: "animal/:id", component: FoodComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
