import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';


@Component({
  selector: 'app-jackets',
  templateUrl: './jackets.page.html',
  styleUrls: ['./jackets.page.scss'],
})
export class JacketsPage implements OnInit {

  public jacketsCatalog = [];

  constructor(private http: HttpClient) {
    http.get("http://127.0.0.1:8000/jacketsdb/").subscribe((res:any) =>{
        console.log(res);
        for (let i of res.catalog) {
          this.jacketsCatalog.push({
            title: i.name,
            color: i.color,
            size: i.Size,
            Cost: i.Cost,
            imgsrc: i.imgsrc
          });
        }
    });
  }

  getRandom(){
   return _.shuffle(this.jacketsCatalog);
  }  

  ngOnInit() {
  }

}
