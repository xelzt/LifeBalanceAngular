import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMealComponent } from './add-meal/add-meal.component';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ViewRecipesComponent } from './view-recipes/view-recipes.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "add_recipe", component: RecipesComponent},
  {path: "add_meal", component: AddMealComponent},
  {path: "view_recipes", component: ViewRecipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
