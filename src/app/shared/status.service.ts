import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private statusUrl = 'localhost:3000/api/status';

  constructor(private http: HttpClient) { }

  // Get the status
  getStatus() {
    console.log(this.http.get(this.statusUrl).subscribe(data => console.log(data)));
    return this.http.get(this.statusUrl); 
  }

}