import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-view-recipes',
  templateUrl: './view-recipes.component.html',
  styleUrls: ['./view-recipes.component.css']
})
export class ViewRecipesComponent {

  recipes: any;

  constructor (private http:HttpClient) {}

  ngOnInit(): void {
    this.http.get("http://localhost:3000/get_recipes").subscribe((data) => {
      this.recipes = data
    });
  }

}
