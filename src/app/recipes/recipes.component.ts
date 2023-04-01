import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent{
  
  units: any[] = [
    {value: 'g', viewValue: 'g'},
    {value: 'kg', viewValue: 'kg'},
    {value: 'ml', viewValue: 'ml'},
    {value: 'l', viewValue: 'l'},
    {value: 'szt', viewValue: 'szt'},
  ];

  recipes: any;

  recipeForm = this.fb.group({
    recipeName: ['', Validators.required],
    recipeType: ['', Validators.required],
    portionsAmount: ['', Validators.required],
    ingredients: this.fb.array([this.fb.group({
      name: ["", Validators.required],
      amount: ["", Validators.required],
      unit: ["", Validators.required],
    })]),
    steps: this.fb.array([this.fb.group({
      description: ["", Validators.required]
    })])
  });

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/get_data/recipe").subscribe( resp => {
      this.recipes = resp;
    })
  }

  onSubmit(data: any) {
    // for (let i = 0; i < this.recipeForm.get('ingredients')!.value.length; i++) {
    //   const ingredient = this.recipeForm.get('ingredients')!.value.at(i);
    //   console.log(ingredient?.name);
    // }
    // this.http.post("/form", this.recipeForm);
    this.http.post('http://localhost:3000/add_new_recipe', data).subscribe(response => {
      console.log(response);
    });

  }

  get ingredients() {
    return this.recipeForm.get("ingredients") as FormArray;
  }

  addIngredient() {
    this.ingredients.push(this.fb.group({
      name: ["", Validators.required],
      amount: ["", Validators.required],
      unit: ["", Validators.required],
    }));
  }

  deleteIngredient(ingredientIndex: number) {
    this.ingredients.removeAt(ingredientIndex);
  }

  get steps() {
    return this.recipeForm.get("steps") as FormArray;
  }

  addStep() {
    this.steps.push(this.fb.group({
      description: ["", Validators.required]
    }));
  }

  deleteStep(stepIndex: number) {
    this.steps.removeAt(stepIndex);
  }

  checkIfRecipeIsAlreadyInDatabase(){
    
  }

}
