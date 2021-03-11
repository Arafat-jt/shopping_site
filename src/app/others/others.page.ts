import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-others',
  templateUrl: './others.page.html',
  styleUrls: ['./others.page.scss'],
})
export class OthersPage implements OnInit {

  postdata = {}
  public othersCatalog = [];

  constructor(private http: HttpClient, public toastc: ToastController, public service: ShoppingService) {
    http.get("http://127.0.0.1:8000/api/othersdb/").subscribe((res:any) =>{
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
  
  ngOnInit() {
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
