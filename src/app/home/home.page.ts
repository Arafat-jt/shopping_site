import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public itemlist = [];

  constructor(private http: HttpClient) {
    http.get("http://127.0.0.1:8000/mendb/").subscribe((res:any) =>{
      console.log(res);
      for (let i of res.catalog) {
        this.itemlist.push({
          title: i.name,
          color: i.color,
          size: i.Size,
          Cost: i.Cost,
          imgsrc: i.imgsrc
        });
      }
    });

    http.get("http://127.0.0.1:8000/womendb/").subscribe((res:any) =>{
      console.log(res);
      for (let i of res.catalog) {
        this.itemlist.push({
          title: i.name,
          color: i.color,
          Cost: i.Cost,
          imgsrc: i.imgsrc
        });
      }
    });

    http.get("http://127.0.0.1:8000/othersdb/").subscribe((res:any) =>{
      console.log(res);
      for (let i of res.catalog) {
        this.itemlist.push({
          title: i.name,
          color: i.color,
          type: i.type,
          Cost: i.Cost,
          imgsrc: i.imgsrc
        });
      }
    });

    http.get("http://127.0.0.1:8000/jacketsdb/").subscribe((res:any) =>{
        console.log(res);
        for (let i of res.catalog) {
          this.itemlist.push({
            title: i.name,
            color: i.color,
            size: i.Size,
            Cost: i.Cost,
            imgsrc: i.imgsrc
          });
        }
    });

    http.get("http://127.0.0.1:8000/elecdb/").subscribe((res:any) =>{
        console.log(res);
        for (let i of res.catalog) {
          this.itemlist.push({
            title: i.name,
            color: i.color,
            type: i.type,
            Cost: i.Cost,
            imgsrc: i.imgsrc
          });
        }
      });
    
    this.http.get("http://127.0.0.1:8000/watchesdb/").subscribe((res:any) =>{
      console.log(res);
      for (let i of res.catalog) {
        this.itemlist.push({
          title: i.name,
          color: i.color,
          type: i.type,
          Cost: i.Cost,
          imgsrc: i.imgsrc
        });
      }
    }); 
  }

  getRandom(){
    return _.shuffle(this.itemlist);
   } 

  ngOnInit() {
  }

}
