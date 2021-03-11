import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import * as _ from 'lodash';
import { ShoppingService } from '../services/shopping.service';


@Component({
  selector: 'app-elec',
  templateUrl: './elec.page.html',
  styleUrls: ['./elec.page.scss'],
})
export class ElecPage implements OnInit {

  public elecCatalog = [];
  postdata = {}
  public watchesCatalog = [];


  constructor(private http: HttpClient, public toastc: ToastController, public service: ShoppingService) {
    http.get("http://127.0.0.1:8000/api/elecdb/").subscribe((res:any) =>{
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
        this.elecCatalog = _.shuffle(this.elecCatalog);
      });
    
    this.http.get("http://127.0.0.1:8000/api/watchesdb/").subscribe((res:any) =>{
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

      this.http.post("http://127.0.0.1:8000/api/addtocart/", this.postdata).subscribe(data =>{
        console.log(data);     
        if (data['status'] == "Successfully incremented product quantity" || data['status'] == "Successfully assigned product to user") {
          this.presentToast("Product Added to Cart \nGo See \"My Cart\" for More Details");
        }   
      });
            
    }
    else{
      this.presentToast("Login First to use the Cart!");
      // this.router.navigate(['/login']);
    }
  }

  ngOnInit() {}

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
