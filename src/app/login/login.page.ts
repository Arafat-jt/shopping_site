import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ShoppingService } from '../services/shopping.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email = "";
  pass = "";
  user : any;
  postdata = {}
  constructor(private http: HttpClient, public service: ShoppingService, public router: Router, public toastc: ToastController) {}

  ngOnInit() {
  }

  login_fun()
  {
    if (this.email != "" && this.pass != "") {
    
      this.postdata={
        'add':'true',
        'user':{
          'email': this.email,
          'pass': this.pass
        }
      }

      this.http.post("http://127.0.0.1:8000/api/userlogin/", this.postdata).subscribe(data =>{
        this.user = data;  
        console.log(this.user);
        if(this.user['status'] == 'User already exists')
        {
          this.presentToast("Login Successful")
          this.service.current_mail = this.email;
          this.service.current_pass = this.pass;
          this.router.navigate(['/home']);
        }
        else if(this.user['status'] == 'No user found')
        {
          this.presentToast("No Account Found! \nSignUp First....")
          this.router.navigate(['/signup']);
        }
      });
    }
    else{
      this.presentToast("Enter Email & Password to Login")
    }
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
