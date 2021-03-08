import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.page.html',
  styleUrls: ['./mens.page.scss'],
})
export class MensPage implements OnInit {

  public menCatalog = [];

  constructor(private http: HttpClient) {
    http.get("http://127.0.0.1:8000/mendb/").subscribe((res:any) =>{
        console.log(res);
        for (let i of res.catalog) {
          this.menCatalog.push({
            id: i._id,
            title: i.name,
            color: i.color,
            size: i.Size,
            Cost: i.Cost,
            imgsrc: i.imgsrc
          });
        }
      });
   }

   slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
   };

  getRandom(){
   return _.shuffle(this.menCatalog);
  }  
  
  ngOnInit() {
  }

}
