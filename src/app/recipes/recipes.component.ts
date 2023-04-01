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

  recipes_types: any[] = [
    {value: 'breakfast', viewValue: 'śniadanie'},
    {value: 'dinner', viewValue: 'obiad'},
    {value: 'supper', viewValue: 'kolacja'},
  ];

  recipeForm = this.fb.group({
    recipeName: ['', [Validators.required, Validators.minLength(3)]],
    recipeType: [this.recipes_types, Validators.required],
    portionsAmount: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.max(50)]],
    ingredients: this.fb.array([this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      amount: ["", [Validators.required, , Validators.pattern("^[0-9]*$")]],
      unit: [this.units, Validators.required],
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

}
