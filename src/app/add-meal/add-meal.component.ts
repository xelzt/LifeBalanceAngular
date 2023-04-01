import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent {

  mealForm = this.fb.group({
    mealName: ['', Validators.required],
    mealDate: ['', Validators.required],
    mealHour: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  onSubmit() {
    const data = {
      mealName: this.mealForm.value.mealName,
      mealDate: this.mealForm.value.mealDate,
      mealHour: this.mealForm.value.mealHour
    };
    this.http.post('/form', data).subscribe((response) => {
      console.log(response);
      console.log("XDDDD")
    });
  }

}
