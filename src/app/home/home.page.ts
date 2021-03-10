import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { ShoppingService } from '../services/shopping.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public itemlist = [];
  postdata = {}
  response: any;
  pages = ["/mens", "/women", "/elec", "jackets", "/others"];
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
   };
   
  constructor(private http: HttpClient, public service: ShoppingService, public toastc: ToastController, public router: Router) {
    http.get("http://127.0.0.1:8000/mendb/").subscribe((res:any) =>{
      console.log(res);
      for (let i of res.catalog) {
        this.itemlist.push({
          id: i._id,
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
          id: i._id,
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
          id: i._id,
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
            id: i._id,
            title: i.name,
            color: i.color,
            size: i.Size,
            Cost: i.Cost,
            imgsrc: i.imgsrc
          });
        }
        this.itemlist = _.shuffle(this.itemlist);
    });

    // http.get("http://127.0.0.1:8000/elecdb/").subscribe((res:any) =>{
    //     console.log(res);
    //     for (let i of res.catalog) {
    //       this.itemlist.push({
    //         id: i._id,
    //         title: i.name,
    //         color: i.color,
    //         type: i.type,
    //         Cost: i.Cost,
    //         imgsrc: i.imgsrc
    //       });
    //     }
    //   });
    
    // this.http.get("http://127.0.0.1:8000/watchesdb/").subscribe((res:any) =>{
    //   console.log(res);
    //   for (let i of res.catalog) {
    //     this.itemlist.push({
    //       id: i._id,
    //       title: i.name,
    //       color: i.color,
    //       type: i.type,
    //       Cost: i.Cost,
    //       imgsrc: i.imgsrc
    //     });
    //   }
    // }); 


  }

  cartfun(productid: string){
    if(this.service.current_mail != "" && this.service.current_pass != "")
    {
      this.postdata={
        'add':'true',
        'user':{
          'email': this.service.current_mail,
          'pass': this.service.current_pass,
          'product_id': productid
        }
      }

      this.http.post("http://127.0.0.1:8000/addtocart/", this.postdata).subscribe(data =>{
        this.response = data;
        console.log(this.response);     
        if (this.response['status'] == "Successfully incremented product quantity" || this.response['status'] == "Successfully assigned product to user") {
          this.presentToast("Product Added to Cart \nGo See \"My Cart\" for More Details");
        }   
      });
            
    }
    else{
      this.presentToast("Login First to use the Cart!");
      // this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
  }

  random_page(){
    this.pages = _.shuffle(this.pages);
    this.router.navigate([this.pages[1]]);
  }

  async presentToast(msg){
    const toast =  await this.toastc.create({
      message: msg,
      duration: 2000,
      position: "top",
      color: "dark",
      cssClass: 'customclass'
    });
    toast.present();
  }
}
