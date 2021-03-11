import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  postdata = {}
  email = "";
  pass = "";
  username = "";
  name = "";
  number = "";

  constructor(public router: Router, public service: ShoppingService, private http: HttpClient, public toastc: ToastController) { 
    if (service.current_mail == "" && service.current_pass == ""){
      this.presentToast("Login First to use the Cart!");
    }
  }

  ngOnInit() {
  }

  update(){
    if (this.service.current_mail != "" && this.service.current_pass != "" ) {
      if (this.email == this.service.current_mail && this.pass == this.service.current_pass) {
        this.postdata = 
        {
          'add':'true',
          'user':
          {
            'email': this.email,
            'pass': this.pass,
            'username': this.username,
            'name': this.name,
            'number': this.number
          }
        }

        this.http.post("http://127.0.0.1:8000/updateprofile/", this.postdata).subscribe(data => {
          console.log(data);
          if (data['status'] == "Credentials updated") {
              this.presentToast2("Successfully Saved");
          }
        })
      }
      else{
        this.presentToast2("Are you sure You've Logged in & Updating the same Account?")
      }
    }
    else{
      this.presentToast("Login before you can Update Details");
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
