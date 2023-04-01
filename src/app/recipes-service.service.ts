import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesServiceService {

  recipes: any;

  constructor(private http: HttpClient) { }

  getRecipes()
  {
    console.log("XD")
    // this.http.get("http://localhost:3000/get_recipes").subscribe( response => {
    //   this.recipes = response;
    // })
    // console.log(this.recipes)
    // return this.recipes;
  }
}
