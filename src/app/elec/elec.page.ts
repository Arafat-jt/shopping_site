import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';


@Component({
  selector: 'app-elec',
  templateUrl: './elec.page.html',
  styleUrls: ['./elec.page.scss'],
})
export class ElecPage implements OnInit {

  public elecCatalog = [];
  public watchesCatalog = [];


  constructor(private http: HttpClient) {
    http.get("http://127.0.0.1:8000/elecdb/").subscribe((res:any) =>{
        console.log(res);
        for (let i of res.catalog) {
          this.elecCatalog.push({
            id: i._id,
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
        this.watchesCatalog.push({
          id: i._id,
          title: i.name,
          color: i.color,
          type: i.type,
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
   return _.shuffle(this.elecCatalog);
  }

  ngOnInit() {}

}
