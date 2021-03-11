import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { endsWith, forIn, zip } from 'lodash';
import { element } from 'protractor';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  postdata = {}
  public userProducts = [];
  public productQuantity = [];
  public payment = 0;
  public totalPayment = this.payment;
  constructor(public router: Router, public service: ShoppingService, private http: HttpClient, public toastc: ToastController) { 
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
          console.log(num2);
          
        });

        this.userProducts.forEach(element =>{
          for (let index = 0; index < element.quantity; index++) {
            this.payment = this.payment + element.Cost;
          }
        })
        this.totalPayment = this.payment + 500;

      });
    }
    else{
      this.presentToast("Login First to use the Cart!");
      // this.router.navigate(['/login']);
    }
  }

  ngOnInit() {}

  tohome(flag: number){
    if(flag == 1 && this.service.current_mail != "" && this.service.current_pass != ""){
      this.presentToast2("Succesfully Placed Order!\nYour order will be delivered within\n 3 to 4 working days");
      this.router.navigate(['/home']);
    }
    else if (flag == 2) {
      this.router.navigate(['/home']);
    }
    else{
      this.presentToast2("Login First to use the Cart!");
      this.router.navigate(['/login']);
    }
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

  async presentToast2(msg){
    const toast =  await this.toastc.create({
      message: msg,
      duration: 4000,
      position: "top",
      color: "dark",
      cssClass: 'customclass'
    });
    toast.present();
  }

}
