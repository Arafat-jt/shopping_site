import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  
  constructor(private http: HttpClient) {   }

  getcatalog(){
    return this.http.get('https://www.autonise.com/api/users/getCatalog');
  }
}
