import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusService } from './shared/status.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LifeBalancer';
  stat: any = "DOWN";
  data: any;

  constructor(private router:Router, private http: HttpClient){}

  goToPage(pageName: string)
  {
    this.router.navigate([`${pageName}`]);
  }

  getStatusOfPage()
  {
    const data = {
      name: "John",
      age: "Doe",
      email: "John.Doe@gmail.com"
    };
    this.http.post('http://localhost:3000/add_new_recipe', data).subscribe(response => {
      console.log(response);
    });
  }


  }
