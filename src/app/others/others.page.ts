import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-others',
  templateUrl: './others.page.html',
  styleUrls: ['./others.page.scss'],
})
export class OthersPage implements OnInit {

  public othersCatalog = [];

  constructor(private http: HttpClient) {
    http.get("http://127.0.0.1:8000/othersdb/").subscribe((res:any) =>{
        console.log(res);
        for (let i of res.catalog) {
          this.othersCatalog.push({
            title: i.name,
            id: i._id,
            color: i.color,
            type: i.type,
            Cost: i.Cost,
            imgsrc: i.imgsrc
          });
        }
      });
    
   }

  ngOnInit() {
  }

}
