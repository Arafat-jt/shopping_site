import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
})
export class OrderHistoryPage implements OnInit {

  postdata = {}
  public userProducts = [];
  public productQuantity = [];

  constructor(public service: ShoppingService, public router: Router, private http: HttpClient, public toastc: ToastController) { 
    if (service.current_mail != "" && service.current_pass != "") {
      
      this.postdata={
        'return':'true',
        'user':{
          'email': service.current_mail,
          'pass': service.current_pass
        }
      }
      http.post("http://127.0.0.1:8000/mycart/", this.postdata).subscribe( (data: any) => {
        console.log(data);
        for (let i of data.catalog) {
          this.userProducts.push({
            id: i._id,
            title: i.name,
            color: i.color,
            Cost: i.Cost,
            imgsrc: i.imgsrc,
            quantity: null
          });
        }

        this.productQuantity = data.quantity;
        this.userProducts.forEach((element, indeex) =>{
          const num2 = this.productQuantity[indeex];
          element.quantity = num2;
          // console.log(num2);
        });
        
        this.userProducts.reverse();
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
      duration: 3000,
      position: "top",
      color: "dark",
      cssClass: 'customclass',
      buttons: [{
        side: 'end',
        text: 'Login',
        handler: () => { this.router.navigate(['/login']); }
      }]
    });
    toast.present();
  }

}
