import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  
  constructor(private http: HttpClient) {   }

  getcatalog(){
    return this.http.get('http://127.0.0.1:8000/static/mendb');
  }
}
