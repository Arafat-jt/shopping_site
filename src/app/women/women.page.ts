import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women',
  templateUrl: './women.page.html',
  styleUrls: ['./women.page.scss'],
})
export class WomenPage implements OnInit {

  public WomenCatalog = [];

  constructor(private http: HttpClient) {
    http.get("http://127.0.0.1:8000/womendb/").subscribe((res:any) =>{
        console.log(res);
        for (let i of res.catalog) {
          this.WomenCatalog.push({
            title: i.name,
            color: i.color,
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

  ngOnInit() {
  }

}
